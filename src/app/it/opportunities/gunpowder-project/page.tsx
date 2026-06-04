import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Gunpowder Project | Invest Forward",
  description:
    "Panoramica confidenziale del Gunpowder Project, opportunita in Serbia nel carbone vegetale tecnico e materiali strategici per soggetti qualificati.",
  alternates: {
    canonical: "/it/opportunities/gunpowder-project",
    languages: {
      en: "/opportunities/gunpowder-project",
      it: "/it/opportunities/gunpowder-project",
    },
  },
  openGraph: {
    title: "Gunpowder Project - Vegetable Charcoal | Invest Forward",
    description:
      "Opportunita nei materiali strategici focalizzata sulla produzione controllata di carbone tecnico per supply chain industriali ed energetic-material.",
    url: "https://www.investforward.co.uk/it/opportunities/gunpowder-project",
    locale: "it_IT",
    images: [{ url: "/assets/opportunity-gunpowder-banner.png", width: 1200, height: 630 }],
  },
};

const overview = [
  ["Settore", "Materiali strategici / carbonio tecnico"],
  ["Geografia", "Serbia / Europa"],
  ["Fase", "Seed launch ed execution readiness"],
  ["Requisito indicativo", "EUR 1,0m capitale seed startup"],
  ["Target ramp", "150-300 tonnellate di carbone finito"],
  ["Stato accesso", "Teaser dettagliato disponibile dopo review della registrazione"],
];

const thesis = [
  "Carbone tecnico controllato per supply chain industriali, pirotecniche ed energetic-material.",
  "Base produttiva serba con vantaggi legati a feedstock, fabbricazione e prossimita industriale regionale.",
  "Piano di sviluppo focalizzato su permessi, controlli di sicurezza, QA, qualificazione prodotto e primo ramp commerciale.",
];

export default function ItalianGunpowderProjectPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Registrazione opportunita</p>
            <h1>Gunpowder Project - Vegetable Charcoal</h1>
            <p>
              Opportunita confidenziale nei materiali strategici, focalizzata sulla produzione
              controllata di carbone tecnico per supply chain industriali ed energetic-material.
              Materiali piu ampi sono disponibili solo a soggetti qualificati dopo review.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container opportunity-detail">
            <div>
              <p className="eyebrow">Panoramica pubblica</p>
              <h2>Carbonio tecnico specialistico con rilevanza industriale europea.</h2>
              <figure className="opportunity-overview-media">
                <img src="/assets/opportunity-gunpowder-banner.png" alt="" />
              </figure>
              <p>
                Il progetto viene sviluppato come piattaforma serba di carbone tecnico, con
                processo retort controllato, input legnosi selezionati a bassa resina,
                tracciabilita dei batch e disciplina di qualita. La tesi industriale e collegata
                al rinnovato focus europeo su materiali strategici upstream e supply chain
                regionali resilienti.
              </p>
              <p>
                Questa sintesi non costituisce offerta di strumenti finanziari. Ulteriori materiali
                possono includere presentazione investitori, caso gestionale preliminare, use of
                proceeds, modello operativo e note di diligence dopo qualificazione.
              </p>
            </div>

            <aside className="opportunity-snapshot">
              <p className="eyebrow">Snapshot</p>
              <dl className="teaser-details">
                {overview.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="section opportunity-access-section">
          <div className="container teaser-registration">
            <div>
              <p className="eyebrow">Accesso teaser</p>
              <h2>Registra interesse per ricevere la presentazione piu ampia.</h2>
              <p>
                L'accesso e controllato affinche i materiali dettagliati siano condivisi solo con
                investitori, partner strategici e advisor professionali idonei.
              </p>
              <ul className="thesis-list">
                {thesis.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <MailtoForm className="contact-form" subject="Gunpowder Project richiesta teaser - italiano">
              <label><span>Nome</span><input name="name" autoComplete="name" required /></label>
              <label><span>Organizzazione</span><input name="organisation" autoComplete="organization" required /></label>
              <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
              <label><span>Tipo investitore / partner</span><input name="type" placeholder="Family office, partner industriale, advisor..." /></label>
              <label><span>Focus</span><input name="focus" placeholder="Industria, difesa, materiali..." /></label>
              <label><span>Range indicativo</span><input name="range" placeholder="Esempio: EUR 250k - EUR 2m" /></label>
              <label className="form-wide"><span>Messaggio</span><textarea name="message" rows={5} /></label>
              <button className="btn btn-primary" type="submit">Richiedi accesso teaser</button>
              <p className="form-note">
                Informazioni dettagliate fornite previa review, due diligence, consulenza
                professionale e normative applicabili.
              </p>
            </MailtoForm>
          </div>
        </section>
      </main>
      <SiteFooter locale="it" />
    </>
  );
}
