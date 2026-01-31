import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
