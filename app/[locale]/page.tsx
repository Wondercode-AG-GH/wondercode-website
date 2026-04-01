import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/sanity.queries";
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
  const hero = await client.fetch(heroQuery);

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

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreExpertise />
      <AgentforceSplitScreen />
      <CustomEngineering />
      <IndustryExpertise />
      <CaseStudiesGallery />
      <section
        id="about"
        className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8"
        style={{ position: "relative" }}
      >
        <div
          className="max-w-[1600px] mx-auto"
          style={{ position: "relative" }}
        >
          <AboutUs />
        </div>
      </section>
      <FAQSection />
    </>
  );
}
