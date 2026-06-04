import type { MetadataRoute } from "next";

const baseUrl = "https://www.investforward.co.uk";

const routes = [
  "",
  "/about",
  "/services",
  "/investors",
  "/opportunities",
  "/team",
  "/contact",
  "/news-insights",
  "/opportunities/gunpowder-project",
  "/opportunities/bitpoint",
  "/it",
  "/it/about",
  "/it/services",
  "/it/investors",
  "/it/opportunities",
  "/it/team",
  "/it/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route.includes("opportunities") ? "weekly" : "monthly",
    priority: route === "" || route === "/it" ? 1 : 0.75,
  }));
}
