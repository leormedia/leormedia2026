const express = require('express');
const path = require('path');
const cors = require('cors');

const nodemailer = require('nodemailer');

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
        user: 'mail@leormedia.com',
        pass: 'ilovemotherA1!'
    }
});

// API Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'success', message: 'Node.js API is running' });
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

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ success: false, error: 'Server error: ' + error.message });
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
