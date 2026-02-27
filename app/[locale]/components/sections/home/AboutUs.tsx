"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Shield, Rocket, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export default function AboutUs() {
  const { t } = useTranslation("common");
  const impactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(impactRef, { once: true });
  const [count, setCount] = useState(0);

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

  const coreValues = [
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

  // Chart data points for the line chart
  const chartPoints = [
    { x: 0, y: 80 },
    { x: 20, y: 70 },
    { x: 40, y: 85 },
    { x: 60, y: 60 },
    { x: 80, y: 75 },
    { x: 100, y: 20 },
  ];

  return (
    <div
      className="max-w-[1600px] mx-auto px-5 md:px-8 relative"
      style={{ position: "relative" }}
    >
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
          className="lg:col-span-7 group"
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
                {t("aboutUsSection.badge")}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1]"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  position: "relative",
                }}
              >
                {t("aboutUsSection.title")}
                <br />
                <span className="text-[#00CC66]">
                  {t("aboutUsSection.titleHighlight")}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl"
                style={{ position: "relative" }}
              >
                {t("aboutUsSection.description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 grid grid-cols-3 gap-8"
                style={{ position: "relative" }}
              >
                <div>
                  <div className="text-4xl font-bold text-[#00CC66] mb-2">
                    {t("aboutUsSection.stats.experience")}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t("aboutUsSection.stats.experienceLabel")}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00CC66] mb-2">
                    {t("aboutUsSection.stats.projects")}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t("aboutUsSection.stats.projectsLabel")}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00CC66] mb-2">
                    {t("aboutUsSection.stats.satisfaction")}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t("aboutUsSection.stats.satisfactionLabel")}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Top Right - The Founders (Square) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 group"
          style={{ position: "relative" }}
        >
          <div className="relative h-full min-h-[400px] rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00CC66]/60 backdrop-blur-xl transition-all duration-500 overflow-hidden">
            {/* Malachite border glow on hover */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_0_1px_rgba(0,204,102,0)] group-hover:shadow-[0_0_20px_2px_rgba(0,204,102,0.3)] transition-all duration-500" />

            {/* Image with grayscale filter */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763550662603-78aa2f2033bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBwb3J0cmFpdCUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcwMTMwNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="The Founders"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{ position: "relative" }}
              >
                <div className="text-sm text-[#00CC66] font-semibold mb-2 tracking-wider">
                  THE FOUNDERS
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Experts in Digital Transformation
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Seasoned leaders with backgrounds in AI research, enterprise
                  architecture, and strategic consulting.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Left - Core Values (Horizontal) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
          style={{ position: "relative" }}
        >
          <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00CC66]/40 backdrop-blur-xl transition-all duration-500 overflow-hidden">
            <div className="relative z-10">
              <h3
                className="text-2xl font-bold mb-8 text-white"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Core <span className="text-[#00CC66]">Values</span>
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

        {/* Bottom Right - Live Impact (Vertical) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 group"
          style={{ position: "relative" }}
        >
          <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00CC66]/40 backdrop-blur-xl transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col">
            {/* Ambient glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#00CC66]/0 group-hover:bg-[#00CC66]/10 rounded-full blur-[80px] transition-all duration-500" />

            <div className="relative z-10 flex-1 flex flex-col">
              <h3
                className="text-2xl font-bold mb-4 text-white"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Live <span className="text-[#00CC66]">Impact</span>
              </h3>

              <div className="flex-1 flex flex-col justify-center">
                {/* Counting number */}
                <div ref={impactRef} className="mb-8">
                  <motion.div
                    className="text-6xl lg:text-7xl font-bold text-[#00CC66] mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    +{count}%
                  </motion.div>
                  <div className="text-lg text-gray-400">
                    Average Client Growth
                  </div>
                </div>

                {/* Clean line chart */}
                <div className="relative h-32 w-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="100"
                        y2={y}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                      />
                    ))}

                    {/* Line path */}
                    <motion.path
                      d={`M ${chartPoints.map((p) => `${p.x},${p.y}`).join(" L ")}`}
                      fill="none"
                      stroke="#00CC66"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Gradient fill under line */}
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#00CC66"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#00CC66"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d={`M ${chartPoints.map((p) => `${p.x},${p.y}`).join(" L ")} L 100,100 L 0,100 Z`}
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />

                    {/* Data points */}
                    {chartPoints.map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="2"
                        fill="#00CC66"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Metric label */}
                <div className="mt-6 text-xs text-gray-500 tracking-wider">
                  MEASURED ACROSS 50+ SUCCESSFUL PROJECTS
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
