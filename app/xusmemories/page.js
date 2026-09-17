import { PRODUCT_URLS } from '@/lib/products';
import { MEMORIES_URL, SITE_URL } from '@/lib/site';

// The official XUsMemories page, served at memories.xusall.com (see the host
// rewrite in next.config.mjs; www.xusall.com/xusmemories forwards there).
// Its job is to be what people find when they search the name, say what the
// app is, and send them to the App Store.
const DESCRIPTION =
  'XUsMemories is a free video diary for iPhone. Record the moments, people and thoughts you want to keep, organize them into Diaries, and keep years of memories small. No account, no ads, no tracking.';

export const metadata = {
  title: 'XUsMemories: a video diary for iPhone',
  description: DESCRIPTION,
  alternates: { canonical: MEMORIES_URL },
  openGraph: {
    title: 'XUsMemories | XUsAll',
    description: DESCRIPTION,
    url: MEMORIES_URL
  },
  twitter: {
    title: 'XUsMemories | XUsAll',
    description: DESCRIPTION
  },
  itunes: { appId: '6807498202' }
};

// Tells search engines this page is about an app, and where to get it.
const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'XUsMemories',
  alternateName: 'XUs Memories',
  description: DESCRIPTION,
  url: MEMORIES_URL,
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  installUrl: PRODUCT_URLS.memories,
  sameAs: [PRODUCT_URLS.memories],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@id': `${SITE_URL}/#organization` }
};

const FEATURES = [
  {
    title: 'Record freely',
    body: 'Open the app, tap record, and stop when you are done. Add a title, notes or tags if you like, or skip them. Front or back camera, square or portrait.'
  },
  {
    title: 'Made to last',
    body: 'Memories are made small as you record, so years of them fit on your phone. Add videos you already have too, trimmed and made small the same way.'
  },
  {
    title: 'Organize your way',
    body: 'Group memories into Diaries for an ongoing chapter, like a move, a new baby or a new job. Add colorful tags, mark favorites, and browse as a list, a grid or a calendar.'
  },
  {
    title: 'Watch them again',
    body: 'Set a reminder to come back to a memory in a month, a year or five years, like a letter to your future self.'
  },
  {
    title: 'Always yours',
    body: 'Memories stay on your phone and sync through your own iCloud. No sign-up, no ads, no tracking. Lock the app with Face ID and export everything whenever you want.'
  }
];

const SCREENS = [
  { src: '/xusmemories/1-record.jpg', alt: 'The Record screen: one red button and today’s date' },
  { src: '/xusmemories/2-memories.jpg', alt: 'Memories grouped by month, with Diaries and tags' },
  { src: '/xusmemories/3-recording.jpg', alt: 'Recording a memory in the square frame' }
];

export default function XUsMemoriesPage() {
  const appStoreUrl = PRODUCT_URLS.memories;

  return (
    <div className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <section className="policy-hero app-hero">
        <span className="eyebrow">iPhone app</span>
        <h1 className="policy-title">
          <span style={{ color: 'var(--spectrum-orange)' }}>X</span>Us
          <span style={{ color: 'var(--spectrum-orange)' }}>Memories</span>
        </h1>
        <p className="policy-lead">
          A video diary for the moments, people and thoughts you want to keep. Free, with no
          account, no ads and no tracking. Your memories, always in your hands.
        </p>
        <div className="app-store-row">
          <a href={appStoreUrl} className="underline-link" target="_blank" rel="noopener noreferrer">
            Download on the App Store
          </a>
        </div>
      </section>

      <section className="app-screens" aria-label="Screens from XUsMemories">
        {SCREENS.map((screen) => (
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            width={662}
            height={1434}
            loading="lazy"
            className="app-screen"
          />
        ))}
      </section>

      <section className="section">
        <div className="principle-list app-features">
          {FEATURES.map((feature) => (
            <div className="principle-row" key={feature.title}>
              <h2 className="principle-title">{feature.title}</h2>
              <p className="principle-body">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section app-closer">
        <p className="principle-body">
          Part of XUsAll, free software built for us all. Read the{' '}
          <a href={`${MEMORIES_URL}/privacy`} className="underline-link">
            privacy policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}
