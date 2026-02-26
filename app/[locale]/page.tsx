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
      {/* About Us Section */}
      <section
        id="about"
        className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8"
        style={{ position: "relative" }}
      >
        <div
          className="max-w-[1600px] mx-auto"
          style={{ position: "relative" }}
        >
          <div
            className="text-center mb-12 md:mb-20"
            style={{ position: "relative" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 backdrop-blur-xl mb-8">
              <div className="w-2.5 h-2.5 bg-[#00CC66] rounded-full" />
              <span className="text-sm font-medium text-[#00CC66]">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
              About <span className="text-[#00CC66]">Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Swiss precision meets transformative technology
            </p>
          </div>

          <AboutUs />
        </div>
      </section>
      <FAQSection />
    </>
  );
}
