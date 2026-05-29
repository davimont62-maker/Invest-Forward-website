import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Services | Invest Forward",
  description: "Project development, capital introduction, investment materials, and strategic advisory services.",
};

const services = [
  ["Project Development", "Assessment, feasibility logic, project preparation, and development coordination for selected opportunities."],
  ["Capital Introduction", "Relationship-led introductions to qualified investors, family offices, strategic partners, and institutional contacts."],
  ["Investment Materials", "Preparation of teasers, decks, memoranda, project summaries, and supporting documentation."],
  ["Strategic Advisory", "Positioning support for project owners, industrial groups, founders, and operating partners."],
  ["Government & Regulatory Liaison", "Support for structured communication with public bodies, institutions, and regulatory stakeholders."],
  ["Transaction Support", "Coordination of information flow, due diligence responses, and communication through the introduction phase."],
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1>Structured support for investment-grade project presentation.</h1>
            <p>
              Invest Forward works selectively where project preparation, capital access, and
              stakeholder coordination require a professional advisory approach.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container editorial-grid">
            {services.map(([title, copy]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
