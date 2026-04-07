import HeroSection from '@/components/HeroSection';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'FAQs | Invest Forward',
  description: 'Frequently asked questions about our consulting services.',
};

export default function FAQs() {
  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, process, and engagement."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Didn't find your answer?</h2>
          <p className="text-lg text-gray-600 mb-8">Get in touch with our team. We're happy to discuss any questions you have.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
