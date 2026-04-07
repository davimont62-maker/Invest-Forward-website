import HeroSection from '@/components/HeroSection';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

export const metadata = {
  title: 'Case Studies | Invest Forward',
  description: 'See real examples of how we help startups scale and succeed.',
};

export default function CaseStudies() {
  return (
    <>
      <HeroSection
        title="Case Studies"
        subtitle="Real startups. Real results. See how we've helped founders like you achieve their goals."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map(study => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                title={study.title}
                company={study.company}
                industry={study.industry}
                metrics={study.metrics}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for your success story?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your startup achieve similar results.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
