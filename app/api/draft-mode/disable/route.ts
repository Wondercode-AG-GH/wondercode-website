/**
 * Disable Next.js draft mode. The Presentation Tool calls this when an
 * editor closes the preview, and the front-end can also link to it
 * (e.g. an "Exit preview" banner) to drop back to the public site.
 */
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  (await draftMode()).disable();

  // Send the editor back to wherever they came from when available,
  // otherwise to the home page.
  const referer = request.headers.get("referer");
  return NextResponse.redirect(referer ?? new URL("/", request.url));
}
