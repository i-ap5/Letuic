import { GoogleGenAI } from '@google/genai';
import { projectContext } from '../lib/projectContext.js';

const apiKey = process.env.GEMINI_API_KEY;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    if (!apiKey) {
        console.error("CRITICAL ERROR: GEMINI_API_KEY is missing in environment variables");
        return res.status(500).json({ error: "Server Configuration Error" });
    }

    const ai = new GoogleGenAI({ apiKey });

    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const chat = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: `You are LetBot, the exclusive Intelligence Assistant for Letuic.
        
        STRICT RULES:
        1. SOURCE OF TRUTH: You must ONLY answer questions based on the "Project Context" provided below.
        2. NO GENERIC KNOWLEDGE: If the answer is not in the context, say "I can only answer questions about Letuic features as documented." DO NOT answer general questions (e.g., math, history, coding, cooking).
        3. NO FUTURE SCOPE: Do not mention features listed as "Future Scope" or "Phase 2". They do not exist.
        4. IDENTITY: Your name is LetBot. The platform is Letuic (not LetUIC).
        5. TONE: Be professional, concise, and helpful.
        
        --- PROJECT CONTEXT ---
        ${projectContext}
        -----------------------`,
            },
            // history: history // passing history if supported/needed
        });

        const response = await chat.sendMessage({ message });
        res.status(200).json({ text: response.text });
    } catch (error) {
    }
}
