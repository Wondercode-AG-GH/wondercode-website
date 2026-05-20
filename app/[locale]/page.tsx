import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import {
  aboutUsQuery,
  agenticExpertiseQuery,
  allCaseStudiesQuery,
  allFaqsQuery,
  allIndustriesQuery,
  allServicesQuery,
  caseStudiesGalleryHeaderQuery,
  coreExpertiseHeaderQuery,
  customEngineeringQuery,
  faqHeaderQuery,
  heroQuery,
  industryExpertiseHeaderQuery,
} from "@/sanity/lib/sanity.queries";
import AboutUs from "./components/sections/home/AboutUs";
import AgentforceSplitScreen from "./components/sections/home/AgenticExpertise";
import CaseStudiesGallery from "./components/sections/home/CaseStudiesGallery";
import CoreExpertise from "./components/sections/home/CoreExpertise";
import CustomEngineering from "./components/sections/home/CustomEngineering";
import FAQSection from "./components/sections/home/FaqSection";
import { HeroSection } from "./components/sections/home/Hero";
import IndustryExpertise from "./components/sections/home/IndustryExpertise";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";
  const { data: hero } = await sanityFetch({ query: heroQuery });

  const title = isGerman
    ? hero?.seoTitleDe || "Wondercode | Intelligente Systeme & Automatisierung"
    : hero?.seoTitle || "Wondercode | Intelligent Systems & Automation";

  const description = isGerman
    ? hero?.seoDescriptionDe ||
      "Wir bauen das digitale Rückgrat für Ihr Unternehmen. Von der ersten Interaktion bis zum Service-Ticket."
    : hero?.seoDescription ||
      "We build the digital backbone for your business. From first interaction to service ticket.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Wondercode",
      locale: isGerman ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Home() {
  // Every home-page section is fetched on the server via the live API.
  // <SanityLive /> in the root layout re-runs this server component
  // whenever any of these documents change, so the iframe (and the
  // public site) always render the latest content.
  const [
    { data: hero },
    { data: aboutUs },
    { data: agenticExpertise },
    { data: customEngineering },
    { data: coreExpertiseHeader },
    { data: services },
    { data: industryExpertiseHeader },
    { data: industries },
    { data: caseStudiesGalleryHeader },
    { data: caseStudies },
    { data: faqHeader },
    { data: faqs },
  ] = await Promise.all([
    sanityFetch({ query: heroQuery }),
    sanityFetch({ query: aboutUsQuery }),
    sanityFetch({ query: agenticExpertiseQuery }),
    sanityFetch({ query: customEngineeringQuery }),
    sanityFetch({ query: coreExpertiseHeaderQuery }),
    sanityFetch({ query: allServicesQuery }),
    sanityFetch({ query: industryExpertiseHeaderQuery }),
    sanityFetch({ query: allIndustriesQuery }),
    sanityFetch({ query: caseStudiesGalleryHeaderQuery }),
    sanityFetch({ query: allCaseStudiesQuery }),
    sanityFetch({ query: faqHeaderQuery }),
    sanityFetch({ query: allFaqsQuery }),
  ]);

  // The CaseStudiesGallery and FAQSection components were originally
  // wired to API routes (/api/case-studies, /api/faqs) that reshaped
  // the raw Sanity data — nested `challenge.intro`/`solution.intro`
  // became flat `problem`/`solution` strings, FAQs got nested as
  // `{ en, de }` objects, and case studies got a `color` lookup from
  // their industry. We mirror those exact reshapes here so the
  // existing components keep rendering against the shape they expect.
  const caseStudyColorMap: Record<string, string> = {
    Healthcare: "#00CC66",
    Finance: "#00ff88",
    Retail: "#00aa55",
    Manufacturing: "#33dd77",
    Technology: "#00CC66",
    "Non-profit": "#00ff88",
    Education: "#00aa55",
  };

  type RawCaseStudy = {
    _id: string;
    title?: string;
    titleDe?: string;
    slug?: string;
    industry?: string;
    challenge?: { intro?: string; introDe?: string };
    solution?: { intro?: string; introDe?: string };
    galleryMetric?: string;
    galleryMetricDe?: string;
    galleryMetricLabel?: string;
    galleryMetricLabelDe?: string;
  };

  const caseStudiesData = ((caseStudies as RawCaseStudy[] | null) ?? []).map(
    (study) => ({
      _id: study._id,
      title: study.title ?? "",
      titleDe: study.titleDe || study.title || "",
      slug: study.slug ?? "",
      industry: study.industry ?? "",
      problem: study.challenge?.intro || "Challenge details",
      problemDe:
        study.challenge?.introDe ||
        study.challenge?.intro ||
        "Challenge details",
      solution: study.solution?.intro || "Solution details",
      solutionDe:
        study.solution?.introDe || study.solution?.intro || "Solution details",
      metric: study.galleryMetric || "+100%",
      metricDe: study.galleryMetricDe || study.galleryMetric || "+100%",
      metricLabel: study.galleryMetricLabel || "Key Result",
      metricLabelDe:
        study.galleryMetricLabelDe || study.galleryMetricLabel || "Key Result",
      color: caseStudyColorMap[study.industry ?? ""] || "#00CC66",
    }),
  );

  type RawFaq = {
    _id: string;
    question?: string;
    questionDe?: string;
    answer?: string;
    answerDe?: string;
  };

  const faqsData = ((faqs as RawFaq[] | null) ?? []).map((faq) => ({
    _id: faq._id,
    question: { en: faq.question ?? "", de: faq.questionDe ?? "" },
    answer: { en: faq.answer ?? "", de: faq.answerDe ?? "" },
  }));

  return (
    <>
      <HeroSection data={hero} />
      <CoreExpertise headerData={coreExpertiseHeader} services={services} />
      <AgentforceSplitScreen data={agenticExpertise} />
      <CustomEngineering data={customEngineering} />
      <IndustryExpertise
        headerData={industryExpertiseHeader}
        industries={industries}
      />
      <CaseStudiesGallery
        headerData={caseStudiesGalleryHeader}
        caseStudies={caseStudiesData}
      />
      <section
        id="about"
        className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8"
        style={{ position: "relative" }}
      >
        <div
          className="max-w-[1600px] mx-auto"
          style={{ position: "relative" }}
        >
          <AboutUs data={aboutUs} />
        </div>
      </section>
      <FAQSection headerData={faqHeader} faqs={faqsData} />
    </>
  );
}
