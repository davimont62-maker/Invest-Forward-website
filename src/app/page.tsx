import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const trackRecord = [
  ["25+", "Years combined experience"],
  ["UK & EU", "UK & European network"],
  ["3 Sectors", "Industrial, Energy & Technology sectors"],
  ["Public Interface", "Government and regulatory liaison capability"],
];

const process = [
  ["01", "Opportunity Assessment", "Commercial, technical, and strategic review before presentation."],
  ["02", "Feasibility & Structuring", "Project logic shaped into a clear, financeable proposition."],
  ["03", "Investment Memorandum", "Investor-facing summaries, decks, and supporting documentation."],
  ["04", "Investor Matching", "Relevant investors, family offices, strategic partners, and institutional contacts."],
  ["05", "Due Diligence Support", "Information flow, documentation, and management responses during review."],
  ["06", "Transaction Facilitation", "Communication support through introduction and negotiation phases."],
];

const values = [
  "Access to proprietary opportunities",
  "Experienced management team",
  "Government and institutional relationships",
  "Cross-border execution capability",
  "Focus on real-economy projects",
];

const sectors = [
  "Industrial",
  "Energy",
  "Technology",
  "Infrastructure",
  "Strategic Manufacturing",
  "Defence / Security",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <section className="gc-hero compact-hero">
          <img className="gc-hero-image" src="/assets/invest-forward-hero.png" alt="" aria-hidden="true" />
          <div className="gc-hero-shade"></div>
          <div className="container gc-hero-grid">
            <div className="gc-hero-copy">
              <p className="eyebrow">Boutique strategic advisory platform</p>
              <h1>Strategic Project Development & Capital Introduction</h1>
              <p>
                Invest Forward develops, structures, and presents selected real-economy investment
                opportunities across industrial, energy, technology, infrastructure, and strategic sectors.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/about">About Invest Forward</a>
                <a className="btn btn-secondary" href="/contact">Contact the Team</a>
              </div>
            </div>
            <aside className="gc-hero-panel" aria-label="Positioning summary">
              <span>Private and selective</span>
              <h2>Relationship-driven project development and capital introduction.</h2>
              <p>Detailed information is provided to qualified parties subject to review.</p>
            </aside>
          </div>
        </section>

        <section className="section gc-intro" id="about">
          <div className="container gc-intro-grid">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2>A project development and capital introduction platform.</h2>
            </div>
            <div className="gc-intro-copy">
              <p>
                Invest Forward supports selected opportunities, investors, strategic partners, and
                project owners where disciplined structuring, credible presentation, and trusted
                introductions are essential.
              </p>
              <p>
                The firm works across real-economy sectors with a focus on relationship-led access,
                confidential review, and cross-border execution.
              </p>
            </div>
          </div>
        </section>

        <section className="section track-section" id="track-record">
          <div className="container track-editorial">
            <div>
              <p className="eyebrow">Credibility</p>
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
              <p className="eyebrow">Approach</p>
              <h2>How We Work</h2>
            </div>
            <p>
              A disciplined process from initial review through investor preparation, controlled
              introductions, diligence coordination, and transaction communication.
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
              <p className="eyebrow">Value proposition</p>
              <h2>Why Invest Forward</h2>
              <p>
                A selective platform for real-economy opportunities where structured presentation,
                relationship access, and cross-border judgement matter.
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
              <p className="eyebrow">Sectors</p>
              <h2>Focused real-economy coverage.</h2>
            </div>
            <div className="sector-list-inline">
              {sectors.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section gc-team" id="team">
          <div className="container gc-section-split">
            <div>
              <p className="eyebrow">Team</p>
              <h2>Experienced judgement, sector access, and disciplined preparation.</h2>
            </div>
            <p>
              Invest Forward brings together senior management, project advisors, sector specialists,
              and investment-preparation partners around selected opportunities.
            </p>
            <a className="text-link" href="/team">View team and advisors</a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Discuss a project or capital introduction.</h2>
              <p>
                Share your investor, partner, or project-owner context and the Invest Forward team
                will review whether there is a suitable basis for a focused conversation.
              </p>
              <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
            </div>
            <form className="contact-form" action="#" method="post">
              <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label><span>Message</span><textarea name="message" rows={5} required></textarea></label>
              <button className="btn btn-primary" type="submit">Contact the Team</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
