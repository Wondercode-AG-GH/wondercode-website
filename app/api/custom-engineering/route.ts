import { client } from "@/sanity/lib/client";
import { customEngineeringQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const data = await client.fetch(customEngineeringQuery);
    return Response.json(data);
  } catch (error) {
    console.error("Failed to fetch custom engineering data:", error);
    return Response.json(
      { error: "Failed to fetch custom engineering data" },
      { status: 500 },
    );
  }
}
