import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Servizi | Invest Forward",
  description:
    "Sviluppo progetti, introduzione di capitale, materiali per investitori, advisory strategica e supporto alla transazione.",
  alternates: { canonical: "/it/services", languages: { en: "/services", it: "/it/services" } },
};

const services = [
  ["Sviluppo progetti", "Valutazione, logica di fattibilita, preparazione e coordinamento dello sviluppo per opportunita selezionate."],
  ["Introduzione di capitale", "Introduzioni relationship-led verso investitori qualificati, family office, partner strategici e contatti istituzionali."],
  ["Materiali per investitori", "Preparazione di teaser, deck, memorandum, sintesi di progetto e documentazione di supporto."],
  ["Advisory strategica", "Supporto al posizionamento per proprietari di progetto, gruppi industriali, founder e partner operativi."],
  ["Relazioni governative e regolatorie", "Supporto alla comunicazione strutturata con enti pubblici, istituzioni e stakeholder regolatori."],
  ["Supporto alla transazione", "Coordinamento del flusso informativo, risposte di due diligence e comunicazione nella fase di introduzione."],
];

export default function ItalianServicesPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Servizi</p>
            <h1>Supporto strutturato per presentazioni investment-grade.</h1>
            <p>
              Invest Forward opera in modo selettivo quando preparazione del progetto, accesso
              al capitale e coordinamento degli stakeholder richiedono un approccio professionale.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container editorial-grid">
            {services.map(([title, copy]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter locale="it" />
    </>
  );
}
