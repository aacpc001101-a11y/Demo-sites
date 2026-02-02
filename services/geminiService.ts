
import { GoogleGenAI } from "@google/genai";

export async function getTaxInsight(query: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is asking about tax or bookkeeping in Canada: "${query}". 
      Provide a helpful, professional, and concise response. 
      Mention that for specific personalized advice, they should book a consultation with D-Co Management Services.`,
      config: {
        systemInstruction: "You are a professional Canadian tax and bookkeeping assistant for D-Co Management Services. Your tone is helpful, precise, and encouraging.",
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't generate an insight right now. Please try again or contact us directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is currently offline. Please reach out to us via the contact form!";
  }
}
