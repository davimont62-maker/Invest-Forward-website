import BrandLogo from "@/components/BrandLogo";
import { defaultLocale, type Locale } from "@/config/i18n";

type SiteFooterProps = {
  locale?: Locale;
};

function pathFor(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export default function SiteFooter({ locale = defaultLocale }: SiteFooterProps) {
  const isItalian = locale === "it";

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <a className="brand" href={pathFor("/", locale)} aria-label="Invest Forward home">
            <BrandLogo />
          </a>
          <p>
            {isItalian
              ? "Boutique di sviluppo strategico di progetti e introduzione di capitale in settori selezionati dell'economia reale."
              : "Boutique strategic project development and capital introduction across selected real-economy sectors."}
          </p>
          <address>
            Suite 2a, 95 Wilton Road<br />
            London, England, SW1V 1BZ
          </address>
        </div>

        <div className="footer-column">
          <h2>{isItalian ? "Piattaforma" : "Platform"}</h2>
          <nav aria-label="Footer navigation">
            <a href={pathFor("/about", locale)}>{isItalian ? "Chi siamo" : "About"}</a>
            <a href={pathFor("/services", locale)}>{isItalian ? "Servizi" : "Services"}</a>
            <a href={pathFor("/investors", locale)}>{isItalian ? "Investitori" : "Investors"}</a>
            <a href={pathFor("/opportunities", locale)}>{isItalian ? "Opportunita" : "Opportunities"}</a>
            <a href="/news-insights">News & Insights</a>
            <a href={pathFor("/team", locale)}>Team</a>
            <a href={pathFor("/contact", locale)}>{isItalian ? "Contatti" : "Contact"}</a>
          </nav>
        </div>

        <div className="footer-column">
          <h2>Focus</h2>
          <p>
            {isItalian
              ? "Industria, energia, tecnologia, infrastrutture, manifattura strategica e difesa / sicurezza."
              : "Industrial, energy, technology, infrastructure, strategic manufacturing, and defence / security."}
          </p>
        </div>

        <div className="footer-column footer-contact">
          <h2>{isItalian ? "Accesso" : "Access"}</h2>
          <p>
            {isItalian
              ? "Le informazioni dettagliate sono fornite a soggetti qualificati dopo revisione."
              : "Detailed information is provided to qualified parties following review."}
          </p>
          <a className="email-link" href="mailto:enquiries@investforward.co.uk">enquiries@investforward.co.uk</a>
        </div>
      </div>
      <div className="container footer-disclaimer">
        <p>
          {isItalian
            ? "Invest Forward non fornisce consulenza finanziaria regolamentata e non effettua offerte pubbliche di strumenti finanziari. Le informazioni presentate sono destinate esclusivamente a soggetti qualificati e sono soggette a due diligence, consulenza professionale e normative applicabili."
            : "Invest Forward does not provide regulated financial advice and does not make public offers of securities. Information presented is for qualified parties only and is subject to due diligence, professional advice, and applicable regulations."}
        </p>
      </div>
    </footer>
  );
}
