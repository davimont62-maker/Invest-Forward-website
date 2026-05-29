import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invest Forward | Strategic Ventures & Investment Opportunities',
  description:
    'Invest Forward originates, structures and presents strategic ventures and scalable projects for investors, operating partners and growth capital.',
  openGraph: {
    title: 'Invest Forward',
    description:
      'Strategic ventures and investment opportunities prepared for investors, operating partners and growth capital.',
    siteName: 'Invest Forward',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invest Forward',
    description: 'Strategic ventures and investment opportunities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
