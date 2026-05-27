"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { stegaClean } from "next-sanity";
import { useOptimistic } from "@sanity/visual-editing/react";

interface CaseStudy {
  _id: string;
  _type?: string;
  title: string;
  titleDe: string;
  slug: string;
  problem: string;
  solution: string;
  metric: string;
  metricLabel: string;
  industry: string;
  color: string;
}

interface CaseStudiesGalleryHeader {
  title?: string;
  titleDe?: string;
  titleHighlight?: string;
  titleHighlightDe?: string;
  description?: string;
  descriptionDe?: string;
}

export default function CaseStudiesGallery({
  headerData: serverHeader,
  caseStudies: serverCaseStudies,
}: {
  headerData?: CaseStudiesGalleryHeader | null;
  caseStudies?: CaseStudy[] | null;
} = {}) {
  const { t, i18n } = useTranslation("common");

  // Studio edits patch in place via postMessage (no router refresh).
  const headerData = useOptimistic<CaseStudiesGalleryHeader | null>(
    serverHeader ?? null,
    (current, action) => {
      if (action.type !== "mutate") return current;
      const doc = action.document as {
        _type?: string;
      } & CaseStudiesGalleryHeader;
      if (doc._type !== "caseStudiesGalleryHeader") return current;
      return { ...(current ?? {}), ...doc };
    },
  );
  // Raw `caseStudy` mutation events have nested `challenge.intro` /
  // `solution.intro` shape and use `galleryMetric*` field names. The
  // rendered data is the flat shape produced by page.tsx's transform,
  // so the reducer applies the same transform to incoming events.
  const caseStudyColorMap: Record<string, string> = {
    Healthcare: "#00CC66",
    Finance: "#00ff88",
    Retail: "#00aa55",
    Manufacturing: "#33dd77",
    Technology: "#00CC66",
    "Non-profit": "#00ff88",
    Education: "#00aa55",
  };
  const caseStudies = useOptimistic<CaseStudy[]>(
    serverCaseStudies ?? [],
    (current, action) => {
      if (action.type !== "mutate") return current;
      const raw = action.document as unknown as {
        _type?: string;
        _id?: string;
        title?: string;
        titleDe?: string;
        industry?: string;
        challenge?: { intro?: string; introDe?: string };
        solution?: { intro?: string; introDe?: string };
        galleryMetric?: string;
        galleryMetricDe?: string;
        galleryMetricLabel?: string;
        galleryMetricLabelDe?: string;
      };
      if (raw._type !== "caseStudy") return current;
      const stripDraft = (id: string) =>
        id.startsWith("drafts.") ? id.slice(7) : id;
      const docId = stripDraft(raw._id ?? action.id ?? "");
      const idx = current.findIndex((item) => stripDraft(item._id) === docId);
      if (idx === -1) return current;
      const cur = current[idx];
      const industry = raw.industry ?? cur.industry;
      const next = current.slice();
      next[idx] = {
        ...cur,
        title: raw.title ?? cur.title,
        titleDe: raw.titleDe ?? cur.titleDe,
        industry,
        problem: raw.challenge?.intro ?? cur.problem,
        // problemDe / solutionDe / etc aren't in the typed CaseStudy
        // interface (only the EN versions are rendered there), but we
        // keep the spread above so any extras carried by `cur` survive.
        solution: raw.solution?.intro ?? cur.solution,
        metric: raw.galleryMetric ?? cur.metric,
        metricLabel: raw.galleryMetricLabel ?? cur.metricLabel,
        color: caseStudyColorMap[industry] ?? cur.color,
      };
      return next;
    },
  );
  const loading = false;
  const [activeCase, setActiveCase] = useState(0);

  const lang = i18n.language?.split("-")[0] ?? "en";

  const isGerman = i18n.language === "de";

  const title = isGerman
    ? headerData?.titleDe || t("caseStudiesSection.title")
    : headerData?.title || t("caseStudiesSection.title");

  const titleHighlight = isGerman
    ? headerData?.titleHighlightDe || t("caseStudiesSection.titleHighlight")
    : headerData?.titleHighlight || t("caseStudiesSection.titleHighlight");

  const description = isGerman
    ? headerData?.descriptionDe || t("caseStudiesSection.description")
    : headerData?.description || t("caseStudiesSection.description");

  return (
    <section
      id="success-stories"
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden px-5 md:px-8"
      style={{ position: "relative" }}
    >
      <div className="max-w-[1800px] mx-auto" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
          style={{ position: "relative" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            {title} <span className="text-[#00CC66]">{titleHighlight}</span>
          </h2>
          <p
            className="mb-4 max-w-3xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg shrink-0 text-center md:text-center"
            style={{ color: "#999999" }}
          >
            {description}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-400">{t("common.loadingServices")}</p>
          </div>
        )}

        {/* Horizontal Scrolling Gallery - Desktop */}
        {!loading && (
          <div
            className="relative hidden md:block"
            style={{ position: "relative" }}
          >
            <div
              className={`flex gap-8 pb-12 snap-x snap-mandatory scrollbar-hide ${
                caseStudies.length === 1 ? "justify-center" : "overflow-x-auto"
              }`}
              style={{ position: "relative" }}
            >
              {caseStudies.map((study, index) => (
                <Link
                  key={study._id}
                  href={`/${lang}/case-studies/${stegaClean(study.slug)}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex-shrink-0 w-[600px] snap-start group ${
                      caseStudies.length === 1 ? "max-w-full" : ""
                    }`}
                    onViewportEnter={() => setActiveCase(index)}
                    style={{ position: "relative" }}
                  >
                    <div className="relative h-full p-10 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 hover:border-[#00CC66]/50 transition-all duration-500 overflow-hidden">
                      {/* Impact meter at top */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-white/5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#00CC66] to-[#00ff88]"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          style={{ position: "relative" }}
                        />
                      </div>

                      {/* Glowing corner accent */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CC66]/5 rounded-full blur-3xl group-hover:bg-[#00CC66]/10 transition-all duration-500" />

                      <div className="relative z-10">
                        <div className="inline-block px-4 py-2 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 text-[#00CC66] text-sm font-semibold mb-6">
                          {study.industry}
                        </div>

                        <h3 className="text-3xl font-bold mb-6 leading-tight text-white">
                          {i18n.language === "de"
                            ? study.titleDe || study.title
                            : study.title}
                        </h3>

                        <div className="space-y-6 mb-8">
                          <div>
                            <div className="text-sm text-[#00CC66] font-semibold mb-2">
                              {t("caseStudiesSection.challenge")}
                            </div>
                            <p className="text-gray-300 text-lg">
                              {study.problem}
                            </p>
                          </div>

                          <div>
                            <div className="text-sm text-[#00CC66] font-semibold mb-2">
                              {t("caseStudiesSection.solution")}
                            </div>
                            <p className="text-gray-400">{study.solution}</p>
                          </div>
                        </div>

                        {/* Key Metric - Large and glowing */}
                        <div className="relative py-12 px-8 rounded-2xl bg-gradient-to-br from-[#00CC66]/10 to-transparent border border-[#00CC66]/30 mb-8 overflow-hidden group/metric">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00CC66]/10 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <div className="relative z-10 text-center">
                            <motion.div
                              className="text-6xl font-bold text-[#00CC66] mb-2"
                              initial={{ scale: 0.5, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", duration: 0.8 }}
                              style={{ position: "relative" }}
                            >
                              {study.metric}
                            </motion.div>
                            <div className="text-xl text-gray-300 font-semibold">
                              {study.metricLabel}
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-[#00CC66] font-semibold flex items-center gap-2 group/btn"
                        >
                          <span>{t("caseStudiesSection.fullCaseStudy")}</span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Scroll hint dots — only show when more than 1 */}
            {caseStudies.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCase(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeCase === i ? "w-12 bg-[#00CC66]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mobile: Vertical Stack - Show best case (first one) */}
        {!loading && (
          <div className="md:hidden space-y-6" style={{ position: "relative" }}>
            {caseStudies.slice(0, 1).map((study) => (
              <Link
                key={study._id}
                href={`/${lang}/case-studies/${stegaClean(study.slug)}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                  style={{ position: "relative" }}
                >
                  <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 overflow-hidden">
                    {/* Impact meter at top */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-white/5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00CC66] to-[#00ff88]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        style={{ position: "relative" }}
                      />
                    </div>

                    {/* Glowing corner accent */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#00CC66]/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                      <div className="inline-block px-3 py-1.5 rounded-full bg-[#00CC66]/10 border border-[#00CC66]/30 text-[#00CC66] text-xs font-semibold mb-4">
                        {study.industry}
                      </div>

                      <h3 className="text-2xl font-bold mb-6 leading-tight text-white">
                        {i18n.language === "de"
                          ? study.titleDe || study.title
                          : study.title}
                      </h3>

                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="text-xs text-[#00CC66] font-semibold mb-1.5">
                            {t("caseStudiesSection.challenge")}
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed">
                            {study.problem}
                          </p>
                        </div>

                        <div>
                          <div className="text-xs text-[#00CC66] font-semibold mb-1.5">
                            {t("caseStudiesSection.solution")}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Key Metric - Large and glowing */}
                      <div className="relative py-8 px-6 rounded-2xl bg-gradient-to-br from-[#00CC66]/10 to-transparent border border-[#00CC66]/30 mb-6 overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00CC66]/10 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <div className="relative z-10 text-center">
                          <motion.div
                            className="text-6xl font-bold text-[#00CC66] mb-2"
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.8 }}
                          >
                            {study.metric}
                          </motion.div>
                          <div className="text-lg text-gray-300 font-semibold">
                            {study.metricLabel}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#00CC66]/10 border border-[#00CC66]/30 text-[#00CC66] rounded-xl font-semibold flex items-center justify-center gap-2"
                      >
                        <span>{t("caseStudiesSection.fullCaseStudy")}</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Indicator that there are more stories */}
            {caseStudies.length > 1 && (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500">
                  + {caseStudies.length - 1} more success stories
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
