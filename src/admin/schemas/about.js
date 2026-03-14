export const aboutSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
    ],
  },
  observed: {
    label: 'What We Observed Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'problems', label: 'What Keeps Breaking', type: 'objectArray', fields: [
        { key: 'bold', label: 'Bold Lead', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
      ]},
      { key: 'works', label: 'What Actually Works', type: 'objectArray', fields: [
        { key: 'bold', label: 'Bold Lead', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
      ]},
      { key: 'closing', label: 'Closing Highlight', type: 'text' },
      { key: 'closingText', label: 'Closing Body', type: 'textarea' },
    ],
  },
  philosophy: {
    label: 'Philosophy Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Label', type: 'text' },
      { key: 'items', label: 'Philosophy Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
      ]},
    ],
  },
  founder: {
    label: 'Founder Section',
    fields: [
      { key: 'image', label: 'Photo', type: 'image', path: 'images/about' },
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'role', label: 'Role / Title', type: 'text' },
      { key: 'detailLabel', label: 'Detail Label', type: 'text' },
      { key: 'detailText', label: 'Detail Text', type: 'textarea' },
    ],
  },
  lineage: {
    label: 'Lineage Section',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'people', label: 'Teachers / Mentors', type: 'objectArray', fields: [
        { key: 'name', label: 'Name', type: 'text' },
        { key: 'desc', label: 'Tradition / Discipline', type: 'text' },
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
