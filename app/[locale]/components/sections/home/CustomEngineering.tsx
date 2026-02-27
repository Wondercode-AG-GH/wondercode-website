"use client";
import { motion } from "motion/react";
import { Code, Database, Cloud, Layers, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CustomEngineering() {
  const { t } = useTranslation("common");
  const techStack = ["React", "Node.js", "Heroku", "GraphQL"];

  return (
    <section
      id="custom-engineering"
      className="relative py-20 md:py-32 overflow-hidden px-5 md:px-8"
      style={{
        position: "relative",
        backgroundColor: "#050505",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ position: "absolute" }}
      >
        <div
          className="absolute inset-0"
          style={{
            position: "absolute",
            backgroundImage:
              "linear-gradient(rgba(0, 204, 102, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 204, 102, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto" style={{ position: "relative" }}>
        {/* Desktop (lg+): Asymmetrical Split Screen */}
        <div
          className="hidden lg:grid lg:grid-cols-2 gap-20 items-center"
          style={{ position: "relative" }}
        >
          {/* Left Side - The Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            style={{ position: "relative" }}
          >
            {/* Developer Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                backgroundColor: "rgba(0, 204, 102, 0.05)",
                borderColor: "rgba(0, 204, 102, 0.15)",
              }}
            >
              <Code className="w-3.5 h-3.5" style={{ color: "#00CC66" }} />
              <span
                className="text-xs font-mono tracking-wider"
                style={{ color: "#00CC66" }}
              >
                {t("customEngineeringSection.badge")}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2
                className="text-6xl font-bold mb-4"
                style={{ color: "#FFFFFF" }}
              >
                {t("customEngineeringSection.headline")}
              </h2>
              <p
                className="text-xl leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {t("customEngineeringSection.description")}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <div
                className="text-xs font-mono mb-4"
                style={{ color: "rgba(0, 204, 102, 0.6)" }}
              >
                {t("customEngineeringSection.techStackLabel")}
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-5 py-2.5 rounded-full border font-mono text-sm"
                    style={{
                      position: "relative",
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "#FFFFFF",
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Hint */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(0, 204, 102, 0.8)" }}
            >
              <span className="font-mono">
                {t("customEngineeringSection.expertsReady")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Right Side - The Integrated Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
            style={{ position: "relative" }}
          >
            {/* Blueprint Container */}
            <div
              className="absolute inset-0 rounded-2xl border p-8"
              style={{
                position: "absolute",
                backgroundColor: "rgba(10, 10, 10, 0.5)",
                borderColor: "rgba(0, 204, 102, 0.2)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Technical Markers - Top Corners */}
              <div
                className="absolute top-4 left-4 text-xs font-mono"
                style={{
                  position: "absolute",
                  color: "rgba(0, 204, 102, 0.5)",
                }}
              >
                &lt;ARCHITECTURE&gt;
              </div>
              <div
                className="absolute top-4 right-4 text-xs font-mono"
                style={{
                  position: "absolute",
                  color: "rgba(0, 204, 102, 0.5)",
                }}
              >
                v2.0
              </div>

              {/* Main Architecture Diagram */}
              <div
                className="relative h-full flex items-center justify-center"
                style={{ position: "relative" }}
              >
                {/* Custom App Node (Left) */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-8 top-1/2 -translate-y-1/2"
                  style={{ position: "absolute" }}
                >
                  <div className="relative" style={{ position: "relative" }}>
                    <div
                      className="absolute inset-0 rounded-xl blur-xl"
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(0, 204, 102, 0.2)",
                      }}
                    />
                    <div
                      className="relative w-36 h-36 rounded-xl border flex flex-col items-center justify-center gap-3"
                      style={{
                        position: "relative",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        borderColor: "rgba(0, 204, 102, 0.4)",
                      }}
                    >
                      <Layers
                        className="w-10 h-10"
                        style={{ color: "#00CC66" }}
                      />
                      <div className="text-center">
                        <div
                          className="text-sm font-bold"
                          style={{ color: "#FFFFFF" }}
                        >
                          Custom App
                        </div>
                        <div
                          className="text-xs font-mono mt-1"
                          style={{ color: "rgba(0, 204, 102, 0.6)" }}
                        >
                          Web Interface
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Line with Animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-64"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 204, 102, 0.4)",
                    transformOrigin: "left",
                  }}
                >
                  <motion.div
                    className="absolute inset-y-0 w-8 rounded-full"
                    style={{
                      position: "absolute",
                      background:
                        "linear-gradient(90deg, rgba(0, 204, 102, 0), rgba(0, 204, 102, 0.8), rgba(0, 204, 102, 0))",
                    }}
                    animate={{ x: [0, 250] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                {/* Salesforce Core Node (Right) */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 top-1/2 -translate-y-1/2"
                  style={{ position: "absolute" }}
                >
                  <div className="relative" style={{ position: "relative" }}>
                    <div
                      className="absolute inset-0 rounded-xl blur-xl"
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(0, 204, 102, 0.2)",
                      }}
                    />
                    <div
                      className="relative w-36 h-36 rounded-xl border flex flex-col items-center justify-center gap-3"
                      style={{
                        position: "relative",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        borderColor: "rgba(0, 204, 102, 0.4)",
                      }}
                    >
                      <Database
                        className="w-10 h-10"
                        style={{ color: "#00CC66" }}
                      />
                      <div className="text-center">
                        <div
                          className="text-sm font-bold"
                          style={{ color: "#FFFFFF" }}
                        >
                          Salesforce
                        </div>
                        <div
                          className="text-xs font-mono mt-1"
                          style={{ color: "rgba(0, 204, 102, 0.6)" }}
                        >
                          Core Data
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* API Label on Connection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 px-3 py-1.5 rounded border"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 204, 102, 0.1)",
                    borderColor: "rgba(0, 204, 102, 0.3)",
                  }}
                >
                  <span
                    className="text-xs font-mono"
                    style={{ color: "#00CC66" }}
                  >
                    REST / GraphQL
                  </span>
                </motion.div>
              </div>

              {/* Code Snippet Floating Window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 right-8 w-72 rounded-lg border p-4 shadow-2xl"
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  borderColor: "rgba(0, 204, 102, 0.2)",
                }}
              >
                <div
                  className="flex items-center gap-2 mb-3 pb-2 border-b"
                  style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <Code className="w-3 h-3" style={{ color: "#00CC66" }} />
                  <span
                    className="text-xs font-mono"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    api/salesforce.ts
                  </span>
                </div>
                <div className="space-y-1 font-mono text-xs">
                  <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                    <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>
                      const
                    </span>{" "}
                    query ={" "}
                    <span style={{ color: "rgba(0, 204, 102, 0.6)" }}>`</span>
                  </div>
                  <div
                    className="pl-4"
                    style={{ color: "rgba(255, 255, 255, 0.4)" }}
                  >
                    <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>
                      SELECT
                    </span>{" "}
                    Id, Name
                  </div>
                  <div
                    className="pl-4"
                    style={{ color: "rgba(255, 255, 255, 0.4)" }}
                  >
                    <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>
                      FROM
                    </span>{" "}
                    Account
                  </div>
                  <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                    <span style={{ color: "rgba(0, 204, 102, 0.6)" }}>`</span>;
                  </div>
                </div>
              </motion.div>

              {/* Technical Grid Overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  position: "absolute",
                  backgroundImage:
                    "linear-gradient(rgba(0, 204, 102, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 204, 102, 0.03) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Tablet (md): Single column with improved architecture card */}
        <div className="hidden md:block lg:hidden space-y-12">
          {/* Tablet - The Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl mx-auto text-center"
            style={{ position: "relative" }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                backgroundColor: "rgba(0, 204, 102, 0.05)",
                borderColor: "rgba(0, 204, 102, 0.15)",
              }}
            >
              <Code className="w-3.5 h-3.5" style={{ color: "#00CC66" }} />
              <span
                className="text-xs font-mono tracking-wider"
                style={{ color: "#00CC66" }}
              >
                {t("customEngineeringSection.badge")}
              </span>
            </div>
            <div>
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: "#FFFFFF" }}
              >
                {t("customEngineeringSection.headline")}
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {t("customEngineeringSection.description")}
              </p>
            </div>
            <div>
              <div
                className="text-xs font-mono mb-3"
                style={{ color: "rgba(0, 204, 102, 0.6)" }}
              >
                {t("customEngineeringSection.techStackLabel")}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-5 py-2.5 rounded-full border font-mono text-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "#FFFFFF",
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "rgba(0, 204, 102, 0.8)" }}
            >
              <span className="font-mono">
                {t("customEngineeringSection.expertsReady")}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Tablet - Architecture Visual (horizontal layout, no absolute positioning issues) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border p-8"
            style={{
              position: "relative",
              backgroundColor: "rgba(10, 10, 10, 0.5)",
              borderColor: "rgba(0, 204, 102, 0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Corner Labels */}
            <div
              className="absolute top-4 left-4 text-xs font-mono"
              style={{ position: "absolute", color: "rgba(0, 204, 102, 0.5)" }}
            >
              &lt;ARCHITECTURE&gt;
            </div>
            <div
              className="absolute top-4 right-4 text-xs font-mono"
              style={{ position: "absolute", color: "rgba(0, 204, 102, 0.5)" }}
            >
              v2.0
            </div>

            {/* Horizontal nodes row */}
            <div className="flex items-center justify-center gap-6 mt-8 mb-8">
              {/* Custom App Node */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative flex-shrink-0"
                style={{ position: "relative" }}
              >
                <div
                  className="absolute inset-0 rounded-xl blur-xl"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 204, 102, 0.2)",
                  }}
                />
                <div
                  className="relative w-32 h-32 rounded-xl border flex flex-col items-center justify-center gap-2"
                  style={{
                    position: "relative",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    borderColor: "rgba(0, 204, 102, 0.4)",
                  }}
                >
                  <Layers className="w-9 h-9" style={{ color: "#00CC66" }} />
                  <div className="text-center">
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#FFFFFF" }}
                    >
                      Custom App
                    </div>
                    <div
                      className="text-xs font-mono mt-0.5"
                      style={{ color: "rgba(0, 204, 102, 0.6)" }}
                    >
                      Web Interface
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connection */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative h-0.5 w-24 overflow-hidden"
                  style={{
                    backgroundColor: "rgba(0, 204, 102, 0.4)",
                    transformOrigin: "left",
                  }}
                >
                  <motion.div
                    className="absolute inset-y-0 w-8 rounded-full"
                    style={{
                      position: "absolute",
                      background:
                        "linear-gradient(90deg, rgba(0, 204, 102, 0), rgba(0, 204, 102, 0.8), rgba(0, 204, 102, 0))",
                    }}
                    animate={{ x: [0, 90] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    color: "#00CC66",
                    backgroundColor: "rgba(0, 204, 102, 0.1)",
                  }}
                >
                  REST / GraphQL
                </span>
                <div
                  className="h-0.5 w-24"
                  style={{ backgroundColor: "rgba(0, 204, 102, 0.4)" }}
                />
              </div>

              {/* Salesforce Node */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative flex-shrink-0"
                style={{ position: "relative" }}
              >
                <div
                  className="absolute inset-0 rounded-xl blur-xl"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 204, 102, 0.2)",
                  }}
                />
                <div
                  className="relative w-32 h-32 rounded-xl border flex flex-col items-center justify-center gap-2"
                  style={{
                    position: "relative",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    borderColor: "rgba(0, 204, 102, 0.4)",
                  }}
                >
                  <Database className="w-9 h-9" style={{ color: "#00CC66" }} />
                  <div className="text-center">
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#FFFFFF" }}
                    >
                      Salesforce
                    </div>
                    <div
                      className="text-xs font-mono mt-0.5"
                      style={{ color: "rgba(0, 204, 102, 0.6)" }}
                    >
                      Core Data
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Code Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="rounded-lg border p-4 max-w-xs mx-auto"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                borderColor: "rgba(0, 204, 102, 0.2)",
              }}
            >
              <div
                className="flex items-center gap-2 mb-3 pb-2 border-b"
                style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <Code className="w-3 h-3" style={{ color: "#00CC66" }} />
                <span
                  className="text-xs font-mono"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  api/salesforce.ts
                </span>
              </div>
              <div className="space-y-1 font-mono text-xs">
                <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                  <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>const</span>{" "}
                  query ={" "}
                  <span style={{ color: "rgba(0, 204, 102, 0.6)" }}>`</span>
                </div>
                <div
                  className="pl-4"
                  style={{ color: "rgba(255, 255, 255, 0.4)" }}
                >
                  <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>
                    SELECT
                  </span>{" "}
                  Id, Name
                </div>
                <div
                  className="pl-4"
                  style={{ color: "rgba(255, 255, 255, 0.4)" }}
                >
                  <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>FROM</span>{" "}
                  Account
                </div>
                <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>
                  <span style={{ color: "rgba(0, 204, 102, 0.6)" }}>`</span>;
                </div>
              </div>
            </motion.div>

            {/* Grid Overlay */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                position: "absolute",
                backgroundImage:
                  "linear-gradient(rgba(0, 204, 102, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 204, 102, 0.03) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </motion.div>
        </div>

        {/* Mobile (< md): Vertical Stack */}
        <div className="md:hidden space-y-12">
          {/* Mobile - The Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            style={{ position: "relative" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs"
              style={{
                backgroundColor: "rgba(0, 204, 102, 0.05)",
                borderColor: "rgba(0, 204, 102, 0.15)",
              }}
            >
              <Code className="w-3 h-3" style={{ color: "#00CC66" }} />
              <span
                className="font-mono tracking-wider"
                style={{ color: "#00CC66" }}
              >
                {t("customEngineeringSection.badge")}
              </span>
            </div>

            <div>
              <h2
                className="text-4xl font-bold mb-3"
                style={{ color: "#FFFFFF" }}
              >
                {t("customEngineeringSection.headline")}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
              >
                {t("customEngineeringSection.description")}
              </p>
            </div>

            <div>
              <div
                className="text-xs font-mono mb-3"
                style={{ color: "rgba(0, 204, 102, 0.6)" }}
              >
                {t("customEngineeringSection.techStackLabel")}
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-full border font-mono text-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "#FFFFFF",
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile - Architecture: flex column, no absolute nodes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl border p-6"
            style={{
              position: "relative",
              backgroundColor: "rgba(10, 10, 10, 0.5)",
              borderColor: "rgba(0, 204, 102, 0.2)",
            }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Custom App */}
              <div
                className="w-28 h-28 rounded-xl border flex flex-col items-center justify-center gap-2"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  borderColor: "rgba(0, 204, 102, 0.4)",
                }}
              >
                <Layers className="w-8 h-8" style={{ color: "#00CC66" }} />
                <div className="text-center">
                  <div
                    className="text-xs font-bold"
                    style={{ color: "#FFFFFF" }}
                  >
                    Custom App
                  </div>
                  <div
                    className="text-xs font-mono"
                    style={{ color: "rgba(0, 204, 102, 0.6)" }}
                  >
                    Web Interface
                  </div>
                </div>
              </div>

              {/* Connection line + API label */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-0.5 h-6"
                  style={{ backgroundColor: "rgba(0, 204, 102, 0.4)" }}
                />
                <span
                  className="text-xs font-mono px-3 py-1 rounded border"
                  style={{
                    color: "#00CC66",
                    backgroundColor: "rgba(0, 204, 102, 0.1)",
                    borderColor: "rgba(0, 204, 102, 0.3)",
                  }}
                >
                  REST / GraphQL
                </span>
                <div
                  className="w-0.5 h-6"
                  style={{ backgroundColor: "rgba(0, 204, 102, 0.4)" }}
                />
              </div>

              {/* Salesforce Core */}
              <div
                className="w-28 h-28 rounded-xl border flex flex-col items-center justify-center gap-2"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  borderColor: "rgba(0, 204, 102, 0.4)",
                }}
              >
                <Database className="w-8 h-8" style={{ color: "#00CC66" }} />
                <div className="text-center">
                  <div
                    className="text-xs font-bold"
                    style={{ color: "#FFFFFF" }}
                  >
                    Salesforce
                  </div>
                  <div
                    className="text-xs font-mono"
                    style={{ color: "rgba(0, 204, 102, 0.6)" }}
                  >
                    Core Data
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div
                className="w-full rounded-lg border p-3 mt-2"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  borderColor: "rgba(0, 204, 102, 0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-3 h-3" style={{ color: "#00CC66" }} />
                  <span
                    className="text-xs font-mono"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    salesforce.ts
                  </span>
                </div>
                <div
                  className="font-mono text-xs"
                  style={{ color: "rgba(255, 255, 255, 0.4)" }}
                >
                  <span style={{ color: "rgba(0, 204, 102, 0.8)" }}>const</span>{" "}
                  query = ...
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
