
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLessonPlan = async (topic: string, gradeLevel: string) => {
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
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't generate the lesson plan right now. Please check your API key.";
  }
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are LetUIC's High-Fidelity Intelligence Assistant for a modern School/College LMS. 
        You specialize in:
        - Kerala CBSE & State Syllabus study materials.
        - Institutional management (Attendance, Progress Reports).
        - Transport logistics (Bus tracking, arrival alerts).
        - Student Engagement (Activity feeds, student-run content, discussion boards).
        
        Be helpful, concise, and professional. If asked about bus tracking, explain how our live GPS integration works for parents. If asked about attendance, mention our auto-alert system for parents.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "There was an error connecting to the intelligence layer.";
  }
};
