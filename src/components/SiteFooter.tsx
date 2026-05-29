import BrandLogo from "@/components/BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="Invest Forward home">
            <BrandLogo />
          </a>
          <p>
            Boutique strategic project development and capital introduction across selected
            real-economy sectors.
          </p>
          <address>
            Suite 2a, 95 Wilton Road<br />
            London, England, SW1V 1BZ
          </address>
        </div>

        <div className="footer-column">
          <h2>Platform</h2>
          <nav aria-label="Footer navigation">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/investors">Investors</a>
            <a href="/opportunities">Opportunities</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        <div className="footer-column">
          <h2>Focus</h2>
          <p>Industrial, energy, technology, infrastructure, strategic manufacturing, and defence / security.</p>
        </div>

        <div className="footer-column footer-contact">
          <h2>Access</h2>
          <p>Detailed information is provided to qualified parties following review.</p>
          <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
        </div>
      </div>
      <div className="container footer-disclaimer">
        <p>
          Invest Forward does not provide regulated financial advice and does not make public offers
          of securities. Information presented is for qualified parties only and is subject to due
          diligence, professional advice, and applicable regulations.
        </p>
      </div>
    </footer>
  );
}
