import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { newsInsights } from "@/data/newsInsights";

export const metadata = {
  title: "News & Insights | Invest Forward",
  description:
    "News, articles, and institutional insights from Invest Forward on project development, capital introduction, and real-economy opportunities.",
};

export default function NewsInsightsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero compact-page-hero">
          <div className="container">
            <p className="eyebrow">News & Insights</p>
            <h1>Selected commentary on project development and capital introduction.</h1>
            <p>
              Updates, articles, and market observations for qualified investors, strategic
              partners, and project owners working across real-economy sectors.
            </p>
          </div>
        </section>

        <section className="section insights-section">
          <div className="container insights-layout">
            <div className="insights-intro">
              <p className="eyebrow">Editorial focus</p>
              <h2>Institutional notes, not retail market commentary.</h2>
              <p>
                This section is prepared for future articles, project-development updates, and
                selected news from the Invest Forward network.
              </p>
            </div>

            <div className="insights-grid">
              {newsInsights.map((item) => (
                <article className="insight-card" key={item.id}>
                  <div className="card-topline">
                    <span>{item.type}</span>
                    <span>
                      {item.date} / {item.readTime}
                    </span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
                  <a href="#" aria-label={`Read ${item.title}`}>
                    Read note
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
