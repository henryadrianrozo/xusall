# XUsAll Design System

XUsAll is a from-scratch design system built directly from the founder's brand brief (no existing codebase, Figma file, or slide deck was attached — everything here is originated from that conversation, not pulled from a pre-existing product). If a Figma file, GitHub repo, or product deck for XUsAll exists, attach it and this system should be reconciled against it.

## Company context
XUsAll makes products for a "people first, before profits" vision — democratic, accessible, human-good technology. The name plays on **X as a variable**: it stands for *connect*, *unite*, *empower*, *inspire* — whatever the moment calls for — while ultimately being the connective tissue between everything the company builds. This is a foundational, app-agnostic system: the base every other XUsAll product should be built on top of.

## Visual foundations
- **Palette**: black-first. True black (`--black`) and near-black surfaces (`--surface-1/2/3`) carry the whole UI; white is reserved for the wordmark and primary text. Two punchy accents sit on top: **violet** (`--accent-primary`, #7c4dff) for primary actions/focus, and a **spring green** (`--accent-secondary`, #2ee6a6) as a secondary highlight/success color. Never more than these two accents at once.
- **Type**: Helvetica Neue everywhere (display and body share one family — `--font-display`/`--font-body`), set with tight/negative tracking at large sizes. Simple, iconic, unfussy. Monospace (`--font-mono`, system stack) appears only for code-like content. **No webfont file needed** — Helvetica Neue is a system font stack (`"Helvetica Neue", Arial, -apple-system, sans-serif"`), matching the brand's "so simple it's iconic" direction without adding a network font dependency.
- **Spacing**: 4px base unit, scale of 4/8/12/16/24/32/48/64/96/128 (`--space-1` … `--space-10`).
- **Corner radii**: small and restrained — `--radius-sm` 6px, `--radius-md` 10px (default control/card radius), `--radius-lg` 16px, `--radius-pill` for buttons/tags/switches. Never fully square, never oversized/rounded "bubbly" corners.
- **Elevation**: borders do the separation work, not shadows — shadows barely read on black. Default surfaces get a 1px `rgba(255,255,255,.08)` border; `elevated` surfaces add a soft dark drop shadow (`--shadow-elevation-2/3`) sparingly (toasts, dialogs, popovers).
- **Focus/glow**: a 3px violet (or green) glow ring (`--shadow-glow-violet`/`--shadow-glow-green`) replaces default browser focus outlines — this is the system's signature "punch."
- **Backgrounds**: flat black, no gradients, no textures or patterns, no grain. Clean and empty is the point.
- **Motion**: fast and quiet — 120–280ms, standard ease-out curves (`--ease-standard`, `--ease-out`). Opacity/color/background transitions only; no bounce, no springs, no big transforms. Hover = lighten one step (e.g. `--accent-primary` → `--accent-primary-hover`) or add a surface tint; press = darken one step (`--accent-primary-active`); disabled = 40% opacity.
- **Borders**: hairline, low-opacity white (`--border-subtle` 8% → `--border-strong` 24%), never colored except to indicate error (red) or an active accent state (violet).
- **Transparency/blur**: reserved for modal scrims (`rgba(0,0,0,.7)` + backdrop blur) — not used decoratively elsewhere.
- **Imagery**: none supplied. If/when product photography or illustration is added, keep it cool-toned or true black-and-white to match the palette — avoid warm/golden-hour imagery, which fights the black/white/violet/green identity.

## Content fundamentals
- **Voice**: direct, confident, unembellished — mirrors the Helvetica Neue visual style. Short sentences. No corporate hedging, no forced enthusiasm.
- **Casing**: sentence case for UI copy and headings (never Title Case, never ALL CAPS except tiny badges/eyebrows, which are intentionally uppercase + wide-tracked as a small system accent).
- **Person**: second person ("you") for product copy talking to the user; first person plural ("we") sparingly, for brand-voice moments only.
- **Emoji**: none. The brand's punctuation is color and typography, not emoji.
- **Tone examples**: "Here's what's moving today." / "This can't be undone." / "Connect. Empower. Inspire." — plain statements, no exclamation points, trusts the reader.

## Iconography
No icon codebase was provided. Icons are sourced from **Lucide** (CDN: `https://unpkg.com/lucide@latest`), matching the brand's thin-stroke, geometric, no-fill style — the closest open icon set to a Helvetica-Neue-flat aesthetic. The brand direction is **simplistic, minimalistic outline icons only** — no filled/solid icon styles, no duotone, no emoji. Consumed through the `Icon` component (`components/core/Icon.jsx`), never hand-drawn or emoji-substituted. Flag: this is a **substitution**, not a brand-provided icon set — swap in real icon assets if/when provided.

## No logo provided
No logomark was supplied. Everywhere a mark would go, the wordmark **"XUsAll"** is set in bold Helvetica Neue instead. Do not invent a logomark.

## Font substitution flag
Helvetica Neue is used as a **system font stack**, not an embedded webfont (it isn't freely licensable, and it's already present on Apple platforms). Non-Apple/non-Arial-fallback platforms will render the Arial fallback. If pixel-identical Helvetica Neue rendering across all platforms matters, provide licensed font files and they'll be wired into `tokens/typography.css` as `@font-face`.

## Contents
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing + radius + shadow + motion), `base.css` (resets), all imported by root `styles.css`.
- `guidelines/` — foundation specimen cards: color (accent/neutral/semantic), type (display/body+mono), spacing, radius/elevation, brand (wordmark, "X as variable").
- `assets/` — reserved for real logos/imagery once provided; currently empty.
- `components/core/` — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Card`.
- `components/forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`.
- `components/feedback/` — `Toast`, `Tooltip`, `Dialog`.
- `components/navigation/` — `Tabs`.
- `ui_kits/app-shell/` — a generic product surface (login → sidebar-nav dashboard → settings) demonstrating every component together. Not a real named XUsAll product — there wasn't one specified — swap in real screens once a product is defined.
- `SKILL.md` — Claude-Code-compatible skill wrapper for this system.

### Intentional additions
Since no source defined a component inventory, the standard primitive set (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip) was authored from scratch, plus an `Icon` wrapper to consume the Lucide substitution consistently.
