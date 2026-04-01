import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./[locale]/components/ConditionalLayout";
import I18nProvider from "./providers";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://wondercode.agency",
  ),
  title: "Wondercode",
  description: "Next-generation software systems and intelligent automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
