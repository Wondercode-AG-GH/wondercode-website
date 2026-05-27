import type { StructureResolver } from "sanity/structure";

/**
 * `homePage` is a singleton — only one document of that type should ever
 * exist. We surface it as a fixed item at the top of the content tree
 * (clicking it opens its editor directly instead of showing a list of
 * homePage documents), and filter the auto-generated list below so the
 * singleton isn't also shown there as a duplicate entry.
 *
 * https://www.sanity.io/docs/structure-builder-cheat-sheet
 */
const SINGLETON_TYPES = new Set(["homePage"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETON_TYPES.has(listItem.getId() ?? ""),
      ),
    ]);
