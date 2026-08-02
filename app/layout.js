import './globals.css';
import SpectrumBar from '@/components/SpectrumBar';
import Header from '@/components/Header';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/site';

const DESCRIPTION =
  'XUsAll builds free, privacy-respecting software for people over profit. Know who represents you, keep a private scratchpad, and more, all free and built for people instead of profit.';

export const metadata = {
  title: {
    default: 'XUsAll | Free Software, Built for People',
    template: `%s | ${SITE_NAME}`
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: SITE_URL,
    title: 'XUsAll | Free Software, Built for People',
    description: DESCRIPTION
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XUsAll | Free Software, Built for People',
    description: DESCRIPTION
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined
  }
};

// Dark only, always. There is no light theme and no toggle to declare, so a
// single fixed theme-color is correct here (unlike a site that supports both).
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: CONTACT_EMAIL,
      description: DESCRIPTION,
      slogan: 'People over profits.'
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#organization` },
      isAccessibleForFree: true
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body>
        <SpectrumBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
