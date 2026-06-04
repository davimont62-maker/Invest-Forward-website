import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Chi siamo | Invest Forward",
  description:
    "Invest Forward e una piattaforma di sviluppo strategico di progetti e introduzione di capitale per opportunita selezionate dell'economia reale.",
  alternates: { canonical: "/it/about", languages: { en: "/about", it: "/it/about" } },
};

const sections = [
  ["Missione", "Sviluppare, strutturare e presentare opportunita selezionate dell'economia reale con la disciplina richiesta da investitori e partner qualificati."],
  ["Approccio", "Combiniamo valutazione del progetto, posizionamento strategico, materiali per investitori e introduzione di capitale basata su relazioni qualificate."],
  ["Capacita cross-border", "Invest Forward opera attraverso network nel Regno Unito e in Europa dove i progetti richiedono posizionamento, accesso agli stakeholder e coordinamento esecutivo."],
  ["Management team", "La piattaforma integra giudizio senior, advisor di progetto, specialisti di settore e partner per la preparazione investment-grade."],
];

export default function ItalianAboutPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Chi siamo</p>
            <h1>Sviluppo progetti, posizionamento strategico e introduzione di capitale.</h1>
            <p>
              Invest Forward supporta opportunita selezionate, investitori, partner strategici
              e proprietari di progetto attraverso un engagement riservato e relationship-led.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container editorial-grid">
            {sections.map(([title, copy]) => (
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
