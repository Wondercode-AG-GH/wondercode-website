import type { Metadata } from "next";
import I18nProvider from "../providers";

export const metadata: Metadata = {
  title: "Wondercode",
  description: "Swiss Precision × Silicon Valley Innovation",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const { locale } = await params;
  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}
