import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer Content",
  type: "document",
  fields: [
    // Brand Section
    defineField({
      name: "description",
      title: "Footer Description (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionDe",
      title: "Footer Description (DE)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cityHQ",
      title: "City (HQ)",
      type: "string",
      initialValue: "Zürich (HQ)",
    }),
    defineField({
      name: "region",
      title: "Region (EN)",
      type: "string",
    }),
    defineField({
      name: "regionDe",
      title: "Region (DE)",
      type: "string",
    }),
    defineField({
      name: "languageLabel",
      title: "Language Label (EN)",
      type: "string",
      initialValue: "Switch Language",
    }),
    defineField({
      name: "languageLabelDe",
      title: "Language Label (DE)",
      type: "string",
      initialValue: "Sprache wechseln",
    }),

    // Headings
    defineField({
      name: "servicesHeading",
      title: "Services Heading (EN)",
      type: "string",
      initialValue: "Services",
    }),
    defineField({
      name: "servicesHeadingDe",
      title: "Services Heading (DE)",
      type: "string",
      initialValue: "Leistungen",
    }),
    defineField({
      name: "companyHeading",
      title: "Company Heading (EN)",
      type: "string",
      initialValue: "Company",
    }),
    defineField({
      name: "companyHeadingDe",
      title: "Company Heading (DE)",
      type: "string",
      initialValue: "Unternehmen",
    }),
    defineField({
      name: "contactHeading",
      title: "Contact Heading (EN)",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "contactHeadingDe",
      title: "Contact Heading (DE)",
      type: "string",
      initialValue: "Kontakt",
    }),

    // Content Lists
    defineField({
      name: "servicesList",
      title: "Services List (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "servicesListDe",
      title: "Services List (DE)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "companyList",
      title: "Company List (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "companyListDe",
      title: "Company List (DE)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "legalList",
      title: "Legal Links List (EN)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "legalListDe",
      title: "Legal Links List (DE)",
      type: "array",
      of: [{ type: "string" }],
    }),

    // Contact Details
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      initialValue: "hello@wondercode.ch",
    }),
    defineField({
      name: "phone",
      title: "Contact Phone",
      type: "string",
      initialValue: "+41 44 555 01 00",
    }),
    defineField({
      name: "addressLines",
      title: "Address Lines",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["Bahnhofstrasse 100", "8001 Zürich"],
    }),
    defineField({
      name: "country",
      title: "Country (EN)",
      type: "string",
      initialValue: "Switzerland",
    }),
    defineField({
      name: "countryDe",
      title: "Country (DE)",
      type: "string",
      initialValue: "Schweiz",
    }),

    // Bottom Bar
    defineField({
      name: "allRightsReserved",
      title: "All Rights Reserved Text (EN)",
      type: "string",
      initialValue: "All Rights Reserved",
    }),
    defineField({
      name: "allRightsReservedDe",
      title: "All Rights Reserved Text (DE)",
      type: "string",
      initialValue: "Alle Rechte vorbehalten",
    }),
    defineField({
      name: "madeInText",
      title: "Made In Text (EN)",
      type: "string",
      initialValue: "Made with passion in",
    }),
    defineField({
      name: "madeInTextDe",
      title: "Made In Text (DE)",
      type: "string",
      initialValue: "Mit Leidenschaft entwickelt in",
    }),
  ],
});
