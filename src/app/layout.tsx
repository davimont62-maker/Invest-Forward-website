import type { Metadata } from 'next';
import { Manrope, Source_Serif_4 } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const display = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.investforward.co.uk'),
  title: 'Invest Forward | Strategic Project Development & Capital Introduction',
  description:
    'Invest Forward develops, structures, and presents selected investment opportunities across industrial, energy, technology, and infrastructure sectors.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      it: '/it',
    },
  },
  keywords: [
    'strategic project development',
    'capital introduction',
    'investment origination',
    'real economy investment opportunities',
    'industrial investment opportunities',
    'European corporate finance',
    'investment advisory platform',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/assets/favicon-256.png',
  },
  openGraph: {
    title: 'Invest Forward',
    description:
      'Strategic project development and capital introduction for qualified investors, strategic partners, and family offices.',
    url: 'https://www.investforward.co.uk',
    siteName: 'Invest Forward',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/assets/invest-forward-social-v2.png',
        width: 1200,
        height: 630,
        alt: 'Invest Forward - Strategic Project Development and Capital Introduction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invest Forward',
    description: 'Strategic project development and capital introduction.',
    images: ['/assets/invest-forward-social-v2.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Invest Forward',
    url: 'https://www.investforward.co.uk',
    logo: 'https://www.investforward.co.uk/assets/invest-forward-logo-site.png',
    email: 'enquiries@investforward.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 2a, 95 Wilton Road',
      addressLocality: 'London',
      postalCode: 'SW1V 1BZ',
      addressCountry: 'GB',
    },
    description:
      'Boutique strategic project development and capital introduction across selected real-economy sectors.',
    areaServed: ['United Kingdom', 'Europe'],
    knowsAbout: [
      'Strategic project development',
      'Capital introduction',
      'Investment origination',
      'Industrial opportunities',
      'Energy infrastructure',
      'Technology platforms',
      'Strategic manufacturing',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Invest Forward',
    url: 'https://www.investforward.co.uk',
    inLanguage: ['en-GB', 'it-IT'],
    publisher: {
      '@type': 'Organization',
      name: 'Invest Forward',
    },
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
