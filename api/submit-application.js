import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const app = express();
app.set('trust proxy', 1);

export const config = {
    api: {
        bodyParser: false,
    },
};

const applicationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    message: { error: "Too many applications submitted from this IP, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
});

const upload = multer({
    limits: {
        fileSize: 1 * 1024 * 1024 // 1 MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' && file.originalname.toLowerCase().endsWith('.pdf')) {
            cb(null, true);
        } else {
            cb(new Error("Only PDF files are allowed."));
        }
    }
});

app.post('/api/submit-application', applicationLimiter, (req, res) => {
    upload.single('cv')(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ error: 'File size cannot exceed 1MB.' });
            }
            return res.status(400).json({ error: err.message });
        } else if (err) {
            return res.status(400).json({ error: err.message });
        }

        const { firstName, lastName, email } = req.body;
        const file = req.file;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({ error: "First name, last name, and email are required." });
        }

        if (!file) {
            return res.status(400).json({ error: "CV (PDF) is required." });
        }

        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.ethereal.email',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_PORT === '465' || process.env.SMTP_SECURE === 'true',
                auth: {
                    user: process.env.SMTP_USER || 'user',
                    pass: process.env.SMTP_PASS || 'pass'
                }
            });

            const mailOptions = {
                from: process.env.SMTP_USER,
                to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER || 'hr@letuic.com',
                replyTo: email,
                subject: `New Application: ${firstName} ${lastName} for Growth Intern`,
                text: `New application received.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nThe CV is attached.`,
                attachments: [
                    {
                        filename: file.originalname,
                        content: file.buffer,
                        contentType: 'application/pdf'
                    }
                ]
            };

            if (!process.env.SMTP_USER) {
                console.log("Mocking email send. Attachment size:", file.size);
                return res.status(200).json({ success: true, message: "Application submitted successfully (Mock)" });
            }

            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: "Application submitted successfully" });

        } catch (error) {
            console.error("Application Submission Error:", error);
            res.status(500).json({ error: "Failed to submit application. Please try again later." });
        }
    });
});

export default app;
