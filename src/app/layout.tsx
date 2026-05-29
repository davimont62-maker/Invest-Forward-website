import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Invest Forward | Strategic Project Development & Capital Introduction',
  description:
    'Invest Forward develops, structures, and presents selected investment opportunities across industrial, energy, technology, and infrastructure sectors.',
  openGraph: {
    title: 'Invest Forward',
    description:
      'Strategic project development and capital introduction for qualified investors, strategic partners, and family offices.',
    siteName: 'Invest Forward',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invest Forward',
    description: 'Strategic project development and capital introduction.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
