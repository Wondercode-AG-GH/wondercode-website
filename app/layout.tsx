import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";


const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Company",
  description: "Professional business website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-[#0A0A0A] text-white`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
