import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";

  const title = isGerman ? "Impressum | Wondercode" : "Imprint | Wondercode";

  return {
    title,
    alternates: {
      canonical: `/${locale}/imprint`,
      languages: {
        en: "/en/imprint",
        de: "/de/imprint",
      },
    },
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isGerman = locale === "de";

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00CC66]/30">
      <div className="pt-30 pb-28 px-6 container mx-auto max-w-4xl">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Link
            href={`/${locale}`}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/Wondercode_logo.svg"
              alt="Wondercode Logo"
              width={280}
              height={60}
              className="w-[220px] sm:w-[260px] h-auto drop-shadow-[0_0_15px_rgba(0,204,102,0.3)]"
              priority
            />
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 text-center text-white border-b border-white/10 pb-8 pt-8 leading-[1.1] tracking-tight">
          Impressum
        </h1>

        <div className="prose-static max-w-none text-gray-300">
          <h2>Angaben gemäss Art. 3 Abs. 1 Bst. s UWG und Art. 5 DSG</h2>

          <p>
            <strong>Wondercode AG</strong>
            <br />
            Auf der Mauer 7<br />
            8001 Zürich
            <br />
            Schweiz
          </p>

          <p>
            <strong>Kontakt</strong>
            <br />
            E-Mail: <a href="mailto:info@wondercode.ch">info@wondercode.ch</a>
          </p>

          <p>
            <strong>Vertretungsberechtigte Person</strong>
            <br />
            Bayram Sahin, Geschäftsführer
          </p>

          <p>
            <strong>Handelsregistereintrag</strong>
            <br />
            Handelsregisteramt des Kantons Zürich
            <br />
            UID: CHE-184.529.198
          </p>

          <h2>Haftungsausschluss</h2>

          <p>
            Die Inhalte dieser Website werden mit Sorgfalt erstellt. Wondercode
            AG übernimmt jedoch keine Gewähr für Richtigkeit, Vollständigkeit
            oder Aktualität der bereitgestellten Inhalte. Die Nutzung der
            Inhalte erfolgt auf eigene Verantwortung. Haftungsansprüche gegen
            Wondercode AG, die sich auf Schäden materieller oder ideeller Art
            beziehen, welche durch die Nutzung oder Nichtnutzung der
            dargebotenen Informationen verursacht wurden, sind grundsätzlich
            ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob
            fahrlässiges Verschulden vorliegt.
          </p>

          <h2>Verweise und Links</h2>

          <p>
            Diese Website kann Links zu externen Websites Dritter enthalten. Auf
            deren Inhalte hat Wondercode AG keinen Einfluss. Für die Inhalte
            verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zu
            diesem Zeitpunkt nicht erkennbar. Bei Bekanntwerden von
            Rechtsverletzungen werden entsprechende Links umgehend entfernt.
          </p>

          <h2>Urheberrecht</h2>

          <p>
            Sämtliche Inhalte und Gestaltungselemente dieser Website sind
            urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung,
            Verbreitung oder sonstige Nutzung ausserhalb der Grenzen des
            Urheberrechts bedarf der schriftlichen Zustimmung von Wondercode AG.
          </p>
        </div>
      </div>
    </main>
  );
}
