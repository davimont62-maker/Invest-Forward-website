import type { Metadata } from "next";
import MailtoForm from "@/components/MailtoForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contatti | Invest Forward",
  description:
    "Contatta Invest Forward per discutere un progetto, un contesto investitore o una possibile introduzione di capitale.",
  alternates: { canonical: "/it/contact", languages: { en: "/contact", it: "/it/contact" } },
};

export default function ItalianContactPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contatti</p>
            <h1>Discuti un progetto o una possibile introduzione di capitale.</h1>
            <p>
              Condividi il tuo contesto come investitore, partner o proprietario di progetto.
              Il team valutera se esistono le condizioni per una conversazione mirata.
            </p>
          </div>
        </section>
        <section className="section contact-section">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Contatto diretto</p>
              <h2>Richieste riservate e relationship-led.</h2>
              <p>Per discussioni confidenziali su progetti o investitori, contatta direttamente il team.</p>
              <a className="email-link" href="mailto:enquiries@investforward.co.uk">enquiries@investforward.co.uk</a>
            </div>
            <MailtoForm className="contact-form" subject="Invest Forward richiesta contatto - italiano">
              <label><span>Nome</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label>
                <span>Profilo</span>
                <select name="profile" required defaultValue="">
                  <option value="">Seleziona profilo</option>
                  <option>Investitore</option>
                  <option>Partner strategico</option>
                  <option>Proprietario di progetto</option>
                  <option>Contatto istituzionale</option>
                </select>
              </label>
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
