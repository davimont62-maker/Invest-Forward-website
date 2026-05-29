export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <a className="brand" href="/" aria-label="Invest Forward home">
            <span className="brand-mark">IF</span>
            <span className="brand-wordmark">
              <span>Invest</span>
              <span>Forward</span>
            </span>
          </a>
          <p>Strategic project development & capital introduction</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/investors">Investors</a>
          <a href="/opportunities">Opportunities</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
      </div>
      <p className="container disclaimer">
        Invest Forward does not provide regulated financial advice and does not make public offers
        of securities. Information presented is for qualified parties only and is subject to due
        diligence, professional advice, and applicable regulations.
      </p>
    </footer>
  );
}
