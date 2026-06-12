## Add FAQ Section to Home Page

Append a new FAQ section to `src/pages/Home.jsx`, placed just before the final CTA section (`#final-cta`), using a light cream/warm background to fit the existing alternating section style.

### Content
Five Q&A items provided by the user, covering:
1. What leadership coaching for CXOs means at The Leadership Tattva
2. Who the coaching is designed for
3. How TLT's approach differs (removing clutter vs. adding layers)
4. Outcomes senior leaders can expect
5. Coaching for organizations and leadership teams

### Implementation
- Reuse the existing `FAQAccordion` component (`src/components/ui/FAQAccordion.jsx`) with `dark={false}` for the light theme (white cards on warm background, navy text, gold chevrons).
- Reuse `SectionHeading` for the section title with a small eyebrow label.
- Wrap in a `<section>` with `bg-warm-50` (or white) padding consistent with other Home sections.
- Add an `sr-only` `<h2>` SEO tag matching the pattern used for the other sections ("Frequently Asked Questions About Leadership Coaching").
- Define the 5 FAQ items as a local `const homeFAQ = [...]` array at the top of the Home component (kept inline since these are Home-specific, not part of the shared `faq` collection).

### Structure
- Eyebrow: "FAQs"
- Heading: "Frequently Asked Questions"
- Subtitle: short line about senior leadership coaching
- `<FAQAccordion items={homeFAQ} />`

### Files changed
- `src/pages/Home.jsx` — add the new section + FAQ data array (no other files modified)

No new components, data files, or schema changes needed.