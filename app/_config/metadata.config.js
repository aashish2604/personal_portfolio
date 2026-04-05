const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/profile.webp', type: 'image/webp' },
      { url: '/favicon.ico', sizes: '256x256' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/profile.webp', type: 'image/webp' }],
  },
  title: {
    template: '%s | Aashish Ranjan Singh',
    default: 'Aashish Ranjan Singh • Software Developer',
  },
  description:
    'Architecting reliable infrastructure for the AI-driven era with production-ready software, AI systems, and rapid execution.',
  generator: 'Aashish Ranjan Singh',
  applicationName: 'Aashish Ranjan Singh',
  referrer: 'origin-when-cross-origin',
  keywords: ['Software Developer', 'AI', 'Systems Architect'],
  authors: [{ name: 'Aashish Ranjan Singh', url: 'https://github.com/aashish2604' }],
  creator: 'Aashish Ranjan Singh',
  publisher: 'Aashish Ranjan Singh',
  twitter: {
    card: 'summary_large_image',
    title: 'Aashish Ranjan Singh',
    description:
      'Architecting reliable infrastructure for the AI-driven era with production-ready software, AI systems, and rapid execution.',
    creator: '@_aashish_singh_',
    images: {
      url: '/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
