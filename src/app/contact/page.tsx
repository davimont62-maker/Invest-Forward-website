import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Contact | Invest Forward",
  description: "Contact Invest Forward to discuss a project, investor context, or capital introduction.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Discuss a project or capital introduction.</h1>
            <p>
              Share your investor, partner, or project-owner context and the Invest Forward team
              will review whether there is a suitable basis for a focused conversation.
            </p>
          </div>
        </section>
        <section className="section contact-section">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Direct contact</p>
              <h2>Relationship-led enquiries.</h2>
              <p>For confidential project or investor discussions, contact the team directly.</p>
              <a className="email-link" href="mailto:enquiries@investforward.com">enquiries@investforward.com</a>
            </div>
            <form className="contact-form" action="#" method="post">
              <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
              <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              <label>
                <span>Profile</span>
                <select name="profile" required defaultValue="">
                  <option value="">Select profile</option>
                  <option>Investor</option>
                  <option>Strategic Partner</option>
                  <option>Project Owner</option>
                  <option>Institutional Contact</option>
                </select>
              </label>
              <label><span>Message</span><textarea name="message" rows={5} required></textarea></label>
              <button className="btn btn-primary" type="submit">Contact the Team</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
