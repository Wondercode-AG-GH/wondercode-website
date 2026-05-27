import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://wondercode.agency",
  ),
  title: "Wondercode",
  description: "Next-generation software systems and intelligent automation.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
        {/* Live-preview wiring:
            - Outside draft mode (public site): <SanityLive /> subscribes
              to Sanity's Live Content API and revalidates the page when
              any document the page reads changes. This is how published
              changes propagate to the live site.
            - Inside draft mode (Presentation iframe): <SanityLive /> is
              intentionally NOT rendered, because its `router.refresh()`
              on every Sanity event is visible as a "hard reload" inside
              the iframe on every keystroke. Instead, all home and
              detail page client components wire `useOptimistic` from
              `@sanity/visual-editing/react`, which patches the rendered
              data in place over postMessage from the Studio — no
              network round-trip, no flash, no reload.
            - <VisualEditing /> powers both the click-to-edit overlay
              AND the postMessage channel that `useOptimistic` listens
              on; it is only mounted in draft mode. */}
        {!isDraftMode && <SanityLive />}
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
