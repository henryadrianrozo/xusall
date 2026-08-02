import { SITE_URL } from '@/lib/site';

// Crawl policy. Next serves this at /robots.txt. Everything on this site is
// public and meant to be found, so the default is open with nothing
// disallowed. AI agents are named explicitly rather than left to the
// wildcard, since this site's whole point is being found by them too.
export const dynamic = 'force-static';

const AI_AGENTS = [
  'Google-Extended',
  'Applebot-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'CCBot',
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'Bingbot'
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_AGENTS, allow: '/' }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
