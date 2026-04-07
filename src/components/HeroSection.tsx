export default function HeroSection({
  title,
  subtitle,
  cta,
  ctaLink = "/contact"
}: {
  title: string;
  subtitle: string;
  cta?: string;
  ctaLink?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">{subtitle}</p>
        {cta && (
          <a
            href={ctaLink}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            {cta}
          </a>
        )}
      </div>
    </section>
  );
}
