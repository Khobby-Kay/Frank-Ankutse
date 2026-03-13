import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getCandidateInfo() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Find detailed information about Frank K Ankutse running for Volta Regional Deputy Treasurer in Ghana. Include his background, key campaign promises, political affiliation (likely NDC), and any notable achievements.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching candidate info:", error);
    return null;
  }
}
