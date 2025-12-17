/**
 * A Next.js server action to set the user's preferred locale.
 * This function sets a cookie named `NEXT_LOCALE` with the provided locale value.
 * The cookie is set to be secure in production, valid for one year, and accessible across the entire site.
 *
 * @param {string} locale - The locale string to set (e.g., 'en', 'no').
 */
"use server";

import { cookies } from "next/headers";

export async function setLocaleAction(locale) {
  cookies().set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
