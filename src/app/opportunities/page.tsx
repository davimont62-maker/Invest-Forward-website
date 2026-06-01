import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Opportunities | Invest Forward",
  description: "Confidential portfolio overview of selected opportunities for qualified parties.",
};

const opportunities = [
  {
    title: "Gunpowder Project - Vegetable Charcoal",
    sector: "Strategic Materials",
    geography: "Serbia / Europe",
    stage: "Seed launch",
    status: "Active",
    requirement: "EUR 1.0m seed startup capital",
    visual: "materials",
    monogram: "GP",
    summary:
      "Specialty technical-charcoal platform designed to serve industrial, pyrotechnic, and energetic-material supply chains with controlled production, QA, and traceability.",
    focus: ["150-300 t ramp", "Serbian production base", "Controlled technical carbon"],
    href: "/opportunities/gunpowder-project",
  },
  {
    title: "Industrial Manufacturing Platform",
    sector: "Industrial",
    geography: "UK / EU",
    stage: "Expansion",
    status: "Active",
    requirement: "Capital and distribution partners",
    visual: "industrial",
    monogram: "IM",
    summary:
      "Operating industrial platform with scope for cross-border commercial development, strategic capital, and partner-led market expansion.",
    focus: ["Growth capital", "Distribution access", "Operational scaling"],
    href: "/contact",
  },
  {
    title: "Technology Platform Development",
    sector: "Technology / SaaS",
    geography: "Global",
    stage: "Early Growth",
    status: "Under Review",
    requirement: "Strategic capital and commercial partners",
    visual: "technology",
    monogram: "TP",
    summary:
      "Software platform opportunity under structured review, with emphasis on business model positioning, investor materials, and strategic capital introduction.",
    focus: ["SaaS positioning", "Investor materials", "Strategic partnerships"],
    href: "/contact",
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero opportunities-hero">
          <div className="container">
            <p className="eyebrow">Portfolio overview</p>
            <h1>Active investment opportunities</h1>
            <p>
              Selected real-economy opportunities under confidential review. Detailed information is
              provided only to qualified parties following registration and review.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="portfolio-intro">
              <div>
                <p className="eyebrow">Current portfolio</p>
                <h2>Selected investment opportunities</h2>
              </div>
              <p>
                These are not public offers or retail investment listings. Each opportunity is
                introduced through a relationship-led process with professional counterparties.
              </p>
            </div>

            <div className="portfolio-grid">
              {opportunities.map((opportunity) => (
                <article key={opportunity.title} className="portfolio-card opportunity-teaser-card">
                  <div className={`opportunity-visual opportunity-visual-${opportunity.visual}`}>
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
                        <span>Strategic requirement</span>
                      </div>
                      <div>
                        <strong>{opportunity.stage}</strong>
                        <span>Development stage</span>
                      </div>
                    </div>

                    <p className="confidential-note">
                      Information available to qualified parties upon request.
                    </p>
                    <a className="btn btn-secondary btn-card" href={opportunity.href}>
                      Request teaser access
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
              <p className="eyebrow">Controlled access</p>
              <h2>Further information is shared through a qualification process.</h2>
              <p>
                Invest Forward may provide additional summaries, documentation, management
                introductions, or diligence materials after confirming strategic fit, investor
                profile, and confidentiality requirements.
              </p>
            </div>
            <a className="btn btn-primary" href="/contact">Request opportunity access</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
