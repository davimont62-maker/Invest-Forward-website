import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Opportunita | Invest Forward",
  description:
    "Panoramica riservata di opportunita selezionate per soggetti qualificati, con accesso a materiali dettagliati dopo registrazione e revisione.",
  alternates: { canonical: "/it/opportunities", languages: { en: "/opportunities", it: "/it/opportunities" } },
};

const opportunities = [
  {
    title: "Gunpowder Project - Vegetable Charcoal",
    sector: "Materiali strategici",
    geography: "Serbia / Europa",
    stage: "Seed launch",
    status: "Attiva",
    requirement: "EUR 1,0m capitale seed startup",
    visual: "materials",
    monogram: "GP",
    image: "/assets/opportunity-gunpowder-banner.png",
    summary:
      "Piattaforma di carbone vegetale tecnico per supply chain industriali, pirotecniche ed energetic-material, con produzione controllata, QA e tracciabilita.",
    focus: ["Ramp 150-300 t", "Base produttiva in Serbia", "Carbonio tecnico controllato"],
    href: "/opportunities/gunpowder-project",
  },
  {
    title: "BitPoint - Loyalty Points Platform",
    sector: "Tecnologia / Loyalty Infrastructure",
    geography: "Europa / Globale",
    stage: "Preparazione al lancio",
    status: "Attiva",
    requirement: "EUR 2,2m capitale per espansione operativa",
    visual: "bitpoint",
    monogram: "BP",
    image: "/assets/opportunity-bitpoint-banner.png",
    summary:
      "Piattaforma consumer technology progettata per aiutare gli utenti a valorizzare punti loyalty inutilizzati attraverso un'esperienza centralizzata di rewards e redemption.",
    focus: ["Conversione punti loyalty", "Modello partner-brand", "Rewards marketplace"],
    href: "/opportunities/bitpoint",
  },
];

export default function ItalianOpportunitiesPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero opportunities-hero">
          <div className="container">
            <p className="eyebrow">Portfolio overview</p>
            <h1>Opportunita di investimento attive</h1>
            <p>
              Opportunita selezionate dell'economia reale in revisione confidenziale. Le
              informazioni dettagliate sono fornite solo a soggetti qualificati dopo registrazione
              e review.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="portfolio-intro">
              <div>
                <p className="eyebrow">Portfolio corrente</p>
                <h2>Opportunita selezionate</h2>
              </div>
              <p>
                Non si tratta di offerte pubbliche o listing retail. Ogni opportunita viene
                introdotta attraverso un processo relationship-led con controparti professionali.
              </p>
            </div>

            <div className="portfolio-grid">
              {opportunities.map((opportunity) => (
                <article key={opportunity.title} className="portfolio-card opportunity-teaser-card">
                  <div className={`opportunity-visual opportunity-visual-${opportunity.visual}`}>
                    <img src={opportunity.image} alt="" aria-hidden="true" />
                    <div className="opportunity-monogram">{opportunity.monogram}</div>
                    <div className="opportunity-visual-copy">
                      <span>{opportunity.sector}</span>
                      <strong>{opportunity.stage}</strong>
                    </div>
                  </div>

                  <div className="opportunity-card-body">
                    <div className="opportunity-status-row">
                      <span>{opportunity.status}</span>
                      <span>{opportunity.sector}</span>
                    </div>
                    <h2>{opportunity.title}</h2>
                    <div className="opportunity-location">
                      <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M8 14s5-4.4 5-8A5 5 0 0 0 3 6c0 3.6 5 8 5 8Z" />
                        <circle cx="8" cy="6" r="1.7" />
                      </svg>
                      <span>{opportunity.geography}</span>
                    </div>
                    <p>{opportunity.summary}</p>

                    <ul className="opportunity-focus-list">
                      {opportunity.focus.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="opportunity-facts">
                      <div>
                        <strong>{opportunity.requirement}</strong>
                        <span>Requisito strategico</span>
                      </div>
                      <div>
                        <strong>{opportunity.stage}</strong>
                        <span>Fase di sviluppo</span>
                      </div>
                    </div>

                    <p className="confidential-note">
                      Informazioni disponibili a soggetti qualificati su richiesta.
                    </p>
                    <a className="btn btn-secondary btn-card" href={opportunity.href}>
                      Richiedi accesso teaser
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section opportunity-access-section">
          <div className="container opportunity-access">
            <div>
              <p className="eyebrow">Accesso controllato</p>
              <h2>Ulteriori informazioni sono condivise attraverso un processo di qualificazione.</h2>
              <p>
                Invest Forward puo fornire sintesi aggiuntive, documentazione, introduzioni al
                management o materiali di diligence dopo aver confermato fit strategico, profilo
                investitore e requisiti di riservatezza.
              </p>
            </div>
            <a className="btn btn-primary" href="/it/contact">Richiedi accesso</a>
          </div>
        </section>
      </main>
      <SiteFooter locale="it" />
    </>
  );
}
