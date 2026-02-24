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
