import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = process.env.SITE_URL || 'https://web.whatsfunnels.io'

export const viewport: Viewport = {
  themeColor: '#C018A2',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WhatsFunnels – AI Powered WhatsApp Funnels',
    template: '%s | WhatsFunnels'
  },
  description: 'Scale your business with AI-powered WhatsApp funnels. Broadcast campaigns, capture leads, and automate your marketing directly on the channel your customers actually use. Powered by the official WhatsApp Business API.',
  generator: 'v0.app',
  keywords: ['WhatsApp marketing', 'WhatsApp automation', 'WhatsApp funnels', 'broadcast campaigns', 'lead capture', 'WhatsApp Business API', 'AI marketing'],
  authors: [{ name: 'WhatsFunnels' }],
  creator: 'WhatsFunnels',
  publisher: 'WhatsFunnels',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WhatsFunnels – AI Powered WhatsApp Funnels',
    description: 'Scale your business with AI-powered WhatsApp funnels. Broadcasts, lead capture, and automation on the official Meta API.',
    type: 'website',
    url: SITE_URL,
    siteName: 'WhatsFunnels',
    locale: 'en_US',
    images: [
      {
        url: '/placeholder.jpg', // Replace with actual OG image when available
        width: 1200,
        height: 630,
        alt: 'WhatsFunnels – AI Powered WhatsApp Funnels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsFunnels – AI Powered WhatsApp Funnels',
    description: 'Scale your business with AI-powered WhatsApp funnels.',
    creator: '@whatsfunnels',
    images: ['/placeholder.jpg'], // Replace with actual twitter image
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WhatsFunnels',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: [
      'https://twitter.com/whatsfunnels',
      'https://linkedin.com/company/whatsfunnels',
    ],
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WhatsFunnels',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const productData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'WhatsFunnels',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '124',
    },
  };

  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationData} />
        <StructuredData data={websiteData} />
        <StructuredData data={productData} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
