export const fitCohortSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'ctaText', label: 'CTA Button Text', type: 'text' },
    ],
  },
  problem: {
    label: 'Problem Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'paragraphs', label: 'Paragraphs (HTML allowed)', type: 'array', placeholder: 'Add paragraph...' },
    ],
  },
  outcomes: {
    label: 'Outcomes Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
    ],
  },
  journey: {
    label: 'Journey / Timeline',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'phases', label: 'Phases', type: 'objectArray', fields: [
        { key: 'phaseLabel', label: 'Phase Label', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'body', label: 'Body (HTML allowed)', type: 'textarea' },
      ]},
    ],
  },
  numbers: {
    label: 'Numbers Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'items', label: 'Stats', type: 'objectArray', fields: [
        { key: 'value', label: 'Number/Value', type: 'text' },
        { key: 'label', label: 'Label', type: 'text' },
        { key: 'sublabel', label: 'Sub-label', type: 'text' },
      ]},
    ],
  },
  who: {
    label: 'Who Is This For',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'items', label: 'Bullet Points', type: 'array', placeholder: 'Add bullet point...' },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'items', label: 'Testimonials', type: 'objectArray', fields: [
        { key: 'text', label: 'Quote Text', type: 'textarea' },
        { key: 'role', label: 'Role/Title', type: 'text' },
        { key: 'company', label: 'Company', type: 'text' },
      ]},
    ],
  },
  investment: {
    label: 'Investment',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'price', label: 'Price', type: 'text' },
      { key: 'note', label: 'Note Text', type: 'textarea' },
    ],
  },
  cta: {
    label: 'Final CTA',
    fields: [
      { key: 'heading', label: 'Heading', type: 'text' },
      { key: 'body', label: 'Body Text', type: 'textarea' },
      { key: 'buttonText', label: 'Button Text', type: 'text' },
    ],
  },
}
