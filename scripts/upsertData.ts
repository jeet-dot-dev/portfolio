// lib/upsertToPinecone.ts

import pinecone from "@/lib/pinecone";
import { getVectorData } from "@/openai/vector";
import "dotenv/config";

if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
  throw new Error("Pinecone API key or index name is not set in environment variables.");
}

(async () => {
  try {
    const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);
    const vectors = await getVectorData();

    if (!vectors.length) {
      console.log("No vectors found, aborting upload.");
      return;
    }

    console.log(`📦 Uploading ${vectors.length} items to Pinecone...`);
    await index.upsert(vectors);
    console.log("✅ Upload complete!");
  } catch (error) {
    console.error("❌ Error uploading data to Pinecone:", error);
  }
})();
