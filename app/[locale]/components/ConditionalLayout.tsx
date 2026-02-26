"use client";

import { usePathname } from "next/navigation";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { MobileNavigation } from "./layout/MobileNavigation";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const normalizedPath = pathname
    ? pathname.replace(/^\/[^\/]+/, "")
    : pathname;

  // Hide header and footer on service detail pages
  const hideHeaderFooter = normalizedPath?.startsWith("/services/");
  const studios = pathname?.startsWith("/studio/");
  const industry = normalizedPath?.startsWith("/industries/");
  const caseStudy = normalizedPath?.startsWith("/case-studies/");
  if (hideHeaderFooter) {
    return <>{children}</>;
  }
  if (studios) {
    return <>{children}</>;
  }
  if (industry) {
    return <>{children}</>;
  }
  if (caseStudy) {
    return <>{children}</>;
  }

  return (
    <>
      <MobileNavigation />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
