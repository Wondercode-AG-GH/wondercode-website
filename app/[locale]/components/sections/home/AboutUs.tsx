"use client";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Shield, Rocket, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useOptimistic } from "@sanity/visual-editing/react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { iconMap } from "@/sanity/lib/iconMap";

interface AboutUsData {
  aboutText?: string;
  aboutTextDe?: string;
  usText?: string;
  usTextDe?: string;
  badge?: string;
  badgeDe?: string;
  title?: string;
  titleDe?: string;
  titleHighlight?: string;
  titleHighlightDe?: string;
  description1?: string;
  description1De?: string;
  description2?: string;
  description2De?: string;
  description3?: string;
  description3De?: string;
  description4?: string;
  description4De?: string;
  foundersImage?: string;
  foundersLabel?: string;
  foundersLabelDe?: string;
  foundersTitle?: string;
  foundersTitleDe?: string;
  foundersDescription?: string;
  foundersDescriptionDe?: string;
  valuesTitle?: string;
  valuesTitleDe?: string;
  coreValues?: any[];
}

export default function AboutUs({
  data: serverData,
}: { data?: AboutUsData | null } = {}) {
  const { t, i18n } = useTranslation("common");
  const impactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(impactRef, { once: true });
  const [count, setCount] = useState(0);
  // Studio edits patch this in place via postMessage (no router refresh).
  const data = useOptimistic<AboutUsData | null>(
    serverData ?? null,
    (current, action) => {
      if (action.type !== "mutate") return current;
      const doc = action.document as { _type?: string } & AboutUsData;
      if (doc._type !== "aboutUs") return current;
      return { ...(current ?? {}), ...doc };
    },
  );

  const isGerman = i18n.language === "de";

  const aboutText = isGerman
    ? data?.aboutTextDe || t("aboutUsSection.about")
    : data?.aboutText || t("aboutUsSection.about");

  const usText = isGerman
    ? data?.usTextDe || t("aboutUsSection.us")
    : data?.usText || t("aboutUsSection.us");

  const badge = isGerman
    ? data?.badgeDe || t("aboutUsSection.badge")
    : data?.badge || t("aboutUsSection.badge");

  const title = isGerman
    ? data?.titleDe || t("aboutUsSection.title")
    : data?.title || t("aboutUsSection.title");

  const titleHighlight = isGerman
    ? data?.titleHighlightDe || t("aboutUsSection.titleHighlight")
    : data?.titleHighlight || t("aboutUsSection.titleHighlight");

  const description1 = isGerman
    ? data?.description1De || t("aboutUsSection.description")
    : data?.description1 || t("aboutUsSection.description");

  const description2 = isGerman
    ? data?.description2De || t("aboutUsSection.description2")
    : data?.description2 || t("aboutUsSection.description2");

  const description3 = isGerman
    ? data?.description3De || t("aboutUsSection.description3")
    : data?.description3 || t("aboutUsSection.description3");

  const description4 = isGerman
    ? data?.description4De || t("aboutUsSection.description4")
    : data?.description4 || t("aboutUsSection.description4");

  const foundersImage =
    data?.foundersImage ||
    "https://images.unsplash.com/photo-1763550662603-78aa2f2033bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBwb3J0cmFpdCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcwMTMwNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080";

  const foundersLabel = isGerman
    ? data?.foundersLabelDe || "DIE GRÜNDER"
    : data?.foundersLabel || "THE FOUNDERS";

  const foundersTitle = isGerman
    ? data?.foundersTitleDe || "Experts in Digital Transformation"
    : data?.foundersTitle || "Experts in Digital Transformation";

  const foundersDescription = isGerman
    ? data?.foundersDescriptionDe ||
      "Seasoned leaders with backgrounds in AI research, enterprise architecture, and strategic consulting."
    : data?.foundersDescription ||
      "Seasoned leaders with backgrounds in AI research, enterprise architecture, and strategic consulting.";

  const valuesTitle = isGerman
    ? data?.valuesTitleDe || "Unsere Werte"
    : data?.valuesTitle || "Core Values";

  const coreValues =
    data?.coreValues && data.coreValues.length > 0
      ? data.coreValues.map((v: any) => ({
          icon: iconMap[v.icon] || Shield,
          title: isGerman ? v.titleDe || v.title : v.title,
          description: isGerman
            ? v.descriptionDe || v.description
            : v.description,
        }))
      : [
          {
            icon: Shield,
            title: t("aboutUsSection.coreValues.trustTitle"),
            description: t("aboutUsSection.coreValues.trustDesc"),
          },
          {
            icon: Rocket,
            title: t("aboutUsSection.coreValues.innovationTitle"),
            description: t("aboutUsSection.coreValues.innovationDesc"),
          },
          {
            icon: Handshake,
            title: t("aboutUsSection.coreValues.partnershipTitle"),
            description: t("aboutUsSection.coreValues.partnershipDesc"),
          },
        ];

  // Counting animation
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 300;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div
      className="max-w-[1600px] mx-auto px-5 md:px-8 relative"
      style={{ position: "relative" }}
    >
      <div
        className="text-center mb-12 md:mb-20"
        style={{ position: "relative" }}
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
          {aboutText} <span className="text-[#00CC66]"> {usText}</span>
        </h2>
      </div>
      {/* Bento Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative"
        style={{ position: "relative" }}
      >
        {/* Top Left - Mission Statement (Large) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 group"
          style={{ position: "relative" }}
        >
          <div className="relative h-full p-10 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00CC66]/40 backdrop-blur-xl transition-all duration-500 overflow-hidden min-h-[400px] flex flex-col justify-center">
            {/* Subtle gradient glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00CC66]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#00CC66]/0 group-hover:bg-[#00CC66]/5 rounded-full blur-[100px] transition-all duration-500" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 text-[#00CC66] text-white text-sm font-semibold mb-8"
                style={{ position: "relative" }}
              >
                {badge}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.1]"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  position: "relative",
                }}
              >
                {title}
                <br />
                <span className="text-[#00CC66]">{titleHighlight}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl"
                style={{ position: "relative" }}
              >
                {description1}
              </motion.p>
              <br />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl"
                style={{ position: "relative" }}
              >
                {description2}
              </motion.p>
              <br />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl"
                style={{ position: "relative" }}
              >
                {description3}
              </motion.p>
              <br />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl"
                style={{ position: "relative" }}
              >
                {description4}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Top Right - The Founders (Expanded Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 group flex"
          style={{ position: "relative" }}
        >
          <div className="relative w-full rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-[#00CC66]/40 transition-all duration-500 overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
            {/* The Image - High impact object-cover */}
            <div className="absolute inset-0 z-0">
              <ImageWithFallback
                src={foundersImage}
                alt="The Founders"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.9]"
              />
              {/* Complex gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </div>

            {/* Content overlay - Optimised for mobile visibility */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-8 z-10 w-full mb-1 md:mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ position: "relative" }}
                className="bg-black/20 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="text-[9px] md:text-xs text-[#00CC66] font-bold mb-1 md:mb-2 tracking-[0.2em] uppercase">
                  {foundersLabel}
                </div>
                <h3
                  className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {foundersTitle}
                </h3>
                <p className="text-gray-200 text-[10px] md:text-sm leading-relaxed">
                  {foundersDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom - Core Values (Restored Original Design) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-12 mt-2"
          style={{ position: "relative" }}
        >
          <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00CC66]/40 backdrop-blur-xl transition-all duration-500 overflow-hidden">
            <div className="relative z-10">
              <h3
                className="text-2xl font-bold mb-8 text-white"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {valuesTitle.split(" ")[0]}{" "}
                <span className="text-[#00CC66]">
                  {valuesTitle.split(" ").slice(1).join(" ")}
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coreValues.map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group/value"
                    style={{ position: "relative" }}
                  >
                    <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 group-hover/value:border-[#00CC66]/30 transition-all duration-300">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="w-14 h-14 rounded-xl bg-[#00CC66]/10 group-hover/value:bg-[#00CC66]/20 flex items-center justify-center transition-all duration-300">
                          <value.icon className="w-7 h-7 text-[#00CC66] group-hover/value:scale-110 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-bold mb-2 text-white">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
