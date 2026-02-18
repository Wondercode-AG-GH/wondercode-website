import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { MobileNavigation } from "./components/layout/MobileNavigation";


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
      <body className={`${geist.className} antialiased bg-white text-black`}>
        <MobileNavigation />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
