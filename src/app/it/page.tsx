import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Invest Forward | Sviluppo Progetti e Introduzione di Capitale",
  description:
    "Invest Forward sviluppa, struttura e presenta opportunita selezionate dell'economia reale nei settori industriale, energia, tecnologia, infrastrutture e manifattura strategica.",
  alternates: {
    canonical: "/it",
    languages: {
      en: "/",
      it: "/it",
    },
  },
  openGraph: {
    title: "Invest Forward",
    description:
      "Sviluppo strategico di progetti e introduzione di capitale per investitori qualificati, partner strategici e family office.",
    url: "https://www.investforward.co.uk/it",
    siteName: "Invest Forward",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/assets/invest-forward-social-it-v3.png",
        width: 1200,
        height: 630,
        alt: "Invest Forward - Sviluppo Progetti e Introduzione di Capitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest Forward",
    description: "Sviluppo strategico di progetti e introduzione di capitale.",
    images: ["/assets/invest-forward-social-it-v3.png"],
  },
};

const trackRecord = [
  ["25+", "Anni di esperienza combinata"],
  ["UK & UE", "Network nel Regno Unito e in Europa"],
  ["3 settori", "Industria, energia e tecnologia"],
  ["Istituzioni", "Capacita di relazione con enti pubblici e regolatori"],
];

const process = [
  ["01", "Valutazione dell'opportunita", "Analisi commerciale, tecnica e strategica prima della presentazione."],
  ["02", "Fattibilita e strutturazione", "Il progetto viene organizzato in una proposta chiara e finanziabile."],
  ["03", "Investment Memorandum", "Preparazione di sintesi, deck e documentazione per investitori qualificati."],
  ["04", "Investor Matching", "Individuazione di investitori, family office, partner strategici e contatti istituzionali pertinenti."],
  ["05", "Supporto alla due diligence", "Coordinamento del flusso informativo, documentazione e risposte del management."],
  ["06", "Facilitazione della transazione", "Supporto alla comunicazione nella fase di introduzione, confronto e negoziazione."],
];

const values = [
  "Accesso a opportunita proprietarie",
  "Team di gestione con esperienza",
  "Relazioni istituzionali e governative",
  "Capacita di esecuzione cross-border",
  "Focus su progetti dell'economia reale",
];

const sectors = [
  "Industria",
  "Energia",
  "Tecnologia",
  "Infrastrutture",
  "Manifattura strategica",
  "Difesa / Sicurezza",
];

export default function ItalianHomePage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main id="home">
        <section className="gc-hero compact-hero">
          <img className="gc-hero-image" src="/assets/invest-forward-hero.png" alt="" aria-hidden="true" />
          <div className="gc-hero-shade"></div>
          <div className="container gc-hero-grid">
            <div className="gc-hero-copy">
              <p className="eyebrow">Boutique di advisory strategica</p>
              <h1>Sviluppo Strategico di Progetti e Introduzione di Capitale</h1>
              <p>
                Invest Forward sviluppa, struttura e presenta opportunita selezionate
                dell'economia reale nei settori industriale, energia, tecnologia, infrastrutture
                e settori strategici.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/it/about">Chi siamo</a>
                <a className="btn btn-secondary" href="/it/contact">Contatta il team</a>
              </div>
            </div>
            <aside className="gc-hero-panel" aria-label="Sintesi del posizionamento">
              <span>Privato e selettivo</span>
              <h2>Sviluppo progetti e introduzione di capitale basati su relazioni qualificate.</h2>
              <p>Le informazioni dettagliate sono fornite a soggetti qualificati dopo revisione.</p>
            </aside>
          </div>
        </section>

        <section className="section gc-intro" id="about">
          <div className="container gc-intro-grid">
            <div>
              <p className="eyebrow">Chi siamo</p>
              <h2>Una piattaforma di sviluppo progetti e introduzione di capitale.</h2>
            </div>
            <div className="gc-intro-copy">
              <p>
                Invest Forward supporta opportunita selezionate, investitori, partner strategici
                e proprietari di progetto quando sono essenziali strutturazione disciplinata,
                presentazione credibile e introduzioni qualificate.
              </p>
              <p>
                La societa opera in settori dell'economia reale con un approccio riservato,
                relationship-led e orientato all'esecuzione cross-border.
              </p>
            </div>
          </div>
        </section>

        <section className="section track-section" id="track-record">
          <div className="container track-editorial">
            <div>
              <p className="eyebrow">Credibilita</p>
              <h2>Track Record</h2>
            </div>
            <dl className="track-metrics">
              {trackRecord.map(([value, label]) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section gc-process" id="process">
          <div className="container process-editorial">
            <div>
              <p className="eyebrow">Approccio</p>
              <h2>Come lavoriamo</h2>
            </div>
            <p>
              Un processo disciplinato dalla revisione iniziale alla preparazione per investitori,
              introduzioni controllate, coordinamento della due diligence e supporto alla transazione.
            </p>
          </div>
          <ol className="container process-timeline">
            {process.map(([number, title, copy]) => (
              <li key={title}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section investors-section" id="why">
          <div className="container why-editorial">
            <div>
              <p className="eyebrow">Proposta di valore</p>
              <h2>Perche Invest Forward</h2>
              <p>
                Una piattaforma selettiva per opportunita dell'economia reale dove contano
                presentazione strutturata, accesso relazionale e giudizio cross-border.
              </p>
            </div>
            <ul>
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section gc-themes" id="sectors">
          <div className="container sector-band">
            <div>
              <p className="eyebrow">Settori</p>
              <h2>Copertura focalizzata sull'economia reale.</h2>
            </div>
            <div className="sector-list-inline">
              {sectors.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Contatti</p>
              <h2>Discuti un progetto o una possibile introduzione di capitale.</h2>
              <p>
                Condividi il tuo contesto come investitore, partner o proprietario di progetto.
                Il team Invest Forward valutera se esistono le condizioni per un confronto mirato.
              </p>
              <a className="email-link" href="mailto:enquiries@investforward.co.uk">enquiries@investforward.co.uk</a>
            </div>
            <MailtoForm className="contact-form" subject="Invest Forward contatto sito italiano">
              <label><span>Nome</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label><span>Messaggio</span><textarea name="message" rows={5} required></textarea></label>
              <button className="btn btn-primary" type="submit">Contatta il team</button>
            </MailtoForm>
          </div>
        </section>
      </main>
      <SiteFooter locale="it" />
    </>
  );
}
