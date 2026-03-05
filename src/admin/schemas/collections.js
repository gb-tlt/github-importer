export const collectionsSchema = {
  services: {
    label: 'Services',
    fields: [
      { key: 'id', label: 'ID', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'tagline', label: 'Tagline', type: 'text' },
      { key: 'badge', label: 'Badge', type: 'text' },
      { key: 'badgeColor', label: 'Badge Color', type: 'text' },
      { key: 'price', label: 'Price', type: 'text' },
      { key: 'duration', label: 'Duration', type: 'text' },
      { key: 'format', label: 'Format', type: 'text' },
      { key: 'bestFor', label: 'Best For', type: 'text' },
      { key: 'keyBenefit', label: 'Key Benefit', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'features', label: 'Features', type: 'array', placeholder: 'Feature...' },
      { key: 'link', label: 'Link', type: 'text' },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    fields: [
      { key: 'id', label: 'ID', type: 'text' },
      { key: 'quote', label: 'Quote', type: 'textarea' },
      { key: 'author', label: 'Author / Title', type: 'text' },
      { key: 'company', label: 'Company', type: 'text' },
      { key: 'program', label: 'Program (fit-cohort, one-on-one, life-coaching)', type: 'text' },
    ],
  },
  faq: {
    label: 'FAQs',
    sections: {
      fitCohort: 'FIT Cohort FAQs',
      oneOnOne: 'One-on-One FAQs',
      lifeCoaching: 'Life Coaching FAQs',
      contact: 'Contact FAQs',
    },
    itemFields: [
      { key: 'q', label: 'Question', type: 'text' },
      { key: 'a', label: 'Answer', type: 'textarea' },
    ],
  },
  layers: {
    label: 'Five Layers',
    fields: [
      { key: 'id', label: 'ID', type: 'text' },
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'sanskrit', label: 'Sanskrit Name', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'fragmented', label: 'Fragmented State', type: 'text' },
      { key: 'integrated', label: 'Integrated State', type: 'text' },
      { key: 'icon', label: 'Icon Key', type: 'text' },
    ],
  },
  credentials: {
    label: 'Credentials',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea' },
      { key: 'icon', label: 'Icon (lucide name)', type: 'text' },
    ],
  },
}
