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
  fitCohort: {
    hero: {
      label: 'Flagship Program',
      title: 'Eight Weeks That Rewire How You Lead Under Pressure',
      subtitle: 'The Fundamentals of Integration Training. A small-cohort intensive for senior leaders done with surface-level development.',
      ctaText: 'Apply for Next Cohort',
    },
    problem: {
      label: 'The Reality',
      title: "You've Tried Leadership Development. It Didn't Stick.",
      paragraphs: [
        "You've done the workshops. Read the books. Hired the coaches. And in calm moments, it all made sense. <strong>But under real pressure — the board room, the crisis call, the high-stakes conversation — everything reverted.</strong>",
        "The problem was never the training. The problem was the layer it was working on. Skills installed on a fragmented operating system crash the moment pressure hits. FIT works at the operating system level.",
      ],
    },
    outcomes: {
      label: 'What You Walk Away With',
      title: 'What FIT Produces in You',
      subtitle: 'Three structural shifts and the daily foundation that sustains them.',
      groups: [
        {
          label: 'The Three Shifts',
          items: [
            {
              number: '01',
              title: 'Earn the Right — From Within',
              subtitle: 'Stop questioning whether you belong in the room.',
              content: "<p>Most leaders occupy their position but haven't fully <strong>earned the right within themselves</strong> to be there. There's a gap between the title and the internal conviction. FIT closes that gap.</p><p>You stop seeking permission from your achievements, your title, or other people's approval. The space you occupy becomes fully yours — not because someone gave it to you, but because you claimed it from the inside out.</p>",
            },
            {
              number: '02',
              title: 'Know Your Leadership Location',
              subtitle: 'See the full map of who you serve, what they need, and what you need.',
              content: "<p>Most leaders operate without a clear map. They know their role but not their <strong>leadership location</strong> — the full ecosystem of demands, relationships, and stakes around them.</p><p>After FIT, you'll know:</p><ul><li>Who you're truly serving — and what keeps them awake at night</li><li>What keeps <strong>you</strong> awake — and how to address it directly</li><li>What you need from your team — and how to ask for it clearly</li><li>Where your real role lies — beyond the job description</li></ul>",
            },
            {
              number: '03',
              title: 'Set Yourself Up for Success — Every Day',
              subtitle: 'No more trial and error. No more seeking external validation.',
              content: "<p>You stop relying on trial and error to figure out what works. You stop waiting for your boss, your board, or your team to tell you you're doing a good job.</p><p><strong>You design your day so you show up ready, not reactive.</strong> Your morning preparation, your energy management, your pre-meeting ritual — all become intentional systems, not hopeful improvisation. You know you're doing a good job because your internal compass is calibrated, not because someone validated you externally.</p>",
            },
          ],
        },
        {
          label: 'The Foundation Underneath',
          items: [
            {
              number: '—',
              title: 'Your Inner Voices — Recognised and Redirected',
              subtitle: 'The internal narratives that run your decisions, made visible.',
              content: "<p>Every leader has inner voices — the critic, the perfectionist, the people-pleaser, the achiever. Most leaders don't know these voices are running the show. <strong>In FIT, you identify them, understand their origin, and learn to work with them instead of being hijacked by them.</strong></p>",
            },
            {
              number: '—',
              title: "Your Body — What Works for It, What Doesn't",
              subtitle: 'Somatic intelligence that keeps you grounded under pressure.',
              content: "<p>Your body has been signalling fragmentation long before your mind catches up. Tight shoulders before a presentation. Shallow breathing in a difficult conversation. <strong>FIT teaches you to read your body's signals and regulate in real-time — in 10 to 30 seconds, invisible to the room.</strong></p>",
            },
            {
              number: '—',
              title: 'Your Day — Designed, Not Improvised',
              subtitle: 'Energy cycles, office demands, and home needs — aligned into one rhythm.',
              content: "<p>Most leaders let their calendar design their day. FIT flips this. <strong>You design your day around your energy cycles, your office demands, and your home needs</strong> — so you're not borrowing from one to pay the other. A morning protocol, a regulation practice, and a daily intention become your operating system's startup sequence.</p>",
            },
          ],
        },
      ],
    },
    journey: {
      label: 'The Full Arc',
      title: 'Your Journey Through FIT',
      subtitle: 'From first conversation to confirmed transformation.',
      phases: [
        {
          phaseLabel: 'Phase 1 — Discovery',
          title: 'Clarity Call',
          body: 'A 30-minute conversation where <strong>we qualify each other</strong>. We map your fragmentation pattern. You assess whether this approach resonates. Not a sales pitch — a mutual diagnostic.',
        },
        {
          phaseLabel: 'Phase 2 — Preparation',
          title: 'Orientation & Preparatory Work',
          body: 'Once enrolled, you go through an orientation process and complete preparatory work before the program begins. <strong>You arrive on day one already engaged, not cold.</strong>',
        },
        {
          phaseLabel: 'Phase 3 — The Intensive',
          title: 'Weekend Intensive + 8 Weeks of Wednesday Sessions',
          body: 'A full-day weekend intensive launches the cohort. Then <strong>8 weeks of Wednesday sessions, 5:30 AM – 8:00 AM</strong>, with a small group of 5–8 leaders seeking similar transformation. Parallel 1-on-1 attention from Gowtham throughout. Triad accountability groups keep you practising between sessions.',
        },
        {
          phaseLabel: 'Phase 4 — Integration',
          title: '100-Day Plan',
          body: 'At the end of 8 weeks, we meet to build your <strong>100-day integration plan</strong> — a structured roadmap for applying what you\'ve rewired into your real-world leadership context.',
        },
        {
          phaseLabel: 'Phase 5 — Real-World Testing',
          title: '100 Days of Supported Practice',
          body: 'For 100 days after the program, you can <strong>check back in with Gowtham for 1-on-1 attention</strong>. This ensures the operating system rewiring holds under real pressure. The shift is confirmed not in a practice environment — but in your actual leadership.',
        },
      ],
    },
    numbers: {
      label: 'The Data',
      title: 'What the Numbers Show',
      items: [
        { value: '0%', label: 'Dropout rate', sublabel: 'across all cohorts' },
        { value: '120', label: 'Minute sessions', sublabel: '(designed for 75)' },
        { value: '5–8', label: 'Leaders per cohort', sublabel: 'No place to hide' },
        { value: 'Week 3', label: 'Integration shifts', sublabel: 'become visible' },
      ],
    },
    who: {
      label: 'Is This For You?',
      title: 'Is FIT Right for You?',
      intro: 'FIT is for CXOs, founders, VPs, and directors earning ₹30L+ who:',
      items: [
        'Have succeeded through talent but recognise their inconsistency under pressure',
        'Have tried leadership development before and found it didn\'t stick when stakes rose',
        'Are willing to start at 5:30 AM and commit to daily practice',
        'Want depth, not breadth — a small group of peers, not a lecture hall',
        'Are ready to be seen, challenged, and held to a standard',
      ],
    },
    testimonials: {
      label: 'From FIT Graduates',
      title: 'What FIT Graduates Say',
      items: [
        {
          text: "I had tried individual coaching before but it didn't stick. FIT was different. Seeing my fragmentation patterns mirrored in other VPs created instant recognition. The triad accountability kept me practicing between sessions. 10 weeks later, I handle board pressure completely differently.",
          role: 'VP Engineering',
          company: 'Global Tech Company',
        },
        {
          text: "I went from managing two projects with crippling anxiety to handling five with calm. I can't unsee what I've seen. The cohort created a field of trust I didn't know was possible with people I'd just met.",
          role: 'VP, Technology',
          company: 'Enterprise SaaS',
        },
      ],
    },
    investment: {
      label: 'Investment',
      title: 'Investment',
      price: '₹1–1.5L + GST',
      note: "This is not a course fee. It's an investment in permanent change. The methodology doesn't teach you something to remember. It rewires how your system operates. That shift doesn't expire.",
    },
    cta: {
      heading: 'Applications for the Next Cohort Are Open',
      body: "It starts with a clarity call — a 30-minute conversation to understand your pattern and see if FIT is the right path.",
      buttonText: 'Apply Now',
    },
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
