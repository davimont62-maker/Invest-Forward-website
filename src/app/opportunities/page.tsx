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
                <h2>Mandates presented selectively</h2>
              </div>
              <p>
                These are not public offers or retail investment listings. Each opportunity is
                introduced through a relationship-led process with professional counterparties.
              </p>
            </div>

            <div className="portfolio-grid">
              {opportunities.map((opportunity) => (
                <article key={opportunity.title} className="portfolio-card">
                  <div className="card-topline">
                    <span>{opportunity.sector}</span>
                    <span>{opportunity.status}</span>
                  </div>
                  <h2>{opportunity.title}</h2>
                  <p>{opportunity.summary}</p>
                  <dl className="teaser-details">
                    <div><dt>Geography</dt><dd>{opportunity.geography}</dd></div>
                    <div><dt>Stage</dt><dd>{opportunity.stage}</dd></div>
                    <div><dt>Strategic requirement</dt><dd>{opportunity.requirement}</dd></div>
                  </dl>
                  <div className="focus-list">
                    {opportunity.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p className="confidential-note">
                    Information available to qualified parties upon request.
                  </p>
                  <a className="text-link" href={opportunity.href}>
                    Request teaser access
                  </a>
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
