import pinecone from "@/lib/pinecone";
const index = pinecone.index("student-routine");

export async function getTopMatches(embedding: number[], topK: number) {
 try {


    const results = await index.query({
        vector: embedding,
        topK: topK,
        includeMetadata: true
    });
    return results.matches;
 } catch (error) {
    console.error("Error fetching top matches:", error);
    throw new Error("Failed to fetch top matches");
 }
}
