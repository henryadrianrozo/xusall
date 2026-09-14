import Link from 'next/link';
import { PRODUCT_URLS } from '@/lib/products';

// The XUsContacts landing page. contacts.xusall.com redirects here, and that
// short address is what the app puts in the text it drafts when someone asks
// a friend for their birthday, so this page is often the first thing a new
// person sees. It has one job: say what the app is and where to get it.
//
// The App Store link appears on its own the moment PRODUCT_URLS.contacts is
// filled in at release. Until then it reads as coming soon.
const DESCRIPTION =
  'XUsContacts is a free contact manager for iPhone. Organize your contacts, archive the ones you are done with, and keep everyone’s birthday. No account, no ads, no tracking.';

export const metadata = {
  title: 'XUsContacts',
  description: DESCRIPTION,
  alternates: { canonical: '/xuscontacts' },
  openGraph: {
    title: 'XUsContacts | XUsAll',
    description: DESCRIPTION
  },
  twitter: {
    title: 'XUsContacts | XUsAll',
    description: DESCRIPTION
  }
};

const FEATURES = [
  {
    title: 'Every contact, in one place',
    body: 'iCloud, Google, work and this iPhone in one list. Tag people, add where they live, and write yourself a note about how you met.'
  },
  {
    title: 'Organize in a few minutes',
    body: 'Swipe through your contacts and decide who stays. Nothing changes until you review the session and say so.'
  },
  {
    title: 'Archive, not delete',
    body: 'The people you remove are saved first, with their tags and notes, and can come back any time. A copy can live in your own private iCloud.'
  },
  {
    title: 'Never miss a birthday',
    body: 'See whose birthday is coming up, get a reminder, and ask the people you are missing with one text.'
  }
];

const SCREENS = [
  { src: '/xuscontacts/1-library.jpg', alt: 'The Library: every contact in one list, with location and tag filters' },
  { src: '/xuscontacts/2-organize.jpg', alt: 'Organize: a contact card to swipe to keep, archive or trash' },
  { src: '/xuscontacts/3-birthdays.jpg', alt: 'Birthdays: upcoming birthdays with reminders' },
  { src: '/xuscontacts/4-archive.jpg', alt: 'The Archive: removed contacts, saved with their tags' }
];

export default function XUsContactsPage() {
  const appStoreUrl = PRODUCT_URLS.contacts;

  return (
    <div className="page-shell">
      <section className="policy-hero app-hero">
        <span className="eyebrow">iPhone app</span>
        <h1 className="policy-title">
          <span style={{ color: 'var(--spectrum-blue)' }}>X</span>Us
          <span style={{ color: 'var(--spectrum-blue)' }}>Contacts</span>
        </h1>
        <p className="policy-lead">
          A contact manager that treats your address book as yours. Free, with no account, no ads
          and no tracking. Everything it keeps stays on your phone, or in your own iCloud.
        </p>
        <div className="app-store-row">
          {appStoreUrl ? (
            <a href={appStoreUrl} className="underline-link" target="_blank" rel="noopener noreferrer">
              Download on the App Store
            </a>
          ) : (
            <span className="app-store-soon">Coming soon to the App Store</span>
          )}
          <span className="app-store-soon">Google Play: coming soon</span>
        </div>
      </section>

      <section className="app-screens" aria-label="Screens from XUsContacts">
        {SCREENS.map((screen) => (
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            width={660}
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
          <Link href="/xuscontacts/privacy" className="underline-link">
            privacy policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
