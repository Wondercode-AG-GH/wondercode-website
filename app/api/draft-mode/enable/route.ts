/**
 * Enable Next.js draft mode after validating the secret-signed URL the
 * Sanity Presentation Tool generated. Once draft mode is on, the rest
 * of the app can render unpublished content and mount <VisualEditing />.
 *
 * Hit via the redirect inside the Presentation Tool — never call it
 * directly with a hand-crafted URL (the secret would not validate).
 */
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
