import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("D-Co Gemini Service: Missing API Key. Operating in Demo mode.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export async function askTaxAssistant(question: string) {
  try {
    const ai = getAI();
    if (!ai) {
      // Demo fallback response
      return "I'm currently in Demo Mode because a Gemini API key isn't configured in this environment. However, D-Co Management Services is ready to help you with Personal Tax, Bookkeeping, and Estates! You can reach us at info@dcomanagement.ca.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the official digital assistant for D-Co Management Services, a professional bookkeeping and tax firm in Mississauga, Ontario.
        Primary goal: Answer basic Canadian tax and bookkeeping questions and encourage booking a consultation.
        Services: T1 Personal Tax, T3 Estate/Trust returns, Full-cycle Bookkeeping, Business Advisory.
        Tone: Professional, helpful, sleek, and reliable.
        Constraint: Answers must be under 150 words. Do not give specific financial/legal advice; always recommend a professional review.`,
        temperature: 0.6,
      },
    });
    
    return response.text || "I'm sorry, I'm unable to process that at the moment. Please contact our team directly.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble connecting. Please feel free to reach out via our contact page!";
  }
}