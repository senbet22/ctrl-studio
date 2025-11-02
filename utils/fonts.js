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
  display: "swap", //
});
