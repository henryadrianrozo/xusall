import { SITE_NAME } from '@/lib/site';

// Web app manifest, served at /manifest.webmanifest.
export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: `${SITE_NAME}: Free Software, Built for People`,
    short_name: SITE_NAME,
    description:
      'Free, privacy-respecting software for people over profit. XUsDemocracy, XUsNotes, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    categories: ['utilities', 'productivity'],
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-icon', type: 'image/png', sizes: '180x180' }
    ]
  };
}
