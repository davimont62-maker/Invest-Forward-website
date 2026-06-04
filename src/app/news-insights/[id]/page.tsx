import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
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
    alternates: {
      canonical: `/news-insights/${article.id}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.investforward.co.uk/news-insights/${article.id}`,
      type: "article",
      publishedTime: article.date,
      images: [
        {
          url: article.image ?? "/assets/invest-forward-social-v2.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function NewsInsightArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = getNewsInsight(id);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    image: `https://www.investforward.co.uk${article.image ?? "/assets/invest-forward-social-v2.png"}`,
    mainEntityOfPage: `https://www.investforward.co.uk/news-insights/${article.id}`,
    author: {
      "@type": "Organization",
      name: "Invest Forward",
    },
    publisher: {
      "@type": "Organization",
      name: "Invest Forward",
      logo: {
        "@type": "ImageObject",
        url: "https://www.investforward.co.uk/assets/invest-forward-logo-site.png",
      },
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
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
