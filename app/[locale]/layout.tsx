import { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import I18nProvider from "../providers";
import ConditionalLayout from "./components/ConditionalLayout";

const geist = Geist({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export const metadata: Metadata = {
  title: "Wondercode",
  description: "Professional business website",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geist.className} antialiased bg-[#0A0A0A] text-white`}
      >
        <I18nProvider locale={locale}>
          <ConditionalLayout>{children}</ConditionalLayout>
        </I18nProvider>
      </body>
    </html>
  );
}
