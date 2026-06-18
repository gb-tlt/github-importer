# What Is Integration Coaching? — New Section on /the-work

Insert a new section directly after the Hero (before "Arc 1, The Challenge") on `src/pages/TheWork.jsx`.

## Layout

A two-column split on desktop, stacking on mobile.

```text
+---------------------------+----------------------------+
| LEFT (text, ~55%)         | RIGHT (diagram, ~45%)      |
|                           |                            |
| Eyebrow: A DEFINITION     |   [ Identity / Purpose ]   |
|                           |          |                 |
| H2: What Is Integration   |   [ Judgment & Values ]    |
|     Coaching?             |          |                 |
|                           |   [    Mind            ]   |
| Gold accent line          |          |                 |
|                           |   [   Energy           ]   |
| Paragraph (provided copy, |          |                 |
| with key phrases —        |   [    Body            ]   |
| "whole human being",      |                            |
| "under pressure" —        |   Caption: The Five Layers |
| highlighted in gold)      |                            |
+---------------------------+----------------------------+
```

## Visual diagram (right column)

A vertical stack of 5 pill-shaped cards, one per layer, in the order Identity/Purpose → Judgment & Values → Mind → Energy → Body (top to bottom, mirroring the layered "human operating system" metaphor used elsewhere on the site).

- Each pill: navy-950 border, warm-50 background, small gold icon dot on the left, layer name in Cinzel.
- Subtle vertical connector line (1px, gold-400 at 30% opacity) running through all five, conveying integration.
- Soft drop shadow + 3D float on hover (matches `floatAnim` pattern already in `index.css`).
- ScrollReveal wraps the diagram for the standard fade-in-up.

## Styling

- Section background: `bg-warm-50` (beige) — creates a calm pause between the dark hero and the white Arc 1 section.
- Vertical padding: `py-24 md:py-28`, max width `1100px`.
- Eyebrow: `font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400`.
- H2: `font-display text-navy-950 text-3xl md:text-4xl leading-tight`.
- Gold accent line: 60px × 2px, `bg-gold-400`, margin-bottom 6.
- Body paragraph: Source Serif Pro, `text-navy-950/80`, `leading-[1.85]`, ~1.05rem. Wrap "whole human being" and "under pressure" in `<span className="text-gold-400 font-semibold">`.

## Content (verbatim from user)

- Eyebrow: `A DEFINITION`
- Title: `What Is Integration Coaching?`
- Paragraph: `Integration Coaching is a leadership development approach that works with the whole human being, not just leadership skills. It helps leaders align their body, nervous system, emotions, judgment, values, and purpose so they can show up consistently under pressure. Unlike traditional executive coaching, integration coaching addresses the deeper patterns that shape leadership behaviour.`

## Technical details

- File touched: `src/pages/TheWork.jsx` (single file; insert new `<section>` between the existing Hero `</section>` at line ~192 and the `{/* Arc 1, The Challenge */}` comment at line ~194).
- Defaults block: add a new `definition` key inside the existing `defaults` object so the section is editable later via the CMS (matching the page's existing `c('section','key')` pattern). No schema/admin wiring changes in this pass — content uses the `defaults` fallback exactly the way every other section on the page does until a CMS schema entry is added.
- No new dependencies. Uses existing Tailwind tokens, `ScrollReveal`, and the icon image paths already in `public/images/icons/` (peace-alignment, decision-making, mental-peace, flow-state, physical-vitality) for the 5 pills.
- No changes to routing, Helmet, or any other section.

## Verification

After the edit: run `npm run build` and visually confirm via preview that the section sits between the navy hero and the white Arc 1 section, the diagram aligns vertically with the text on desktop, and stacks cleanly on mobile.