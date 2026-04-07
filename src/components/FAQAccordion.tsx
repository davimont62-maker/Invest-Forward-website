'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{category}</h3>
          <div className="space-y-4">
            {faqs
              .filter(faq => faq.category === category)
              .map(faq => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h4>
                    <svg
                      className={`w-6 h-6 text-blue-600 transition-transform ${
                        openId === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>

                  {openId === faq.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
