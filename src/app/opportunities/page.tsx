import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Opportunities | Invest Forward",
  description: "Confidential teaser-style overview of selected opportunities for qualified parties.",
};

const opportunities = [
  ["Defense", "Europe", "Development", "Active"],
  ["Industrial", "UK / EU", "Expansion", "Active"],
  ["Technology / SaaS", "Global", "Early Growth", "Under Review"],
  ["Energy", "Europe", "Feasibility", "Active"],
];

export default function OpportunitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Selected opportunities</p>
            <h1>Confidential project teasers for qualified parties.</h1>
            <p>
              This page provides a discreet, non-public overview only. Information is available to
              qualified parties upon request and subject to due diligence and applicable regulation.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container confidential-grid">
            {opportunities.map(([sector, geography, stage, status]) => (
              <article key={`${sector}-${stage}`}>
                <div className="card-topline">
                  <span>{sector}</span>
                  <span>{status}</span>
                </div>
                <dl className="teaser-details">
                  <div><dt>Sector</dt><dd>{sector}</dd></div>
                  <div><dt>Geography</dt><dd>{geography}</dd></div>
                  <div><dt>Stage</dt><dd>{stage}</dd></div>
                  <div><dt>Status</dt><dd>{status}</dd></div>
                </dl>
                <p className="confidential-note">Information available to qualified parties upon request.</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
