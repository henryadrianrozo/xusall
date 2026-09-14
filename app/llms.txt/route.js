import { SITE_URL, CONTACT_EMAIL } from '@/lib/site';
import { PRODUCTS, PRODUCT_COUNT_WORD, productName } from '@/lib/products';

// Served at /llms.txt, following the llmstxt.org convention: a plain-text map
// of the site for language models.
//
// HONEST CAVEAT: no major AI company has committed to reading llms.txt. It is
// a proposed convention, not a standard. It is here because it costs one small
// route and is well formed if adoption arrives. The work that actually matters
// for AI visibility is the JSON-LD in the page head and clean semantic HTML,
// both of which this site has.
export const dynamic = 'force-static';

function body() {
  const productLines = PRODUCTS.map((product) => {
    const name = productName(product);
    const status = product.status === 'live' ? 'Live' : 'In development';
    const page = product.pageHref || '';
    const url = product.href || (page.startsWith('http') ? page : page ? `${SITE_URL}${page}` : '');
    const link = url ? ` (${url})` : '';
    return `- ${name}${link}: ${status}, ${product.platform}. ${product.description}`;
  }).join('\n');

  return `# XUsAll

> The parent brand for a family of free, privacy-respecting software. XUsAll builds tools that are simply useful and gives them away: no ads, no tracking, no paywalls in front of things people need. People over profit.

Corrections and questions go to ${CONTACT_EMAIL}.

## Core pages

- [Home](${SITE_URL}/): The hero, what XUsAll is, the ${PRODUCT_COUNT_WORD.toLowerCase()} products, the operating principles, and contact.
- [How we build](${SITE_URL}/how-we-build): How every XUsAll product is made by one person working with generative AI tools, written for a non-technical reader.

## Products

${productLines}

## Principles

People over profits. Private and transparent by default. Built with AI, openly. Simple, because we trust your intelligence. Democratic where it counts.

Nothing here is sold, brokered, or optimized to keep anyone scrolling.
`;
}

export async function GET() {
  return new Response(body(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
