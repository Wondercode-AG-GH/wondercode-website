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
  *[_type == "salesforceEcosystem"] | order(_createdAt asc) {
    _id,
    title,
    titleDe,
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
