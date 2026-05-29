import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Gunpowder Project | Invest Forward",
  description:
    "Registration page for qualified parties requesting access to the Gunpowder Project teaser.",
};

const overview = [
  ["Sector", "Strategic materials / technical carbon"],
  ["Geography", "Serbia / Europe"],
  ["Stage", "Seed launch and execution readiness"],
  ["Indicative requirement", "EUR 1.0m seed startup capital"],
  ["Target ramp", "150-300 tonnes finished charcoal"],
  ["Access status", "Detailed teaser available following registration review"],
];

const thesis = [
  "Controlled technical charcoal for industrial, pyrotechnic, and energetic-material supply chains.",
  "Serbian production base with feedstock, fabrication, and regional industrial proximity advantages.",
  "Development plan focused on permitting, safety controls, QA, product qualification, and first commercial ramp.",
];

export default function GunpowderProjectPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Opportunity registration</p>
            <h1>Gunpowder Project - Vegetable Charcoal</h1>
            <p>
              A confidential strategic-materials opportunity focused on controlled technical
              charcoal production for selected industrial and energetic-material supply chains.
              Broader teaser materials are available only to qualified parties following
              registration review.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container opportunity-detail">
            <div>
              <p className="eyebrow">Public overview</p>
              <h2>Specialty technical carbon with European industrial relevance.</h2>
              <p>
                The project is being developed as a Serbian technical-charcoal platform using
                controlled retort processing, selected low-resin wood inputs, batch traceability,
                and quality-control discipline. The broader investment thesis is linked to
                Europe's renewed focus on upstream strategic materials and resilient regional
                supply chains.
              </p>
              <p>
                This summary is not an offer of securities. Further materials may include the
                investor presentation, preliminary management case, use of proceeds, operating
                model, and diligence notes after qualification.
              </p>
            </div>

            <aside className="opportunity-snapshot">
              <p className="eyebrow">Snapshot</p>
              <dl className="teaser-details">
                {overview.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="section opportunity-access-section">
          <div className="container teaser-registration">
            <div>
              <p className="eyebrow">Teaser access</p>
              <h2>Register interest to receive the broader opportunity presentation.</h2>
              <p>
                Access is controlled so that detailed materials are shared with suitable investors,
                strategic partners, and professional advisers only. Registration does not guarantee
                access; Invest Forward may request additional information or confidentiality
                arrangements before sharing documents.
              </p>
              <ul className="thesis-list">
                {thesis.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <form
              className="contact-form"
              action="mailto:enquiries@investforward.com?subject=Gunpowder%20Project%20teaser%20access%20request"
              method="post"
              encType="text/plain"
            >
              <label>
                <span>Name</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Organisation</span>
                <input name="organisation" autoComplete="organization" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                <span>Investor / partner type</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Family office</option>
                  <option>Strategic investor</option>
                  <option>Institutional investor</option>
                  <option>Industrial partner</option>
                  <option>Professional adviser</option>
                </select>
              </label>
              <label>
                <span>Investment focus</span>
                <input name="focus" placeholder="Industrial, defence supply chain, materials..." />
              </label>
              <label>
                <span>Typical investment range</span>
                <input name="range" placeholder="Example: EUR 250k - EUR 2m" />
              </label>
              <label className="form-wide">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Please include your interest in the project and any relevant qualification context."
                />
              </label>
              <button className="btn btn-primary" type="submit">Request teaser access</button>
              <p className="form-note">
                Detailed information is provided subject to review, due diligence, professional
                advice, and applicable regulations.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
