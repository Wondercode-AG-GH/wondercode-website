import { client } from '@/sanity/lib/client';
import { allIndustriesQuery } from '@/sanity/lib/sanity.queries';

export async function GET() {
  try {
    const industries = await client.fetch(allIndustriesQuery);
    return Response.json(industries);
  } catch (error) {
    console.error('Failed to fetch industries:', error);
    return Response.json({ error: 'Failed to fetch industries' }, { status: 500 });
  }
}
