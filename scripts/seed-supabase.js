/**
 * Seed Supabase with current website content.
 *
 * Prerequisites:
 *   1. Create two tables in Supabase SQL editor:
 *      CREATE TABLE content (id TEXT PRIMARY KEY, data JSONB NOT NULL);
 *      CREATE TABLE collections (id TEXT PRIMARY KEY, data JSONB NOT NULL);
 *   2. Enable RLS and add policies:
 *      ALTER TABLE content ENABLE ROW LEVEL SECURITY;
 *      ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
 *      CREATE POLICY "Public read" ON content FOR SELECT USING (true);
 *      CREATE POLICY "Auth write" ON content FOR ALL USING (auth.role() = 'authenticated');
 *      CREATE POLICY "Public read" ON collections FOR SELECT USING (true);
 *      CREATE POLICY "Auth write" ON collections FOR ALL USING (auth.role() = 'authenticated');
 *   3. Create admin user in Authentication > Users
 *   4. Create a "media" storage bucket (public)
 *
 * Run once: node scripts/seed-supabase.js
 * Requires: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env
 *           + SUPABASE_SERVICE_ROLE_KEY in .env (for bypassing RLS during seed)
 */
import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
config()

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY
)

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
        "I made solid decisions when there was time. I was fairly articulate in meetings with not-so-big-leaders. I could lead in calm. But when real pressure hit\u2014scrutiny, crisis decisions, high-stakes presentations to clients, vendors\u2014something broke.",
        "Slowly, the pressure seeped into my relationship back home with my wife\u2014I was becoming an annoying husband, an irritated father.",
        "I tried everything: I quit corporate, built a farm with cows and natural farming. Frankly, all these helped, but they didn\u2019t fix the core issue.",
        "Then I discovered body-based work, yoga therapy, energy healing, yoga sutras, Mahabharata, and trauma-informed coaching.",
        "When I addressed each one of these slowly over time, everything changed. My body stopped betraying me. My mind stayed clear under pressure.",
      ],
      pullQuote: 'With practice, these days, pressure makes me more calm, sharp, intuitive and powerful\u2014all while being fully aligned and authentic to myself.',
      closing: 'If I can do it, every leader can do it. Every leader deserves an uncompromising, honourable and joyful life.',
      tagline: 'May every tough situation make you stronger from within.',
    },
    credentials: { title: 'Background & Training', subtitle: 'I bring together leadership experience, coaching certifications, and depth modalities to serve senior leaders.' },
    philosophy: {
      title: 'My Coaching Philosophy',
      subtitle: 'These principles guide how I work with leaders.',
      items: [
        { title: 'Integration Over Performance', text: "Most coaching optimizes for performance. I optimize for integration." },
        { title: 'Layer 3 and Deeper, Not Layer 1', text: "I don't teach techniques (Layer 1). I work at Layer 3 and deeper." },
        { title: 'Pressure Is a Privilege', text: "Pressure isn't the problem. It reveals where you fragment." },
        { title: 'Multi-Modal Approach', text: "One size doesn't fit all. I customize the modality to what serves you." },
        { title: 'Honesty Over Politeness', text: "I'll tell you the truth, not what you want to hear." },
        { title: 'Long-Term Rewiring', text: "This isn't a 3-session fix. Integration takes time." },
      ],
    },
    personalTouch: { text: 'Outside of coaching, I tend to my farm with cows and natural farming practices. Everything I teach, I practice.' },
    cta: { heading: 'Ready to Explore If This Work Fits You?', subtext: "Book a 45-minute clarity call.", buttonText: 'Book Your Clarity Call' },
  },
  contact: {
    hero: { badge: 'Contact', title: "Let's Have a Conversation", subtitle: "Whether you're curious about FIT Cohort, one-on-one coaching, life coaching, or just want to explore what integration means for your leadership, I'm here." },
    form: { title: 'Book a Clarity Call', subtitle: '45 minutes to understand your challenges, explore fit, and answer your questions. No obligation.', submitText: 'Request Clarity Call' },
    sidebar: { email: 'gowtham@theleadershiptattva.com', responseTime: 'Within 24-48 hours', linkedinUrl: '#', instagramUrl: '#' },
    confidentiality: { title: 'Confidentiality', text: 'All conversations are strictly confidential. Your information is never shared.' },
  },
}

// ─── Collections Documents (shared data) ─────────────────────────────────────

const collections = {
  services: {
    items: [
      { id: 'fit-cohort', title: 'FIT Leadership Cohort', tagline: 'Group-Based Integration for Senior Leaders Who Fragment Under Pressure', badge: 'START HERE', badgeColor: 'primary', price: '1-1.5L + GST', duration: '10 weeks (1-8-1 structure)', format: 'Group (5-8 leaders)', bestFor: 'Directors, VPs, Senior Managers', keyBenefit: 'Peer learning + community', description: 'Group-based transformation with 5-8 senior leaders.', features: ['10-week intensive program', 'Opening retreat + Closing retreat', '8 weekly group sessions', 'Triad accountability', '1 personal session with Gowtham', 'Peer learning and mirrors', 'Lifetime community access'], link: '/services/fit-cohort' },
      { id: 'one-on-one', title: 'One-on-One Leadership Coaching', tagline: 'Deep, Bespoke Transformation for CXOs & Senior Leaders', badge: 'PREMIUM', badgeColor: 'gold', price: '8L + GST', duration: '4 months | 16 sessions', format: 'Premium 1-to-1', bestFor: 'CXOs, Founders (30L+)', keyBenefit: 'Maximum depth, holistic transformation', description: 'Deep, bespoke transformation work.', features: ['16 personalized sessions', 'Physiology assessment', 'Emotional healing & trauma work', 'Purpose discovery & alignment', 'WhatsApp access', 'Optional Tiruvannamalai retreat', 'Post-program 3-month check-in', 'Alumni community access'], link: '/services/one-on-one' },
      { id: 'life-coaching', title: 'Life Coaching', tagline: 'When Leadership Feels Hollow and You Need to Realign', badge: 'HOLISTIC', badgeColor: 'primary', price: '4-8L + GST', duration: 'Custom (typically 4 months)', format: 'Custom 1-to-1', bestFor: 'Leaders seeking life alignment', keyBenefit: 'Life realignment + meaning', description: 'Whole-life alignment for leaders at inflection points.', features: ['Custom duration', 'Values clarification & purpose discovery', 'Relationship and life rhythm design', 'Existential exploration', 'Life-leadership integration', 'Flexible scheduling'], link: '/services/life-coaching' },
    ],
  },
  testimonials: {
    items: [
      { id: 1, quote: "I had all the answers but kept getting triggered in high-stakes conversations. Gowtham addressed the underlying fragmentation at the body, emotional, and spiritual levels.", author: 'CEO', company: 'SaaS Company (Series B)', program: 'one-on-one' },
      { id: 2, quote: "Worth every rupee. The physiology work alone was game-changing. I've had 5 executive coaches before. This was different.", author: 'Founder', company: 'HealthTech Startup', program: 'one-on-one' },
      { id: 3, quote: "FIT was different. Seeing my fragmentation patterns mirrored in other VPs created instant recognition. 10 weeks later, I handle board pressure completely differently.", author: 'VP Engineering', company: 'Global Tech Company', program: 'fit-cohort' },
      { id: 4, quote: "The opening retreat was where everything clicked. By Week 10, pressure no longer made me freeze. It made me sharper.", author: 'Director of Strategy', company: 'Healthcare Startup', program: 'fit-cohort' },
      { id: 5, quote: "I was a 'successful' VP but my marriage was falling apart. Life coaching helped me see I had optimized for the wrong things. 6 months later, I'm alive again.", author: 'VP Product', company: 'B2B SaaS', program: 'life-coaching' },
      { id: 6, quote: "I was skeptical about energy work. But Gowtham customized everything. The Tiruvannamalai retreat was the most profound 3 days of my career.", author: 'VP Operations', company: 'Global Consulting Firm', program: 'one-on-one' },
    ],
  },
  faq: {
    fitCohort: [
      { q: "Why Wednesday 5:30 AM IST?", a: "Intentionally. Senior leaders have packed days. Early morning ensures you show up fresh." },
      { q: 'What if I miss a session?', a: "All sessions are recorded, but live attendance is strongly encouraged." },
      { q: 'How big is each cohort?', a: '5-8 leaders maximum.' },
      { q: 'Can my company sponsor my participation?', a: 'Absolutely. We provide invoices and can speak to HR/L&D teams.' },
      { q: 'What happens after the 10 weeks?', a: 'You join the FIT Alumni Community with lifetime access.' },
    ],
    oneOnOne: [
      { q: 'How is this different from FIT Cohort?', a: 'FIT is group-based. One-on-One is private, intensive, and fully customized.' },
      { q: 'Do I need to do all 16 sessions?', a: 'The 16-session arc is designed for lasting change.' },
      { q: 'Why only 6 clients at a time?', a: 'Quality over quantity. Deep presence and availability.' },
    ],
    lifeCoaching: [
      { q: 'How is Life Coaching different from Leadership Coaching?', a: 'Leadership coaching focuses on your role. Life coaching focuses on your whole life.' },
      { q: 'Will you tell me whether to quit my job?', a: "No. But I'll help you gain clarity on what YOU truly want." },
      { q: "What if I don't know what I want?", a: "That's exactly why you're here." },
    ],
    contact: [
      { q: 'What is a clarity call?', a: 'A 45-minute conversation to explore your challenges and assess fit.' },
      { q: 'Is there a cost?', a: 'No. The call is free.' },
    ],
  },
  layers: {
    items: [
      { id: 'body', name: 'Body', sanskrit: 'Annamaya Kosha', description: 'Physical intelligence, somatic awareness, nervous system regulation.', fragmented: 'Body tightens, shallow breathing', integrated: 'Grounded, calm, physically present', icon: 'body' },
      { id: 'energy', name: 'Energy', sanskrit: 'Pranamaya Kosha', description: 'Vitality, breath, life force management.', fragmented: 'Depleted, scattered energy', integrated: 'Sustained vitality, clear boundaries', icon: 'energy' },
      { id: 'mind', name: 'Mind', sanskrit: 'Manomaya Kosha', description: 'Emotional processing, mental clarity under pressure.', fragmented: 'Mind blanks, overthinking', integrated: 'Clear thinking, emotional regulation', icon: 'mind' },
      { id: 'judgment', name: 'Judgment & Values', sanskrit: 'Vijnanamaya Kosha', description: 'Discernment, decision-making, values alignment.', fragmented: 'Reactive decisions, people-pleasing', integrated: 'Wise discernment, values-aligned', icon: 'judgment' },
      { id: 'identity', name: 'Identity & Spiritual', sanskrit: 'Anandamaya Kosha', description: 'Purpose, meaning, existential grounding.', fragmented: 'Identity crisis, hollow success', integrated: 'Unshakeable presence, purpose-driven', icon: 'identity' },
    ],
  },
  credentials: {
    items: [
      { title: 'Leadership Experience', description: "Corporate leadership roles across strategy, operations, and management.", icon: 'briefcase' },
      { title: 'Coaching Certifications', description: 'ICF-accredited coaching programs.', icon: 'award' },
      { title: 'Somatic Training', description: 'Certified Yoga Teacher. Trained in somatic experiencing and breathwork.', icon: 'heart' },
      { title: 'Energy Healing', description: 'Reiki Master with practical applications for leaders.', icon: 'zap' },
      { title: 'Depth Psychology', description: 'Trained in Jungian psychology and shadow work.', icon: 'brain' },
      { title: 'Philosophical Training', description: 'Advaita Vedanta teachings, Yoga Sutras.', icon: 'book' },
    ],
  },
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('Seeding Supabase...')

  for (const [id, data] of Object.entries(content)) {
    const { error } = await supabase.from('content').upsert({ id, data })
    if (error) throw new Error(`content/${id}: ${error.message}`)
    console.log(`  content/${id} \u2713`)
  }

  for (const [id, data] of Object.entries(collections)) {
    const { error } = await supabase.from('collections').upsert({ id, data })
    if (error) throw new Error(`collections/${id}: ${error.message}`)
    console.log(`  collections/${id} \u2713`)
  }

  console.log('Done! Supabase seeded successfully.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
