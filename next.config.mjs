/** @type {import('next').NextConfig} */
// A product's official page lives on its own subdomain (Adrian, 2026-09-14),
// served by this app through a host rewrite so the address bar stays
// contacts.xusall.com. The www path forwards there, except the privacy page,
// whose www address is registered on the App Store listing.
const CONTACTS_HOST = 'contacts.xusall.com';
const MEMORIES_HOST = 'memories.xusall.com';

const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', has: [{ type: 'host', value: CONTACTS_HOST }], destination: '/xuscontacts' },
        { source: '/privacy', has: [{ type: 'host', value: CONTACTS_HOST }], destination: '/xuscontacts/privacy' },
        { source: '/', has: [{ type: 'host', value: MEMORIES_HOST }], destination: '/xusmemories' },
        { source: '/privacy', has: [{ type: 'host', value: MEMORIES_HOST }], destination: '/xusmemories/privacy' }
      ]
    };
  },
  async redirects() {
    return [
      {
        source: '/xuscontacts',
        missing: [{ type: 'host', value: CONTACTS_HOST }],
        destination: `https://${CONTACTS_HOST}`,
        permanent: false
      },
      {
        source: '/xusmemories',
        missing: [{ type: 'host', value: MEMORIES_HOST }],
        destination: `https://${MEMORIES_HOST}`,
        permanent: false
      }
    ];
  }
};

export default nextConfig;
