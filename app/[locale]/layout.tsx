import { Metadata } from "next";
import I18nProvider from "../providers";
import ConditionalLayout from "./components/ConditionalLayout";

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
    <I18nProvider locale={locale}>
      <ConditionalLayout>{children}</ConditionalLayout>
    </I18nProvider>
  );
}
