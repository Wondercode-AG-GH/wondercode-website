"use client";

import { motion } from "motion/react";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageSwitcher";
import { useEffect, useState } from "react";

interface FooterData {
  description?: string;
  descriptionDe?: string;
  cityHQ?: string;
  region?: string;
  regionDe?: string;
  languageLabel?: string;
  languageLabelDe?: string;
  servicesHeading?: string;
  servicesHeadingDe?: string;
  companyHeading?: string;
  companyHeadingDe?: string;
  contactHeading?: string;
  contactHeadingDe?: string;
  servicesList?: string[];
  servicesListDe?: string[];
  companyList?: string[];
  companyListDe?: string[];
  legalList?: string[];
  legalListDe?: string[];
  email?: string;
  phone?: string;
  addressLines?: string[];
  country?: string;
  countryDe?: string;
  allRightsReserved?: string;
  allRightsReservedDe?: string;
  madeInText?: string;
  madeInTextDe?: string;
}

export default function Footer() {
  const { t, i18n } = useTranslation("common");
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/footer");
        if (res.ok) {
          const fetchedData = await res.json();
          setData(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    }
    fetchData();
  }, []);

  const isGerman = i18n.language === "de";

  const description = isGerman
    ? data?.descriptionDe || t("footer.description")
    : data?.description || t("footer.description");

  const cityHQ = data?.cityHQ || "Zürich (HQ)";
  const region = isGerman
    ? data?.regionDe || t("footer.region")
    : data?.region || t("footer.region");

  const languageLabel = isGerman
    ? data?.languageLabelDe || t("footer.languageLabel")
    : data?.languageLabel || t("footer.languageLabel");

  const servicesHeading = isGerman
    ? data?.servicesHeadingDe || t("footer.headings.services")
    : data?.servicesHeading || t("footer.headings.services");

  const companyHeading = isGerman
    ? data?.companyHeadingDe || t("footer.headings.company")
    : data?.companyHeading || t("footer.headings.company");

  const contactHeading = isGerman
    ? data?.contactHeadingDe || t("footer.headings.contact")
    : data?.contactHeading || t("footer.headings.contact");

  const services = isGerman
    ? data?.servicesListDe && data.servicesListDe.length > 0
      ? data.servicesListDe
      : [
          t("footer.services.salesforceConsulting"),
          t("footer.services.aiStrategy"),
          t("footer.services.customWebApps"),
          t("footer.services.agentforceImplementation"),
        ]
    : data?.servicesList && data.servicesList.length > 0
      ? data.servicesList
      : [
          t("footer.services.salesforceConsulting"),
          t("footer.services.aiStrategy"),
          t("footer.services.customWebApps"),
          t("footer.services.agentforceImplementation"),
        ];

  const company = isGerman
    ? data?.companyListDe && data.companyListDe.length > 0
      ? data.companyListDe
      : [
          t("footer.company.aboutUs"),
          t("footer.company.careers"),
          t("footer.company.blog"),
          t("footer.company.contact"),
        ]
    : data?.companyList && data.companyList.length > 0
      ? data.companyList
      : [
          t("footer.company.aboutUs"),
          t("footer.company.careers"),
          t("footer.company.blog"),
          t("footer.company.contact"),
        ];

  const rawLegal = isGerman
    ? data?.legalListDe && data.legalListDe.length > 0
      ? data.legalListDe
      : [t("footer.legal.privacyPolicy"), t("footer.legal.imprint")]
    : data?.legalList && data.legalList.length > 0
      ? data.legalList
      : [t("footer.legal.privacyPolicy"), t("footer.legal.imprint")];

  // Forcefully rename any Cookie Policy variant to Imprint and filter out Terms of Service
  const legal = rawLegal
    .filter((item: string) => {
      const lower = item.toLowerCase();
      return !lower.includes("terms") && !lower.includes("nutzungsbedingungen");
    })
    .map((item: string) => {
      const lower = item.toLowerCase();
      if (lower.includes("cookie")) {
        return isGerman ? t("footer.legal.imprint") : "Imprint";
      }
      return item;
    });

  const email = data?.email || "hello@wondercode.ch";
  const phone = data?.phone || "+41 44 555 01 00";
  const addressLines =
    data?.addressLines && data.addressLines.length > 0
      ? data.addressLines
      : ["Bahnhofstrasse 100", "8001 Zürich"];

  const country = isGerman
    ? data?.countryDe || t("footer.country")
    : data?.country || t("footer.country");

  const allRightsReserved = isGerman
    ? data?.allRightsReservedDe || t("footer.allRightsReserved")
    : data?.allRightsReserved || t("footer.allRightsReserved");

  const madeInText = isGerman
    ? data?.madeInTextDe || t("footer.madeIn")
    : data?.madeInText || t("footer.madeIn");

  return (
    <footer
      className="relative bg-[#0A0A0A] border-t border-white/10 pt-12 md:pt-20 pb-10 px-5 md:px-8"
      style={{ position: "relative" }}
    >
      <div className="max-w-[1600px] mx-auto" style={{ position: "relative" }}>
        {/* Main Footer Content - Left/Right Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 md:mb-16">
          {/* Brand Column (Left) */}
          <div className="max-w-sm">
            <div className="mb-6">
              <svg
                width="200"
                height="36"
                viewBox="0 0 200 36"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Wondercode"
              >
                <text
                  x="0"
                  y="28"
                  fill="#00CC66"
                  fontFamily="'Nunito', 'Poppins', 'Inter', sans-serif"
                  fontWeight="800"
                  fontSize="30"
                  letterSpacing="-0.5"
                >
                  wondercode
                </text>
              </svg>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

            {/* Language Switcher in Footer */}
            <div>
              <p className="text-xs text-gray-500 mb-2">{languageLabel}</p>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Contact Column (Right) */}
          <div className="flex flex-col md:pr-16 lg:pr-24">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {contactHeading}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#00CC66] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                  {country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Wondercode AG. {allRightsReserved}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legal.map((item: string) => {
              let href = "#";
              const locale = i18n.language || "en";
              const label = item.toLowerCase();

              // Robust matching for legal links
              if (label.includes("privacy") || label.includes("datenschutz")) {
                href = `/${locale}/privacy-policy`;
              } else if (
                label.includes("cookie") ||
                label.includes("imprint") ||
                label.includes("impressum")
              ) {
                href = `/${locale}/imprint`;
              }

              return (
                <a
                  key={item}
                  href={href}
                  className="text-xs text-gray-500 hover:text-[#00CC66] transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Swiss Flag Badge */}
          <motion.div
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <span>{madeInText}</span>
            <div className="w-6 h-6 bg-red-600 flex items-center justify-center rounded">
              <div className="text-white text-xs font-bold">🇨🇭</div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
