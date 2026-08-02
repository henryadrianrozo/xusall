# XUsAll — Landing Site Design Prompt

> Paste everything below the line into Claude Design (or Claude Code). It is written to be run as a single prompt.

---

Build the landing site for **XUsAll** — the parent brand and home page for a family of free, privacy-respecting software products. This is the site that lives at `xusall.com`.

Before you write any component code, **create a design system for XUsAll** (`DESIGN_SYSTEM.md` + a tokens file). XUsAll doesn't have one yet; its child products (XUsDemocracy, XUsNotes) do. The parent system should feel like the origin those descended from — same DNA, more restraint. Reference the live sites for visual continuity:

- https://democracy.xusall.com
- https://notes.xusall.com

---

## 1. Who XUsAll is (use this to inform tone, not to paste verbatim)

XUsAll builds quality software and gives it away — free or low cost, to anyone, on any device. Android, iPhone, browser, wherever people already are.

The operating principles:

- **People over profits.** Users are not the product. Nothing is sold, tracked, or brokered.
- **Transparent and accessible.** Open about how things work, and free of the paywalls, dark patterns, and engagement traps that define most consumer software.
- **Democratic where applicable.** Where a product touches civic life or collective decisions, it's built to serve everyone equally, not a segment that pays.
- **Privacy as a default, not a setting.**
- **Simplicity, trusted.** The interface is clean because the user is intelligent. If something is intuitive, it does not need to be explained. Restraint is the design philosophy.

**The X is a variable.** First and foremost it stands for **connect** — abstractly, not literally. The internet was built to connect people, to bring us together, to let us help one another. But X is deliberately open: it can also stand for *empower*, *support*, *teach*, *inform*, *protect*. The point is that the same idea can be applied to any context to produce a better outcome for people. `X` `Us` `All` — some verb, applied to us, applied to all.

The through-line, and the words to build the voice around: **connection, people, progress.**

This is not a startup pitching growth. It's a project that exists because someone cares about what technology does to society, and thinks it can be built differently. The tone should be quiet confidence — plainspoken, unsentimental, a little idealistic, never corporate and never preachy. Short sentences. No exclamation marks. No "revolutionizing," "empowering users," "seamless," or "cutting-edge."

---

## 2. Visual direction

**Dark only. There is no light theme.** Do not build a theme toggle, do not respect `prefers-color-scheme: light`, do not ship light-mode CSS. Pure black canvas.

The site should read as *sophisticated and expensive* despite being almost entirely black, white text, and whitespace. That comes from typography, spacing discipline, and restraint in motion — not from decoration. Think of the way a well-made instrument looks: nothing extra, everything intentional.

### Color tokens

```
--bg:              #000000   /* page canvas — true black */
--surface:         #0A0C10   /* cards, elevated blocks (matches XUsDemocracy theme color) */
--surface-hover:   #101319
--border:          rgba(255, 255, 255, 0.08)
--border-hover:    rgba(255, 255, 255, 0.16)

--text-primary:    #F5F6F8   /* headlines, near-white, never pure #FFF */
--text-secondary:  #9BA1AC   /* body copy */
--text-tertiary:   #5F6672   /* labels, meta, footer */

--status-live:     #4ADE80
--status-dev:      #FFB74D
```

There is **no single brand accent color.** The accent *is* the spectrum — see below. Use it with extreme discipline: the top bar, and at most one or two other whisper-quiet moments (a hairline under a section marker, or the hover state of a single primary link). If it appears more than three times on the page, you've overused it.

### The spectrum

A restrained, slightly desaturated rainbow — sophisticated, not toy-like:

```
#FF4D6D → #FF9F43 → #FFD93D → #4ADE80 → #38BDF8 → #A78BFA → #FF4D6D
```

Conceptually this is the visual form of the variable: the full range of what X can be, and of the people it's for.

### The top bar (specific, get this exactly right)

- A **1px tall** bar, fixed to the very top of the viewport, full width, above everything, `z-index` max.
- Filled with the spectrum gradient at ~300% width, animated by `translateX` on a linear infinite loop.
- **Slow.** 20–24 seconds per cycle. It should be barely perceptible — the kind of movement you only notice on the second visit. If it reads as "animated," it's too fast.
- Seamless loop: repeat the first color as the last stop so there is no visible seam.
- Animate `transform` only. GPU-composited, no layout thrash.
- Under `prefers-reduced-motion: reduce`, freeze it into a static gradient. Do not remove it.

### Typography

- Inter (or Geist) — one family, weights 400/500/600 only.
- Display sizes get **tight tracking** (`-0.02em` to `-0.03em`) and tight leading (1.05–1.15). This single choice does most of the "sophisticated" work.
- Body: 16–17px, leading 1.6, `--text-secondary`.
- Eyebrow labels: 11–12px, `500`, `+0.12em` tracking, uppercase, `--text-tertiary`. Use sparingly as section markers.
- Max measure on any paragraph: ~66 characters.

### Space and layout

- Content column max ~1120px, generous gutters (min 24px mobile, 48px+ desktop).
- Vertical rhythm on an 8px scale. Section padding should feel *too generous* — 120–160px between major sections on desktop, 80–96px on mobile.
- Hairline `--border` rules to separate sections. No heavy dividers, no drop shadows, no glows, no glassmorphism, no gradient text on headlines.

### Motion

- Everything else on the page: 150–250ms, `cubic-bezier(0.4, 0, 0.2, 1)`.
- One subtle fade-and-rise on scroll for section entrances (12–16px of travel, once, no re-trigger). Nothing more.
- All motion respects `prefers-reduced-motion`.

---

## 3. Page structure

A single page. Four sections plus footer. Fixed minimal header.

### Header

Wordmark `XUsAll` at left (500 weight, tight tracking). Right side: anchor links — `Products` · `Philosophy` · `Contact`. Transparent over the page; on scroll past ~80px, gain a near-black backdrop blur and a `--border` bottom hairline. Sits below the 1px spectrum bar. On mobile, collapse to just the wordmark — the page is short enough that nav is optional.

### Hero

Large, quiet, mostly empty space. Roughly 80vh, content sitting slightly above center.

Give me the headline as a treatment of the variable idea. My preferred direction:

> **X is a variable.**
> *(sub)* It stands for connect. And for everything connection makes possible.
>
> *(supporting line, --text-tertiary)* Connect us all. Empower us all. Support us all. Teach us all.
> Free software for everyone, built for people instead of profit.

Design the supporting line so the leading verb is the emphasized part — consider a subtle typographic device where the verb slot is visually distinguished (a slightly brighter weight, or the one place a spectrum tint is allowed). **Do not build a rotating/typewriter text animation.** Show the possibilities statically; trust the reader.

Below: one quiet primary link — `See what we've built ↓` — anchoring to Products. No filled buttons in the hero.

Also produce **two alternate hero headline treatments** as commented-out blocks in the code so I can swap them:

1. `Connection. People. Progress.` as a three-beat display line, with "X is a variable — it stands for connect" as the sub.
2. `The internet was built to connect us. We build like that's still true.`

### Current Products

Eyebrow: `CURRENT PRODUCTS`. Short intro line: *Four things, so far. All free. More coming.*

**Four cards, 2×2 on desktop, stacked on mobile.** Cards are `--surface` with a `--border` hairline, generous internal padding (32px+), rounded ~12px. On hover: border brightens to `--border-hover`, surface lifts to `--surface-hover`, 1–2px translateY. No scale, no shadow, no glow.

Each card contains, in order: product name (500 weight), a status pill, a one-line description, a platform tag, and a trailing action link.

| Product | Status | Description | Platform | Link |
|---|---|---|---|---|
| **XUsDemocracy** | Live | Know who represents you. Your elected officials, your upcoming elections, your registration deadline. Nonpartisan, and your address is never stored. | Web | `democracy.xusall.com` |
| **XUsNotes** | Live | A fast, private scratchpad that lives in your browser. Nothing uploaded, nothing synced, nothing seen. | Web | `notes.xusall.com` |
| **XUsCurrency** | In development | *(write a placeholder line in brand voice — currency tools, made plain and free.)* | Android | — |
| **XUsContacts** | In development | *(write a placeholder line in brand voice — contact management that respects your address book.)* | Android | — |

For the two in-development cards: **no link**, reduced opacity on the card body, status pill in `--status-dev`, and in place of the action link, the text *Currently in testing — link goes here at release.* Leave a clearly-marked `TODO` comment with an empty `href` constant at the top of the file so I can drop the Play Store URLs in one place later. The cards must not look broken or disabled-gray — they should read as *coming*, and stay handsome.

Live cards use a `--status-live` pill and open in a new tab.

### Mission & Philosophy

Keep these **together in one section** — splitting them into two would dilute a page this short and make the site feel padded. Eyebrow: `WHAT WE'RE DOING`.

Open with a short statement paragraph, then 4–5 principles in a restrained grid or a vertical list with hairline separators. Not icon cards — no icons anywhere on this site.

Draft copy, edit for rhythm as needed:

**Opening:**
> Most software is built to extract something from you — your attention, your data, your money, usually all three. It doesn't have to work that way. XUsAll builds tools that are simply useful, and gives them away. The internet is the most powerful instrument we've ever had for helping one another. We'd like to use it that way.

**Principles:**

- **People over profits.** You are not the product. Nothing here is sold, brokered, or optimized to keep you scrolling. Everything is free or low cost, and it stays that way.
- **Privacy by default.** Not a setting you have to find. XUsNotes never leaves your browser. XUsDemocracy never stores your address. That's the standard.
- **Transparent and accessible.** No paywalls in front of things you need, no dark patterns, no dependence on a subscription to keep working. Open about how it's built and what it does.
- **Democratic where it counts.** When software touches civic life or collective decisions, it should serve everyone equally — not the people who can pay for a better version.
- **Simple, because you're capable.** Clean interfaces, no hand-holding, nothing over-explained. If it's intuitive, it doesn't need instructions.

**Closer (set larger, as a pull-quote — this is the emotional beat of the page):**
> X is a variable. It can stand for anything worth doing — connect, empower, support, teach, protect. Applied to us. Applied to all. That's the whole idea, and it scales as far as we can take it.

### Contact

Small, quiet section. One line — *Questions, ideas, or something we should build? Write to us.* — and a mailto link to **xusalldevelopment@gmail.com**, set at display-ish size so it reads as intentional rather than as a footer scrap.

Everything XUsAll makes is free and tip-supported. If you want to leave a placeholder for that, keep it to a single unobtrusive line: *Free forever. Supported by tips.* — no button, no dollar signs, no ask.

### Footer

`© 2026 XUsAll` · the same four product links, plain text · the contact email. `--text-tertiary`, small, one hairline rule above. Nothing else.

---

## 4. Technical requirements

- Next.js (App Router) + TypeScript + Tailwind, matching the existing XUs* stack. Single page, no client-side routing needed.
- Design tokens defined once as CSS custom properties and mapped into the Tailwind theme — not hardcoded hex values scattered through components.
- Static, no runtime data fetching. Deploys to Vercel with zero config.
- Fully responsive, 360px → 1920px. Test the 2×2 card grid carefully at tablet widths.
- Full metadata: title, description, Open Graph and Twitter cards, `theme-color: #000000`. Generate an OG image consistent with the site (black, wordmark, spectrum hairline).
- Semantic HTML, real landmarks, visible focus states (a `--text-primary` outline, not a spectrum one), WCAG AA contrast on all text. `--text-tertiary` must only be used at sizes/weights where it still passes.
- Lighthouse 100 on accessibility and best practices. No layout shift from the animated bar.

## 5. Do not

- Do not add a light theme or theme toggle.
- Do not use icons, illustrations, emoji, or stock imagery anywhere.
- Do not use gradient-filled text, glows, glassmorphism, or drop shadows.
- Do not add testimonials, stats counters, logo walls, newsletter capture, cookie banners, or analytics.
- Do not make the spectrum bar taller than 1px or faster than 20s.
- Do not add a rotating-word animation to the hero.
- Do not write marketing copy that over-explains. When in doubt, cut the sentence.

## 6. Deliverables

1. `DESIGN_SYSTEM.md` — tokens, type scale, spacing scale, component rules, motion rules, voice and tone guidance. Written so it can govern future XUsAll properties, not just this page.
2. The complete, working landing site.
3. The two alternate hero treatments left as commented blocks.
4. A single clearly-marked constants block at the top of the products file holding all four product URLs, so links can be swapped without touching markup.
