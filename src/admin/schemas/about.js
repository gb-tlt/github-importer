export const aboutSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
    ],
  },
  story: {
    label: 'Story Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'image', label: 'Photo', type: 'image', path: 'images/about' },
      { key: 'paragraphs', label: 'Story Paragraphs', type: 'array', placeholder: 'Add a paragraph...' },
      { key: 'pullQuote', label: 'Pull Quote', type: 'textarea' },
      { key: 'closing', label: 'Closing Paragraph', type: 'textarea' },
      { key: 'tagline', label: 'Tagline (gold italic)', type: 'text' },
    ],
  },
  credentials: {
    label: 'Credentials Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
    ],
  },
  philosophy: {
    label: 'Philosophy Section',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Philosophy Items', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
      ]},
    ],
  },
  differentiation: {
    label: 'Differentiation Table',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'colLeft', label: 'Left Column Header', type: 'text' },
      { key: 'colRight', label: 'Right Column Header', type: 'text' },
      { key: 'rows', label: 'Comparison Rows', type: 'table', columns: ['Traditional', 'My Approach'] },
    ],
  },
  personalTouch: {
    label: 'Personal Touch Section',
    fields: [
      { key: 'text', label: 'Text', type: 'textarea' },
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
