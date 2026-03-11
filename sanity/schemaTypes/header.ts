import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header Settings",
  type: "document",
  fields: [
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label (EN)", type: "string" },
            { name: "labelDe", title: "Label (DE)", type: "string" },
            { name: "key", title: "Key (e.g., services)", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label (EN)",
      type: "string",
    }),
    defineField({
      name: "ctaLabelDe",
      title: "CTA Button Label (DE)",
      type: "string",
    }),
  ],
});
