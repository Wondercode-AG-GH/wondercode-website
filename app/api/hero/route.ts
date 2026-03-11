import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const heroData = await client.fetch(heroQuery);
    return Response.json(heroData);
  } catch (error) {
    console.error("Failed to fetch hero data:", error);
    return Response.json(
      { error: "Failed to fetch hero data" },
      { status: 500 },
    );
  }
}
