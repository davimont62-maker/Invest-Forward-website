import BrandLogo from "@/components/BrandLogo";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const variants = [
  {
    id: "splitword",
    name: "Split Wordmark",
    note: "Wider one-line direction with teal Invest, grey V, and a cleaner teal W accent.",
  },
  {
    id: "wordmark",
    name: "Teal Wordmark",
    note: "Closest to your reference: stronger Invest, lighter Forward, with V/W accent details.",
  },
  {
    id: "momentum",
    name: "Momentum",
    note: "Closest to the reference: compact screen mark with a forward growth line.",
  },
  {
    id: "axis",
    name: "Axis",
    note: "More corporate-finance oriented: chart axis and capital progression.",
  },
  {
    id: "gateway",
    name: "Gateway",
    note: "Institutional access concept: a controlled entry point for qualified parties.",
  },
  {
    id: "monogram",
    name: "Monogram",
    note: "More restrained advisory mark, focused on the IF initials.",
  },
] as const;

export const metadata = {
  title: "Logo Variants | Invest Forward",
  description: "Invest Forward logo variant preview.",
};

export default function LogoVariantsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero compact-page-hero">
          <div className="container">
            <p className="eyebrow">Brand direction</p>
            <h1>Logo variants for review.</h1>
            <p>
              Compact institutional options using an icon-plus-wordmark structure inspired by the
              reference, adapted for investment origination and project development.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container logo-variant-grid">
            {variants.map((variant) => (
              <article key={variant.id}>
                <div className="logo-variant-preview">
                  <BrandLogo variant={variant.id} />
                </div>
                <h2>{variant.name}</h2>
                <p>{variant.note}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
