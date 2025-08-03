import openai from "@/lib/openai";
import { data } from "@/scripts/resume";



export const getVectorData = async () => {
  try {
    const vectors = [];

    for (const item of data) {
      const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: item.text,
      });

      const embedding = response.data[0].embedding;

      vectors.push({
        id: item.id,
        values: embedding,
        metadata: {
          text: item.text,
        },
      });
    }

    return vectors;
  } catch (err) {
    console.error("❌ Failed to embed data:", err);
    return [];
  }
};
