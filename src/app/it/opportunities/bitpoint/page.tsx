import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "BitPoint | Invest Forward",
  description:
    "Panoramica confidenziale di BitPoint, piattaforma tecnologica loyalty e rewards per soggetti qualificati.",
  alternates: {
    canonical: "/it/opportunities/bitpoint",
    languages: {
      en: "/opportunities/bitpoint",
      it: "/it/opportunities/bitpoint",
    },
  },
  openGraph: {
    title: "BitPoint - Loyalty Points Platform | Invest Forward",
    description:
      "Opportunita technology focalizzata sulla conversione di punti loyalty inutilizzati in una piattaforma rewards strutturata.",
    url: "https://www.investforward.co.uk/it/opportunities/bitpoint",
    locale: "it_IT",
    images: [{ url: "/assets/opportunity-bitpoint-banner.png", width: 1200, height: 630 }],
  },
};

const overview = [
  ["Settore", "Tecnologia / loyalty infrastructure"],
  ["Geografia", "Europa / globale"],
  ["Fase", "Preparazione al lancio"],
  ["Requisito indicativo", "EUR 2,2m capitale per espansione operativa"],
  ["Use of proceeds", "Sviluppo, team, OPEX, marketing e attivita di lancio"],
  ["Stato accesso", "Teaser dettagliato disponibile dopo review della registrazione"],
];

const thesis = [
  "Piattaforma consumer progettata per aiutare gli utenti a valorizzare punti loyalty inutilizzati.",
  "Esperienza centralizzata di rewards e redemption con potenziali revenue stream da partner brand.",
  "Piano di espansione focalizzato su sviluppo tecnologico, onboarding partner, marketing e runway operativo.",
];

export default function ItalianBitPointPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Registrazione opportunita</p>
            <h1>BitPoint - Loyalty Points Platform</h1>
            <p>
              Opportunita confidenziale consumer-technology focalizzata sulla conversione di punti
              loyalty inutilizzati in un'esperienza rewards e redemption piu accessibile.
              Materiali piu ampi sono disponibili solo a soggetti qualificati dopo review.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container opportunity-detail">
            <div>
              <p className="eyebrow">Panoramica pubblica</p>
              <h2>Trasformare punti loyalty inutilizzati in una piattaforma rewards strutturata.</h2>
              <figure className="opportunity-overview-media">
                <img src="/assets/opportunity-bitpoint-banner.png" alt="" />
              </figure>
              <p>
                BitPoint e posizionata come piattaforma consumer-facing che aiuta gli utenti a
                centralizzare programmi loyalty, convertire punti inutilizzati in valore di
                piattaforma e accedere a un catalogo rewards piu ampio.
              </p>
              <p>
                Questa sintesi non costituisce offerta di strumenti finanziari. Ulteriori materiali
                possono includere presentazione investitori, caso gestionale, business model, use of
                proceeds, posizionamento di mercato e note di diligence dopo qualificazione.
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

            <MailtoForm className="contact-form" subject="BitPoint richiesta teaser - italiano">
              <label><span>Nome</span><input name="name" autoComplete="name" required /></label>
              <label><span>Organizzazione</span><input name="organisation" autoComplete="organization" required /></label>
              <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
              <label><span>Tipo investitore / partner</span><input name="type" placeholder="Family office, partner tecnologico, advisor..." /></label>
              <label><span>Focus</span><input name="focus" placeholder="Tecnologia, loyalty, consumer platforms..." /></label>
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
