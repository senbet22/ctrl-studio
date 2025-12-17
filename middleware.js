/**
 * Determines the best-suited locale for a user based on a priority order.
 * 1. Checks if a locale is already present in the URL path.
 * 2. Checks for a previously set locale preference in the `NEXT_LOCALE` cookie.
 * 3. Inspects the `accept-language` header from the browser.
 * 4. Falls back to the `defaultLocale` if no other preference is found.
 *
 * @param {import('next/server').NextRequest} request - The incoming request object.
 * @returns {string} The determined locale string (e.g., 'en', 'no').
 */
import { NextResponse } from "next/server";

const locales = ["en", "no"];
const defaultLocale = "en";

function getLocale(request) {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) return pathnameLocale;

  // Check for saved cookie/language preference before language check**
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check browser language
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Check if browser language matches Norwegian
    if (
      acceptLanguage.includes("no") ||
      acceptLanguage.includes("nb") ||
      acceptLanguage.includes("nn")
    ) {
      return "no";
    }
  }

  return defaultLocale;
}

/**
 * Next.js middleware for handling internationalization (i18n) routing.
 * This function intercepts incoming requests and ensures that the URL path is prefixed with a supported locale.
 * If the path does not already contain a locale, it uses the `getLocale` helper to determine the
 * appropriate locale and then redirects the user to the locale-prefixed URL.
 *
 * @param {import('next/server').NextRequest} request - The incoming request object.
 */
export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images, etc)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
