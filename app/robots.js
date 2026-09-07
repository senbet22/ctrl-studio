import { SITE_URL } from "@/utils/seo";

/**
 * Generates /robots.txt.
 *
 * Everything on the site is public, so the only job here is pointing crawlers
 * at the sitemap. The API route is excluded because it has nothing to index.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
