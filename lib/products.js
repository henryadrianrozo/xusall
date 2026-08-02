// Product links and card copy: single source of truth. Nothing else in the
// app should hardcode a product URL or platform string.
//
// TODO: drop the Play Store URL for XUsCurrency and the App Store URL for
// XUsContacts into the two empty strings below the moment each ships. That's
// the only change needed to turn a card live: `href` becomes non-empty and
// `status` flips to 'live'.
export const PRODUCT_URLS = {
  democracy: 'https://democracy.xusall.com',
  notes: 'https://notes.xusall.com',
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
