import type { MetadataRoute } from "next";

const routes = ["", "/about", "/team", "/proof", "/faq", "/apply", "/privacy", "/terms", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://vuria.online${route}`,
    lastModified: new Date(),
  }));
}
