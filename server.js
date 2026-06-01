require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');


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

        // Insert default admin if no users exist
        const [users] = await db.query('SELECT id FROM admin_users LIMIT 1');
        if (users.length === 0) {
            await db.query("INSERT INTO admin_users (identifier, password, role) VALUES ('admin', 'password', 'admin')");
            console.log("Default admin user created: admin / password");
        }
    } catch (err) {
        console.error("Error initializing DB:", err);
    }
};
initDb();

// API Routes
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
        res.status(500).json({ success: false, message: 'Server error' });
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
