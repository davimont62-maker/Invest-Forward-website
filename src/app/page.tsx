"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (!header || !menuToggle || !nav) {
      return;
    }

    const syncHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    const handleMenuClick = () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    };

    const handleNavClick = (event: Event) => {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    menuToggle.addEventListener("click", handleMenuClick);
    nav.addEventListener("click", handleNavClick);

    return () => {
      window.removeEventListener("scroll", syncHeader);
      menuToggle.removeEventListener("click", handleMenuClick);
      nav.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <>
      <header className="site-header" data-header>
        <a className="brand" href="#home" aria-label="Invest Forward home">
          <span className="brand-mark">IF</span>
          <span className="brand-wordmark">
            <span>Invest</span>
            <span>Forward</span>
          </span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#process">How We Work</a>
          <a href="#services">Services</a>
          <a href="#investors">Investors</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <img className="hero-visual" src="/assets/invest-forward-hero.png" alt="" aria-hidden="true" />
          <div className="hero-overlay"></div>
          <div className="container hero-inner">
            <p className="eyebrow">Strategic ventures & investment opportunities</p>
            <h1>Developing investment-grade opportunities.</h1>
            <p className="hero-copy">
              Invest Forward originates, structures and presents strategic ventures and scalable
              projects for investors, operating partners and growth capital.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="btn btn-primary" href="#opportunities">Explore Opportunities</a>
              <a className="btn btn-secondary" href="#contact">Partner With Us</a>
              <a className="btn btn-ghost" href="#investors">Investor Access</a>
            </div>
          </div>
        </section>

        <section className="value-strip" aria-label="Core platform capabilities">
          <div className="container value-grid">
            <article>
              <span>01</span>
              <h2>Opportunity Origination</h2>
              <p>Selected ideas, ventures and strategic projects sourced through operator insight.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Investor-Ready Structuring</h2>
              <p>Clear propositions, commercial logic and materials prepared for informed review.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Venture & Project Development</h2>
              <p>Execution planning and partner alignment from concept to investable proposition.</p>
            </article>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container split">
            <div>
              <p className="eyebrow">About Invest Forward</p>
              <h2>Operator-led opportunity development.</h2>
            </div>
            <div className="section-copy">
              <p>
                Invest Forward transforms selected business concepts and strategic projects into
                investor-ready opportunities. We combine operational experience, market research,
                financial preparation and execution planning to move ideas from concept to investable
                proposition.
              </p>
              <p>
                The platform works across industrial projects, digital ventures, SaaS startups and
                growth businesses where disciplined preparation and strategic alignment can create a
                clearer path to capital conversations.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="opportunities">
          <div className="container section-heading">
            <p className="eyebrow">Selected opportunities</p>
            <h2>Structured propositions for strategic capital.</h2>
            <p>
              A focused portfolio of opportunities prepared for investors, operating partners and
              sector-aligned capital providers.
            </p>
          </div>
          <div className="container card-grid opportunity-grid">
            <article className="opportunity-card">
              <div className="card-topline">
                <span>Strategic Industrial Project</span>
                <span>Investor presentation ready</span>
              </div>
              <h3>Gunpowder Project - Vegetable Charcoal</h3>
              <p>
                A strategic industrial project focused on vegetable charcoal production, prepared for
                investor review and strategic-capital conversations.
              </p>
              <div className="funding">Seed / strategic capital</div>
              <a className="text-link" href="#contact">Request Teaser</a>
            </article>
            <article className="opportunity-card">
              <div className="card-topline">
                <span>Digital SaaS Venture</span>
                <span>Product development</span>
              </div>
              <h3>LovingPDF</h3>
              <p>
                A digital SaaS venture moving through product development with a structured case for
                startup and growth-capital evaluation.
              </p>
              <div className="funding">Startup / growth capital</div>
              <a className="text-link" href="#contact">Request Teaser</a>
            </article>
            <article className="opportunity-card">
              <div className="card-topline">
                <span>Fintech / Digital Venture</span>
                <span>Concept / MVP</span>
              </div>
              <h3>BitPoint</h3>
              <p>
                A fintech and digital venture concept being prepared through MVP logic, early market
                validation and investor materials.
              </p>
              <div className="funding">Early-stage capital</div>
              <a className="text-link" href="#contact">Request Teaser</a>
            </article>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container section-heading">
            <p className="eyebrow">How we work</p>
            <h2>From opportunity signal to capital-ready proposition.</h2>
          </div>
          <div className="container process-list">
            <article>
              <span>01</span>
              <h3>Identify opportunities</h3>
              <p>Source selected business concepts, projects and venture ideas with strategic fit.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Validate market potential</h3>
              <p>Assess demand, sector timing, defensibility and the commercial case.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Structure the business case</h3>
              <p>Clarify model, execution needs, funding logic and partner requirements.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Prepare investor materials</h3>
              <p>Develop concise, credible materials for investor and partner review.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Introduce strategic partners and capital</h3>
              <p>Connect selected opportunities with relevant capital and operating partners.</p>
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container section-heading">
            <p className="eyebrow">Services</p>
            <h2>Preparation, development and strategic positioning.</h2>
          </div>
          <div className="container card-grid service-grid">
            <article>
              <h3>Investment Opportunity Development</h3>
              <p>Turning selected projects and business concepts into coherent investment propositions.</p>
            </article>
            <article>
              <h3>Venture Building & Startup Structuring</h3>
              <p>Supporting early venture logic, model design, launch planning and founder readiness.</p>
            </article>
            <article>
              <h3>Investor Materials & Capital Preparation</h3>
              <p>Preparing decks, teasers, business cases and capital narratives for qualified review.</p>
            </article>
            <article>
              <h3>Strategic Partnerships & Institutional Liaison</h3>
              <p>Aligning opportunities with relevant operating partners, institutions and capital providers.</p>
            </article>
          </div>
        </section>

        <section className="section investors-section" id="investors">
          <div className="container investor-panel">
            <div>
              <p className="eyebrow">For investors</p>
              <h2>Access selected investment opportunities before they reach the wider market.</h2>
            </div>
            <div>
              <p>
                We work with private investors, family offices, strategic groups and capital partners
                interested in early access to structured opportunities across industrial, digital and
                strategic-growth sectors.
              </p>
              <a className="btn btn-primary" href="#contact">Request Investor Access</a>
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container section-heading">
            <p className="eyebrow">Team platform</p>
            <h2>Built around experience, judgement and sector access.</h2>
          </div>
          <div className="container team-grid">
            <article>
              <span></span>
              <h3>Senior management</h3>
              <p>Operator-led platform leadership.</p>
            </article>
            <article>
              <span></span>
              <h3>Project advisors</h3>
              <p>Project-specific development and preparation support.</p>
            </article>
            <article>
              <span></span>
              <h3>Sector specialists</h3>
              <p>Industrial, digital and strategic-growth expertise.</p>
            </article>
            <article>
              <span></span>
              <h3>Investment preparation partners</h3>
              <p>Materials, financial preparation and capital-readiness support.</p>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Discuss an opportunity.</h2>
              <p>
                Share your investor, partner or project-owner context and the Invest Forward team will
                review the fit for a focused conversation.
              </p>
              <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
            </div>
            <form className="contact-form" action="#" method="post">
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                <span>Investor / Partner / Project Owner</span>
                <select name="profile" required defaultValue="">
                  <option value="">Select profile</option>
                  <option>Investor</option>
                  <option>Partner</option>
                  <option>Project Owner</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={5} required></textarea>
              </label>
              <button className="btn btn-primary" type="submit">Discuss an opportunity</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <a className="brand" href="#home" aria-label="Invest Forward home">
              <span className="brand-mark">IF</span>
              <span className="brand-wordmark">
                <span>Invest</span>
                <span>Forward</span>
              </span>
            </a>
            <p>Strategic Ventures & Investment Opportunities</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#services">Services</a>
            <a href="#investors">Investors</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
        </div>
      </footer>
    </>
  );
}
