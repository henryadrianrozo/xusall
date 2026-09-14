// Canonical site identity. Change these two lines to move domains. Every
// absolute URL in the app (metadata, OG image) derives from here.

export const SITE_HOST = process.env.NEXT_PUBLIC_SITE_HOST || 'www.xusall.com';
export const SITE_URL = `https://${SITE_HOST}`;
export const SITE_NAME = 'XUsAll';
// Product pages on their own subdomains. Kept here with the main host so no
// hostname is typed anywhere else.
export const CONTACTS_URL = 'https://contacts.xusall.com';
export const CONTACT_EMAIL = 'xusalldevelopment@gmail.com';
