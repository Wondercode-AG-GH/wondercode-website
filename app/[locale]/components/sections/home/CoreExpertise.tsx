"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { iconMap } from "@/sanity/lib/iconMap";

interface Service {
  _id: string;
  title: string;
  titleDe: string;
  slug: string;
  icon?: string;
  heroSubline: string;
  heroSublineDe: string;
}

interface Capability {
  icon: any;
  title: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
}

export default function CoreExpertise() {
  const { t, i18n } = useTranslation("common");
  const [capabilities, setCapabilities] = useState<Capability[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const response = await fetch("/api/services");
        if (!response.ok) throw new Error("Failed to fetch services");
        const services: Service[] = await response.json();

        // Transform services to capability format
        const transformed = services.map((service) => {
          const IconComponent = service.icon
            ? (iconMap[service.icon] ?? Sparkles)
            : Sparkles;

          // Select title and description based on current language
          const isGerman = i18n.language === "de";
          const title = isGerman
            ? service.titleDe || service.title
            : service.title;
          const description = isGerman
            ? service.heroSublineDe || service.heroSubline
            : service.heroSubline;

          const lang = i18n.language?.split("-")[0] ?? "en";

          return {
            icon: IconComponent,
            title,
            description,
            link: `/${lang}/services/${service.slug}`,
          };
        });

        // Add Agentforce as special highlighted item
        // const agentforceIcon = iconMap['Sparkles'] ?? Sparkles;
        const allCapabilities = [
          ...transformed,
          // {
          //   icon: agentforceIcon,
          //   title: 'Agentforce',
          //   description: 'Die Zukunft der Arbeit. Wir konfigurieren autonome AI-Agenten, die Aufgaben in allen oben genannten Clouds selbstständig planen und ausführen.',
          //   link: '/services/agentforce',
          //   isHighlighted: true
          // }
        ];

        setCapabilities(allCapabilities);
      } catch (error) {
        console.error("Failed to load services:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadServices();
  }, [i18n.language]);

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-[#0A0A0A] px-5 md:px-8"
      style={{ position: "relative" }}
    >
      {/* Technical grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#00CC66 1px, transparent 1px), linear-gradient(90deg, #00CC66 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        className="relative max-w-[1600px] mx-auto"
        style={{ position: "relative" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
          style={{ position: "relative" }}
        >
          <div
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border backdrop-blur-xl mb-6 md:mb-8"
            style={{
              backgroundColor: "rgba(0, 204, 102, 0.1)",
              borderColor: "rgba(0, 204, 102, 0.3)",
            }}
          >
            <motion.div
              className="w-2.5 h-2.5 bg-[#00CC66] rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-[#00CC66]">
              {t("coreExpertise.salesforceEcosystem.badge")}
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            {t("coreExpertise.salesforceEcosystem.title")}{" "}
            <span className="text-[#00CC66]">
              {t("coreExpertise.salesforceEcosystem.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("coreExpertise.salesforceEcosystem.description")}
          </p>
        </motion.div>

        {/* 8-Card Capability Matrix - Periodic Table Style */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          style={{ position: "relative" }}
        >
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">{t("common.loadingServices")}</p>
            </div>
          ) : (
            capabilities.map((capability, index) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative h-full min-h-[200px] md:min-h-[240px] p-4 md:p-6 rounded-xl overflow-hidden cursor-pointer flex flex-col"
                  style={{
                    background: "#111111",
                    border: capability.isHighlighted
                      ? "1px solid rgba(0, 204, 102, 0.3)"
                      : "1px solid rgba(75, 85, 99, 0.3)",
                    position: "relative",
                  }}
                >
                  {/* Hover: Enhanced border */}
                  <div
                    className={`absolute inset-0 rounded-xl border ${
                      capability.isHighlighted
                        ? "border-[#00CC66]/50 group-hover:border-[#00CC66]"
                        : "border-transparent group-hover:border-[#00CC66]"
                    } transition-all duration-300 pointer-events-none`}
                    style={{ position: "absolute" }}
                  />

                  {/* Subtle background glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      position: "absolute",
                      background:
                        "radial-gradient(circle at 50% 100%, rgba(0, 204, 102, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Card Content */}
                  <div
                    className="relative z-10 flex flex-col h-full"
                    style={{ position: "relative" }}
                  >
                    {/* Icon - Top */}
                    <motion.div
                      className={`mb-6 w-12 h-12 rounded-lg ${
                        capability.isHighlighted
                          ? "bg-[#00CC66]/10 border border-[#00CC66]/30"
                          : "bg-white/5 border border-white/10"
                      } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: capability.isHighlighted ? 0 : 5 }}
                    >
                      <capability.icon
                        className={`w-6 h-6 ${
                          capability.isHighlighted
                            ? "text-[#00CC66]"
                            : "text-white"
                        }`}
                      />
                    </motion.div>

                    {/* Title - Middle */}
                    <h3
                      className={`text-xl font-bold mb-3 leading-tight ${
                        capability.isHighlighted
                          ? "text-[#00CC66]"
                          : "text-white group-hover:text-[#00CC66]"
                      } transition-colors duration-300`}
                    >
                      {capability.title}
                    </h3>

                    {/* Description - Bottom */}
                    <p className="text-sm text-gray-400 leading-relaxed mt-auto">
                      {capability.description}
                    </p>
                  </div>

                  {/* Corner accent for Agentforce */}
                  {capability.isHighlighted && (
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(0, 204, 102, 0.1)",
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );

              // If link is '#', render as div instead of Link
              return capability.link === "#" ? (
                <div key={index} className="block">
                  {CardContent}
                </div>
              ) : (
                <Link key={index} href={capability.link} className="block">
                  {CardContent}
                </Link>
              );
            })
          )}
        </div>

        {/* Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
          style={{ position: "relative" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#111111] border border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00CC66] rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">
                Vom Fundament bis zur Frontier. Vollständige
                Salesforce-Expertise.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
