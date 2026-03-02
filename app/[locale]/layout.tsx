import { Metadata } from "next";
import I18nProvider from "../providers";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export const metadata: Metadata = {
  title: "Wondercode",
  description: "Professional business website",
  icons: {
    icon: "/icon.png", // ← works for most cases
    // Or more detailed (optional):
    // icon: [
    //   { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    //   { url: '/icon.png', sizes: 'any', type: 'image/png' },
    // ],
    apple: "/icon.png", // for iOS home screen
  },
};
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
