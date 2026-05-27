import { ArrowLeftIcon } from "@sanity/icons";
import type { DocumentActionComponent } from "sanity";
import { useRouter } from "sanity/router";

/**
 * Adds a "Back to Home Page" entry to the document actions menu on each
 * home-page section document. Inside the Presentation Tool's right
 * pane, clicking it returns to the `homePage` wrapper document so the
 * editor can see the full list of sections again — which is what you
 * lose visibility of once you drill into a referenced section.
 *
 * Registered in `sanity.config.ts` via `document.actions` only for the
 * home-page section types, so it never appears on unrelated documents.
 */
export const BackToHomePageAction: DocumentActionComponent = () => {
  const router = useRouter();

  return {
    label: "Back to Home Page",
    icon: ArrowLeftIcon,
    onHandle: () => {
      router.navigateIntent("edit", {
        id: "homePage",
        type: "homePage",
      });
    },
  };
};
