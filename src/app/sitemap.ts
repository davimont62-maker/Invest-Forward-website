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
  "/news-insights/rearm-europe-strategic-materials",
  "/news-insights/bitpoint-loyalty-points-solution",
  "/news-insights/investment-memorandum-discipline",
  "/news-insights/confidential-access-private-opportunities",
  "/opportunities/gunpowder-project",
  "/opportunities/bitpoint",
  "/it",
  "/it/about",
  "/it/services",
  "/it/investors",
  "/it/opportunities",
  "/it/opportunities/gunpowder-project",
  "/it/opportunities/bitpoint",
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
