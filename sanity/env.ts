export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-20";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

/**
 * Absolute URL of the Studio mounted inside this Next.js app.
 * Used by Visual Editing (stega) to deep-link from overlays back into the
 * Studio, and by the Presentation Tool to know which origin to load the
 * preview iframe from. Defaults to localhost for local dev.
 */
export const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ||
  `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/studio`;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
