import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "About | Invest Forward",
  description: "About Invest Forward, a strategic project development and capital introduction platform.",
};

const sections = [
  ["Mission", "To develop, structure, and present selected real-economy opportunities with the discipline required for credible investor and partner review."],
  ["Approach", "We combine project assessment, strategic positioning, investor materials, and relationship-led capital introduction."],
  ["Cross-border capability", "Invest Forward works across UK and European networks where projects require market positioning, stakeholder access, and execution coordination."],
  ["Management team", "The platform is built around senior judgement, project advisors, sector specialists, and investment-preparation partners."],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">About Invest Forward</p>
            <h1>Project development, strategic positioning, and capital introduction.</h1>
            <p>
              Invest Forward supports selected opportunities, investors, strategic partners, and
              project owners through confidential, relationship-led engagement.
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
      <SiteFooter />
    </>
  );
}
