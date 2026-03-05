export const contactSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
    ],
  },
  form: {
    label: 'Form Section',
    fields: [
      { key: 'title', label: 'Form Title', type: 'text' },
      { key: 'subtitle', label: 'Form Subtitle', type: 'text' },
      { key: 'submitText', label: 'Submit Button Text', type: 'text' },
    ],
  },
  sidebar: {
    label: 'Sidebar',
    fields: [
      { key: 'email', label: 'Email', type: 'text' },
      { key: 'responseTime', label: 'Response Time', type: 'text' },
      { key: 'linkedinUrl', label: 'LinkedIn URL', type: 'text' },
      { key: 'instagramUrl', label: 'Instagram URL', type: 'text' },
    ],
  },
  confidentiality: {
    label: 'Confidentiality Note',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'text', label: 'Text', type: 'textarea' },
    ],
  },
}
