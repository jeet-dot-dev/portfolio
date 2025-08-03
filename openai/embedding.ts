import openai from "@/lib/openai";

export async function getQuestionEmbedding(
  question: string
): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });

  // console.log("embedded form" ,res.data )
  return res.data[0].embedding;
}
