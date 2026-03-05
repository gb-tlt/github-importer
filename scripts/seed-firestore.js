/**
 * Seed Firestore with current website content.
 * Run once: node scripts/seed-firestore.js
 *
 * Requires: VITE_FIREBASE_* env vars in .env file
 */
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { config } from 'dotenv'
config()

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// ─── Content Documents (one per page) ────────────────────────────────────────

const content = {
  global: {
    stats: {
      items: [
        { value: '500+', label: 'Leaders Coached' },
        { value: '15+', label: 'Years Experience' },
        { value: '50+', label: 'Global Organizations' },
        { value: '6', label: 'Modalities Integrated' },
      ],
    },
    footer: {
      tagline: 'Deep work for leaders who want to integrate, not just perform.',
      email: 'gowtham@theleadershiptattva.com',
      responseTime: 'Response within 24-48 hours',
      linkedinUrl: '#',
      instagramUrl: '#',
      copyright: '\u00A9 2026 The Leadership Tattva. All rights reserved.',
    },
  },
  home: {
    hero: {
      badge: 'Integration Coaching for Senior Leaders',
      headline: 'What If Pressure Made You ',
      headlineGold: 'Stronger?',
      subtext: 'Most leaders fragment under pressure\u2014their body betrays them, their mind goes blank, their presence collapses. It doesn\u2019t have to be this way. I help senior leaders rewire so pressure becomes power.',
      ctaPrimary: 'Book a Discovery Session',
      ctaSecondary: 'Explore Programs',
    },
    problem: {
      title: 'The Real Problem No One Talks About',
      subtitle: "You're brilliant in calm. But when real pressure hits, something breaks.",
      cards: [
        { title: 'Your Body Betrays You', text: 'Tension floods in. Breathing gets shallow. Your posture collapses. The body remembers every past failure and re-enacts it under scrutiny.' },
        { title: 'Your Mind Goes Blank', text: 'You had the perfect response prepared. But in the moment, words vanish. You over-explain, ramble, or freeze. The brilliant strategist disappears.' },
        { title: 'Your Presence Collapses', text: "The room feels your fragmentation. Your team senses it. The board sees it. You look composed outside, but you're drowning inside." },
      ],
    },
    fiveLayers: {
      title: 'The Five Layers of Integration',
      subtitle: 'Based on the Pancha Kosha framework from Yoga Sutras, adapted for modern leadership. We work at every layer, not just the surface.',
    },
    programs: {
      title: 'Three Pathways to Integration',
      subtitle: 'Same methodology. Different formats. All three are powerful\u2014which is the right fit for your situation?',
      linkText: 'Compare All Programs',
    },
    differentiation: {
      title: 'This Is Not Traditional Executive Coaching',
      subtitle: 'Most coaching scratches the surface. Integration goes to the foundation.',
      colLeft: 'Traditional Executive Coaching',
      colRight: 'Integration Coaching',
      rows: [
        ['Focuses on skills, behaviors, communication', 'Focuses on body, energy, nervous system, values, identity'],
        ['Works on what you DO (surface)', 'Works on how you ARE (foundation)'],
        ['Mostly talk-based, cognitive', 'Multi-modal: somatic, energy, psychological, spiritual'],
        ['30-45 minute sessions, often monthly', '60-120 minute sessions, intensive work'],
        ['Generic curriculum applied to all', 'Fully customized to YOUR fragmentation pattern'],
        ['Avoids pressure (calm environment only)', 'Uses pressure as training ground'],
        ['Professional but distant relationship', 'Deep trust, vulnerability required, direct access'],
      ],
    },
    testimonials: {
      title: 'What Leaders Say',
      subtitle: 'Real transformations from real leaders. Names anonymized for confidentiality.',
    },
    leadMagnet: {
      badge: 'Free Assessment',
      title: 'Take the Leadership Integration Audit',
      subtitle: '20 questions. 5 minutes. Discover where you fragment across the Five Layers and receive personalized integration practices.',
      ctaText: 'Start the Free Audit',
      note: 'No spam. Just clarity on your leadership pattern.',
    },
    cta: {
      heading: 'Ready to Stop Fragmenting?',
      subtext: "Book a 45-minute clarity call. We'll map your fragmentation pattern and I'll tell you honestly whether this is the right path for you.",
      buttonText: 'Book a Discovery Session',
    },
  },
  about: {
    hero: { badge: 'About', title: 'The Man Behind the Method', subtitle: 'From corporate fragmentation to helping leaders integrate under pressure' },
    story: {
      title: 'My Story: From Fragmentation to Integration',
      paragraphs: [
        "I spent many years in corporate leadership roles\u2014leading operations, strategy, and more. On paper, I was succeeding. Inside, I was fragmenting.",
        "I made solid decisions when there was time. I was fairly articulate in meetings with not-so-big-leaders. I could lead in calm. But when real pressure hit\u2014scrutiny, crisis decisions, high-stakes presentations to clients, vendors\u2014something broke. My body would tighten. My mind would blank. My presence would collapse. I looked composed on the outside, but I was drowning inside.",
        "Slowly, the pressure seeped into my relationship back home with my wife\u2014I was becoming an annoying husband, an irritated father. I could see my health, happiness, and personal fulfillment slowly slipping away from my hands.",
        "I tried everything: I quit corporate, built a farm with cows and natural farming. I listened to books, podcasts, audio books, interviews. I explored mindfulness techniques, some form of therapy. Frankly, all these helped, but they didn\u2019t fix the core issue. I was still fragmenting under pressure.",
        "Then I discovered body-based work, yoga therapy, energy healing, yoga sutras, Mahabharata, and trauma-informed coaching. I learned that my fragmentation wasn\u2019t happening only at the behavioral level\u2014it was happening at the foundational levels: body, energy, nervous system, emotional layer, in my identity, and my spiritual level too.",
        "When I addressed each one of these slowly over time, everything changed. My body stopped betraying me. My mind stayed clear under pressure. My decisions became grounded in judgment, not reaction. I didn\u2019t just learn techniques\u2014I rewired my operating system.",
      ],
      pullQuote: 'With practice, these days, pressure makes me more calm, sharp, intuitive and powerful\u2014all while being fully aligned and authentic to myself, nurturing my family and being aligned to business goals.',
      closing: 'If I can do it, every leader can do it. Every leader deserves an uncompromising, honourable and joyful life. I now help other senior leaders do what I did: stop fragmenting, start integrating. Live a thriving life in every aspect of it.',
      tagline: 'May every tough situation make you stronger from within.',
    },
    credentials: { title: 'Background & Training', subtitle: 'I bring together leadership experience, coaching certifications, and depth modalities to serve senior leaders.' },
    philosophy: {
      title: 'My Coaching Philosophy',
      subtitle: 'These principles guide how I work with leaders.',
      items: [
        { title: 'Integration Over Performance', text: "Most coaching optimizes for performance. I optimize for integration. When you're integrated, presence expands, and performance appears naturally." },
        { title: 'Layer 3 and Deeper, Not Layer 1', text: "I don't teach techniques (Layer 1). I work at Layer 3 and deeper: body, energy, mind, judgment, values, identity, spiritual. When the foundation is solid, techniques emerge organically." },
        { title: 'Pressure Is a Privilege', text: "Pressure isn't the problem. Pressure is a privilege. It reveals where you fragment. I use pressure as a diagnostic tool and as a training ground." },
        { title: 'Multi-Modal Approach', text: "One size doesn't fit all. Some leaders need somatic work. Some need energy healing. Some need psychological processing. I customize the modality to what serves you." },
        { title: 'Honesty Over Politeness', text: "I'll tell you the truth, not what you want to hear. If this work isn't right for you, I'll say so. If you're not ready, I'll say so. Honesty serves you better than niceness." },
        { title: 'Long-Term Rewiring', text: "This isn't a 3-session fix. Integration takes time. I work with leaders who are ready to commit to 3-6 months of deep work. Quick fixes don't rewire operating systems." },
      ],
    },
    personalTouch: { text: 'Outside of coaching, I tend to my farm with cows and natural farming practices. I live with my family and draw deep inspiration from Tiruvannamalai, a sacred site that informs much of my spiritual grounding. Everything I teach, I practice.' },
    cta: { heading: 'Ready to Explore If This Work Fits You?', subtext: "Book a 45-minute clarity call. We'll map your fragmentation pattern and I'll tell you honestly whether this is the right path for you.", buttonText: 'Book Your Clarity Call' },
  },
  contact: {
    hero: { badge: 'Contact', title: "Let's Have a Conversation", subtitle: "Whether you're curious about FIT Cohort, one-on-one coaching, life coaching, or just want to explore what integration means for your leadership, I'm here." },
    form: { title: 'Book a Clarity Call', subtitle: '45 minutes to understand your challenges, explore fit, and answer your questions. No obligation.', submitText: 'Request Clarity Call' },
    sidebar: { email: 'gowtham@theleadershiptattva.com', responseTime: 'Within 24-48 hours', linkedinUrl: '#', instagramUrl: '#' },
    confidentiality: { title: 'Confidentiality', text: 'All conversations are strictly confidential. Your information is never shared. Coaching conversations are protected by professional confidentiality protocols.' },
  },
}

// ─── Collections Documents (shared data) ─────────────────────────────────────

const collections = {
  services: {
    items: [
      { id: 'fit-cohort', title: 'FIT Leadership Cohort', tagline: 'Group-Based Integration for Senior Leaders Who Fragment Under Pressure', badge: 'START HERE', badgeColor: 'primary', price: '1-1.5L + GST', duration: '10 weeks (1-8-1 structure)', format: 'Group (5-8 leaders)', bestFor: 'Directors, VPs, Senior Managers', keyBenefit: 'Peer learning + community', description: 'Group-based transformation with 5-8 senior leaders.', features: ['10-week intensive program (1-8-1 structure)', 'Opening retreat (Week 1) + Closing retreat (Week 10)', '8 weekly group sessions (75-90 min each)', 'Triad accountability (groups of 3)', '1 personal session with Gowtham', 'Peer learning and mirrors', 'Lifetime community access'], link: '/services/fit-cohort' },
      { id: 'one-on-one', title: 'One-on-One Leadership Coaching', tagline: 'Deep, Bespoke Transformation for CXOs & Senior Leaders with Complex Challenges', badge: 'PREMIUM', badgeColor: 'gold', price: '8L + GST', duration: '4 months | 16 sessions', format: 'Premium 1-to-1', bestFor: 'CXOs, Founders (30L+)', keyBenefit: 'Maximum depth, holistic transformation', description: 'Deep, bespoke transformation work.', features: ['16 personalized sessions (60-120 min each)', 'Physiology assessment & blood work (if needed)', 'Emotional healing & trauma work', 'Purpose discovery & alignment', 'WhatsApp access between sessions', 'Optional Tiruvannamalai retreat', 'Post-program 3-month check-in', 'Alumni community access'], link: '/services/one-on-one' },
      { id: 'life-coaching', title: 'Life Coaching', tagline: 'When Leadership Feels Hollow and You Need to Realign Work with Life, Values, and Meaning', badge: 'HOLISTIC', badgeColor: 'primary', price: '4-8L + GST', duration: 'Custom (typically 4 months)', format: 'Custom 1-to-1', bestFor: 'Leaders seeking life alignment', keyBenefit: 'Life realignment + meaning', description: 'Whole-life alignment for leaders at inflection points.', features: ['Custom duration (typically 4 months)', 'Values clarification & purpose discovery', 'Relationship and life rhythm design', 'Existential exploration & meaning-making', 'Life-leadership integration', 'Flexible scheduling'], link: '/services/life-coaching' },
    ],
  },
  testimonials: {
    items: [
      { id: 1, quote: "I had all the answers but kept getting triggered in high-stakes conversations. Gowtham didn't just coach me on communication\u2014he addressed the underlying fragmentation at the body, emotional, and spiritual levels. Now I handle board challenges without collapsing internally. This changed how I show up as a CEO.", author: 'CEO', company: 'SaaS Company (Series B)', program: 'one-on-one' },
      { id: 2, quote: "Worth every rupee. The physiology work alone was game-changing\u2014turns out my fragmentation was connected to sleep deprivation and hormone imbalance. We addressed it holistically: body, energy, purpose, values. The WhatsApp access was invaluable during a board crisis. I've had 5 executive coaches before. This was different.", author: 'Founder', company: 'HealthTech Startup', program: 'one-on-one' },
      { id: 3, quote: "I had tried individual coaching before but it didn't stick. FIT was different. Seeing my fragmentation patterns mirrored in other VPs created instant recognition. The triad accountability kept me practicing between sessions. 10 weeks later, I handle board pressure completely differently.", author: 'VP Engineering', company: 'Global Tech Company', program: 'fit-cohort' },
      { id: 4, quote: "The opening retreat was where everything clicked. Gowtham mapped my exact fragmentation pattern\u2014I freeze under scrutiny and over-explain later. We practiced this in simulations throughout the cohort. By Week 10, pressure no longer made me freeze. It made me sharper.", author: 'Director of Strategy', company: 'Healthcare Startup', program: 'fit-cohort' },
      { id: 5, quote: "I was a 'successful' VP but my marriage was falling apart and I felt dead inside. Life coaching helped me see I had optimized for the wrong things. We redesigned everything: my role, my schedule, my relationship with my wife, my values. 6 months later, I'm alive again.", author: 'VP Product', company: 'B2B SaaS', program: 'life-coaching' },
      { id: 6, quote: "I was skeptical about energy work and spiritual practices. But Gowtham customized everything to what I needed\u2014no woo-woo, just practical tools that worked. The Tiruvannamalai retreat was the most profound 3 days of my career. My leadership fundamentally shifted.", author: 'VP Operations', company: 'Global Consulting Firm', program: 'one-on-one' },
    ],
  },
  faq: {
    fitCohort: [
      { q: "Why Wednesday 5:30 AM IST? That's early!", a: "Intentionally. Senior leaders have packed days. Early morning ensures you show up fresh, before work chaos hits." },
      { q: 'What if I miss a session?', a: "All sessions are recorded, but live attendance is strongly encouraged. The magic happens in real-time peer interaction." },
      { q: 'How big is each cohort?', a: '5-8 leaders maximum. Small enough for deep work and personal attention.' },
      { q: 'Where are retreats held?', a: 'Typically near Bangalore or in quiet retreat centers. Accommodation and meals included.' },
      { q: 'Can my company sponsor my participation?', a: 'Absolutely. We provide invoices and can speak to HR/L&D teams if needed.' },
      { q: 'What happens after the 10 weeks end?', a: 'You transition into the FIT Alumni Community with lifetime access.' },
      { q: 'Is this program confidential?', a: 'Yes. All participants sign confidentiality agreements.' },
      { q: 'How is this different from One-on-One Coaching?', a: 'FIT is group-based with peer learning. One-on-One is bespoke, intensive, and private.' },
    ],
    oneOnOne: [
      { q: 'How is this different from FIT Cohort?', a: 'FIT is group-based. One-on-One is private, intensive, and fully customized.' },
      { q: 'Do I need to do all 16 sessions?', a: 'The 16-session arc is designed for lasting change. We recommend the full journey.' },
      { q: "What's the time commitment?", a: '16 sessions over 4 months, plus inter-session practices (10-20 min/day).' },
      { q: 'Is the Tiruvannamalai retreat required?', a: "No, it's optional. We assess fit during our intake call." },
      { q: 'Can my company sponsor this?', a: 'Absolutely. We provide invoices and can speak to HR/Board.' },
      { q: "What if I'm working with a therapist already?", a: "That's often ideal. Therapy and coaching serve different purposes." },
      { q: 'Why only 6 clients at a time?', a: 'Quality over quantity. Deep presence and availability for each client.' },
      { q: "What's the intake process?", a: '1) Request call. 2) 60-min deep-dive. 3) Engagement details. 4) Schedule Session 1.' },
    ],
    lifeCoaching: [
      { q: 'How is Life Coaching different from Leadership Coaching?', a: 'Leadership coaching focuses on your role. Life coaching focuses on your whole life.' },
      { q: 'Will you tell me whether to quit my job?', a: "No. But I'll help you gain clarity on what YOU truly want." },
      { q: 'Is this therapy?', a: "No, but it's therapeutic. Coaching addresses growth, meaning, and design." },
      { q: 'Do I need to have a "crisis"?', a: 'No. Some come in crisis, others come proactively. Both are valid.' },
      { q: 'Can I do Life Coaching AND Leadership Coaching?', a: 'Sometimes yes. We assess during the exploratory call.' },
      { q: 'How do we structure the sessions?', a: 'Custom. Weekly, biweekly, or intensive blocks based on your needs.' },
      { q: "What if I don't know what I want?", a: "That's exactly why you're here. The first few sessions uncover what you actually want." },
    ],
    contact: [
      { q: 'What is a clarity call?', a: 'A 45-minute conversation to explore your challenges and assess fit. No obligation.' },
      { q: 'What should I prepare?', a: "Come ready to share what's happening in your leadership and where you're fragmenting." },
      { q: 'Will you try to sell me during the call?', a: "No. I'll tell you honestly whether I think this work will help you." },
      { q: 'What happens after the call?', a: "If we both feel it's a good fit, I'll send enrollment details." },
      { q: 'Is there a cost for the clarity call?', a: 'No. The call is free.' },
    ],
  },
  layers: {
    items: [
      { id: 'body', name: 'Body', sanskrit: 'Annamaya Kosha', description: 'Physical intelligence, somatic awareness, nervous system regulation.', fragmented: 'Body tightens, shallow breathing, physical collapse under scrutiny', integrated: 'Grounded, calm, physically present even under pressure', icon: 'body' },
      { id: 'energy', name: 'Energy', sanskrit: 'Pranamaya Kosha', description: 'Vitality, breath, life force management.', fragmented: 'Depleted, scattered energy, burnout cycles', integrated: 'Sustained vitality, clear energetic boundaries', icon: 'energy' },
      { id: 'mind', name: 'Mind', sanskrit: 'Manomaya Kosha', description: 'Emotional processing, mental clarity, cognitive function under pressure.', fragmented: 'Mind blanks, overthinking, emotional flooding', integrated: 'Clear thinking, emotional regulation under pressure', icon: 'mind' },
      { id: 'judgment', name: 'Judgment & Values', sanskrit: 'Vijnanamaya Kosha', description: 'Discernment, decision-making, values alignment.', fragmented: 'Reactive decisions, values-action gap, people-pleasing', integrated: 'Wise discernment, values-aligned leadership', icon: 'judgment' },
      { id: 'identity', name: 'Identity & Spiritual', sanskrit: 'Anandamaya Kosha', description: 'Purpose, meaning, existential grounding.', fragmented: 'Identity crisis, hollow success, existential drift', integrated: 'Unshakeable presence, purpose-driven leadership', icon: 'identity' },
    ],
  },
  credentials: {
    items: [
      { title: 'Leadership Experience', description: "Corporate leadership roles across strategy, operations, and management. I understand the pressure you face because I've lived it.", icon: 'briefcase' },
      { title: 'Coaching Certifications', description: 'ICF-accredited coaching programs. Trained in adult development, leadership psychology, and transformational coaching.', icon: 'award' },
      { title: 'Somatic Training', description: 'Certified Yoga Teacher. Trained in somatic experiencing, breathwork, and body-based trauma work.', icon: 'heart' },
      { title: 'Energy Healing', description: 'Reiki Master well-versed with practical applications for leaders under pressure.', icon: 'zap' },
      { title: 'Depth Psychology', description: 'Trained in Jungian psychology, shadow work, and past-life regression.', icon: 'brain' },
      { title: 'Philosophical Training', description: "Deeply explored Advaita Vedanta teachings, Yoga Sutras. Integration isn't just psychological\u2014it's existential and spiritual.", icon: 'book' },
    ],
  },
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('Seeding Firestore...')

  for (const [id, data] of Object.entries(content)) {
    await setDoc(doc(db, 'content', id), data)
    console.log(`  content/${id} \u2713`)
  }

  for (const [id, data] of Object.entries(collections)) {
    await setDoc(doc(db, 'collections', id), data)
    console.log(`  collections/${id} \u2713`)
  }

  console.log('Done! Firestore seeded successfully.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
