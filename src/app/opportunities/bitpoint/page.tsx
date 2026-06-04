import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MailtoForm from "@/components/MailtoForm";

export const metadata = {
  title: "BitPoint | Invest Forward",
  description:
    "Confidential overview of BitPoint, a loyalty points technology platform opportunity for qualified parties.",
  alternates: {
    canonical: "/opportunities/bitpoint",
    languages: {
      en: "/opportunities/bitpoint",
      it: "/it/opportunities/bitpoint",
    },
  },
  openGraph: {
    title: "BitPoint - Loyalty Points Platform | Invest Forward",
    description:
      "Technology opportunity focused on converting unused loyalty points into a structured rewards and redemption platform.",
    url: "https://www.investforward.co.uk/opportunities/bitpoint",
    images: [{ url: "/assets/opportunity-bitpoint-banner.png", width: 1200, height: 630 }],
  },
};

const overview = [
  ["Sector", "Technology / loyalty infrastructure"],
  ["Geography", "Europe / global"],
  ["Stage", "Launch preparation"],
  ["Indicative requirement", "EUR 2.2m operational expansion capital"],
  ["Use of proceeds", "Development, team, OPEX, marketing, and launch activity"],
  ["Access status", "Detailed teaser available following registration review"],
];

const thesis = [
  "Consumer platform designed to help users unlock value from unused loyalty points.",
  "Centralized rewards and redemption experience with potential partner-brand revenue streams.",
  "Expansion plan focused on technology development, partner onboarding, marketing, and operating runway.",
];

export default function BitPointPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Opportunity registration</p>
            <h1>BitPoint - Loyalty Points Platform</h1>
            <p>
              A confidential consumer-technology opportunity focused on converting unused loyalty
              points into a more accessible rewards and redemption experience. Broader teaser
              materials are available only to qualified parties following registration review.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container opportunity-detail">
            <div>
              <p className="eyebrow">Public overview</p>
              <h2>Turning unused loyalty points into a structured rewards platform.</h2>
              <figure className="opportunity-overview-media">
                <img src="/assets/opportunity-bitpoint-banner.png" alt="" />
              </figure>
              <p>
                BitPoint is positioned as a consumer-facing platform that helps users centralize
                loyalty programmes, convert unused points into platform value, and access a broader
                rewards catalogue. The opportunity is linked to the global scale of unused and
                expiring loyalty points across fragmented programmes.
              </p>
              <p>
                This summary is not an offer of securities. Further materials may include the
                investor presentation, management case, business model, use of proceeds, market
                positioning, and diligence notes after qualification.
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

            <MailtoForm
              className="contact-form"
              subject="BitPoint teaser access request"
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
                  <option>Technology partner</option>
                  <option>Professional adviser</option>
                </select>
              </label>
              <label>
                <span>Investment focus</span>
                <input name="focus" placeholder="Technology, loyalty, consumer platforms..." />
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
            </MailtoForm>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
