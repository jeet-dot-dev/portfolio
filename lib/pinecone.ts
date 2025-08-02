import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";



if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
  throw new Error("Pinecone API key or index name is not set in environment variables.");
}

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY || "",
});

export default pinecone;
