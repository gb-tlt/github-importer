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
  problem: {
    label: 'Problem Statement',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { key: 'cards', label: 'Problem Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Card Title', type: 'text' },
        { key: 'text', label: 'Card Text', type: 'textarea' },
      ]},
      { key: 'summary', label: 'Summary Text (HTML okay)', type: 'textarea' },
    ],
  },
  fiveLayers: {
    label: 'Five Layers Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'textarea' },
    ],
  },
  programs: {
    label: 'Programs Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { key: 'linkText', label: 'Compare Link Text', type: 'text' },
    ],
  },
  differentiation: {
    label: 'Differentiation Table',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
      { key: 'colLeft', label: 'Left Column Header', type: 'text' },
      { key: 'colRight', label: 'Right Column Header', type: 'text' },
      { key: 'rows', label: 'Comparison Rows', type: 'table', columns: ['Traditional', 'Integration'] },
    ],
  },
  testimonials: {
    label: 'Testimonials Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' },
    ],
  },
  leadMagnet: {
    label: 'Lead Magnet Section',
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
