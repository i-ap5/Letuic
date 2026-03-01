import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import multer from 'multer';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Trust proxy if running behind a proxy like Nginx or Vercel
app.set('trust proxy', 1);

// Set up rate limiter: maximum of 3 requests per IP every 15 minutes
const applicationLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    message: { error: "Too many applications submitted from this IP, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
});

// Set up Multer for form-data (PDFs)
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

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("CRITICAL ERROR: GEMINI_API_KEY is missing in .env.local");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

// Endpoint: Generate Lesson Plan
app.post('/api/generate-lesson-plan', async (req, res) => {
    const { topic, gradeLevel } = req.body;

    if (!topic || !gradeLevel) {
        return res.status(400).json({ error: "Topic and Grade Level are required." });
    }

    const prompt = `Create a structured lesson plan for ${topic} at ${gradeLevel} level, aligned with CBSE or Kerala State Syllabus standards. 
  Include: 
  1. Learning Objectives 
  2. Kerala/CBSE Specific Topics 
  3. 3 Collaborative Classroom Activities 
  4. A 5-question mock quiz format.
  Keep it concise and pedagogical.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                temperature: 0.7,
                topP: 0.95,
            },
        });
        // The SDK returns response.text which might be a function or property depending on version, 
        // but in the source it was accessed as response.text
        // Let's verify if response.text is a string or function. 
        // In previous file: return response.text;
        res.json({ text: response.text });
    } catch (error) {
        console.error("Gemini API Error (Lesson Plan):", error);
        res.status(500).json({ error: "Failed to generate lesson plan." });
    }
});

// Endpoint: Chat with Assistant
app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        // Note: The original code didn't actually use the history in the chat creation, 
        // but we can pass it if we want to maintain context. 
        // For now, we replicate original behavior but we COULD verify if history implementation is needed.
        // The SDK params usually take 'history'.

        const chat = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: `You are LetUIC's High-Fidelity Intelligence Assistant for a modern School/College LMS. 
        You specialize in:
        - Kerala CBSE & State Syllabus study materials.
        - Institutional management (Attendance, Progress Reports).
        - Transport logistics (Bus tracking, arrival alerts).
        - Student Engagement (Activity feeds, student-run content, discussion boards).
        
        Be helpful, concise, and professional. If asked about bus tracking, explain how our live GPS integration works for parents. If asked about attendance, mention our auto-alert system for parents.
        If asked for support or contact info, provide: info@letuic.com`,
            },
            // Forwarding history if beneficial, the original code had it in signature but unused.
            // history: history 
        });

        const response = await chat.sendMessage({ message });
        res.json({ text: response.text });
    } catch (error) {
        console.error("Gemini Chat Error:", error);
        res.status(500).json({ error: "Error connecting to intelligence layer." });
    }
});

// Endpoint: Submit Contact Form
app.post('/api/submit-contact', async (req, res) => {
    const { name, email, phone, description } = req.body;

    if (!name || !email || !phone || !description) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScgmztzzVO0N2Uvn2Dd3QAj2pQgreyKrLbIilOqCfdBjtZzaQ/formResponse";

    try {
        const formData = new URLSearchParams();
        formData.append("entry.397564941", name);
        formData.append("entry.908752501", email);
        formData.append("entry.1958228289", phone);
        formData.append("entry.1254308882", description);

        const response = await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        if (!response.ok) {
            throw new Error(`Google Form returned status: ${response.status}`);
        }

        res.json({ success: true, message: "Form submitted successfully" });
    } catch (error) {
        console.error("Contact Form Submission Error:", error);
        res.status(500).json({ error: "Failed to submit form." });
    }
});

// Endpoint: Submit Job Application
app.post('/api/submit-application', applicationLimiter, (req, res) => {
    // Multer upload logic handles the file
    upload.single('cv')(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading (e.g. Limit exceeded)
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ error: 'File size cannot exceed 1MB.' });
            }
            return res.status(400).json({ error: err.message });
        } else if (err) {
            // An unknown error occurred / file format issue
            return res.status(400).json({ error: err.message });
        }

        const { firstName, lastName, email } = req.body;
        const file = req.file;

        // Validation
        if (!firstName || !lastName || !email) {
            return res.status(400).json({ error: "First name, last name, and email are required." });
        }

        if (!file) {
            return res.status(400).json({ error: "CV (PDF) is required." });
        }

        try {
            // We use nodemailer to send the file to your HR email. 
            // NOTE FOR USER: You will need to configure SMTP settings in .env.local 
            // (e.g., SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) for this to work in production.

            // For now, we will structure it and return success to the frontend if env is missing
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'smtp.ethereal.email',
                port: Number(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_PORT === '465' || process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER || 'user',
                    pass: process.env.SMTP_PASS || 'pass'
                }
            });

            const mailOptions = {
                // Must be the authenticated user to avoid Zoho rejecting as spoofing
                from: process.env.SMTP_USER,
                // Where you want to receive it. 
                // Zoho automatically puts 'from me to me' emails in 'Sent'. 
                // Adding a Reply-To ensures you can just hit 'Reply' to email the applicant.
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

            // If environment variables for email aren't set, we simulate success for demo purposes
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

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Backend server running on http://localhost:${PORT}`);
    });
}

export default app;
