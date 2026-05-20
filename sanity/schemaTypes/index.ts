import { type SchemaTypeDefinition } from "sanity";
import serviceType from "./service";
import industryType from "./industry";
import caseStudyType from "./caseStudy";
import faqType from "./faq";
import headerType from "./header";
import heroType from "./hero";
import agenticExpertiseType from "./agenticExpertise";
import customEngineeringType from "./customEngineering";
import aboutUsType from "./aboutUs";
import footerType from "./footer";
import coreExpertiseHeaderType from "./coreExpertiseHeader";
import industryExpertiseHeaderType from "./industryExpertiseHeader";
import caseStudiesGalleryHeaderType from "./caseStudiesGalleryHeader";
import faqHeaderType from "./faqHeader";
import homePageType from "./homePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    industryType,
    caseStudyType,
    faqType,
    headerType,
    heroType,
    agenticExpertiseType,
    customEngineeringType,
    aboutUsType,
    footerType,
    coreExpertiseHeaderType,
    industryExpertiseHeaderType,
    caseStudiesGalleryHeaderType,
    faqHeaderType,
    homePageType,
  ],
};
