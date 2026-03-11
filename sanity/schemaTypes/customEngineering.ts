import { defineField, defineType } from "sanity";

export default defineType({
  name: "customEngineering",
  title: "Custom Engineering Section",
  type: "document",
  fields: [
    // Section Header
    defineField({
      name: "badge",
      title: "Badge Text (EN)",
      type: "string",
    }),
    defineField({
      name: "badgeDe",
      title: "Badge Text (DE)",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Headline (EN)",
      type: "string",
    }),
    defineField({
      name: "headlineDe",
      title: "Headline (DE)",
      type: "string",
    }),
    defineField({
      name: "description1",
      title: "Description 1 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description1De",
      title: "Description 1 (DE)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description2",
      title: "Description 2 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description2De",
      title: "Description 2 (DE)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description3",
      title: "Description 3 (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description3De",
      title: "Description 3 (DE)",
      type: "text",
      rows: 3,
    }),

    // Tech Stack
    defineField({
      name: "techStackLabel",
      title: "Tech Stack Label (EN)",
      type: "string",
    }),
    defineField({
      name: "techStackLabelDe",
      title: "Tech Stack Label (DE)",
      type: "string",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),

    // CTA Hint
    defineField({
      name: "expertsReady",
      title: "Experts Ready Hint (EN)",
      type: "string",
    }),
    defineField({
      name: "expertsReadyDe",
      title: "Experts Ready Hint (DE)",
      type: "string",
    }),

    // Architecture Visual
    defineField({
      name: "archLabelLeft",
      title: "Architecture Left Title (EN)",
      type: "string",
    }),
    defineField({
      name: "archLabelLeftDe",
      title: "Architecture Left Title (DE)",
      type: "string",
    }),
    defineField({
      name: "archSublabelLeft",
      title: "Architecture Left Subtitle (EN)",
      type: "string",
    }),
    defineField({
      name: "archSublabelLeftDe",
      title: "Architecture Left Subtitle (DE)",
      type: "string",
    }),
    defineField({
      name: "archLabelRight",
      title: "Architecture Right Title (EN)",
      type: "string",
    }),
    defineField({
      name: "archLabelRightDe",
      title: "Architecture Right Title (DE)",
      type: "string",
    }),
    defineField({
      name: "archSublabelRight",
      title: "Architecture Right Subtitle (EN)",
      type: "string",
    }),
    defineField({
      name: "archSublabelRightDe",
      title: "Architecture Right Subtitle (DE)",
      type: "string",
    }),
    defineField({
      name: "archConnectionLabel",
      title: "Architecture Connection Label",
      type: "string",
    }),

    // Code Snippet
    defineField({
      name: "codeSnippetTitle",
      title: "Code Snippet Window Title",
      type: "string",
    }),
    defineField({
      name: "codeSnippet",
      title: "Code Snippet",
      type: "text",
      initialValue: `const query = \`
  SELECT Id, Name
  FROM Account
\`;`,
    }),
  ],
});
