export const resourcesSchema = {
  hero: {
    label: 'Hero Section',
    fields: [
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
    ],
  },
  assessments: {
    label: 'Assessments',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Assessment Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'cta', label: 'CTA Text', type: 'text' },
        { key: 'note', label: 'Note', type: 'text' },
        { key: 'icon', label: 'Icon (lucide name)', type: 'text' },
      ]},
    ],
  },
  categories: {
    label: 'Topic Categories',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Categories', type: 'objectArray', fields: [
        { key: 'tag', label: 'Tag', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'desc', label: 'Description', type: 'text' },
        { key: 'color', label: 'Color Classes', type: 'text' },
      ]},
    ],
  },
  articles: {
    label: 'Articles',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'items', label: 'Articles', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'desc', label: 'Description', type: 'textarea' },
        { key: 'category', label: 'Category', type: 'text' },
        { key: 'color', label: 'Color Classes', type: 'text' },
        { key: 'read', label: 'Read Time', type: 'text' },
        { key: 'date', label: 'Date', type: 'text' },
      ]},
    ],
  },
  newsletter: {
    label: 'Newsletter Section',
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'subtitle', label: 'Subtitle', type: 'text' },
      { key: 'note', label: 'Bottom Note', type: 'text' },
    ],
  },
}
