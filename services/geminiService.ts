
export const generateLessonPlan = async (topic: string, gradeLevel: string) => {
  try {
    const response = await fetch('/api/generate-lesson-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic, gradeLevel }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't generate the lesson plan right now. Please check if the backend server is running.";
  }
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "There was an error connecting to the intelligence layer.";
  }
};
