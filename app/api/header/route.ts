import { client } from "@/sanity/lib/client";
import { headerQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const headerData = await client.fetch(headerQuery);
    return Response.json(headerData);
  } catch (error) {
    console.error("Failed to fetch header data:", error);
    return Response.json(
      { error: "Failed to fetch header data" },
      { status: 500 },
    );
  }
}
