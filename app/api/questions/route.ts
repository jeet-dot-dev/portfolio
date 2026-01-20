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
    // Step 1: create embedding
    let embedding;
    try {
      embedding = await getQuestionEmbedding(question);
    } catch (err) {
      console.error("Embedding error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to create embedding", details: (err as Error).message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 2: fetch top matches from pinecone
    let matches;
    try {
      matches = await getTopMatches(embedding, 5);
    } catch (err) {
      console.error("Pinecone/top-matches error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to fetch relevant documents", details: (err as Error).message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 3: build prompt and call Gemini (or fallback)
    const prompt = getJunoHumorPrompt(question, matches);
    let reply;
    try {
      reply = await generateResponse(prompt);
    } catch (err) {
      console.error("Generation/Gemini error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to generate response", details: (err as Error).message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    //console.log(matches);
    //console.log("Generated reply:", reply);

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred", details: (error as Error).message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
