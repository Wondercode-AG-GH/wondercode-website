import { client } from "@/sanity/lib/client";
import { faqHeaderQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(faqHeaderQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch FAQ header data:", error);
    return Response.json(
      { error: "Failed to fetch FAQ header data" },
      { status: 500 },
    );
  }
}
