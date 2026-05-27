// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity/live";
import { client } from "./client";

/**
 * Read-only Sanity token used to (a) fetch drafts on the server when
 * draft mode is enabled and (b) authenticate the browser-side SSE
 * subscription used by the Presentation Tool's live preview. Without a
 * token, only published content is reachable — which is exactly the
 * existing behaviour, so the site keeps working before a token is set.
 */
const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
