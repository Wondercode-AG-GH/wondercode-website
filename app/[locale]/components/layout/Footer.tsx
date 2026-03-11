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

  const legal = isGerman
    ? data?.legalListDe && data.legalListDe.length > 0
      ? data.legalListDe
      : [
          t("footer.legal.privacyPolicy"),
          t("footer.legal.termsOfService"),
          t("footer.legal.cookiePolicy"),
          t("footer.legal.imprint"),
        ]
    : data?.legalList && data.legalList.length > 0
      ? data.legalList
      : [
          t("footer.legal.privacyPolicy"),
          t("footer.legal.termsOfService"),
          t("footer.legal.cookiePolicy"),
          t("footer.legal.imprint"),
        ];

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
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
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
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {description}
            </p>

            {/* Region Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#00CC66]/30 mb-6"
            >
              <MapPin className="w-5 h-5 text-[#00CC66]" />
              <div>
                <div className="text-sm font-semibold text-white">{cityHQ}</div>
                <div className="text-xs text-gray-500">{region}</div>
              </div>
            </motion.div>

            {/* Language Switcher in Footer */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">{languageLabel}</p>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {servicesHeading}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00CC66] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {companyHeading}
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#00CC66] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {contactHeading}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00CC66] transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-[#00CC66] group-hover:scale-110 transition-transform" />
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00CC66] transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 text-[#00CC66] group-hover:scale-110 transition-transform" />
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#00CC66] flex-shrink-0 mt-0.5" />
                <span>
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
            {legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-[#00CC66] transition-colors"
              >
                {item}
              </a>
            ))}
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
