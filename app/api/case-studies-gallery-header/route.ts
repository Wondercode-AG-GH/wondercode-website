import { client } from "@/sanity/lib/client";
import { caseStudiesGalleryHeaderQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(caseStudiesGalleryHeaderQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch case studies gallery header data:", error);
    return Response.json(
      { error: "Failed to fetch case studies gallery header data" },
      { status: 500 },
    );
  }
}
