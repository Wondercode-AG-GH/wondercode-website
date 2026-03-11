import { client } from "@/sanity/lib/client";
import { agenticExpertiseQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(agenticExpertiseQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch agentic expertise data:", error);
    return Response.json(
      { error: "Failed to fetch agentic expertise data" },
      { status: 500 },
    );
  }
}
