/**
 * This module configures and exports the custom fonts used throughout the application
 * using `next/font/google`. The exported font objects can be used to apply the fonts
 * globally or on a per-component basis.
 *
 * `skranji` is used for headings and prominent text.
 * `ovo` is used for body text.
 *
 * These are typically imported into the root layout file to apply the CSS variables
 * to the entire application.
 */
import { Skranji, Ovo } from "next/font/google";

export const skranji = Skranji({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-skranji",
  display: "swap", // For better loading performance
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});
