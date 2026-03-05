export const lifeCoachingSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
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
      { key: 'duration', label: 'Duration', type: 'text' },
      { key: 'note', label: 'Note', type: 'text' },
      { key: 'ctaText', label: 'CTA Text', type: 'text' },
    ],
  },
  inflectionPoints: {
    label: 'Inflection Points',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'items', label: 'Inflection Points', type: 'objectArray', fields: [
        { key: 'quote', label: 'Quote', type: 'text' },
        { key: 'desc', label: 'Description', type: 'text' },
      ]},
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
  dimensions: {
    label: 'Dimensions Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'items', label: 'Dimension Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
        { key: 'icon', label: 'Icon (lucide name)', type: 'text' },
      ]},
    ],
  },
  inclusions: {
    label: "What's Included",
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'programTitle', label: 'Program Title', type: 'text' },
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
      { key: 'range', label: 'Typical Range Text', type: 'text' },
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
