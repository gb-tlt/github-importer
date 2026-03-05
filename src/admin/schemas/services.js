export const servicesSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
    ],
  },
  programs: {
    label: 'Programs Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
    ],
  },
  disclaimer: {
    label: 'Disclaimer Note',
    fields: [
      { key: 'title', label: 'Note Title', type: 'text' },
      { key: 'text', label: 'Note Text', type: 'textarea' },
    ],
  },
  comparison: {
    label: 'Comparison Table',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'rows', label: 'Comparison Rows', type: 'table', columns: ['Dimension', 'FIT Cohort', 'One-on-One', 'Life Coaching'] },
    ],
  },
  decisionFramework: {
    label: 'Decision Framework',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Decision Items', type: 'objectArray', fields: [
        { key: 'title', label: 'Dimension', type: 'text' },
        { key: 'fit', label: 'FIT Cohort', type: 'text' },
        { key: 'one', label: 'One-on-One', type: 'text' },
        { key: 'life', label: 'Life Coaching', type: 'text' },
      ]},
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
