import { type SchemaTypeDefinition } from "sanity";
import serviceType from "./service";
import industryType from "./industry";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, industryType],
};
