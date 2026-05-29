"use client";

import { useEffect, useMemo, useState } from "react";

const opportunityFilters = [
  "All",
  "Industrial",
  "Energy",
  "Technology",
  "Defense",
  "Infrastructure",
  "Seed",
  "Growth",
  "Expansion",
  "Strategic Partnership",
];

const featuredOpportunities = [
  {
    title: "Defense Manufacturing Expansion",
    sector: "Defense",
    geography: "Europe",
    stage: "Development",
    seeking: "Strategic Investors",
    status: "Active",
    tags: ["Defense", "Expansion", "Strategic Partnership"],
  },
  {
    title: "Industrial Manufacturing Platform",
    sector: "Industrial",
    geography: "UK / EU",
    stage: "Expansion",
    seeking: "Capital & Distribution Partners",
    status: "Active",
    tags: ["Industrial", "Expansion", "Strategic Partnership"],
  },
  {
    title: "LovingPDF",
    sector: "Technology / SaaS",
    geography: "Global",
    stage: "Early Growth",
    seeking: "Strategic Capital",
    status: "Under Review",
    tags: ["Technology", "Growth"],
  },
  {
    title: "Energy Infrastructure Initiative",
    sector: "Energy",
    geography: "Europe",
    stage: "Feasibility",
    seeking: "Institutional Partners",
    status: "Active",
    tags: ["Energy", "Infrastructure", "Seed", "Strategic Partnership"],
  },
];

const pipelineRows = [
  { sector: "Defense", stage: "Development", geography: "Europe", status: "Active" },
  { sector: "Industrial", stage: "Expansion", geography: "UK / EU", status: "Active" },
  { sector: "SaaS", stage: "Early Growth", geography: "Global", status: "Under Review" },
  { sector: "Energy", stage: "Feasibility", geography: "Europe", status: "Active" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleOpportunities = useMemo(() => {
    if (activeFilter === "All") {
      return featuredOpportunities;
    }

    return featuredOpportunities.filter((opportunity) => opportunity.tags.includes(activeFilter));
  }, [activeFilter]);

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
          <a href="#track-record">Track Record</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#process">How We Work</a>
          <a href="#network">Investor Network</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <img className="hero-visual" src="/assets/invest-forward-hero.png" alt="" aria-hidden="true" />
          <div className="hero-overlay"></div>
          <div className="container hero-inner">
            <p className="eyebrow">Investment origination & project development</p>
            <h1>Strategic Project Development & Capital Introduction</h1>
            <p className="hero-copy">
              Invest Forward develops, structures, and presents selected investment opportunities
              across industrial, energy, technology, and infrastructure sectors for qualified
              investors, strategic partners, and family offices.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="btn btn-primary" href="#opportunities">View Opportunities</a>
              <a className="btn btn-secondary" href="#network">Request Access</a>
            </div>
            <p className="hero-note">Selected opportunities available upon request. Detailed information is provided to qualified parties subject to review.</p>
          </div>
        </section>

        <section className="value-strip" aria-label="Core platform capabilities">
          <div className="container value-grid">
            <article>
              <span>01</span>
              <h2>Origination</h2>
              <p>Selected real-economy projects sourced through operator insight and sector access.</p>
            </article>
            <article>
              <span>02</span>
              <h2>Structuring</h2>
              <p>Commercial, technical, and capital logic shaped into financeable propositions.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Capital Introduction</h2>
              <p>Prepared opportunities introduced to qualified investors and strategic partners.</p>
            </article>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container split">
            <div>
              <p className="eyebrow">About Invest Forward</p>
              <h2>A boutique platform for selected investment opportunities.</h2>
            </div>
            <div className="section-copy">
              <p>
                Invest Forward develops, structures, and presents investment-grade opportunities
                across real-economy sectors. The platform is built for projects where experienced
                management, disciplined preparation, and qualified capital access can create a
                clearer path from opportunity signal to investor review.
              </p>
              <p>
                We work with project owners, operating partners, qualified investors, family offices,
                strategic groups, and institutional contacts. Our role is to improve project
                presentation, coordinate capital-introduction activity, and support the information
                flow required for credible due diligence.
              </p>
            </div>
          </div>
        </section>

        <section className="section track-section" id="track-record">
          <div className="container section-heading">
            <p className="eyebrow">Credibility</p>
            <h2>Track Record</h2>
            <p>
              Institutional relationships, sector knowledge, and practical project-development
              experience across UK and European markets.
            </p>
          </div>
          <div className="container credibility-grid">
            <article>
              <strong>25+</strong>
              <h3>Years combined experience</h3>
              <p>Management and advisory experience across project development, partnerships, and capital preparation.</p>
            </article>
            <article>
              <strong>UK & EU</strong>
              <h3>European network</h3>
              <p>Access to selected investor, partner, professional, and institutional contacts across key markets.</p>
            </article>
            <article>
              <strong>3 Sectors</strong>
              <h3>Industrial, Energy, and Technology</h3>
              <p>Focus on real-economy sectors where technical credibility and execution planning matter.</p>
            </article>
            <article>
              <strong>Public Interface</strong>
              <h3>Government and regulatory liaison</h3>
              <p>Capability to support structured communication with relevant public bodies and regulatory stakeholders.</p>
            </article>
          </div>
        </section>

        <section className="section audience-section" id="access">
          <div className="container audience-grid">
            <article className="audience-card">
              <div className="audience-icon" aria-hidden="true"></div>
              <p className="eyebrow">For Investors</p>
              <h2>Access selected real-economy opportunities.</h2>
              <p>
                Invest Forward provides access to selected investment opportunities across
                industrial, energy, infrastructure, technology, and strategic manufacturing sectors.
              </p>
              <ul>
                <li>Curated investment opportunities</li>
                <li>Cross-border projects</li>
                <li>Strategic and industrial sectors</li>
                <li>Qualified introductions</li>
                <li>Long-term development focus</li>
              </ul>
              <a className="btn btn-primary" href="#network">Request Access</a>
            </article>
            <article className="audience-card">
              <div className="audience-icon" aria-hidden="true"></div>
              <p className="eyebrow">For Project Owners</p>
              <h2>Structure and present investment-grade projects.</h2>
              <p>
                We support project developers, industrial groups, and founders in preparing
                opportunities for qualified investor and strategic partner review.
              </p>
              <ul>
                <li>Opportunity structuring</li>
                <li>Investment materials</li>
                <li>Capital introduction</li>
                <li>Strategic positioning</li>
                <li>Investor presentation support</li>
              </ul>
              <a className="btn btn-secondary" href="#contact">Submit Opportunity</a>
            </article>
          </div>
        </section>

        <section className="section" id="opportunities">
          <div className="container section-heading">
            <p className="eyebrow">Controlled access</p>
            <h2>Featured Opportunities</h2>
            <p>
              Institutional-style opportunity teasers from a selective pipeline. Additional
              documentation is available to qualified parties subject to review and, where relevant,
              confidentiality arrangements.
            </p>
          </div>
          <div className="container filter-panel" aria-label="Opportunity filters">
            {opportunityFilters.map((filter) => (
              <button
                className={`filter-chip${activeFilter === filter ? " is-active" : ""}`}
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="container card-grid opportunity-grid featured-grid">
            {visibleOpportunities.map((opportunity) => (
              <article className="opportunity-card teaser-card" key={opportunity.title}>
                <div className="card-topline">
                  <span>{opportunity.sector}</span>
                  <span>{opportunity.status}</span>
                </div>
                <h3>{opportunity.title}</h3>
                <dl className="teaser-details">
                  <div>
                    <dt>Sector</dt>
                    <dd>{opportunity.sector}</dd>
                  </div>
                  <div>
                    <dt>Geography</dt>
                    <dd>{opportunity.geography}</dd>
                  </div>
                  <div>
                    <dt>Development Stage</dt>
                    <dd>{opportunity.stage}</dd>
                  </div>
                  <div>
                    <dt>Strategic Requirement</dt>
                    <dd>{opportunity.seeking}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{opportunity.status}</dd>
                  </div>
                </dl>
                <p className="confidential-note">Detailed information provided to qualified parties.</p>
                <a className="text-link" href="#network">Request Access</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section pipeline-section" id="pipeline">
          <div className="container section-heading">
            <p className="eyebrow">Deal flow</p>
            <h2>Current Opportunity Pipeline</h2>
            <p>
              A concise view of active and review-stage projects across the Invest Forward
              origination pipeline.
            </p>
          </div>
          <div className="container pipeline-table-wrap">
            <table className="pipeline-table">
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Stage</th>
                  <th>Geography</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pipelineRows.map((row) => (
                  <tr key={`${row.sector}-${row.stage}`}>
                    <td>{row.sector}</td>
                    <td>{row.stage}</td>
                    <td>{row.geography}</td>
                    <td><span className="status-pill">{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container section-heading">
            <p className="eyebrow">Process</p>
            <h2>How We Work</h2>
            <p>
              A disciplined process for moving selected projects from initial review to structured
              capital-introduction conversations.
            </p>
          </div>
          <div className="container process-list">
            <article>
              <span>01</span>
              <h3>Opportunity Assessment</h3>
              <p>We review the commercial, technical, and strategic merits of each opportunity before presentation.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Feasibility & Structuring</h3>
              <p>We help shape the project into a clear, financeable proposition.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Investment Memorandum</h3>
              <p>We prepare investor-facing materials, including project summaries, decks, and supporting documentation.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Investor Matching</h3>
              <p>We identify suitable investors, family offices, strategic partners, and institutional contacts.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Due Diligence Support</h3>
              <p>We assist with information flow, documentation, and management responses during the review process.</p>
            </article>
            <article>
              <span>06</span>
              <h3>Transaction Facilitation</h3>
              <p>We support communication and coordination through the introduction and negotiation phase.</p>
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container section-heading">
            <p className="eyebrow">Platform capabilities</p>
            <h2>Preparation, development, and strategic positioning.</h2>
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

        <section className="section selected-projects-section" id="selected-projects">
          <div className="container section-heading">
            <p className="eyebrow">Project involvement</p>
            <h2>Selected Projects</h2>
            <p>
              Examples of confidential project-development support, strategic positioning, and
              capital-introduction preparation.
            </p>
          </div>
          <div className="container selected-projects-grid">
            <article>
              <span>01</span>
              <h3>Industrial Manufacturing Expansion</h3>
              <p>Cross-border development support, European market positioning, and investor introduction.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Energy Infrastructure Initiative</h3>
              <p>Project structuring and institutional stakeholder coordination.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Technology Platform Development</h3>
              <p>Business model positioning and strategic capital introduction.</p>
            </article>
          </div>
        </section>

        <section className="section investors-section" id="why">
          <div className="container investor-panel why-panel">
            <div>
              <p className="eyebrow">Value proposition</p>
              <h2>Why Invest Forward</h2>
            </div>
            <div>
              <p>
                Invest Forward focuses on tangible, real-economy opportunities where experienced
                management, structured presentation, and qualified investor access can create
                meaningful value.
              </p>
              <a className="btn btn-primary" href="#contact">Contact the Team</a>
            </div>
          </div>
          <div className="container why-grid">
            <article>
              <span></span>
              <h3>Access to proprietary opportunities</h3>
              <p>Selected projects are developed before wider market presentation.</p>
            </article>
            <article>
              <span></span>
              <h3>Experienced management team</h3>
              <p>Operator-led judgement applied to project review, preparation, and stakeholder alignment.</p>
            </article>
            <article>
              <span></span>
              <h3>Government and institutional relationships</h3>
              <p>Capability to support credible dialogue with relevant public and institutional contacts.</p>
            </article>
            <article>
              <span></span>
              <h3>Cross-border execution capability</h3>
              <p>UK and European network coverage for projects requiring international coordination.</p>
            </article>
            <article>
              <span></span>
              <h3>Focus on real-economy projects</h3>
              <p>Industrial, energy, technology, and infrastructure opportunities with tangible operating logic.</p>
            </article>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container section-heading">
              <p className="eyebrow">Team platform</p>
            <h2>Built around experience, judgement, and sector access.</h2>
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
              <p>Project-specific development, diligence, and preparation support.</p>
            </article>
            <article>
              <span></span>
              <h3>Sector specialists</h3>
              <p>Industrial, energy, technology, and infrastructure expertise.</p>
            </article>
            <article>
              <span></span>
              <h3>Investment preparation partners</h3>
              <p>Materials, financial preparation and capital-readiness support.</p>
            </article>
          </div>
        </section>

        <section className="section network-section" id="network">
          <div className="container investor-panel network-panel">
            <div>
              <p className="eyebrow">Private access</p>
              <h2>Join Our Investor Network</h2>
              <p>
                Invest Forward maintains relationships with qualified investors, strategic partners,
                family offices, and institutional contacts interested in selected opportunities
                across real-economy sectors.
              </p>
              <p className="confidential-note">
                Additional documentation is shared selectively after qualification and, where
                appropriate, NDA review.
              </p>
            </div>
            <form className="network-form" action="#" method="post">
              <label>
                <span>Name</span>
                <input type="text" name="investor-name" autoComplete="name" required />
              </label>
              <label>
                <span>Organisation</span>
                <input type="text" name="organisation" autoComplete="organization" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="investor-email" autoComplete="email" required />
              </label>
              <label>
                <span>Investment Focus</span>
                <input type="text" name="investment-focus" placeholder="Industrial, energy, technology..." />
              </label>
              <label>
                <span>Geography</span>
                <input type="text" name="geography" placeholder="UK, Europe, global..." />
              </label>
              <label>
                <span>Typical Investment Range</span>
                <input type="text" name="investment-range" placeholder="Confidential / indicative" />
              </label>
              <button className="btn btn-primary" type="submit">Register Interest</button>
            </form>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Discuss a project or capital introduction.</h2>
              <p>
                Share your investor, partner, or project-owner context and the Invest Forward team
                will review whether there is a suitable basis for a focused conversation.
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
            <a href="#track-record">Track Record</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#pipeline">Pipeline</a>
            <a href="#network">Investor Network</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
        </div>
        <p className="container disclaimer">
          Invest Forward does not provide regulated financial advice and does not make public offers
          of securities. Information presented is for qualified parties only and is subject to due
          diligence, professional advice, and applicable regulations.
        </p>
      </footer>
    </>
  );
}
