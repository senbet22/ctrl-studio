/**
 * Sets the user's preferred locale in a cookie (client-side)
 * This cookie will be read by the middleware on subsequent page loads
 */

export function setLocaleCookie(locale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; sameSite=Lax`;
}
// max-age is 1 year (in seconds)

/**
 * Gets the current locale from the cookie (client-side)
 */
export function getLocaleCookie() {
  const cookies = document.cookie.split("; ");
  const localeCookie = cookies.find((cookie) =>
    cookie.startsWith("NEXT_LOCALE")
  );
  return localeCookie ? localeCookie.split("=")[1] : null;
}
