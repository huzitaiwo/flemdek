import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();

  if (!origin) {
    return [];
  }

  return [
    {
      url: origin,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
