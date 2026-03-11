import { client } from "@/sanity/lib/client";
import { footerQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(footerQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
    return Response.json(
      { error: "Failed to fetch footer data" },
      { status: 500 },
    );
  }
}
