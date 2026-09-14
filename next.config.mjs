import { SITE_URL } from './lib/site.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // contacts.xusall.com is the short address the XUsContacts app puts in the
  // birthday text it drafts, so it has to land on the product page.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'contacts.xusall.com' }],
        destination: `${SITE_URL}/xuscontacts`,
        permanent: false
      }
    ];
  }
};

export default nextConfig;
