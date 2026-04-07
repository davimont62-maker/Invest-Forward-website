import HeroSection from '@/components/HeroSection';
import { siteConfig } from '@/config/site';
import { teamMembers } from '@/data/team';

export const metadata = {
  title: 'About Us | Invest Forward',
  description: 'Learn about Invest Forward and our expert team of startup consultants.',
};

export default function About() {
  return (
    <>
      <HeroSection
        title="About Invest Forward"
        subtitle="We're a team of experienced founders and investors committed to helping startups scale."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Invest Forward was founded in 2020 with a simple mission: to help ambitious UK startups grow faster and achieve their ambitions. Our founder, Sarah Johnson, experienced firsthand the challenges of scaling a startup without proper guidance.
            </p>
            <p className="text-lg">
              After successfully exiting two ventures, Sarah realized that the right expertise at the right time could have accelerated her journey by years. That's when the idea for Invest Forward was born.
            </p>
            <p className="text-lg">
              Today, we've worked with over 50 startups across fintech, edtech, marketplace, SaaS, and more. Together with our team, we've helped founders raise over £100M in funding and achieve sustainable, profitable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold opacity-30">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600">We bring deep industry experience and proven methodologies to every engagement.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">We're not consultants who hand off recommendations. We're partners invested in your success.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">Success is measured by tangible outcomes and real momentum for your startup.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
