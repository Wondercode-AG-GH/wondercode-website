import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { imprintQuery } from "@/sanity/lib/sanity.queries";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Link from "next/link";

async function getImprintData() {
  return await client.fetch(imprintQuery);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";
  const data = await getImprintData();

  if (!data) return {};

  const title = isGerman
    ? data.seoTitleDe || data.titleDe || "Impressum | Wondercode"
    : data.seoTitle || data.titleEn || "Imprint | Wondercode";

  const description = isGerman ? data.seoDescriptionDe : data.seoDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/imprint`,
      languages: {
        en: "/en/imprint",
        de: "/de/imprint",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/imprint`,
      siteName: "Wondercode",
      locale: isGerman ? "de_DE" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getImprintData();

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>
          Imprint data not found in Sanity. Please create a document of type
          "imprint".
        </p>
      </div>
    );
  }

  const title = locale === "de" ? data.titleDe : data.titleEn;
  const description = locale === "de" ? data.descriptionDe : data.descriptionEn;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00CC66]/30">
      <Header />

      <div className="pt-18 pb-16 px-6 container mx-auto max-w-4xl">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Link
            href={`/${locale}`}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/Wondercode_logo.png"
              alt="Wondercode Logo"
              width={280}
              height={42}
              className="w-[220px] sm:w-[260px] h-auto drop-shadow-[0_0_15px_rgba(0,204,102,0.3)]"
              priority
            />
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white border-b border-white/10 pb-8">
          {title || "Imprint"}
        </h1>

        <div className="prose prose-invert prose-green max-w-none">
          {description ? (
            description.split("\n").map((line: string, i: number) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-4 text-lg">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-500 italic">No description provided.</p>
          )}
        </div>
      </div>
    </main>
  );
}
