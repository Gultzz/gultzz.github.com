import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

const lastModified = process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["pt", "en"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
    alternates: {
      languages: {
        "pt-BR": `${siteUrl}/pt`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/pt`,
      },
    },
  }));
}
