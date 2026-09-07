/**
 * The root layout for the application.
 * Note: The primary HTML structure is in the [lang]/layout.js file.
 * This layout simply passes its children through.
 *
 * The metadata here is inherited by every localized route: `metadataBase`
 * resolves the relative Open Graph image URL, and the title template appends
 * the studio name so each page only has to declare its own title.
 */
import "./globals.css";
import { SITE_URL } from "@/utils/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Ctrl Studio",
    default: "Gastahav: The Shadow from Ringholt | Ctrl Studio",
  },
};

export default function RootLayout({ children }) {
  return children;
}
