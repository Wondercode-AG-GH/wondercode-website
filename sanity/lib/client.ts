import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, studioUrl } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled to ensure fresh data on every server-side fetch (fixes Vercel stale content)
  /**
   * Stega encodes invisible source markers into fetched strings so the
   * Visual Editing overlay (rendered in draft mode) can map any piece of
   * rendered text back to its document + field inside the Studio. The
   * markers are stripped from rendered HTML when draft mode is disabled,
   * so leaving this enabled is safe in production.
   */
  stega: { studioUrl },
});
