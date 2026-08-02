# XUsAll project brain

Read this first. XUsAll is the parent brand and home page for the XUs*
family of free, privacy-respecting software.

**Live:** https://xusall.com · **Host:** Vercel project `xusall` (not yet
linked, see below) · **Stack:** Next.js 14 App Router, plain CSS, zero UI
dependencies. Static site, no database, no runtime data fetching.

## The mission, in one line

Free software, given away, built for people instead of profit. This site is
the front door to the family: it sends people to the actual products
(XUsDemocracy, XUsNotes, and eventually XUsCurrency and XUsContacts) and
explains, in one place, why they exist and how they're built.

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

## Conventions

- **Plain CSS in one file** (`app/globals.css`), themed with CSS custom
  properties. Dark only, no `[data-theme]` branching anywhere, unlike
  XUsDemocracy: do not add a light mode or a toggle.
- **The domain lives in exactly one place:** `lib/site.js`. Never hardcode a
  hostname.
- **Product links live in exactly one place:** `lib/products.js`
  (`PRODUCT_URLS` + the `PRODUCTS` array that drives the four cards on the
  landing page). When XUsCurrency or XUsContacts ship, add the Play
  Store/App Store URL to the empty string in `PRODUCT_URLS` and flip that
  product's `status` to `'live'` in the `PRODUCTS` array. Nothing else
  needs to change.
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
  committed. Neither is set yet; do that once the domain is verified in
  Search Console and Bing Webmaster Tools.

## Environment

| Variable | Required? | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_HOST` | Optional | Overrides the canonical host. Defaults to `xusall.com`. |
| `GOOGLE_SITE_VERIFICATION` | Optional | Emits the Search Console meta tag. |
| `BING_SITE_VERIFICATION` | Optional | Emits the `msvalidate.01` meta tag for Bing Webmaster Tools. |

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

The domain is already owned but the Vercel project has not been linked or
deployed yet (no `.vercel/` directory exists). Run `npx vercel link` and
`npx vercel --prod` (or push to the connected Git remote) when ready to go
live, then point `xusall.com`'s DNS at Vercel.

## Next moves

1. **Deploy.** Link the Vercel project, connect the domain, ship it.
2. **Play Store / App Store links.** Drop XUsCurrency's and XUsContacts's
   URLs into `lib/products.js` the moment each is available, per the TODOs
   in that file.
3. **Search Console / Bing.** Verify the domain, set the two verification
   env vars in Vercel, redeploy, submit `https://xusall.com/sitemap.xml` to
   both.
4. **OG image asset review.** `app/opengraph-image.js` and
   `app/apple-icon.js` render the wordmark in flat color rather than the
   animated spectrum-gradient treatment used on the live site, since that
   effect doesn't translate to a static raster image. Revisit if a designer
   wants a hand-crafted static version instead.
