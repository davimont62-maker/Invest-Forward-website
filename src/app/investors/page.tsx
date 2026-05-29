import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Investors | Invest Forward",
  description: "Information for qualified investors, family offices, strategic investors, and institutional contacts.",
};

const investorTypes = [
  "Qualified investors",
  "Family offices",
  "Strategic investors",
  "Institutional contacts",
];

export default function InvestorsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Investors</p>
            <h1>Private access for qualified capital and strategic partners.</h1>
            <p>
              Invest Forward maintains relationships with investors and institutions interested in
              selected real-economy opportunities across UK, European, and international contexts.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container gc-pathway-grid">
            {investorTypes.map((type) => (
              <article key={type}>
                <p className="eyebrow">Investor profile</p>
                <h2>{type}</h2>
                <p>Access is relationship-led and subject to qualification, suitability, and confidentiality review.</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section gc-network">
          <div className="container network-panel">
            <div>
              <p className="eyebrow">Register interest</p>
              <h2>Request access to selected opportunities.</h2>
              <p>
                Information is provided to qualified parties only. Additional documentation may
                require review, professional advice, and NDA.
              </p>
            </div>
            <form className="network-form" action="#" method="post">
              <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Organisation</span><input type="text" name="organisation" autoComplete="organization" /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label><span>Investment Focus</span><input type="text" name="focus" /></label>
              <label><span>Geography</span><input type="text" name="geography" /></label>
              <label><span>Typical Investment Range</span><input type="text" name="range" /></label>
              <button className="btn btn-primary" type="submit">Register Interest</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
