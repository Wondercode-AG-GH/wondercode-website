import { type SchemaTypeDefinition } from "sanity";
import serviceType from "./service";
import industryType from "./industry";
import caseStudyType from "./caseStudy";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, industryType, caseStudyType],
};
