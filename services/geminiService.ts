
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getAIFeedback = async (studentText: string, context: string): Promise<string> => {
    if (!studentText.trim()) {
        return "Please write a procedure text first to get feedback.";
    }

    try {
        const prompt = `You are an expert English teacher providing feedback to a 10th-grade vocational school student in Indonesia. 
The student was asked to write a procedure text about "${context}".
Here is the student's text:
---
${studentText}
---
Provide constructive feedback on the following aspects:
1.  **Structure:** Did they include a goal, materials (if applicable), and steps?
2.  **Clarity:** Are the instructions easy to understand?
3.  **Grammar:** Check for errors in simple present tense and use of imperative verbs.
4.  **Connectors:** Did they use sequencing words like 'first', 'then', 'next', 'finally'?

Keep the feedback concise, positive, and encouraging. Use simple English. Start with a positive comment, then provide suggestions for improvement in a bulleted list. End with an encouraging sentence. Do not rewrite the entire text for them.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.5,
            }
        });
        
        return response.text;
    } catch (error) {
        console.error("Error getting AI feedback:", error);
        return "Sorry, I couldn't get feedback at this time. Please check your connection or API key and try again.";
    }
};
