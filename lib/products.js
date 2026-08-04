// Product links and card copy: single source of truth. Nothing else in the
// app should hardcode a product URL or platform string.
//
// TODO: drop the Play Store URL for XUsCurrency, the App Store URL for
// XUsContacts, and the subdomain for XUsPomodoro into the three empty strings
// below the moment each ships. That's the only change needed to turn a card
// live: `href` becomes non-empty and `status` flips to 'live'.
export const PRODUCT_URLS = {
  democracy: 'https://democracy.xusall.com',
  notes: 'https://notes.xusall.com',
  pomodoro: '', // TODO: https://pomodoro.xusall.com once the domain resolves
  currency: '', // TODO: Play Store URL at release
  contacts: '' // TODO: App Store URL at release
};

export const PRODUCTS = [
  {
    key: 'democracy',
    wordmark: [
      { text: 'X', color: 'var(--spectrum-red)' },
      { text: 'Us', color: null },
      { text: 'Democracy', color: 'var(--spectrum-blue)' }
    ],
    status: 'live',
    description:
      'Know who represents you. Your elected officials, your upcoming elections, your registration deadline. Nonpartisan, and your address is never stored.',
    platform: 'Web',
    href: PRODUCT_URLS.democracy,
    linkLabel: 'democracy.xusall.com'
  },
  {
    key: 'notes',
    wordmark: [
      { text: 'X', color: 'var(--spectrum-violet)' },
      { text: 'Us', color: null },
      { text: 'Notes', color: 'var(--spectrum-violet)' }
    ],
    status: 'live',
    description:
      'A fast, private scratchpad that lives in your browser. Nothing uploaded, nothing synced, nothing seen.',
    platform: 'Web',
    href: PRODUCT_URLS.notes,
    linkLabel: 'notes.xusall.com'
  },
  {
    key: 'pomodoro',
    // The app itself uses #E24B4A, which is its focus timer's fill and its own
    // registered brand color. On this site the card takes the spectrum red, per
    // the rule that product marks here draw from the palette. XUsNotes does the
    // same: violet on the card, its own #7c4dff in the app.
    wordmark: [
      { text: 'X', color: 'var(--spectrum-red)' },
      { text: 'Us', color: null },
      { text: 'Pomodoro', color: 'var(--spectrum-red)' }
    ],
    status: 'dev',
    description:
      'A focus timer that keeps your history in your browser. Twenty-five minutes of work, a real break, and no account to make.',
    platform: 'Web',
    href: PRODUCT_URLS.pomodoro,
    linkLabel: null,
    devNote: 'Built and waiting on a domain. Link goes here at release.'
  },
  {
    key: 'currency',
    wordmark: [
      { text: 'X', color: 'var(--spectrum-green)' },
      { text: 'Us', color: null },
      { text: 'Currency', color: 'var(--spectrum-yellow)' }
    ],
    status: 'dev',
    description:
      'Currency conversion and everyday money math, made plain. No ads, no accounts, no premium tier.',
    platform: 'Android',
    href: PRODUCT_URLS.currency,
    linkLabel: null,
    devNote: 'Currently in testing. Link goes here at release.'
  },
  {
    key: 'contacts',
    wordmark: [{ text: 'XUsContacts', color: null }],
    status: 'dev',
    description:
      'Contact management that treats your address book as yours. It stays on your phone.',
    platform: 'iPhone',
    href: PRODUCT_URLS.contacts,
    linkLabel: null,
    devNote: 'Currently in development. Link goes here at release.'
  }
];

// The landing page and llms.txt both used to hardcode "four", which is exactly
// the kind of thing that silently goes stale the first time a product ships.
// Derived here so adding a product stays a one-file change.
const COUNT_WORDS = ['no', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'];
export const PRODUCT_COUNT_WORD = COUNT_WORDS[PRODUCTS.length] || String(PRODUCTS.length);

// The plain name, reassembled from the wordmark parts. The wordmark is split
// only so each piece can take its own color.
export function productName(product) {
  return product.wordmark.map((part) => part.text).join('');
}
