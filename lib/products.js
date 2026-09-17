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
  pomodoro: 'https://pomodoro.xusall.com',
  currency: 'https://play.google.com/store/apps/details?id=com.xusall.currency',
  contacts: '', // TODO: App Store URL at release
  memories: 'https://apps.apple.com/us/app/xusmemories/id6807498202'
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
    status: 'live',
    description:
      'A simple, robust focus timer. Twenty-five minutes of work, a real break, and a running record of what you finished. No account, and it works offline.',
    platform: 'Web',
    href: PRODUCT_URLS.pomodoro,
    linkLabel: 'pomodoro.xusall.com'
  },
  {
    key: 'currency',
    wordmark: [
      { text: 'X', color: 'var(--spectrum-green)' },
      { text: 'Us', color: null },
      { text: 'Currency', color: 'var(--spectrum-yellow)' }
    ],
    status: 'live',
    description:
      'Currency conversion and everyday money math, made plain. No ads, no accounts, no premium tier.',
    platform: 'Android',
    href: PRODUCT_URLS.currency,
    linkLabel: 'Play Store',
    devNote: 'Currently in testing. Link goes here at release.',
    // This exact path is what the Play Store listing and the app's Settings
    // screen point at. Renaming the route breaks both.
    privacyHref: '/xuscurrency/privacy'
  },
  {
    key: 'contacts',
    // Blue, matching the app's own wordmark (X and Contacts in its accent).
    wordmark: [
      { text: 'X', color: 'var(--spectrum-blue)' },
      { text: 'Us', color: null },
      { text: 'Contacts', color: 'var(--spectrum-blue)' }
    ],
    status: 'dev',
    description:
      'Contact management that treats your address book as yours. Organize, archive, and never miss a birthday.',
    platform: 'iPhone',
    href: PRODUCT_URLS.contacts,
    linkLabel: 'App Store',
    devNote: 'Coming soon to the App Store.',
    // The official page, on its own subdomain; the app links to it.
    pageHref: 'https://contacts.xusall.com',
    privacyHref: '/xuscontacts/privacy'
  },
  {
    key: 'memories',
    // Orange: the one spectrum colour no other card uses, and a warm fit for
    // the app's rainbow eye.
    wordmark: [
      { text: 'X', color: 'var(--spectrum-orange)' },
      { text: 'Us', color: null },
      { text: 'Memories', color: 'var(--spectrum-orange)' }
    ],
    status: 'live',
    description:
      'A video diary for the moments you want to keep. Record, organize into Diaries, and keep years of memories small, on your phone and in your own iCloud.',
    platform: 'iPhone',
    href: PRODUCT_URLS.memories,
    linkLabel: 'App Store',
    pageHref: 'https://memories.xusall.com',
    // Registered on the App Store listing and in the app's About screen.
    privacyHref: '/xusmemories/privacy'
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
