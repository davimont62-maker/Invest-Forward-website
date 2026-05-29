"use client";

import { useEffect, useMemo, useState } from "react";

const filters = [
  "All",
  "Industrial",
  "Energy",
  "Technology",
  "Defense",
  "Infrastructure",
  "Growth",
  "Expansion",
];

const opportunities = [
  {
    title: "Defense Manufacturing Expansion",
    sector: "Defense",
    geography: "Europe",
    stage: "Development",
    requirement: "Strategic Investors",
    status: "Active",
    tags: ["Defense", "Expansion"],
  },
  {
    title: "Industrial Manufacturing Platform",
    sector: "Industrial",
    geography: "UK / EU",
    stage: "Expansion",
    requirement: "Capital & Distribution Partners",
    status: "Active",
    tags: ["Industrial", "Expansion"],
  },
  {
    title: "LovingPDF",
    sector: "Technology / SaaS",
    geography: "Global",
    stage: "Early Growth",
    requirement: "Strategic Capital",
    status: "Under Review",
    tags: ["Technology", "Growth"],
  },
  {
    title: "Energy Infrastructure Initiative",
    sector: "Energy",
    geography: "Europe",
    stage: "Feasibility",
    requirement: "Institutional Partners",
    status: "Active",
    tags: ["Energy", "Infrastructure"],
  },
];

const themes = [
  {
    label: "01",
    title: "Industrial capability",
    copy: "Manufacturing, materials, logistics, and specialist production opportunities with tangible operating logic.",
  },
  {
    label: "02",
    title: "Energy transition",
    copy: "Infrastructure-led initiatives requiring stakeholder coordination, project structuring, and patient capital.",
  },
  {
    label: "03",
    title: "Strategic technology",
    copy: "Software, data, and digital platforms where commercial discipline can improve investor readiness.",
  },
  {
    label: "04",
    title: "Cross-border execution",
    copy: "UK and European projects that benefit from relationship-led capital introduction and market positioning.",
  },
];

const process = [
  ["Opportunity Assessment", "Commercial, technical, and strategic review before any investor presentation."],
  ["Feasibility & Structuring", "Project logic shaped into a clear, financeable proposition."],
  ["Investment Materials", "Investor-facing summaries, decks, memoranda, and supporting documentation."],
  ["Capital Introduction", "Qualified investors, family offices, strategic partners, and institutional contacts."],
  ["Diligence Support", "Information flow, documentation, and management responses during review."],
  ["Transaction Coordination", "Communication support through introduction, negotiation, and next steps."],
];

const pipeline = [
  ["Defense", "Development", "Europe", "Active"],
  ["Industrial", "Expansion", "UK / EU", "Active"],
  ["SaaS", "Early Growth", "Global", "Under Review"],
  ["Energy", "Feasibility", "Europe", "Active"],
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleOpportunities = useMemo(() => {
    if (activeFilter === "All") {
      return opportunities;
    }

    return opportunities.filter((opportunity) => opportunity.tags.includes(activeFilter));
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
          <a href="#themes">Themes</a>
          <a href="#opportunities">Opportunities</a>
          <a href="#process">Approach</a>
          <a href="#network">Investor Network</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="gc-hero">
          <img className="gc-hero-image" src="/assets/invest-forward-hero.png" alt="" aria-hidden="true" />
          <div className="gc-hero-shade"></div>
          <div className="container gc-hero-grid">
            <div className="gc-hero-copy">
              <p className="eyebrow">Investment origination & project development</p>
              <h1>Strategic Project Development & Capital Introduction</h1>
              <p>
                Invest Forward sources, structures, and presents selected real-economy opportunities
                to qualified investors, strategic partners, family offices, and institutional contacts.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#opportunities">View Opportunities</a>
                <a className="btn btn-secondary" href="#network">Request Access</a>
              </div>
            </div>
            <aside className="gc-hero-panel" aria-label="Investment platform summary">
              <span>Private platform</span>
              <h2>Relationship-led access to selected projects.</h2>
              <p>
                Additional information is provided to qualified parties subject to review,
                confidentiality, and applicable regulation.
              </p>
            </aside>
          </div>
        </section>

        <section className="gc-intro section" id="about">
          <div className="container gc-intro-grid">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>We help turn serious projects into investable propositions.</h2>
            </div>
            <div className="gc-intro-copy">
              <p>
                Invest Forward operates at the point where project development, strategic
                positioning, and capital introduction meet. We work with project owners and selected
                investors where preparation, credibility, and trusted access matter.
              </p>
              <div className="gc-stat-row">
                <article>
                  <strong>25+</strong>
                  <span>years combined experience</span>
                </article>
                <article>
                  <strong>UK & EU</strong>
                  <span>cross-border network</span>
                </article>
                <article>
                  <strong>4</strong>
                  <span>core real-economy sectors</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="gc-themes section" id="themes">
          <div className="container section-heading">
            <p className="eyebrow">Investment themes</p>
            <h2>Focused on sectors where operational substance matters.</h2>
          </div>
          <div className="container gc-theme-grid">
            {themes.map((theme) => (
              <article key={theme.title}>
                <span>{theme.label}</span>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gc-pathways" id="access">
          <div className="container gc-pathway-grid">
            <article>
              <p className="eyebrow">For investors</p>
              <h2>Access curated opportunities through a private review process.</h2>
              <p>
                Selected industrial, energy, infrastructure, technology, and strategic manufacturing
                opportunities are introduced through controlled, relationship-led access.
              </p>
              <ul>
                <li>Curated investment opportunities</li>
                <li>Cross-border projects</li>
                <li>Qualified introductions</li>
              </ul>
              <a className="text-link" href="#network">Request Access</a>
            </article>
            <article>
              <p className="eyebrow">For project owners</p>
              <h2>Prepare projects for credible investor and partner conversations.</h2>
              <p>
                We support project developers, industrial groups, and founders in structuring,
                positioning, and presenting investment-grade opportunities.
              </p>
              <ul>
                <li>Opportunity structuring</li>
                <li>Investment materials</li>
                <li>Capital introduction support</li>
              </ul>
              <a className="text-link" href="#contact">Submit Opportunity</a>
            </article>
          </div>
        </section>

        <section className="section gc-opportunities" id="opportunities">
          <div className="container gc-section-split">
            <div>
              <p className="eyebrow">Opportunity pipeline</p>
              <h2>Featured Opportunities</h2>
            </div>
            <p>
              Institutional-style teasers from a selective pipeline. Detailed information is shared
              only with qualified parties after review and, where appropriate, NDA.
            </p>
          </div>
          <div className="container filter-panel">
            {filters.map((filter) => (
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
          <div className="container gc-opportunity-grid">
            {visibleOpportunities.map((opportunity) => (
              <article className="gc-opportunity-card" key={opportunity.title}>
                <div className="card-topline">
                  <span>{opportunity.sector}</span>
                  <span>{opportunity.status}</span>
                </div>
                <h3>{opportunity.title}</h3>
                <dl>
                  <div><dt>Geography</dt><dd>{opportunity.geography}</dd></div>
                  <div><dt>Stage</dt><dd>{opportunity.stage}</dd></div>
                  <div><dt>Requirement</dt><dd>{opportunity.requirement}</dd></div>
                </dl>
                <p>Additional documentation available subject to qualification.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gc-process" id="process">
          <div className="container gc-section-split">
            <div>
              <p className="eyebrow">Approach</p>
              <h2>Structured support from assessment to introduction.</h2>
            </div>
            <p>
              The platform is designed for projects that need disciplined preparation, controlled
              disclosure, and credible access to relevant capital and strategic partners.
            </p>
          </div>
          <div className="container gc-process-list">
            {process.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gc-pipeline" id="pipeline">
          <div className="container gc-section-split">
            <div>
              <p className="eyebrow">Deal flow</p>
              <h2>Current Opportunity Pipeline</h2>
            </div>
            <p>Ongoing activity across active and review-stage projects.</p>
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
                {pipeline.map(([sector, stage, geography, status]) => (
                  <tr key={`${sector}-${stage}`}>
                    <td>{sector}</td>
                    <td>{stage}</td>
                    <td>{geography}</td>
                    <td><span className="status-pill">{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section gc-network" id="network">
          <div className="container network-panel">
            <div>
              <p className="eyebrow">Private access</p>
              <h2>Join Our Investor Network</h2>
              <p>
                Invest Forward maintains relationships with qualified investors, strategic partners,
                family offices, and institutional contacts interested in selected opportunities
                across real-economy sectors.
              </p>
            </div>
            <form className="network-form" action="#" method="post">
              <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Organisation</span><input type="text" name="organisation" autoComplete="organization" /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label><span>Investment Focus</span><input type="text" name="focus" placeholder="Industrial, energy, technology..." /></label>
              <label><span>Geography</span><input type="text" name="geography" placeholder="UK, Europe, global..." /></label>
              <label><span>Typical Investment Range</span><input type="text" name="range" placeholder="Confidential / indicative" /></label>
              <button className="btn btn-primary" type="submit">Register Interest</button>
            </form>
          </div>
        </section>

        <section className="section gc-team" id="team">
          <div className="container gc-section-split">
            <div>
              <p className="eyebrow">Team platform</p>
              <h2>Experienced judgement, sector access, and disciplined preparation.</h2>
            </div>
            <p>
              Invest Forward brings together operator-led management, project advisors, sector
              specialists, and investment-preparation partners around selected opportunities.
            </p>
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
              <label><span>Name</span><input type="text" name="contact-name" autoComplete="name" required /></label>
              <label><span>Email</span><input type="email" name="contact-email" autoComplete="email" required /></label>
              <label>
                <span>Investor / Partner / Project Owner</span>
                <select name="profile" required defaultValue="">
                  <option value="">Select profile</option>
                  <option>Investor</option>
                  <option>Partner</option>
                  <option>Project Owner</option>
                </select>
              </label>
              <label><span>Message</span><textarea name="message" rows={5} required></textarea></label>
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
            <p>Strategic project development & capital introduction</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#themes">Themes</a>
            <a href="#opportunities">Opportunities</a>
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
