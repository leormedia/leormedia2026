require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');
const { GoogleAuth } = require('google-auth-library');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// DB connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Create table if not exists
const initDb = async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(50),
                subject VARCHAR(255),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log("Database table 'leads' is ready.");

        await db.query(`
            CREATE TABLE IF NOT EXISTS admin_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                identifier VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(50) DEFAULT 'admin',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("Database table 'admin_users' is ready.");

        await db.query(`
            CREATE TABLE IF NOT EXISTS blogs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                feature_image TEXT,
                content TEXT,
                date DATE,
                category VARCHAR(100),
                priority INT DEFAULT 0,
                status VARCHAR(50) DEFAULT 'draft',
                target_keywords TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log("Database table 'blogs' is ready.");

        await db.query(`
            CREATE TABLE IF NOT EXISTS seo_metadata (
                id INT AUTO_INCREMENT PRIMARY KEY,
                page_key VARCHAR(255) UNIQUE NOT NULL,
                title VARCHAR(255),
                description TEXT,
                keywords TEXT,
                canonical VARCHAR(255),
                og_image VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log("Database table 'seo_metadata' is ready.");

        // Insert default admin if no users exist
        const [users] = await db.query('SELECT id FROM admin_users LIMIT 1');
        if (users.length === 0) {
            await db.query("INSERT INTO admin_users (identifier, password, role) VALUES ('admin', 'password', 'admin')");
            console.log("Default admin user created: admin / password");
        }

        // Migrate SEO data from JSON to DB if DB is empty
        const [seoRows] = await db.query('SELECT id FROM seo_metadata LIMIT 1');
        if (seoRows.length === 0) {
            try {
                const fs = require('fs').promises;
                const path = require('path');
                const seoJsonPath = path.join(__dirname, 'src', 'assets', 'data', 'seo.json');
                const fileData = await fs.readFile(seoJsonPath, 'utf8');
                const seoJson = JSON.parse(fileData);
                
                for (const [key, data] of Object.entries(seoJson)) {
                    await db.query(
                        'INSERT INTO seo_metadata (page_key, title, description, keywords, canonical, og_image) VALUES (?, ?, ?, ?, ?, ?)',
                        [key, data.title || '', data.description || '', data.keywords || '', data.canonical || '', data.ogImage || '']
                    );
                }
                console.log("Migrated SEO data from JSON to database.");
            } catch (err) {
                console.error("Error migrating SEO data:", err);
            }
        }
    } catch (err) {
        console.error("Error initializing DB:", err);
    }
};
initDb();

// API Routes
const GA_PROPERTY_ID = '534850911';
const GA_KEY_FILE = path.join(__dirname, 'utils/csdwebsites-e0de9d3b9b22.json');

const gaAuth = new GoogleAuth({
    keyFile: GA_KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

async function gaRunReport(client, body) {
    const res = await client.request({
        url: `https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runReport`,
        method: 'POST',
        data: body
    });
    return res.data;
}

async function gaRunRealtime(client, body) {
    const res = await client.request({
        url: `https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runRealtimeReport`,
        method: 'POST',
        data: body
    });
    return res.data;
}

app.get('/api/status', (req, res) => {
    res.json({ status: 'success', message: 'Node.js API is running' });
});

// Check if lead exists API
app.post('/api/check-lead', async (req, res) => {
    try {
        const { identifier } = req.body;
        if (!identifier) return res.status(400).json({ success: false, error: 'Identifier is required' });

        const [rows] = await db.query(
            'SELECT name, email, phone FROM leads WHERE email = ? OR phone = ? ORDER BY updated_at DESC LIMIT 1',
            [identifier, identifier]
        );

        if (rows.length > 0) {
            res.json({ success: true, user: rows[0] });
        } else {
            res.json({ success: true, user: null });
        }
    } catch (err) {
        console.error('Error checking lead:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Contact form submission API
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message, honeypot } = req.body;

        // Honeypot validation
        if (honeypot) {
            return res.status(400).json({ success: false, error: 'Bot detected' });
        }

        // Validate required fields
        const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                error: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, error: 'Invalid email format' });
        }

        const mailOptions = {
            from: 'mail@leormedia.com', // sender address
            to: 'leormedia@gmail.com', // list of receivers
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>This email was sent from the contact form on leormedia.com</p>
            `
        };

        // Save or Update Lead in Database
        try {
            const [existing] = await db.query(
                'SELECT id FROM leads WHERE email = ? OR phone = ? LIMIT 1',
                [email, phone]
            );

            if (existing.length > 0) {
                await db.query(
                    'UPDATE leads SET name = ?, email = ?, phone = ?, subject = ?, message = ? WHERE id = ?',
                    [name, email, phone, subject, message, existing[0].id]
                );
            } else {
                await db.query(
                    'INSERT INTO leads (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
                    [name, email, phone, subject, message]
                );
            }
        } catch (dbErr) {
            console.error('Database error saving lead:', dbErr);
            // Proceed to send email even if DB fails
        }

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ success: false, error: 'Server error: ' + error.message });
    }
});

// --- ADMIN DASHBOARD APIs ---

// --- SEO APIs ---
app.get('/api/seo', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM seo_metadata');
        // Convert rows to the old JSON structure: { "home": {title: "...", ...} }
        const seoData = {};
        rows.forEach(row => {
            seoData[row.page_key] = {
                title: row.title,
                description: row.description,
                keywords: row.keywords,
                canonical: row.canonical,
                ogImage: row.og_image
            };
        });
        res.json(seoData);
    } catch (error) {
        console.error('Error fetching SEO from DB:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.put('/api/seo/:page_key', async (req, res) => {
    try {
        const pageKey = req.params.page_key;
        const { title, description, keywords, canonical, ogImage } = req.body;
        
        // Upsert the data (insert if not exists, update if exists)
        await db.query(
            `INSERT INTO seo_metadata (page_key, title, description, keywords, canonical, og_image) 
             VALUES (?, ?, ?, ?, ?, ?) 
             ON DUPLICATE KEY UPDATE 
             title = VALUES(title), description = VALUES(description), keywords = VALUES(keywords), 
             canonical = VALUES(canonical), og_image = VALUES(og_image)`,
            [pageKey, title || '', description || '', keywords || '', canonical || '', ogImage || '']
        );
        
        res.json({ success: true, message: 'SEO data updated successfully' });
    } catch (error) {
        console.error('Error updating SEO in DB:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Google Analytics Dashboard API
app.get('/api/ga/dashboard', async (req, res) => {
    try {
        const client = await gaAuth.getClient();

        const [
            kpi, users28, usersComparison, topPages, landingPages,
            topCountries, topRegions, topCities, countryRegion, regionCity,
            devices, traffic, events, conversions, ecom, demographics,
            hourly, realtime, realtimeOverview, searchQueries
        ] = await Promise.all([
            // 1) Overview KPIs (30 days)
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                metrics: [
                    { name: "activeUsers" }, { name: "newUsers" }, { name: "sessions" },
                    { name: "engagedSessions" }, { name: "averageSessionDuration" },
                    { name: "screenPageViews" }, { name: "bounceRate" }, { name: "engagementRate" },
                    { name: "totalRevenue" }, { name: "conversions" }
                ]
            }),
            // 2) Users last 28 days
            gaRunReport(client, {
                dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
                dimensions: [{ name: "date" }],
                metrics: [{ name: "activeUsers" }, { name: "newUsers" }, { name: "sessions" }],
                limit: 100
            }),
            // 3) Users comparison
            gaRunReport(client, {
                dateRanges: [
                    { startDate: "30daysAgo", endDate: "today" },
                    { startDate: "60daysAgo", endDate: "31daysAgo" }
                ],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }]
            }),
            // 4) Top pages
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
                metrics: [
                    { name: "screenPageViews" }, { name: "averageSessionDuration" },
                    { name: "bounceRate" }, { name: "engagedSessions" }
                ],
                limit: 20
            }),
            // 5) Landing pages
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "landingPage" }],
                metrics: [
                    { name: "sessions" }, { name: "screenPageViews" },
                    { name: "bounceRate" }, { name: "averageSessionDuration" }
                ],
                limit: 15
            }),
            // 6) Top countries
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "country" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "newUsers" }, { name: "engagedSessions" }],
                limit: 20
            }),
            // 6b) Top regions
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "region" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "newUsers" }],
                limit: 20
            }),
            // 6c) Top cities
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "city" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "newUsers" }],
                limit: 25
            }),
            // 6d) Country + Region drilldown
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "country" }, { name: "region" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }],
                limit: 50
            }),
            // 6e) Region + City drilldown
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "region" }, { name: "city" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }],
                limit: 50
            }),
            // 7) Device categories
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "deviceCategory" }],
                metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "conversions" }],
                limit: 10
            }),
            // 8) Traffic sources
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [
                    { name: "sessionDefaultChannelGroup" },
                    { name: "source" },
                    { name: "medium" }
                ],
                metrics: [
                    { name: "sessions" }, { name: "activeUsers" },
                    { name: "engagedSessions" }, { name: "conversions" }
                ],
                limit: 20
            }),
            // 9) Events
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "eventName" }],
                metrics: [{ name: "eventCount" }, { name: "activeUsers" }, { name: "eventCountPerUser" }],
                limit: 50
            }),
            // 10) Conversions
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "eventName" }],
                metrics: [{ name: "conversions" }],
                limit: 50
            }),
            // 11) Ecommerce
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "eventName" }],
                metrics: [
                    { name: "purchaseRevenue" }, { name: "ecommercePurchases" },
                    { name: "totalRevenue" }
                ],
                limit: 50
            }),
            // 12) Demographics
            gaRunReport(client, {
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                dimensions: [{ name: "userAgeBracket" }, { name: "userGender" }],
                metrics: [{ name: "activeUsers" }],
                limit: 50
            }),
            // 13) Hourly
            gaRunReport(client, {
                dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
                dimensions: [{ name: "hour" }],
                metrics: [{ name: "sessions" }],
                limit: 24
            }),
            // 14) Realtime
            gaRunRealtime(client, {
                dimensions: [{ name: "unifiedScreenName" }],
                metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
                limit: 25
            }),
            // 15) Realtime overview
            gaRunRealtime(client, {
                metrics: [
                    { name: "activeUsers" }, { name: "screenPageViews" }, { name: "conversions" }
                ]
            }),
            // 16) Search Queries (Mocked to avoid incompatibility if Search Console is unlinked)
            Promise.resolve({ rows: [] })
        ]);

        const output = {
            kpi, users28days: users28, usersComparison, topPages, landingPages,
            topCountries, topRegions, topCities, countryRegion, regionCity,
            devices, traffic, events, conversions, ecommerce: ecom,
            demographics, hourly, realtime, realtimeOverview, searchQueries,
            fetchedAt: new Date().toISOString()
        };

        res.json(output);

    } catch (error) {
        console.error("Error fetching GA Data:", error.message);
        res.status(500).json({ error: error.message });
    }
});

// Admin Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { identifier, password } = req.body;
        if (!identifier || !password) return res.status(400).json({ success: false, message: 'Missing credentials' });

        const [users] = await db.query('SELECT * FROM admin_users WHERE identifier = ? AND password = ? LIMIT 1', [identifier, password]);
        
        if (users.length > 0) {
            const user = users[0];
            delete user.password; // Don't send password back
            res.json({ success: true, user });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error: ' + (error.message || error) });
    }
});

// Fetch all leads for admin
app.get('/api/leads', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM leads ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// --- BLOG APIs ---

// Get all blogs (or filter by status for public)
app.get('/api/blogs', async (req, res) => {
    try {
        const { status } = req.query;
        let query = 'SELECT * FROM blogs ORDER BY priority DESC, date DESC';
        let params = [];
        if (status) {
            query = 'SELECT * FROM blogs WHERE status = ? ORDER BY priority DESC, date DESC';
            params = [status];
        }
        const [rows] = await db.query(query, params);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM blogs WHERE slug = ? LIMIT 1', [req.params.slug]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create a blog
app.post('/api/blogs', async (req, res) => {
    try {
        const { title, slug, feature_image, content, date, category, priority, status, target_keywords } = req.body;
        const keywordsStr = Array.isArray(target_keywords) ? JSON.stringify(target_keywords) : target_keywords;
        
        await db.query(
            'INSERT INTO blogs (title, slug, feature_image, content, date, category, priority, status, target_keywords) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [title, slug, feature_image, content, date, category, priority || 0, status || 'draft', keywordsStr]
        );
        res.status(201).json({ success: true, message: 'Blog created' });
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// Update a blog
app.put('/api/blogs/:id', async (req, res) => {
    try {
        const { title, slug, feature_image, content, date, category, priority, status, target_keywords } = req.body;
        const keywordsStr = Array.isArray(target_keywords) ? JSON.stringify(target_keywords) : target_keywords;
        
        await db.query(
            'UPDATE blogs SET title=?, slug=?, feature_image=?, content=?, date=?, category=?, priority=?, status=?, target_keywords=? WHERE id=?',
            [title, slug, feature_image, content, date, category, priority || 0, status || 'draft', keywordsStr, req.params.id]
        );
        res.json({ success: true, message: 'Blog updated' });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// Delete a blog
app.delete('/api/blogs/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM blogs WHERE id = ?', [req.params.id]);
        res.json({ success: true, message: 'Blog deleted' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// Serve the static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to handle React Router client-side routing
// Any request that doesn't match an API route or static file will be sent to index.html
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
