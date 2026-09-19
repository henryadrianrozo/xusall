# XUsAll project brain

<!-- STATUS:BEGIN -->
**Updated:** 2026-09-18 · `3723095`  
**State:** Live at www.xusall.com. The front door for the XUs family. Next.js 14, static, no database. Product pages live on subdomains by host rewrite: contacts.xusall.com (XUsContacts) and memories.xusall.com (XUsMemories, with its App Store link, app JSON-LD and Smart App Banner). XUsMemories now has a live card on the home page.  
**Last shipped:** The contact address is now hello@xusall.com everywhere on the site (was a Gmail address), after the memories.xusall.com page and XUsMemories card.  
**Missing:** A public business phone line (Next moves 0, blocks the Apple EU trader declaration). A search-indexing check across every site, not just this one (Next moves 3; Adrian thinks none of his sites are showing up properly in Google). XUsPomodoro, XUsCalendar and XUsPhotos are not on the site yet, and the brand line is still said several ways across the family.  
**Next:** Once memories.xusall.com resolves, submit it in Google Search Console. Fill in PRODUCT_URLS.contacts when XUsContacts is approved, then add the remaining products.
<!-- STATUS:END -->

Read this first. XUsAll is the parent brand and home page for the XUs*
family of free, privacy-respecting software.

**Live:** https://www.xusall.com (xusall.com redirects to www, matching the
convention already used by notes.xusall.com and democracy.xusall.com) ·
**Host:** Vercel project `xusall` · **Stack:** Next.js 14 App Router, plain
CSS, zero UI dependencies. Static site, no database, no runtime data
fetching.

## The mission, in one line

**Free software, built for us all.** Given away, built for people instead of
profit. That tagline is settled; see `DESIGN_SYSTEM.md` for why it is worded
that way and for the standard attribution every child product should use.

This site is the front door to the family: it sends people to the actual
products and explains, in one place, why they exist and how they're built.

**The family is eight products.** XUsDemocracy, XUsNotes, XUsCurrency and
XUsMemories are on the site today. XUsPomodoro, XUsCalendar, XUsContacts and
XUsPhotos are not, and should be added.

## Where the design comes from

`xusall_handoff/` holds the original Claude Design handoff this build was
generated from: the `.dc.html` mockups (`XUsAll Landing`, `XUsAll How We
Build`, `XUsAll Design System`, `XUsAll Wordmark`) and the earlier design
prompt in `uploads/xusall-landing-design-prompt.md`. Where the finished
`.dc.html` mockups and the earlier prompt disagreed (typeface, spectrum-bar
speed, the shipped hero treatment), the mockups won, since they represent
the later, iterated decision. `DESIGN_SYSTEM.md` at the project root is the
canonical, ongoing governance doc going forward, not the handoff folder;
update it, not the handoff, as the system evolves.

## Routes

| Path | What it is |
|---|---|
| `/` | The landing page. Hero, four product cards, philosophy/mission, contact. |
| `/how-we-build` | Transparency page: the AI-assisted workflow used to build every XUsAll product, written for a non-technical reader. |
| `contacts.xusall.com` | **The official XUsContacts page** (`app/xuscontacts/page.js`), served on its subdomain by a host rewrite in `next.config.mjs`; `/privacy` there is the privacy policy. `www.xusall.com/xuscontacts` redirects to the subdomain. Product pages always live on `<product>.xusall.com` (Adrian). The app's ask-by-text links this address. The App Store link appears once `PRODUCT_URLS.contacts` is filled in. |
| `memories.xusall.com` | **The official XUsMemories page** (`app/xusmemories/page.js`), same host-rewrite pattern; `/privacy` there serves the privacy policy. `www.xusall.com/xusmemories` redirects to the subdomain. Carries MobileApplication JSON-LD and the Smart App Banner so name searches land here and on the App Store. |
| `/xusmemories/privacy` | XUsMemories privacy policy; the URL on its App Store listing and in the app's About screen, so do not move it. |
| `/xuscontacts/privacy` | XUsContacts privacy policy; the URL on its App Store listing, so do not move it. |

## Conventions

- **Plain CSS in one file** (`app/globals.css`), themed with CSS custom
  properties. Dark only, no `[data-theme]` branching anywhere, unlike
  XUsDemocracy: do not add a light mode or a toggle.
- **The domain lives in exactly one place:** `lib/site.js`. Never hardcode a
  hostname. Product subdomains (`CONTACTS_URL`, `MEMORIES_URL`) live there too, and the shared
  `Header` links absolutely to `SITE_URL`, because it also renders on product
  subdomains where "/" is the product page.
- **Product links live in exactly one place:** `lib/products.js`
  (`PRODUCT_URLS` + the `PRODUCTS` array). It now drives all four places a
  product appears: the cards on the landing page, the footer nav, the
  "N things, so far" line (via `PRODUCT_COUNT_WORD`), and `/llms.txt`. The
  footer and the count used to be hand-written and had already gone stale
  once; do not reintroduce a hardcoded product name, URL, or count anywhere.
  When XUsPomodoro gets its domain, or XUsCurrency or XUsContacts ship, put
  the URL in the empty string in `PRODUCT_URLS` and flip that product's
  `status` to `'live'`. Nothing else needs to change.
- **No em dashes or en dashes anywhere.** Not in copy, comments, docs, or
  commit messages. They read as AI-generated and undermine the site's
  credibility. Rewrite the sentence with a comma, colon, or period instead.
  Check before committing:

  ```bash
  find app components lib . -maxdepth 4 \
    \( -name '*.js' -o -name '*.md' -o -name '*.css' -o -name '*.mjs' \) \
    -not -path '*/node_modules/*' -not -path '*/.next/*' -not -path '*/.git/*' -print0 \
    | xargs -0 grep -n '[—–]' | sort -u
  ```

  This machine's `grep` is ugrep 7.5.0, which silently matches nothing under
  the equivalent `-rn --include` form. Use the `find | xargs grep` form
  above, and sanity-check it against a known hit first:

  ```bash
  printf 'em—dash\n' | grep -n '[—–]'    # must print a match
  ```
- **Voice:** quiet confidence, plainspoken, a little idealistic, never
  corporate. Short sentences, no exclamation marks, no emoji. Full detail in
  `DESIGN_SYSTEM.md`.
- Comments explain *why*, not what. The design system doc is where the
  visual rules live; don't duplicate them in code comments beyond a pointer.

## SEO and crawler surface

| Route | File | Notes |
|---|---|---|
| `/robots.txt` | `app/robots.js` | Allows everything. Names AI agents explicitly, since being found by them is the point. |
| `/sitemap.xml` | `app/sitemap.js` | Two URLs, hand-written since the site has two pages. |
| `/llms.txt` | `app/llms.txt/route.js` | Plain-text site map for language models, llmstxt.org convention. Derives its product list from `lib/products.js`. |
| `/manifest.webmanifest` | `app/manifest.js` | |
| `/icon.svg`, `/apple-icon` | `app/icon.svg`, `app/apple-icon.js` | |
| `/opengraph-image` | `app/opengraph-image.js` | Deliberately not `runtime = 'edge'`, see the comment in the file. Don't add it. |

**Things that will bite you if you forget them:**

- The root layout sets `alternates.canonical: '/'` and a title template
  (`%s | XUsAll`). `/how-we-build` sets its own bare title and canonical;
  any new page must do the same or it will silently declare the home page
  as its canonical and inherit "How We Build | XUsAll" as a broken title.
- `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` env vars are read
  in `app/layout.js` and omitted entirely when unset. No placeholder is ever
  committed. **Neither needs to be set for this site**: the whole
  `xusall.com` domain (which covers `www.xusall.com` too) is already
  verified in both Search Console and Bing Webmaster Tools via a DNS-level
  domain property, from when `notes.xusall.com` and `democracy.xusall.com`
  were verified. The meta-tag/env-var path exists only for a future
  property that needs its own, separate per-URL verification.

## Environment

| Variable | Required? | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_HOST` | Optional | Overrides the canonical host. Defaults to `www.xusall.com`. |
| `GOOGLE_SITE_VERIFICATION` | Optional | Emits the Search Console meta tag. |
| `BING_SITE_VERIFICATION` | Optional | Emits the `msvalidate.01` meta tag for Bing Webmaster Tools. |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Linked to the Vercel project `xusall` and deployed to
`https://www.xusall.com`. `npx vercel --prod` ships a new production
deployment from this directory.

## Next moves

0. **A public business phone line for XUsAll** (important, soon; Adrian
   2026-09-16). A permanent number that forwards to his cell, from Google
   Voice or a cheap VoIP service, so his personal number is never public.
   It blocks the Apple EU Digital Services Act trader declaration for the
   XUsAll LLC developer account, which needs a public phone and email
   (email: hello@xusall.com). Apple removes apps from the EU App Store if
   the declaration is missing, and it will be useful for the company
   generally.
1. **Product links.** Drop XUsPomodoro's subdomain, XUsCurrency's Play Store
   URL, and XUsContacts's App Store URL into `lib/products.js` the moment
   each is available, per the TODOs in that file. XUsPomodoro is built and
   sitting in `~/projects/xuspomodoro`; it only needs
   `pomodoro.xusall.com` pointed at a Vercel project.
2. **Sitemap submission.** The domain is already verified in Search Console
   and Bing Webmaster Tools (see the SEO section above), so the only
   remaining step is submitting `https://www.xusall.com/sitemap.xml` to
   both, which needs a console login and isn't something to script.
3. **Check search indexing** (Adrian, 2026-09-16). Something held up
   indexing for xusall.com before. In Search Console and Bing Webmaster
   Tools:
   - Confirm www.xusall.com, contacts.xusall.com and memories.xusall.com
     are indexed.
   - Submit the sitemap.
   - Use URL Inspection on memories.xusall.com. Its canonical is the
     subdomain, and the www path redirects there.

   Also check that a search for "XUsMemories" finds the page.

   **Widened 2026-09-18:** Adrian thinks none of his sites are listing
   properly in Google. Run the same check on every live site, not just
   xusall.com: adrianrozo.com, calendar, democracy, notes and pomodoro
   .xusall.com, plus contacts and memories. For each, confirm it is
   verified in Search Console, has a sitemap and robots.txt that allow
   crawling, has no stray noindex, and has a sensible title, description
   and canonical.
4. **OG image asset review.** `app/opengraph-image.js` and
   `app/apple-icon.js` render the wordmark in flat color rather than the
   animated spectrum-gradient treatment used on the live site, since that
   effect doesn't translate to a static raster image. Revisit if a designer
   wants a hand-crafted static version instead.

## Status block

At the end of a session, and in the same commit as any feature-sized piece of
work, update the `STATUS:BEGIN`/`STATUS:END` block at the top of
`CLAUDE.md`: the date, the current commit hash, and the
State / Blocked / Next lines. Keep it to those few lines; the detail belongs in
the prose below it.

`~/Projects/PROJECT_STATUS.md` is generated from that block, so it is the only
place this project's status needs to be written. Nothing is copied anywhere
else by hand.
