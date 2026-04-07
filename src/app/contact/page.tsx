import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Contact Us | Invest Forward',
  description: 'Get in touch with Invest Forward for a free consultation about your startup.',
};

export default function Contact() {
  return (
    <>
      <HeroSection
        title="Let's Talk"
        subtitle="Have questions about how we can help your startup? Reach out for a free consultation."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Email</h3>
              <a href={`mailto:${siteConfig.company.email}`} className="text-blue-600 hover:text-blue-800">
                {siteConfig.company.email}
              </a>
              <p className="text-gray-600 text-sm mt-2">We typically respond within 24 hours.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Phone</h3>
              <a href={`tel:${siteConfig.company.phone}`} className="text-blue-600 hover:text-blue-800">
                {siteConfig.company.phone}
              </a>
              <p className="text-gray-600 text-sm mt-2">Monday to Friday, 9am-5pm GMT</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-700">{siteConfig.company.registeredAddress}</p>
            </div>
          </div>

          <div className="border-t pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does a typical engagement last?</h3>
              <p className="text-gray-600">Most engagements run 3-6 months, depending on scope and goals. We can also discuss ongoing advisory arrangements.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What stage startups do you work with?</h3>
              <p className="text-gray-600">We work with pre-seed through Series B startups. If you're earlier or later stage, we can still help point you in the right direction.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a free initial consultation?</h3>
              <p className="text-gray-600">Yes! We offer a free 30-minute discovery call to discuss your startup and determine if we're a good fit.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What's your track record?</h3>
              <p className="text-gray-600">We've helped 50+ startups across various industries. Check out our case studies to see specific examples of how we've helped companies like yours.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
