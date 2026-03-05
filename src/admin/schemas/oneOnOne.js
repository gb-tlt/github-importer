export const oneOnOneSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'titleGold', label: 'Title Gold Part', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'highlights', label: 'Highlight Bullets', type: 'array', placeholder: 'Add highlight...' },
      { key: 'ctaPrimary', label: 'Primary CTA Text', type: 'text' },
      { key: 'ctaSecondary', label: 'Secondary CTA Text', type: 'text' },
    ],
  },
  priceBox: {
    label: 'Price Box',
    fields: [
      { key: 'price', label: 'Price', type: 'text' },
      { key: 'details', label: 'Details', type: 'text' },
      { key: 'note', label: 'Limit Note', type: 'text' },
      { key: 'ctaText', label: 'CTA Text', type: 'text' },
    ],
  },
  idealFor: {
    label: 'Ideal For',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'items', label: 'Items', type: 'array', placeholder: 'Add item...' },
    ],
  },
  notFor: {
    label: 'Not For',
    fields: [
      { key: 'items', label: 'Items', type: 'array', placeholder: 'Add item...' },
    ],
  },
  sessionPhases: {
    label: 'Session Phases',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'items', label: 'Phases', type: 'objectArray', fields: [
        { key: 'phase', label: 'Phase Label', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'items', label: 'Items', type: 'array', placeholder: 'Phase item...' },
      ]},
      { key: 'footnote', label: 'Footnote', type: 'text' },
    ],
  },
  modalities: {
    label: 'Modalities',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'items', label: 'Modality Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Description', type: 'text' },
        { key: 'items', label: 'Sub-items', type: 'array', placeholder: 'Item...' },
        { key: 'icon', label: 'Icon (lucide name)', type: 'text' },
      ]},
    ],
  },
  inclusions: {
    label: "What's Included",
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'packageTitle', label: 'Package Title', type: 'text' },
      { key: 'items', label: 'Inclusion Items', type: 'objectArray', fields: [
        { key: 'label', label: 'Label (bold)', type: 'text' },
        { key: 'desc', label: 'Description', type: 'text' },
      ]},
    ],
  },
  investment: {
    label: 'Investment',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'payment', label: 'Payment Options', type: 'text' },
      { key: 'disclaimer', label: 'Disclaimer', type: 'textarea' },
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
