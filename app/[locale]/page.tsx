import AboutUs from "./components/sections/home/AboutUs";
import AgentforceSplitScreen from "./components/sections/home/AgenticExpertise";
import CaseStudiesGallery from "./components/sections/home/CaseStudiesGallery";
import CoreExpertise from "./components/sections/home/CoreExpertise";
import CustomEngineering from "./components/sections/home/CustomEngineering";
import FAQSection from "./components/sections/home/FaqSection";
import { HeroSection } from "./components/sections/home/Hero";
import IndustryExpertise from "./components/sections/home/IndustryExpertise";

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
