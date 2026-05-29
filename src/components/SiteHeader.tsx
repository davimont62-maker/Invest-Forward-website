"use client";

import BrandLogo from "@/components/BrandLogo";
import { useEffect } from "react";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Investors", "/investors"],
  ["Opportunities", "/opportunities"],
  ["Team", "/team"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
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
        {navItems.map(([label, href]) => (
          <a className={href === "/opportunities" ? "nav-featured" : undefined} href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
