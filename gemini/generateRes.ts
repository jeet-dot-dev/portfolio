import { GoogleGenerativeAI } from "@google/generative-ai";

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateResponse(prompt: string): Promise<string> {
  try {
    // Initialize model
    const model = client.getGenerativeModel({
      model: "gemini-1.5-flash", // correct model name
    });

    // Send content with role
    const result = await model.generateContent({
      contents: [
        {
          role: "user", // REQUIRED
          parts: [{ text: prompt }],
        },
      ],
    });

    // Extract response text
    const text =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}
