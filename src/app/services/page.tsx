import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Our Services | Invest Forward',
  description: 'Expert startup consulting services including growth strategy, funding preparation, product-market fit, and operations scaling.',
};

export default function Services() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Tailored consulting packages designed to support your startup at every stage of growth"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.map(service => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">We start with a free 30-minute consultation to understand your startup, challenges, and goals.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proposal</h3>
              <p className="text-gray-600">We create a tailored proposal with specific outcomes, timeline, and investment required.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">We work with your team to execute the plan, providing guidance and support throughout.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">We measure success against agreed KPIs and ensure you have the tools for sustained growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Book a free consultation with one of our consultants.</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
