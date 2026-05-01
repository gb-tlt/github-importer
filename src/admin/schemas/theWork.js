export const theWorkSchema = {
  hero: {
    label: 'Hero',
    fields: [
      { key: 'badge', label: 'Persona Sub-headline', type: 'text' },
      { key: 'lines', label: 'Opening Lines', type: 'array' },
      { key: 'pivot', label: 'Pivot Line (italic gold)', type: 'text' },
      { key: 'closing', label: 'Closing Paragraph', type: 'textarea' },
    ],
  },
  arc1: {
    label: 'Arc 1:The Challenge',
    fields: [
      { key: 'eyebrow', label: 'Section Eyebrow', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'showsUpHeading', label: 'Sub-heading: Shows Up In Room', type: 'text' },
      { key: 'showsUp', label: 'Symptom Cards (3)', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
      { key: 'underneathHeading', label: 'Sub-heading: What’s Underneath', type: 'text' },
      { key: 'underneath', label: 'Driver Cards (3)', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
      { key: 'dataHeading', label: 'Sub-heading: Data Behind Pattern', type: 'text' },
      { key: 'data', label: 'Data Blobs (3)', type: 'objectArray', fields: [
        { key: 'stat', label: 'Stat (e.g. ~35%)', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
      { key: 'dataNote', label: 'Sources (data)', type: 'textarea' },
      { key: 'patternsHeading', label: 'Sub-heading: Six Patterns', type: 'text' },
      { key: 'patterns', label: 'Pattern Cards (6)', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
      { key: 'patternsNote', label: 'Sources (patterns)', type: 'textarea' },
    ],
  },
  arc2: {
    label: 'Arc 2:The Root Cause',
    fields: [
      { key: 'eyebrow', label: 'Section Eyebrow', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'traps', label: 'System Traps (6)', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
      { key: 'note', label: 'Sources', type: 'textarea' },
    ],
  },
  arc3: {
    label: 'Arc 3:The Reframe',
    fields: [
      { key: 'eyebrow', label: 'Section Eyebrow', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'paragraphs', label: 'Body Paragraphs', type: 'array' },
      { key: 'pullQuotes', label: 'Pull Quotes (3)', type: 'array' },
      { key: 'checklistTitle', label: 'Checklist Title', type: 'text' },
      { key: 'checklist', label: 'Checklist Items', type: 'array' },
    ],
  },
  arc4: {
    label: 'Arc 4:The Solution',
    fields: [
      { key: 'eyebrow', label: 'Section Eyebrow', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'intro2', label: 'Second Intro Paragraph', type: 'textarea' },
      { key: 'pillars', label: '5 Pillars', type: 'objectArray', fields: [
        { key: 'tab', label: 'Tab Label (short, for pill nav)', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
      { key: 'closingHeading', label: 'Closing Heading', type: 'text' },
      { key: 'closingBody', label: 'Closing Body', type: 'textarea' },
      { key: 'note', label: 'Sources', type: 'textarea' },
    ],
  },
  arc5: {
    label: 'Arc 5:The Promise (Testimonial)',
    fields: [
      { key: 'eyebrow', label: 'Section Eyebrow', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'quote', label: 'Quote (use blank line for paragraph break)', type: 'textarea' },
      { key: 'attribution', label: 'Attribution', type: 'text' },
      { key: 'detail', label: 'Detail (e.g. years experience)', type: 'text' },
    ],
  },
  arc6: {
    label: 'Arc 6:What We Stand For',
    fields: [
      { key: 'eyebrow', label: 'Section Eyebrow', type: 'text' },
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'principles', label: 'Principle Cards', type: 'objectArray', fields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
      ]},
    ],
  },
  cta: {
    label: 'CTA:Audit + Clarity Call',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' },
      { key: 'intro', label: 'Intro Paragraph', type: 'textarea' },
      { key: 'auditTitle', label: 'Audit Title', type: 'text' },
      { key: 'auditDesc', label: 'Audit Description', type: 'textarea' },
      { key: 'auditOutcomes', label: 'You Will Leave With (bullets)', type: 'array' },
      { key: 'auditClosing', label: 'Audit Closing (italic)', type: 'textarea' },
      { key: 'auditCta', label: 'Audit Button Text', type: 'text' },
      { key: 'auditNote', label: 'Audit Privacy Note', type: 'textarea' },
      { key: 'callBridge', label: 'Bridge to Clarity Call', type: 'textarea' },
      { key: 'callCta', label: 'Clarity Call Button Text', type: 'text' },
    ],
  },
}
