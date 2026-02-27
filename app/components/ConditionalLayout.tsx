'use client';

import { usePathname } from 'next/navigation';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { MobileNavigation } from './layout/MobileNavigation';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide header and footer on service detail pages
  const hideHeaderFooter = pathname?.startsWith('/services/');

  if (hideHeaderFooter) {
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
