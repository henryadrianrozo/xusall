import { SITE_URL } from '@/lib/site';

// Two static pages, so a hand-written array is simpler than deriving one.
export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/how-we-build`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 }
  ];
}
