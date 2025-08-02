// lib/embedAndFormat.ts

import { OpenAI } from "openai";
 // make sure path is correct
import dotenv from "dotenv";
import { data } from "@/scripts/resume";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

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
