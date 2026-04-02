export const serviceBySlugQuery = `
  *[_type == "salesforceEcosystem" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    caseStudyMetrics
  }
`;

export const allServiceSlugsQuery = `
  *[_type == "salesforceEcosystem"]{
    "slug": slug.current
  }
`;

export const allServicesQuery = `
  *[_type == "salesforceEcosystem"] | order(order asc, _createdAt asc) {
    _id,
    order,
    title,
    titleDe,
    listTitle,
    listTitleDe,
    listDescription,
    listDescriptionDe,
    "slug": slug.current,
    icon,
    heroSubline,
    heroSublineDe
  }
`;

export const industryBySlugQuery = `
  *[_type == "industry" && slug.current == $slug][0] {
    ...,
    heroImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    }
  }
`;

export const allIndustrySlugsQuery = `
  *[_type == "industry"]{
    "slug": slug.current
  }
`;

export const allIndustriesQuery = `
  *[_type == "industry"] | order(_createdAt asc) {
    _id,
    title,
    titleDe,
    "slug": slug.current,
    heroSubline,
    heroSublineDe
  }
`;

export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    ...
  }
`;

export const allCaseStudySlugsQuery = `
  *[_type == "caseStudy"]{
    "slug": slug.current
  }
`;
export const allCaseStudiesQuery = `
  *[_type == "caseStudy"] | order(_createdAt asc) {
    _id,
    title,
    titleDe,
    "slug": slug.current,
    industry,
    challenge {
      intro,
      introDe
    },
    solution {
      intro,
      introDe
    },
    galleryMetric,
    galleryMetricDe,
    galleryMetricLabel,
    galleryMetricLabelDe
  }
`;

export const allFaqsQuery = `
  *[_type == "faq"] | order(order asc, _createdAt asc) {
    _id,
    question,
    questionDe,
    answer,
    answerDe,
    order
  }
`;

export const headerQuery = `
  *[_type == "header"][0] {
    navItems,
    ctaLabel,
    ctaLabelDe
  }
`;

export const heroQuery = `
  *[_type == "hero"][0] {
    line1, line1De,
    line2Highlight, line2HighlightDe,
    line3, line3De,
    line4Highlight, line4HighlightDe,
    subtagline, subtaglineDe,
    tagline, taglineDe,
    subtaglineHighlight, subtaglineHighlightDe,
    ctaPrimary, ctaPrimaryDe,
    ctaSecondary, ctaSecondaryDe,
    seoTitle, seoTitleDe,
    seoDescription, seoDescriptionDe
  }
`;

export const agenticExpertiseQuery = `
  *[_type == "agenticExpertise"][0] {
    title, titleDe,
    titleHighlight, titleHighlightDe,
    description1, description1De,
    description2, description2De,
    roadmapTitle, roadmapTitleDe,
    roadmapSubline, roadmapSublineDe,
    processSteps,
    techSpecsLabel, techSpecsLabelDe,
    techSpecsSubline, techSpecsSublineDe,
    features
  }
`;

export const customEngineeringQuery = `
  *[_type == "customEngineering"][0] {
    badge, badgeDe,
    headline, headlineDe,
    description1, description1De,
    description2, description2De,
    description3, description3De,
    techStackLabel, techStackLabelDe,
    techStack,
    expertsReady, expertsReadyDe,
    archLabelLeft, archLabelLeftDe,
    archSublabelLeft, archSublabelLeftDe,
    archLabelRight, archLabelRightDe,
    archSublabelRight, archSublabelRightDe,
    archConnectionLabel,
    codeSnippetTitle,
    codeSnippet
  }
`;

export const aboutUsQuery = `
  *[_type == "aboutUs"][0] {
    aboutText, aboutTextDe,
    usText, usTextDe,
    badge, badgeDe,
    title, titleDe,
    titleHighlight, titleHighlightDe,
    description1, description1De,
    description2, description2De,
    description3, description3De,
    description4, description4De,
    "foundersImage": foundersImage.asset->url,
    foundersLabel, foundersLabelDe,
    foundersTitle, foundersTitleDe,
    foundersDescription, foundersDescriptionDe,
    valuesTitle, valuesTitleDe,
    coreValues
  }
`;

export const footerQuery = `
  *[_type == "footer"][0] {
    description, descriptionDe,
    cityHQ,
    region, regionDe,
    languageLabel, languageLabelDe,
    servicesHeading, servicesHeadingDe,
    companyHeading, companyHeadingDe,
    contactHeading, contactHeadingDe,
    servicesList, servicesListDe,
    companyList, companyListDe,
    legalList, legalListDe,
    email,
    phone,
    addressLines,
    country, countryDe,
    allRightsReserved, allRightsReservedDe,
    madeInText, madeInTextDe
  }
`;

export const coreExpertiseHeaderQuery = `
  *[_type == "coreExpertiseHeader"][0] {
    title, titleDe,
    titleHighlight, titleHighlightDe,
    description1, description1De,
    description2, description2De
  }
`;

export const industryExpertiseHeaderQuery = `
  *[_type == "industryExpertiseHeader"][0] {
    title, titleDe,
    titleHighlight, titleHighlightDe,
    description, descriptionDe
  }
`;

export const caseStudiesGalleryHeaderQuery = `
  *[_type == "caseStudiesGalleryHeader"][0] {
    title, titleDe,
    titleHighlight, titleHighlightDe,
    description, descriptionDe
  }
`;

export const faqHeaderQuery = `
  *[_type == "faqHeader"][0] {
    title, titleDe,
    description, descriptionDe,
    ctaText, ctaTextDe,
    buttonText, buttonTextDe
  }
`;
