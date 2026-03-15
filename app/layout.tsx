import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'WhatsFunnels — WhatsApp Marketing That Converts',
  description: 'Broadcast campaigns, capture leads, and build marketing funnels directly on WhatsApp — the channel your customers actually use. Powered by the official WhatsApp Business API.',
  generator: 'v0.app',
  keywords: ['WhatsApp marketing', 'WhatsApp automation', 'WhatsApp funnels', 'broadcast campaigns', 'lead capture'],
  openGraph: {
    title: 'WhatsFunnels — WhatsApp Marketing That Converts',
    description: 'Turn WhatsApp into your growth engine. Broadcasts, funnels, and automation on the official Meta API.',
    type: 'website',
    url: 'https://web.whatsfunnels.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsFunnels — WhatsApp Marketing That Converts',
    description: 'Turn WhatsApp into your growth engine.',
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
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
