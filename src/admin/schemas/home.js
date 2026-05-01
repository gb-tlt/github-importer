export const homeSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'headline', label: 'Headline', type: 'text' },
      { key: 'headlineGold', label: 'Headline Gold Text (optional)', type: 'text' },
      { key: 'subtext', label: 'Subtext', type: 'textarea' },
      { key: 'ctaPrimary', label: 'Primary CTA Text', type: 'text' },
      { key: 'ctaSecondary', label: 'Secondary CTA Text', type: 'text' },
    ],
  },
  logos: {
    label: 'Logos Strip (inside Hero)',
    fields: [
      { key: 'label', label: 'Label Text', type: 'text' },
      { key: 'logos', label: 'Company Logos', type: 'objectArray', fields: [
        { key: 'name', label: 'Company Name', type: 'text' },
        { key: 'src', label: 'Logo Image', type: 'image', path: 'images/logos' },
      ]},
    ],
  },
  presence: {
    label: 'Presence Section',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'heading', label: 'Heading (before emphasis)', type: 'text' },
      { key: 'headingEmphasis', label: 'Heading Emphasis (italic orange)', type: 'text' },
      { key: 'headingTail', label: 'Heading Tail (after emphasis)', type: 'text' },
      { key: 'sub', label: 'Sub-headline', type: 'textarea' },
      { key: 'seoHeadline', label: 'SEO Headline (hidden h3)', type: 'text' },
      { key: 'cards', label: 'Presence Cards', type: 'objectArray', fields: [
        { key: 'quote', label: 'Quote', type: 'text' },
        { key: 'body', label: 'Body (HTML allowed for <strong>)', type: 'textarea' },
      ]},
    ],
  },
  leadershipMatters: {
    label: 'Your Leadership Matters Section',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'heading', label: 'Section Heading', type: 'text' },
      { key: 'quote', label: 'Quote', type: 'textarea' },
      { key: 'cards', label: 'Path Cards (01-06)', type: 'objectArray', fields: [
        { key: 'title', label: 'Card Title', type: 'text' },
        { key: 'text', label: 'Card Text', type: 'textarea' },
      ]},
    ],
  },
  services: {
    label: 'Services Section',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'title', label: 'Section Title (SEO headline)', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { key: 'linkText', label: 'Compare Link Text', type: 'text' },
      { key: 'clarityPrompt', label: 'Clarity-call Helper Line', type: 'textarea' },
    ],
  },
  testimonials: {
    label: 'Testimonials Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'textarea' },
    ],
  },
  stats: {
    label: 'Animated Stats Section',
    fields: [
      { key: 'items', label: 'Stats', type: 'objectArray', fields: [
        { key: 'value', label: 'Number (integer, e.g. 10000)', type: 'text' },
        { key: 'suffix', label: 'Suffix (e.g. + or %)', type: 'text' },
        { key: 'label', label: 'Label', type: 'text' },
      ]},
    ],
  },
  aboutTlt: {
    label: 'About TLT Section',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'paragraphs', label: 'Body Paragraphs', type: 'array' },
      { key: 'hook', label: 'Hook Line (italic)', type: 'textarea' },
      { key: 'linkText', label: 'Link Text', type: 'text' },
    ],
  },
  assessment: {
    label: 'Assessment Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'ctaText', label: 'CTA Button Text', type: 'text' },
      { key: 'note', label: 'Note below CTA', type: 'text' },
    ],
  },
  cta: {
    label: 'Final CTA',
    fields: [
      { key: 'heading', label: 'Heading', type: 'text' },
      { key: 'subtext', label: 'Subtext', type: 'textarea' },
      { key: 'buttonText', label: 'Button Text', type: 'text' },
    ],
  },
}
