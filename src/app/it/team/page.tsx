import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Team e Advisor | Invest Forward",
  description:
    "Team di gestione, advisor e country manager di Invest Forward con competenze europee in sviluppo progetti, origination e capital introduction.",
  alternates: { canonical: "/it/team", languages: { en: "/team", it: "/it/team" } },
};

type Profile = {
  initials: string;
  name: string;
  position: string;
  description: string;
  photo?: string;
};

const founders: Profile[] = [
  {
    initials: "SP",
    name: "Samuele Pozzi",
    position: "Founder / Managing Partner",
    photo: "/assets/samuele-pozzi.jpg",
    description:
      "Samuele e uno dei founding partner di Invest Forward ed e coinvolto in tutti gli aspetti dell'attivita, inclusi origination, portfolio management e investor relations.",
  },
  {
    initials: "DM",
    name: "Davide Montini",
    position: "Managing Partner",
    photo: "/assets/davide-montini.jpg",
    description:
      "Davide e uno dei founding partner di Invest Forward, con oltre 30 anni di esperienza combinata operativa, commerciale e di investimento nei mercati europei. Ha lavorato con imprese orientate alla crescita, progetti cross-border e iniziative di sviluppo strategico nei settori industriale, tecnologico e commercio internazionale.",
  },
];

const advisors: Profile[] = [
  {
    initials: "AC",
    name: "Alessandro Capo",
    position: "Advisor - Innovation & Regulatory Strategy",
    photo: "/assets/alessandro-capo.jpg",
    description:
      "Supporta societa tech-driven con insight regolatorio ed execution operativa, collegando innovazione, compliance e deployment di mercato in contesti UE. Fornisce advisory su partnership, governance, modelli di crescita scalabili e data-enabled operations.",
  },
  {
    initials: "W",
    name: "Wasilios Spanos",
    position: "Advisor - Germany & Austria",
    photo: "/assets/wasilios.jpg",
    description:
      "Wasilios ha oltre 20 anni di esperienza nel guidare crescita, espansione di mercato e accelerazione dei ricavi in organizzazioni globali, supportando l'attivita di Invest Forward in Germania e Austria.",
  },
];

export default function ItalianTeamPage() {
  return (
    <>
      <SiteHeader locale="it" />
      <main>
        <section className="page-hero compact-page-hero">
          <div className="container">
            <p className="eyebrow">Team e advisor</p>
            <h1>Management esperto con copertura europea.</h1>
            <p>
              Invest Forward combina giudizio senior, accesso settoriale e supporto locale
              all'esecuzione attraverso relazioni e capacita country-level in Europa.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container team-section-heading">
            <div>
              <p className="eyebrow">Managing team</p>
              <h2>Founder e core management</h2>
            </div>
            <p>
              Il team guida origination, strutturazione, preparazione investor-facing e
              coordinamento transazionale per opportunita selezionate nei mercati europei.
            </p>
          </div>
          <div className="container founder-row">
            {founders.map((member) => (
              <article className="team-profile team-profile-large" key={member.name}>
                <div className="profile-photo">
                  {member.photo ? <img src={member.photo} alt={member.name} /> : <span>{member.initials}</span>}
                </div>
                <div>
                  <h2>{member.name}</h2>
                  <p className="profile-position">{member.position}</p>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section advisor-section">
          <div className="container team-section-heading">
            <div>
              <p className="eyebrow">Advisor e country manager</p>
              <h2>Supporto specialistico nei mercati e settori europei</h2>
            </div>
            <p>
              Advisor e country manager supportano contesto locale, accesso settoriale,
              comprensione regolatoria e sviluppo relazionale in UK, UE e giurisdizioni europee
              selezionate.
            </p>
          </div>
          <div className="container advisor-row">
            {advisors.map((member) => (
              <article className="team-profile team-profile-small" key={member.name}>
                <div className="profile-photo">
                  {member.photo ? <img src={member.photo} alt={member.name} /> : <span>{member.initials}</span>}
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="profile-position">{member.position}</p>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter locale="it" />
    </>
  );
}
