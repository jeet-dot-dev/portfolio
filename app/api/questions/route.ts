import { generateResponse } from "@/gemini/generateRes";
import { getJunoHumorPrompt } from "@/gemini/propmt";
import { getQuestionEmbedding } from "@/openai/embedding";
import { getTopMatches } from "@/scripts/getTopMatches";

export async function POST(request: Request) {
  try {
    const { question } = await request.json();
    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const embedding = await getQuestionEmbedding(question);

    //console.log(embedding);

    const matches = await getTopMatches(embedding, 5);
    const prompt = getJunoHumorPrompt(
      question,
      matches[0]?.metadata?.text || ""
    );
    const reply = await generateResponse(prompt);

   // console.log(matches);
    //console.log("Generated reply:", reply);

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
