import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

// Initialize outside handler for potential caching (cold start optimization)
// Note: Environment variables might only be available inside handler in some contexts, 
// but usually fine at top level in Vercel. 
// However, to be safe and handle missing keys gracefully per request:

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    if (!apiKey) {
        console.error("CRITICAL ERROR: GEMINI_API_KEY is missing in environment variables");
        return res.status(500).json({ error: "Server Configuration Error" });
    }

    const ai = new GoogleGenAI({ apiKey });

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

        res.status(200).json({ text: response.text });
    } catch (error) {
        console.error("Gemini API Error (Lesson Plan):", error);
        res.status(500).json({ error: "Failed to generate lesson plan." });
    }
}
