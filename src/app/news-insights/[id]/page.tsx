import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getNewsInsight, newsInsights } from "@/data/newsInsights";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return newsInsights.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const article = getNewsInsight(id);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Invest Forward`,
    description: article.excerpt,
  };
}

export default async function NewsInsightArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = getNewsInsight(id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero compact-page-hero article-hero">
          <div className="container">
            <p className="eyebrow">{article.type}</p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>{article.date}</span>
              <span>{article.readTime.toUpperCase()}</span>
            </div>
          </div>
        </section>

        <section className="section article-section">
          <article className="container article-layout">
            <div className="article-body">
              <a className="text-link article-back-link" href="/news-insights">Back to insights</a>
              {article.sections.map((section, index) => (
                <section key={`${section.heading ?? "intro"}-${index}`}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
