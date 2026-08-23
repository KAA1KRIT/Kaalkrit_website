import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(absoluteUrl("/") ? { allow: "/" } : { disallow: "/" }),
    },
    ...(absoluteUrl("/sitemap.xml")
      ? { sitemap: absoluteUrl("/sitemap.xml") }
      : {}),
  };
}
