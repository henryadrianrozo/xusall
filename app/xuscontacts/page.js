import { PRODUCT_URLS } from '@/lib/products';
import { CONTACTS_URL } from '@/lib/site';

// The official XUsContacts page, served at contacts.xusall.com (see the host
// rewrite in next.config.mjs; www.xusall.com/xuscontacts forwards there).
// The app puts that address in every ask-by-text it drafts, so this is often
// the first thing a new person sees. It has one job: say what the app is and
// where to get it.
//
// The App Store link appears on its own the moment PRODUCT_URLS.contacts is
// filled in at release. Until then it reads as coming soon.
const DESCRIPTION =
  'XUsContacts is a free contact manager for iPhone. Every contact in one place, find people by city, country or continent, organize and archive without losing anyone, and never miss a birthday. No account, no ads, no tracking.';

export const metadata = {
  title: 'XUsContacts',
  description: DESCRIPTION,
  alternates: { canonical: CONTACTS_URL },
  openGraph: {
    title: 'XUsContacts | XUsAll',
    description: DESCRIPTION,
    url: CONTACTS_URL
  },
  twitter: {
    title: 'XUsContacts | XUsAll',
    description: DESCRIPTION
  }
};

const FEATURES = [
  {
    title: 'Every contact, in one place',
    body: 'iCloud, Google, work and this iPhone in one list. Phone, email, company, city and birthday up front, plus your own tags and a note about how you met.'
  },
  {
    title: 'Find people by where they are',
    body: 'Give someone a city and search knows the rest. Look up Spain, Colombia or South America and everyone there comes up, without a single extra tag.'
  },
  {
    title: 'Organize in a few minutes',
    body: 'Swipe through your contacts and decide who stays. Fill in what is missing as you go, or text them to ask. Nothing changes until you say so.'
  },
  {
    title: 'Archive, not delete',
    body: 'The people you clear out are saved first, with their tags and notes, and can come back any time.'
  },
  {
    title: 'Never miss a birthday',
    body: 'See whose birthday is next, get a reminder, and ask the people you are missing with one text. Star signs included, if you like that sort of thing.'
  },
  {
    title: 'Your card as a QR code',
    body: 'Share your contact card with a scan, from the app or a widget on your home screen.'
  },
  {
    title: 'Private by design',
    body: 'Everything stays on your iPhone and in your own iCloud, encrypted. No account, no ads, no tracking, and no servers of ours.'
  }
];

const SCREENS = [
  { src: '/xuscontacts/1-library.jpg', alt: 'The Library: every contact with their city and tags' },
  { src: '/xuscontacts/2-card.jpg', alt: 'A contact: phone, email, company, city and birthday with a star sign' },
  { src: '/xuscontacts/4-birthdays.jpg', alt: 'Birthdays: who is next, with star signs' },
  { src: '/xuscontacts/5-search.jpg', alt: 'Search by place: typing Illinois finds everyone in Chicago' }
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
          <a href={`${CONTACTS_URL}/privacy`} className="underline-link">
            privacy policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}
