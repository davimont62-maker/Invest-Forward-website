import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export function generateMetadata({ params }: { params: { id: string } }) {
  const study = caseStudies.find(s => s.id === params.id);
  return {
    title: `${study?.title || 'Case Study'} | Invest Forward`,
    description: study?.challenge,
  };
}

export default function CaseStudyDetail({ params }: { params: { id: string } }) {
  const study = caseStudies.find(s => s.id === params.id);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="text-blue-600 hover:text-blue-800">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-blue-100 hover:text-white mb-6 inline-block">
            ← Back to Case Studies
          </Link>
          <h1 className="text-5xl font-bold mb-4">{study.title}</h1>
          <div className="flex items-center space-x-6 text-blue-100">
            <span>{study.company}</span>
            <span>•</span>
            <span>{study.industry}</span>
            <span>•</span>
            <span>{study.duration}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-600 mb-2">Company</h3>
              <p className="text-2xl font-bold text-gray-900">{study.company}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-600 mb-2">Industry</h3>
              <p className="text-2xl font-bold text-gray-900">{study.industry}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-600 mb-2">Engagement</h3>
              <p className="text-2xl font-bold text-gray-900">{study.duration}</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{study.challenge}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{study.solution}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Results Achieved</h2>
              <ul className="space-y-4">
                {study.results.map((result, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-4 font-bold text-xl">✓</span>
                    <span className="text-lg text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <p className="text-xl text-gray-900 italic mb-4">"{study.testimonial}"</p>
              <p className="text-sm font-semibold text-gray-700">— {study.testimonialsource}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to build your success story?</h2>
          <p className="text-xl mb-8 text-blue-100">Let's discuss how we can help your startup achieve similar results.</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
