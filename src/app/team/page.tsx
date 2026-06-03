import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Team & Advisors | Invest Forward",
  description: "Invest Forward management team, advisors, and country managers.",
};

type Profile = {
  initials: string;
  name: string;
  position: string;
  description: string;
  photo?: string;
};

const founders: Profile[] = [
  {
    initials: "SP",
    name: "Samuele Pozzi",
    position: "Founder / Managing Partner",
    photo: "/assets/samuele-pozzi.jpg",
    description:
      "Samuele is one of the founding partners at Invest Forward and is involved in all aspects of the business, including origination, portfolio management, and investor relations.",
  },
  {
    initials: "DM",
    name: "Davide Montini",
    position: "Managing Partner",
    photo: "/assets/davide-montini.jpg",
    description:
      "Davide is one of the founding partners at Invest Forward, bringing more than 30 years of combined operational, commercial, and investment experience across European markets. His background includes working with growth-oriented businesses, cross-border projects, and strategic development initiatives across industrial, technology, and international trade sectors.",
  },
];

const advisors: Profile[] = [
  {
    initials: "AC",
    name: "Alessandro Capo",
    position: "Advisor - Innovation & Regulatory Strategy",
    photo: "/assets/alessandro-capo.jpg",
    description:
      "Supports tech-driven companies with regulatory insight and operational execution, bridging innovation, compliance, and market deployment across EU contexts. Advises on partnerships, governance, scalable growth models, and data-enabled operations.",
  },
  {
    initials: "W",
    name: "Wasilios Spanos",
    position: "Advisor - Germany & Austria",
    photo: "/assets/wasilios.jpg",
    description:
      "Wasilios has 20+ years of experience driving growth, market expansion, and revenue acceleration across global organizations, supporting Invest Forward activity in Germany and Austria.",
  },
];

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero compact-page-hero">
          <div className="container">
            <p className="eyebrow">Team & advisors</p>
            <h1>Experienced management with European reach.</h1>
            <p>
              Invest Forward combines senior project judgement, sector access, and local execution
              support through relationships and country-level capability across Europe.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container team-section-heading">
            <div>
              <p className="eyebrow">Managing team</p>
              <h2>Founders and core management</h2>
            </div>
            <p>
              The core team leads opportunity origination, structuring, investor preparation, and
              transaction coordination for selected opportunities across European markets.
            </p>
          </div>
          <div className="container founder-row">
            {founders.map((member) => (
              <article className="team-profile team-profile-large" key={member.name}>
                <div className="profile-photo">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <span aria-label={`${member.name} photo pending`}>{member.initials}</span>
                  )}
                </div>
                <div>
                  <h2>{member.name}</h2>
                  <p className="profile-position">{member.position}</p>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section advisor-section">
          <div className="container team-section-heading">
            <div>
              <p className="eyebrow">Advisors and country managers</p>
              <h2>Specialist support across European markets and sectors</h2>
            </div>
            <p>
              Advisors and country managers support local context, sector access, regulatory
              understanding, and relationship development across the UK, EU, and selected European
              jurisdictions.
            </p>
          </div>
          <div className="container advisor-row">
            {advisors.map((member) => (
              <article className="team-profile team-profile-small" key={member.name}>
                <div className="profile-photo">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <span aria-label={`${member.name} photo pending`}>{member.initials}</span>
                  )}
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="profile-position">{member.position}</p>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
