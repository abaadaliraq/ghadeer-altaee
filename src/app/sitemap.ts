import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  alternateLanguages,
  getIndexableRoutes,
  localizedPath,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-29T00:00:00.000Z");

  return getIndexableRoutes().flatMap((route) =>
    (["ar", "en"] as const).map((locale) => ({
      url: absoluteUrl(localizedPath(locale, route.path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages(route.path),
      },
    }))
  );
}
