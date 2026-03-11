import { client } from "@/sanity/lib/client";
import { industryExpertiseHeaderQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(industryExpertiseHeaderQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch industry expertise header data:", error);
    return Response.json(
      { error: "Failed to fetch industry expertise header data" },
      { status: 500 },
    );
  }
}
