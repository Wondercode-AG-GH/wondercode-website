import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de"];
const defaultLocale = "de";

function getLocale(request: NextRequest): string {
  // 1. Check URL pathname first (already has locale)
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameLocale) return pathnameLocale;

  // 2. Check cookie (set by language switcher)
  const cookieLocale = request.cookies.get("preferredLanguage")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;

  // 3. Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const browserLang = acceptLanguage
      .split(",")[0]
      .split("-")[0]
      .toLowerCase();
    if (locales.includes(browserLang)) return browserLang;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files, API routes, Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") // files like favicon.ico, images, etc.
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to locale-prefixed URL
  const locale = getLocale(request);
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url,
  );
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files and internals
    "/((?!_next/static|_next/image|favicon.ico|icons|images|locales).*)",
  ],
};
