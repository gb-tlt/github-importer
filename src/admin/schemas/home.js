export const homeSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'headline', label: 'Headline (before gold text)', type: 'text' },
      { key: 'headlineGold', label: 'Headline Gold Text', type: 'text' },
      { key: 'subtext', label: 'Subtext', type: 'textarea' },
      { key: 'ctaPrimary', label: 'Primary CTA Text', type: 'text' },
      { key: 'ctaSecondary', label: 'Secondary CTA Text', type: 'text' },
      { key: 'heroImage', label: 'Hero Image', type: 'image', path: 'images/hero' },
    ],
  },
  logos: {
    label: 'Logos Strip',
    fields: [
      { key: 'label', label: 'Label Text', type: 'text' },
      { key: 'logos', label: 'Company Logos', type: 'objectArray', fields: [
        { key: 'name', label: 'Company Name', type: 'text' },
        { key: 'src', label: 'Logo Image', type: 'image', path: 'images/logos' },
      ]},
    ],
  },
  philosophy: {
    label: 'Philosophy Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'heading', label: 'Heading (before emphasis)', type: 'text' },
      { key: 'headingEmphasis', label: 'Heading Emphasis (italic gold)', type: 'text' },
      { key: 'pillars', label: 'Pillars', type: 'objectArray', fields: [
        { key: 'title', label: 'Pillar Title', type: 'text' },
        { key: 'text', label: 'Pillar Text', type: 'textarea' },
      ]},
      { key: 'image', label: 'Philosophy Image', type: 'image', path: 'images/philosophy' },
    ],
  },
  problem: {
    label: 'Problem Statement',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { key: 'cards', label: 'Problem Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Card Title', type: 'text' },
        { key: 'text', label: 'Card Text', type: 'textarea' },
      ]},
      { key: 'closingText', label: 'Closing Highlight (start)', type: 'text' },
      { key: 'closingBody', label: 'Closing Body Text', type: 'textarea' },
      { key: 'closingHighlight', label: 'Closing Highlight (end)', type: 'text' },
    ],
  },
  fiveLayers: {
    label: 'Five Layers Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'textarea' },
    ],
  },
  services: {
    label: 'Services Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { key: 'linkText', label: 'Compare Link Text', type: 'text' },
    ],
  },
  testimonials: {
    label: 'Testimonials Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
    ],
  },
  aboutTlt: {
    label: 'About TLT Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle (italic)', type: 'text' },
      { key: 'paragraphs', label: 'Body Paragraphs', type: 'array' },
      { key: 'quote', label: 'Quote', type: 'textarea' },
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
