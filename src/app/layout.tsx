import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammed Buğra Çiftçi | iOS Software Engineer',
  description:
    'iOS Software Engineer specializing in Swift 6, SwiftUI, UIKit, CarPlay (CPTemplate), ScreenTime API, and MVVM architecture. 30+ live iOS & iPadOS applications on the App Store.',
  keywords: [
    'Muhammed Buğra Çiftçi',
    'Buğra Çiftçi',
    'iOS Software Engineer',
    'SwiftUI Developer',
    'Apple CarPlay',
    'Sunio AI',
    'CS2 Smoke Trainer',
    'App Store Developer',
  ],
  authors: [{ name: 'Muhammed Buğra Çiftçi', url: 'https://github.com/Bugraciftci' }],
  openGraph: {
    title: 'Muhammed Buğra Çiftçi — iOS Software Engineer',
    description:
      'Explore 30+ native iOS & iPadOS apps built with Swift 6, SwiftUI, and clean MVVM architecture.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammed Buğra Çiftçi',
    alternateName: 'Buğra Çiftçi',
    jobTitle: 'iOS Software Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Bahçeşehir Üniversitesi',
    },
    sameAs: [
      'https://github.com/Bugraciftci',
      'https://www.linkedin.com/in/muhammed-bu%C4%9Fra-%C3%A7ift%C3%A7i-07b22b244/',
      'https://apps.apple.com/tr/developer/muhammed-bugra-ciftci/id1726010593',
    ],
  };

  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090B] font-sans text-zinc-100 selection:bg-zinc-200 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
