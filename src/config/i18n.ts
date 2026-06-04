export const defaultLocale = "en";

export const supportedLocales = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "it", label: "Italiano", shortLabel: "IT" },
] as const;

export type Locale = (typeof supportedLocales)[number]["code"];

export const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "investors", href: "/investors" },
  { key: "opportunities", href: "/opportunities", featured: true },
  { key: "insights", href: "/news-insights" },
  { key: "team", href: "/team" },
  { key: "contact", href: "/contact" },
] as const;

export const navLabels: Record<Locale, Record<(typeof navLinks)[number]["key"], string>> = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    investors: "Investors",
    opportunities: "Opportunities",
    insights: "News & Insights",
    team: "Team",
    contact: "Contact",
  },
  it: {
    home: "Home",
    about: "Chi siamo",
    services: "Servizi",
    investors: "Investitori",
    opportunities: "Opportunita",
    insights: "News",
    team: "Team",
    contact: "Contatti",
  },
};
