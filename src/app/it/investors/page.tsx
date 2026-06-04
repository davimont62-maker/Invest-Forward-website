import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Investitori | Invest Forward",
  description:
    "Accesso privato per investitori qualificati, family office, partner strategici e contatti istituzionali interessati a opportunita selezionate.",
  alternates: { canonical: "/it/investors", languages: { en: "/investors", it: "/it/investors" } },
};

const investorTypes = ["Investitori qualificati", "Family office", "Investitori strategici", "Contatti istituzionali"];

export default function ItalianInvestorsPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Investitori</p>
            <h1>Accesso privato per capitale qualificato e partner strategici.</h1>
            <p>
              Invest Forward mantiene relazioni con investitori e istituzioni interessati a
              opportunita selezionate dell'economia reale in contesti UK, europei e internazionali.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container gc-pathway-grid">
            {investorTypes.map((type) => (
              <article key={type}>
                <p className="eyebrow">Profilo investitore</p>
                <h2>{type}</h2>
                <p>L'accesso e relationship-led e soggetto a qualificazione, adeguatezza e revisione di riservatezza.</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section gc-network">
          <div className="container network-panel">
            <div>
              <p className="eyebrow">Registrazione interesse</p>
              <h2>Richiedi accesso a opportunita selezionate.</h2>
              <p>
                Le informazioni sono fornite esclusivamente a soggetti qualificati. Documentazione
                aggiuntiva puo richiedere revisione, consulenza professionale e NDA.
              </p>
            </div>
            <MailtoForm className="network-form" subject="Invest Forward registrazione investitore - italiano">
              <label><span>Nome</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Organizzazione</span><input type="text" name="organisation" autoComplete="organization" /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label><span>Focus di investimento</span><input type="text" name="focus" /></label>
              <label><span>Geografia</span><input type="text" name="geography" /></label>
              <label><span>Range indicativo</span><input type="text" name="range" /></label>
              <button className="btn btn-primary" type="submit">Registra interesse</button>
            </MailtoForm>
          </div>
        </section>
      </main>
      <SiteFooter locale="it" />
    </>
  );
}
