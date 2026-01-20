import openai from "@/lib/openai";

export async function generateResponse(prompt: string): Promise<string> {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 700,
      temperature: 0.2,
    });

    const text = res.choices?.[0]?.message?.content || "";
    return text;
  } catch (error) {
    console.error("Error generating response with OpenAI:", error);
    throw error;
  }
}
