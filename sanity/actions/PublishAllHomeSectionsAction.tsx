"use client";

import { useState } from "react";
import { PublishIcon } from "@sanity/icons";
import { useToast } from "@sanity/ui";
import { type DocumentActionComponent, useClient } from "sanity";

/**
 * Every document type that is rendered on the home page. When the editor
 * clicks "Publish" on the Home Page wrapper document, all draft copies
 * of these types are committed to their published form in one
 * transaction — so the editor doesn't have to open and publish each
 * section individually.
 */
const HOME_PAGE_SECTION_TYPES = [
  "hero",
  "header",
  "footer",
  "coreExpertiseHeader",
  "agenticExpertise",
  "customEngineering",
  "industryExpertiseHeader",
  "caseStudiesGalleryHeader",
  "aboutUs",
  "faqHeader",
];

/**
 * Custom Publish action installed on the `homePage` wrapper document.
 * The wrapper itself never has its own content changes (its only field
 * is a list of references), so Sanity's default Publish button would
 * always be disabled. This action instead finds every draft document of
 * a home-page section type and publishes them all together.
 *
 * `action: "publish"` is set on the component so the Studio renders it
 * in the same slot and styling as the default Publish button — the
 * editor experience is identical, just with broader effect.
 */
export const PublishAllHomeSectionsAction: DocumentActionComponent = () => {
  const client = useClient({ apiVersion: "2024-01-01" });
  const toast = useToast();
  const [publishing, setPublishing] = useState(false);

  return {
    label: publishing ? "Publishing…" : "Publish",
    icon: PublishIcon,
    tone: "positive",
    shortcut: "Ctrl+Alt+P",
    disabled: publishing,
    onHandle: async () => {
      setPublishing(true);
      try {
        const drafts = await client.fetch<
          Array<{ _id: string; _type: string; _rev?: string }>
        >(`*[_type in $types && _id in path("drafts.**")]`, {
          types: HOME_PAGE_SECTION_TYPES,
        });

        if (drafts.length === 0) {
          toast.push({
            status: "info",
            title: "Nothing to publish",
            description: "No section has unpublished changes.",
          });
          return;
        }

        // Promote every draft to its published id in a single transaction
        // so the change is atomic — either all sections publish or none.
        const tx = client.transaction();
        for (const draft of drafts) {
          const publishedId = draft._id.replace(/^drafts\./, "");
          const { _id: _draftId, _rev: _draftRev, ...payload } = draft;
          tx.createOrReplace({ ...payload, _id: publishedId }).delete(
            draft._id,
          );
        }
        await tx.commit();

        toast.push({
          status: "success",
          title: `Published ${drafts.length} section${
            drafts.length === 1 ? "" : "s"
          }`,
          description: "All home-page changes are now live.",
        });
      } catch (err) {
        console.error("Publish-all failed:", err);
        toast.push({
          status: "error",
          title: "Publish failed",
          description: err instanceof Error ? err.message : String(err),
        });
      } finally {
        setPublishing(false);
      }
    },
  };
};

// Tell Sanity this action takes the place of the default Publish — it
// gets rendered in the primary Publish slot of the document toolbar.
PublishAllHomeSectionsAction.action = "publish";
