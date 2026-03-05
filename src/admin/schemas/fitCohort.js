export const fitCohortSchema = {
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
      { key: 'schedule', label: 'Schedule', type: 'text' },
      { key: 'nextCohort', label: 'Next Cohort Date', type: 'text' },
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
  timeline: {
    label: 'Timeline / Structure',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Timeline Items', type: 'objectArray', fields: [
        { key: 'week', label: 'Week Label', type: 'text' },
        { key: 'label', label: 'Short Label', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'layers', label: 'Sub-items (optional)', type: 'array', placeholder: 'Week detail...' },
      ]},
    ],
  },
  features: {
    label: 'Features Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Feature Cards', type: 'objectArray', fields: [
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
      { key: 'price', label: 'Price Text', type: 'text' },
      { key: 'includes', label: 'Includes Text', type: 'textarea' },
      { key: 'excludes', label: 'Excludes Text', type: 'text' },
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
