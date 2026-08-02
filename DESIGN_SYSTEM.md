# XUsAll design system, v1

The rules every XUsAll property is built from. One canvas, one typeface, one
spectrum. Everything here exists because it earns its place. If a decision
isn't in this document, default to doing less.

This is the parent system. XUsDemocracy and XUsNotes each have their own,
adapted palette; this is the origin they descend from and the one that should
govern any new XUsAll property (XUsCurrency, XUsContacts, and beyond) unless
that product has a specific reason to diverge.

Tokens live in code at `app/globals.css` (`:root`). This document explains
the *why*; the CSS is the source of truth for the *values*.

---

## Brand

**Wordmark:** `XUsAll`, set in the system typeface at weight 500, tracking
`-0.04em` to `-0.045em` depending on size. There is no logomark and none
should be drawn. Child products extend the same construction: XUsDemocracy,
XUsNotes, XUsCurrency, XUsContacts.

**X is a variable.** The X is the open slot. It stands first for *connect*,
but it's deliberately open: it can also mean *empower*, *support*, *teach*,
*inform*, *protect*. Some verb, applied to us, applied to all. The spectrum
(below) is the visual form of that variable: the full range of what X can be,
and of the people it's for.

**Product marks:** each product takes one or two colors from the spectrum for
its own "X" and/or a keyword in its name. "Us" always stays white. Colors are
drawn from the palette below, never invented per-product.

- **X**Us**Democracy**: X red, Democracy blue
- **X**Us**Notes**: X and Notes both violet
- **X**Us**Currency**: X green, Currency yellow
- XUsContacts: no color assigned yet; plain white is a valid choice when a
  product doesn't need one

---

## Color

Dark only. There is no light theme and no theme toggle, on this site or any
XUsAll property built from this system. True black is the canvas; near-black
is the only elevation.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#000000` | Page canvas. True black. |
| `--surface` | `#0A0C10` | Cards, elevated blocks. |
| `--surface-hover` | `#101319` | Card hover state. |
| `--border` | `rgba(255,255,255,0.08)` | Hairline rules, card borders. |
| `--border-hover` | `rgba(255,255,255,0.16)` | Hover/active border state. |
| `--text-primary` | `#F5F6F8` | Headlines, links. Never pure `#FFF`. |
| `--text-secondary` | `#9BA1AC` | Body copy. |
| `--text-tertiary` | `#7C8492` | Labels, meta, footer. Clears 4.5:1 on black at any size. |
| `--status-live` | `#4ADE80` | "Live" status pill. |
| `--status-dev` | `#FFB74D` | "In development" status pill. |

There is **no single brand accent color.** The accent *is* the spectrum, and
it appears at most three times on any page: the 1px top bar, the X in a
wordmark, and at most one hairline rule per page. Never as a fill behind
text, never on a headline, never as a background wash.

**The spectrum**, always in this order, always looping back to the first
color so a gradient has no seam:

```
#FF4D6D → #FF9F43 → #FFD93D → #4ADE80 → #38BDF8 → #A78BFA → (repeat #FF4D6D)
```

Slightly desaturated on purpose. Sophisticated, not toy-like.

---

## Type

One family: **Helvetica Neue**, falling back to Arial, then the system sans
stack. Weights **400 and 500 only** (the "How we build" tool callouts are the
one deliberate exception, at 600, to read as a distinct label rather than
body text). Tight tracking at display sizes does most of the "expensive"
work. Sentence case everywhere except eyebrows.

| Role | Weight | Tracking | Leading | Example size |
|---|---|---|---|---|
| Display (wordmark-scale) | 500 | -0.045em | 0.95 | `clamp(64px, 15vw, 184px)` |
| Statement | 500 | -0.03em | 1.15 | `clamp(24px, 3.4vw, 38px)` |
| Section lead | 400 | -0.015em | 1.55 | `clamp(19px, 2.1vw, 24px)` |
| Heading (h2/h3) | 500 | -0.02em to -0.03em | 1.1-1.3 | 21-46px |
| Body | 400 | normal | 1.6-1.7 | 16-17px, max measure ~66ch |
| Meta | 400 | normal | 1.5 | 13-14px |
| Eyebrow | 500 | +0.12em, uppercase | 1 | 11px |

---

## Space, layout, shape

- **8px scale:** 8 / 16 / 24 / 32 / 48 / 64 / 96 / 120 / 160. Nothing off the
  scale.
- **Layout:** content column max `1120px`. Gutters `24px` mobile, `48px`
  desktop (`clamp(24px, 5vw, 48px)`). Section padding `120-160px` desktop,
  `80-96px` mobile (`clamp(80px, 11vw, 150px)`).
- **Separation:** sections are divided by a 1px `--border` rule, never a
  heavier divider and never a background-color change.
- **Radius:** `6px` small controls, `12px` cards, pill (`999px`) for status
  and tags. Never fully square, never oversized "bubbly" corners.
- **Elevation:** borders do the separation work, not shadows. No shadows, no
  glows, no glassmorphism, no gradients on surfaces, no gradient-filled
  headline text.

---

## Components

- **Product / content card:** `--surface` background, `--border` hairline,
  `12px` radius, `28-40px` internal padding. Hover: border brightens to
  `--border-hover`, surface lifts to `--surface-hover`, `translateY(-2px)`.
  No scale, no shadow, no glow. A card in a not-yet-available state drops to
  `0.86` opacity and swaps its action link for plain meta text; it should
  still read as *coming*, never as broken or disabled-gray.
- **Status pill:** pill radius, 1px border in the status color at low
  opacity, small filled dot, uppercase 11px label. `--status-live` (green)
  or `--status-dev` (amber) only.
- **Links:** there are **no filled buttons** anywhere in the brand. The
  strongest available call to action is a hairline-underlined text link. A
  plain nav link just changes color on hover, from `--text-secondary` to
  `--text-primary`.
- **Principle / definition row:** two-column grid (label, then body),
  separated by hairline rules top and bottom. Used for principles and any
  short definition list. Not icon cards; no icons anywhere in the system.

---

## Motion and accessibility

- **The spectrum bar:** 1px tall, fixed to the very top of the viewport,
  above everything (`z-index` max). Translated on transform only, on a
  seamless **60 second** linear loop. It should be barely perceptible.
  Frozen to a static gradient (not removed) under `prefers-reduced-motion:
  reduce`.
- **Everything else:** `150-250ms` on `cubic-bezier(0.4, 0, 0.2, 1)`. One
  fade-and-rise (12-16px of travel) for section entrances, once, no
  re-trigger, driven by an `IntersectionObserver`. Anchor navigation scrolls
  smoothly. Nothing bounces, nothing springs.
- **No rotating or typewriter text animation**, anywhere. Show possibilities
  statically and trust the reader.
- **Accessibility floor:** WCAG AA on all text. `--text-tertiary` is chosen
  specifically because it clears 4.5:1 on black at any size, so don't
  introduce a dimmer tertiary without re-checking contrast. Focus is a 1px
  `--text-primary` outline offset `4px`, never a spectrum-colored ring.
  Semantic landmarks, real headings, no layout shift caused by the animated
  bar.

---

## Voice

Quiet confidence. Plainspoken, unsentimental, a little idealistic, never
corporate and never preachy. Short sentences. Second person for product
copy talking to a user; first person plural sparingly, for brand-voice
moments only. No exclamation marks, no em dashes or en dashes, no emoji.

**Write like this:**
- "Four things, so far. All free. More coming."
- "Your address is never stored."
- "Free first. Funded by tips and a vision."

**Never write like this:**
- "Revolutionizing how you connect."
- "A seamless, cutting-edge experience."
- "Empowering users everywhere!"

When a decision isn't covered here, choose the quieter option. Restraint is
the system.
