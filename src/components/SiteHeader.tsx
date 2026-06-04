"use client";

import BrandLogo from "@/components/BrandLogo";
import { defaultLocale, navLabels, navLinks, supportedLocales, type Locale } from "@/config/i18n";
import { useEffect } from "react";
import { useState } from "react";

type SiteHeaderProps = {
  locale?: Locale;
};

function localizeHref(href: string, locale: Locale) {
  if (locale === defaultLocale) {
    return href;
  }

  if (href === "/news-insights") {
    return href;
  }

  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

function switchLocaleHref(pathname: string, nextLocale: Locale) {
  const cleanPath = pathname.replace(/^\/it(?=\/|$)/, "") || "/";
  const translatedPaths = new Set(["/", "/about", "/services", "/investors", "/opportunities", "/team", "/contact"]);
  const targetPath = translatedPaths.has(cleanPath) ? cleanPath : "/";

  if (nextLocale === defaultLocale) {
    return targetPath;
  }

  return targetPath === "/" ? `/${nextLocale}` : `/${nextLocale}${targetPath}`;
}

export default function SiteHeader({ locale: initialLocale = defaultLocale }: SiteHeaderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (!header || !menuToggle || !nav) {
      return;
    }

    const syncHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    const handleMenuClick = () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    };

    const handleNavClick = () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    menuToggle.addEventListener("click", handleMenuClick);
    nav.addEventListener("click", handleNavClick);

    return () => {
      window.removeEventListener("scroll", syncHeader);
      menuToggle.removeEventListener("click", handleMenuClick);
      nav.removeEventListener("click", handleNavClick);
    };
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setLocale(window.location.pathname.startsWith("/it") ? "it" : initialLocale);
  }, [initialLocale]);

  return (
    <header className="site-header" data-header>
      <a className="brand" href="/" aria-label="Invest Forward home">
        <BrandLogo />
      </a>
      <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
        {navLinks.map((item) => (
          <a
            className={"featured" in item && item.featured ? "nav-featured" : undefined}
            href={localizeHref(item.href, locale)}
            key={item.href}
          >
            {navLabels[locale][item.key]}
          </a>
        ))}
        <div className="language-select" aria-label="Language selection">
          <span>Language</span>
          {supportedLocales.map((language) => (
              <a
                aria-current={locale === language.code ? "true" : undefined}
                className={locale === language.code ? "is-active" : undefined}
                href={switchLocaleHref(currentPath, language.code)}
                key={language.code}
              >
                {language.shortLabel}
              </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
