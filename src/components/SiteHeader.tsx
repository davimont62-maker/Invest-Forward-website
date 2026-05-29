"use client";

import BrandLogo from "@/components/BrandLogo";
import { defaultLocale, navLabels, navLinks, supportedLocales, type Locale } from "@/config/i18n";
import type { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function SiteHeader() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

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
    const savedLocale = window.localStorage.getItem("invest-forward-locale");
    if (savedLocale === "en" || savedLocale === "it" || savedLocale === "zh") {
      setLocale(savedLocale);
    }
  }, []);

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    setLocale(nextLocale);
    window.localStorage.setItem("invest-forward-locale", nextLocale);
  };

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
            href={item.href}
            key={item.href}
          >
            {navLabels[locale][item.key]}
          </a>
        ))}
        <label className="language-select">
          <span>Language</span>
          <select aria-label="Language" value={locale} onChange={handleLocaleChange}>
            {supportedLocales.map((language) => (
              <option value={language.code} key={language.code}>
                {language.shortLabel}
              </option>
            ))}
          </select>
        </label>
      </nav>
    </header>
  );
}
