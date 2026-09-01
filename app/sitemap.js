import { SITE_URL } from '@/lib/site';

// A handful of static pages, so a hand-written array is simpler than deriving
// one. Each privacy policy is listed because it is a real destination: it is
// the URL on that product's store listing (XUsCurrency on Play, XUsMemories
// on the App Store).
export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/how-we-build`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    {
      url: `${SITE_URL}/xuscurrency/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${SITE_URL}/xusmemories/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ];
}
