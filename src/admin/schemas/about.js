export const aboutSchema = {
  hero: {
    label: 'Hero',
    fields: [
      { key: 'badge', label: 'Eyebrow Label', type: 'text' },
      { key: 'title', label: 'Headline', type: 'textarea' },
      { key: 'subtitle', label: 'Sub-headline (italic gold)', type: 'textarea' },
      { key: 'closing', label: 'Closing Paragraph', type: 'textarea' },
      { key: 'image', label: 'Hero Photo (Gowtham)', type: 'image', path: 'images/about' },
    ],
  },
  founder: {
    label: 'The Founder / Story',
    fields: [
      { key: 'label', label: 'Section Label', type: 'text' },
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'role', label: 'Role', type: 'text' },
      { key: 'portrait', label: 'Sticky Portrait Photo', type: 'image', path: 'images/about' },
      { key: 'chapters', label: 'Story Beats', type: 'objectArray', fields: [
        { key: 'label', label: 'Beat Label', type: 'text' },
        { key: 'paragraphs', label: 'Paragraphs (HTML allowed)', type: 'array' },
        { key: 'practiceLabel', label: 'Practice List Label (optional)', type: 'text' },
        { key: 'practiceItems', label: 'Practice Items (optional)', type: 'array' },
        { key: 'quote', label: 'Quote Box (optional)', type: 'textarea' },
        { key: 'image', label: 'Beat Image (optional)', type: 'image', path: 'images/about' },
        { key: 'imageCaption', label: 'Image Caption (optional)', type: 'text' },
      ]},
    ],
  },
  threeDepths: {
    label: 'Three Depths of Work',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'depths', label: 'Depths (3)', type: 'objectArray', fields: [
        { key: 'number', label: 'Depth Number (e.g. 01)', type: 'text' },
        { key: 'audience', label: 'Audience / Title', type: 'text' },
        { key: 'tagline', label: 'Italic Tagline', type: 'text' },
        { key: 'body', label: 'Body Text', type: 'textarea' },
        { key: 'stat', label: 'Stats Line (orange)', type: 'text' },
      ]},
    ],
  },
  credentials: {
    label: 'Training and Credentials',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph (italic)', type: 'textarea' },
      { key: 'items', label: 'Modality Rows', type: 'objectArray', fields: [
        { key: 'title', label: 'Modality Title', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
      ]},
    ],
  },
  lineage: {
    label: 'Teachers and Mentors',
    fields: [
      { key: 'label', label: 'Eyebrow Label', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'subtitle', label: 'Section Subtitle', type: 'textarea' },
      { key: 'spiritualHeading', label: 'Spiritual Block Heading', type: 'text' },
      { key: 'spiritual', label: 'Spiritual Ground (3)', type: 'objectArray', fields: [
        { key: 'name', label: 'Name', type: 'text' },
        { key: 'tradition', label: 'Tradition / Discipline', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
        { key: 'photo', label: 'Photo', type: 'image', path: 'images/gurus' },
      ]},
      { key: 'teachersHeading', label: 'Teachers Block Heading', type: 'text' },
      { key: 'teachers', label: 'Teachers and Mentors', type: 'objectArray', fields: [
        { key: 'name', label: 'Name', type: 'text' },
        { key: 'tradition', label: 'Tradition / Discipline', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
        { key: 'photo', label: 'Photo', type: 'image', path: 'images/gurus' },
        { key: 'logo', label: 'Treat as Logo (square, contain)', type: 'text' },
      ]},
    ],
  },
  cta: {
    label: 'Final CTA',
    fields: [
      { key: 'heading', label: 'Heading', type: 'text' },
      { key: 'subtext', label: 'Subtext', type: 'textarea' },
      { key: 'buttonText', label: 'Button Text', type: 'text' },
      { key: 'note', label: 'Note Below CTA', type: 'text' },
    ],
  },
}
