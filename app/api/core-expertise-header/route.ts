import { client } from "@/sanity/lib/client";
import { coreExpertiseHeaderQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(coreExpertiseHeaderQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch core expertise header data:", error);
    return Response.json(
      { error: "Failed to fetch core expertise header data" },
      { status: 500 },
    );
  }
}
