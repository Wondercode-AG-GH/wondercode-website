import { client } from "@/sanity/lib/client";
import { allServicesQuery } from "@/sanity/lib/sanity.queries";

export async function GET() {
  try {
    const services = await client.fetch(allServicesQuery);
    return Response.json(services);
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return Response.json(
      { error: "Failed to fetch services" },
      { status: 500 },
    );
  }
}
