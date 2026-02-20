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
