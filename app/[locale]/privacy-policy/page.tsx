import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

async function getPrivacyPolicyData() {
  const query = `*[_type == "privacyPolicy"][0]`;
  return await client.fetch(query);
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPrivacyPolicyData();

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>
          Privacy Policy data not found in Sanity. Please create a document of
          type "privacyPolicy".
        </p>
      </div>
    );
  }

  const title = locale === "de" ? data.titleDe : data.titleEn;
  const description = locale === "de" ? data.descriptionDe : data.descriptionEn;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00CC66]/30">
      <Header />

      <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        {/* Brand Logo */}
        <div className="flex justify-center mb-16">
          <Link
            href={`/${locale}`}
            className="hover:scale-105 transition-transform duration-300"
          >
            <svg
              width="240"
              height="42"
              viewBox="0 0 200 36"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[180px] sm:w-[220px] h-auto drop-shadow-[0_0_15px_rgba(0,204,102,0.3)]"
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
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white border-b border-white/10 pb-8">
          {title || "Privacy Policy"}
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
