export const globalSchema = {
  stats: {
    label: 'Stats Bar',
    fields: [
      { key: 'items', label: 'Stats', type: 'objectArray', fields: [
        { key: 'value', label: 'Value', type: 'text', placeholder: 'e.g. 500+' },
        { key: 'label', label: 'Label', type: 'text', placeholder: 'e.g. Leaders Coached' },
      ]},
    ],
  },
  footer: {
    label: 'Footer',
    fields: [
      { key: 'tagline', label: 'Tagline', type: 'text' },
      { key: 'email', label: 'Contact Email', type: 'text' },
      { key: 'responseTime', label: 'Response Time', type: 'text' },
      { key: 'linkedinUrl', label: 'LinkedIn URL', type: 'text' },
      { key: 'instagramUrl', label: 'Instagram URL', type: 'text' },
      { key: 'copyright', label: 'Copyright Text', type: 'text' },
    ],
  },
}
