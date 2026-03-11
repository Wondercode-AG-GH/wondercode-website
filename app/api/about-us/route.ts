import { client } from "@/sanity/lib/client";
import { aboutUsQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(aboutUsQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch about us data:", error);
    return Response.json(
      { error: "Failed to fetch about us data" },
      { status: 500 },
    );
  }
}
