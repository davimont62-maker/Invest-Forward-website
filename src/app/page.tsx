import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blog';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Empower Your Startup to Scale"
        subtitle="Expert consulting to help your UK startup grow faster, raise capital, and build sustainable operations. From idea validation to Series A and beyond."
        cta="Get Started"
        ctaLink="/contact"
      />

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Invest Forward?</h2>
            <p className="text-xl text-gray-600">Real expertise. Real results. Real commitment to your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">We've helped 50+ startups raise £100M+ in funding and achieve 10x growth.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Former founders and investors who understand the startup journey firsthand.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Results</h3>
              <p className="text-gray-600">Efficient, focused engagements that deliver measurable outcomes quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Tailored consulting for every stage of growth</p>
          </div>

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

          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real startups we've worked with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudies.slice(0, 3).map(study => (
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

          <div className="text-center">
            <Link href="/case-studies" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Learn from our expertise in startup growth and scaling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {blogPosts.slice(0, 4).map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Startup?</h2>
          <p className="text-xl mb-8 text-blue-100">Let's discuss how we can help you achieve your growth goals.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
