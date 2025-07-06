import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Natnael Darsema | Full-Stack Developer',
  description: 'Passionate Full-Stack Developer specializing in React, Node.js, and TypeScript. Building scalable web applications and creating exceptional digital experiences.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Portfolio',
    'Web Applications'
  ],
  authors: [{ name: 'Natnael Darsema' }],
  creator: 'Natnael Darsema',
  publisher: 'Natnael Darsema',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Natnael Darsema | Full-Stack Developer',
    description: 'Passionate Full-Stack Developer specializing in React, Node.js, and TypeScript. Building scalable web applications and creating exceptional digital experiences.',
    url: 'https://your-domain.com',
    siteName: 'Natnael Darsema Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Natnael Darsema - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natnael Darsema | Full-Stack Developer',
    description: 'Passionate Full-Stack Developer specializing in React, Node.js, and TypeScript.',
    images: ['/og-image.jpg'],
    creator: '@nati_sha29',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};