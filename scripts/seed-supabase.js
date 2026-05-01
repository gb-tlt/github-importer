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
      email: 'connect@theleadershiptattva.com',
      responseTime: 'Response within 24-48 hours',
      linkedinUrl: 'https://www.linkedin.com/in/gbcoach/',
      instagramUrl: 'https://www.instagram.com/gowtham.balaji.coach/',
      youtubeUrl: 'https://www.youtube.com/@gbcoach',
      copyright: '\u00A9 2026 The Leadership Tattva. All rights reserved.',
    },
  },
  home: {
    hero: {
      badge: 'Executive Presence For Senior Leaders',
      headline: 'What If Pressure Made You ',
      headlineGold: 'Stronger?',
      subtext: 'Most leaders fragment under pressure \u2014 their body betrays them, their mind goes blank, their presence collapses. It doesn\u2019t have to be this way. We help senior leaders rewire so pressure becomes power.',
      ctaPrimary: 'Book a Discovery Session',
      ctaSecondary: 'Explore Programs',
    },
    logos: {
      label: 'Trusted by leaders from',
      logos: [
        { name: 'Google', src: '/logos/google.png' },
        { name: 'Amazon', src: '/logos/amazon.png' },
        { name: 'Deloitte', src: '/logos/deloitte.png' },
        { name: 'Flex', src: '/logos/flex.png' },
        { name: 'Groww', src: '/logos/groww.png' },
        { name: 'HDFC', src: '/logos/hdfc.png' },
        { name: 'Honda', src: '/logos/honda.png' },
        { name: 'Hyundai', src: '/logos/hyundai.png' },
        { name: 'L&T', src: '/logos/lt.png' },
        { name: 'Pernod Ricard', src: '/logos/pernod-ricard.png' },
        { name: 'SBI', src: '/logos/sbi.png' },
        { name: 'TCS', src: '/logos/tcs.png' },
        { name: 'TVS', src: '/logos/tvs.png' },
        { name: 'Wells Fargo', src: '/logos/wells-fargo.png' },
        { name: 'Eightfold AI', src: '/logos/eightfold-ai.png' },
      ],
    },
    philosophy: {
      label: 'What We Stand For',
      heading: 'Skills and capacities are an outcome of an ',
      headingEmphasis: 'integrated operating system.',
      pillars: [
        { title: 'Substance Over Fluff', text: 'We don\u2019t do motivational workshops. We rebuild the system underneath your skills \u2014 so what you already know stays accessible when it matters most.' },
        { title: 'Ancient Wisdom + Modern Rigor', text: 'The Panchakosha framework. Neuroscience. Performance science from military, Olympic, and Formula One environments. Not borrowed from one tradition \u2014 integrated from many.' },
        { title: 'Practice Over Theory', text: 'Understanding doesn\u2019t create change. Daily practice does. We are practitioners, not philosophers.' },
      ],
    },
    problem: {
      title: 'The Real Problem No One Talks About',
      subtitle: "You're brilliant in calm. But when real pressure hits, something breaks.",
      cards: [
        { title: 'Your Body Betrays You', text: 'Tension floods in. Breathing gets shallow. Your posture collapses. The body remembers every past failure and re-enacts it under scrutiny.' },
        { title: 'Your Mind Goes Blank', text: 'You had the perfect response prepared. But in the moment, words vanish. You over-explain, ramble, or freeze. The brilliant strategist disappears.' },
        { title: 'Your Presence Collapses', text: "The room feels your fragmentation. Your team senses it. The board sees it. You look composed outside, but you're drowning inside." },
      ],
      closingText: 'This is fragmentation.',
      closingBody: 'It\u2019s not a skills problem. It\u2019s not a confidence problem. It\u2019s an operating system problem. Your leadership OS was never designed for the pressure you face today. Most coaching works on the surface \u2014 techniques, frameworks, tips.',
      closingHighlight: 'Integration works at the foundation.',
    },
    fiveLayers: {
      title: 'The Five Layers of Integration',
      subtitle: 'Based on the Panchakosha framework, adapted for modern leadership. We work at every layer, not just the surface.',
    },
    services: {
      label: 'How We Serve Leaders',
      title: 'Three Pathways to Integration',
      subtitle: 'Same methodology. Different formats. Which is the right fit for your situation?',
      linkText: 'Compare All Programs',
    },
    testimonials: {
      title: 'What Leaders Say',
      subtitle: 'Real transformations from real leaders. Names anonymised for confidentiality.',
    },
    aboutTlt: {
      label: 'About',
      title: 'Why The Leadership Tattva Exists',
      subtitle: 'Deep work for leaders who want to integrate, not just perform.',
      paragraphs: [
        'The Leadership Tattva was founded on a simple observation: the most capable leaders fragment under pressure. Not because they lack skill, but because their operating system \u2014 body, breath, mind, discernment, purpose \u2014 disconnects when stakes are high.',
        'We built a methodology that combines ancient Indic wisdom with modern neuroscience to create lasting integration. Not performance. Not facade. Real, embodied presence that doesn\u2019t collapse under pressure.',
        'Founded by Gowtham Balaji \u2014 a leadership coach with a bent on Indic wisdom and authenticity \u2014 The Leadership Tattva serves senior leaders who are tired of fragmentation and ready to build integration that lasts. The work happens from a farm in Tiruvannamalai. Substance over fluff. Directness over polish. Integration over performance.',
      ],
      quote: '\u201CYou did not earn the right yesterday. You have been earning it your entire life. Now own it.\u201D',
      linkText: 'Learn more about Gowtham',
    },
    assessment: {
      badge: 'Free Assessment',
      title: 'Take the Leadership Integration Audit',
      subtitle: '20 questions. 5 minutes. Discover where you fragment across the Five Layers and receive personalised integration practices.',
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
    hero: {
      badge: 'About',
      title: 'Why The Leadership Tattva Exists',
      subtitle: 'We exist because the most capable leaders fragment under pressure \u2014 and no one is addressing why.',
    },
    observed: {
      label: 'What We Saw',
      title: 'The Pattern No One Was Naming',
      subtitle: 'After working with hundreds of senior leaders, we noticed the same thing again and again.',
      problems: [
        { bold: 'The body betrays first.', text: 'Tension, shallow breathing, collapsed posture \u2014 before the mind even registers pressure, the nervous system has already fragmented.' },
        { bold: 'The mind goes blank second.', text: "The brilliant strategist who had the perfect answer prepared can\u2019t access it when the room is watching." },
        { bold: 'Presence collapses third.', text: 'The team senses it. The board sees it. Composed outside, drowning inside.' },
        { bold: "Skills-based coaching doesn\u2019t fix it.", text: 'Leaders try communication training, executive coaching, leadership workshops. The techniques work in calm. They vanish under pressure.' },
        { bold: 'The damage spreads beyond work.', text: 'The same fragmentation that shows up in boardrooms enters relationships, health, and sense of self.' },
      ],
      works: [
        { bold: 'Start with the body, not the mind.', text: 'Nervous system regulation, somatic awareness, and physical grounding create the foundation everything else is built on.' },
        { bold: 'Work at every layer simultaneously.', text: 'Body, energy, mind, judgment, purpose \u2014 the Panchakosha framework addresses all five, not just the cognitive surface.' },
        { bold: 'Indic wisdom meets modern neuroscience.', text: "The Yoga Sutras, Sankhya, Navarasa, and the Bhagavad Gita aren\u2019t ancient philosophy \u2014 they\u2019re precision tools for how the human system operates under stress." },
        { bold: 'Use pressure as the training ground.', text: "Integration that hasn\u2019t been tested under real stakes isn\u2019t integration. We simulate and work within high-pressure moments, not away from them." },
        { bold: 'Daily practice rewires permanently.', text: 'Not weekend workshops. Not quarterly offsites. Daily, embodied practice that changes the operating system at the structural level.' },
      ],
      closing: 'This is what The Leadership Tattva was built on.',
      closingText: "Not a theory. Not a borrowed framework. A methodology built from the ground up \u2014 rooted in the intelligence traditions of this land, validated by the neuroscience of this era, and proven with hundreds of leaders who stopped fragmenting and started leading from stability.",
    },
    philosophy: {
      title: 'What Guides Our Work',
      subtitle: 'Our Principles',
      items: [
        { title: 'Integration Over Performance', text: "Most coaching optimises for performance. We optimise for integration. When you\u2019re integrated, performance appears naturally. When you chase performance without integration, you fragment." },
        { title: 'Practice Over Theory', text: "Understanding doesn\u2019t create change. Daily practice does. We don\u2019t give you frameworks to think about. We give you practices to embody. Daily rigor, not weekend inspiration." },
        { title: 'Pressure Is a Privilege', text: "Pressure isn\u2019t the problem. Pressure is the training ground. It reveals exactly where you fragment. We use it as a diagnostic and as a forge \u2014 because integration that hasn\u2019t been tested under fire isn\u2019t integration." },
      ],
    },
    founder: {
      image: '/gowtham.jpg',
      name: 'Gowtham Balaji',
      role: 'Founder, The Leadership Tattva',
      chapters: [
        {
          label: 'The Fragmentation',
          paragraphs: [
            'Gowtham spent years in corporate leadership \u2014 leading operations, strategy, and teams. He made solid decisions when there was time. He was articulate in low-stakes meetings. He could lead in calm.',
            "But when real pressure hit \u2014 scrutiny, crisis decisions, high-stakes presentations \u2014 something broke. His body would tighten. His mind would blank. His presence would collapse. <strong>He was succeeding on paper and fragmenting inside.</strong> The pressure seeped into his relationships, his health, his sense of self.",
          ],
        },
        {
          label: 'The Search',
          paragraphs: [
            "He left corporate life, built a farm in Tiruvannamalai, and began studying what actually fixes the system underneath. Not one tradition, but many \u2014 yoga therapy, somatic work, energy healing, Advaita Vedanta, the Yoga Sutras, depth psychology, neuroscience. He trained under teachers who carried these traditions with rigour, not as weekend retreats but as lived practice.",
          ],
        },
        {
          label: 'What Changed',
          paragraphs: [
            'When he addressed each layer \u2014 body, energy, mind, judgment, purpose \u2014 slowly and with discipline, everything shifted.',
          ],
          practiceLabel: "What Gowtham\u2019s own practice produced",
          practiceItems: [
            'His body stopped betraying him under scrutiny \u2014 grounded posture, steady breathing became the default, not the effort',
            'His mind stayed clear under pressure \u2014 no blanking, no over-explaining, no freezing',
            'His decisions became grounded in judgment, not reaction \u2014 conviction replaced people-pleasing',
            'Pressure started making him calmer, sharper, more intuitive \u2014 not less',
            'His relationships, health, and sense of purpose realigned \u2014 integration spread beyond leadership into every domain of life',
          ],
        },
        {
          label: 'The Work Now',
          paragraphs: [
            "When Gowtham brought this integrated methodology to senior leaders \u2014 CXOs, founders, VPs from companies like Google, Amazon, Barclays, and Apollo Hospitals \u2014 the same shifts appeared. Leaders who had tried five executive coaches and found none that stuck began reporting permanent changes within weeks.",
            '<strong>If I can do it, every leader can do it. Every leader deserves an uncompromising, honourable and joyful life.</strong>',
          ],
        },
      ],
      detailLabel: 'Where the work happens',
      detailText: 'From a farm in Tiruvannamalai, Tamil Nadu \u2014 far from the noise, close to the work. Sessions begin at 5:30 AM. The environment is intentional.',
    },
    lineage: {
      label: 'Gratitude',
      title: 'Grateful to Our Gurus, Teachers & Mentors',
      subtitle: 'This work stands on the shoulders of teachers and traditions.',
      people: [
        { name: 'Raghu Ananthanarayanan', desc: 'Yoga & Leadership' },
        { name: 'Teacher Name', desc: 'Tradition / Discipline' },
        { name: 'Teacher Name', desc: 'Tradition / Discipline' },
        { name: 'Teacher Name', desc: 'Tradition / Discipline' },
        { name: 'Teacher Name', desc: 'Tradition / Discipline' },
      ],
    },
    cta: {
      heading: "If This Resonates, Let\u2019s Talk.",
      subtext: "Book a clarity call \u2014 a 45-minute conversation to understand your pattern and see if there\u2019s a fit.",
      buttonText: 'Book a Clarity Call',
    },
  },
  contact: {
    hero: { badge: 'Contact', title: "Let's Have a Conversation", subtitle: "Whether you're curious about FIT Cohort, one-on-one coaching, life coaching, or just want to explore what integration means for your leadership, I'm here." },
    form: { title: 'Book a Clarity Call', subtitle: '45 minutes to understand your challenges, explore fit, and answer your questions. No obligation.', submitText: 'Request Clarity Call' },
    sidebar: { email: 'connect@theleadershiptattva.com', responseTime: 'Within 24-48 hours', linkedinUrl: 'https://www.linkedin.com/in/gbcoach/', instagramUrl: 'https://www.instagram.com/gowtham.balaji.coach/', youtubeUrl: 'https://www.youtube.com/@gbcoach' },
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
      { id: 'fit-cohort', title: 'FIT Leadership Cohort', tagline: 'Group-Based Integration for Senior Leaders Who Fragment Under Pressure', badge: 'START HERE', badgeColor: 'primary', price: '1-1.5L + GST', duration: '10 weeks (1-8-1 structure)', format: 'Group (5-8 leaders)', bestFor: 'Directors, VPs, Senior Managers', keyBenefit: 'Peer learning + community', description: 'Group-based transformation with 5-8 senior leaders. 1-8-1 structure: Opening retreat, 8 intensive training weeks, Closing integration retreat. Peer learning, accountability, and community support.', features: ['10-week intensive program (1-8-1 structure)', 'Opening retreat (Week 1) + Closing retreat (Week 10)', '8 weekly group sessions (75-90 min each)', 'Triad accountability (groups of 3)', '1 personal session with Gowtham', 'Peer learning and mirrors', 'Lifetime community access'], link: '/services/fit-cohort' },
      { id: 'one-on-one', title: 'One-on-One Leadership Coaching', tagline: 'Deep, Bespoke Transformation for CXOs & Senior Leaders with Complex Challenges', badge: 'PREMIUM', badgeColor: 'gold', price: '8L + GST', duration: '4 months | 16 sessions', format: 'Premium 1-to-1', bestFor: 'CXOs, Founders (30L+)', keyBenefit: 'Maximum depth, holistic transformation', description: 'Deep, bespoke transformation work. For CXOs, Founders, VPs with complex challenges. 16 personalized sessions covering physiology, emotional healing, purpose discovery, and spiritual alignment.', features: ['16 personalized sessions (60-120 min each)', 'Physiology assessment & blood work (if needed)', 'Emotional healing & trauma work', 'Purpose discovery & alignment', 'WhatsApp access between sessions', 'Optional Tiruvannamalai retreat', 'Post-program 3-month check-in', 'Alumni community access'], link: '/services/one-on-one' },
      { id: 'life-coaching', title: 'Life Coaching', tagline: 'When Leadership Feels Hollow and You Need to Realign Work with Life, Values, and Meaning', badge: 'HOLISTIC', badgeColor: 'primary', price: '4-8L + GST', duration: 'Custom (typically 4 months)', format: 'Custom 1-to-1', bestFor: 'Leaders seeking life alignment', keyBenefit: 'Life realignment + meaning', description: 'Whole-life alignment for leaders at inflection points. When leadership feels hollow and you need to realign work with values and meaning. Custom duration and format.', features: ['Custom duration (typically 4 months)', 'Values clarification & purpose discovery', 'Relationship and life rhythm design', 'Existential exploration & meaning-making', 'Life-leadership integration', 'Flexible scheduling'], link: '/services/life-coaching' },
    ],
  },
  testimonials: {
    items: [
      { id: 1, quote: "I had all the answers but kept getting triggered in high-stakes conversations. Gowtham didn\u2019t just coach me on communication\u2014he addressed the underlying fragmentation at the body, emotional, and spiritual levels. Now I handle board challenges without collapsing internally. This changed how I show up as a CEO.", author: 'CEO', company: 'SaaS Company (Series B)', program: 'one-on-one' },
      { id: 2, quote: "Worth every rupee. The physiology work alone was game-changing\u2014turns out my fragmentation was connected to sleep deprivation and hormone imbalance. We addressed it holistically: body, energy, purpose, values. The WhatsApp access was invaluable during a board crisis. I've had 5 executive coaches before. This was different.", author: 'Founder', company: 'HealthTech Startup', program: 'one-on-one' },
      { id: 3, quote: "I had tried individual coaching before but it didn't stick. FIT was different. Seeing my fragmentation patterns mirrored in other VPs created instant recognition. The triad accountability kept me practicing between sessions. 10 weeks later, I handle board pressure completely differently.", author: 'VP Engineering', company: 'Global Tech Company', program: 'fit-cohort' },
      { id: 4, quote: "The opening retreat was where everything clicked. Gowtham mapped my exact fragmentation pattern\u2014I freeze under scrutiny and over-explain later. We practiced this in simulations throughout the cohort. By Week 10, pressure no longer made me freeze. It made me sharper.", author: 'Director of Strategy', company: 'Healthcare Startup', program: 'fit-cohort' },
      { id: 5, quote: "I was a 'successful' VP but my marriage was falling apart and I felt dead inside. Life coaching helped me see I had optimized for the wrong things. We redesigned everything: my role, my schedule, my relationship with my wife, my values. 6 months later, I'm alive again.", author: 'VP Product', company: 'B2B SaaS', program: 'life-coaching' },
      { id: 6, quote: "I was skeptical about energy work and spiritual practices. But Gowtham customized everything to what I needed\u2014no woo-woo, just practical tools that worked. The Tiruvannamalai retreat was the most profound 3 days of my career. My leadership fundamentally shifted.", author: 'VP Operations', company: 'Global Consulting Firm', program: 'one-on-one' },
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
      { id: 'body', name: 'Body', sanskrit: 'Annamaya Kosha', description: 'Physical intelligence, somatic awareness, nervous system regulation. When integrated: body stays calm under pressure, grounded posture, steady breathing.', fragmented: 'Body tightens, shallow breathing, physical collapse under scrutiny', integrated: 'Grounded, calm, physically present even under pressure', icon: 'body' },
      { id: 'energy', name: 'Energy', sanskrit: 'Pranamaya Kosha', description: 'Vitality, breath, life force management. When integrated: sustained energy, clear boundaries, no depletion cycles.', fragmented: 'Depleted, scattered energy, burnout cycles', integrated: 'Sustained vitality, clear energetic boundaries', icon: 'energy' },
      { id: 'mind', name: 'Mind', sanskrit: 'Manomaya Kosha', description: 'Emotional processing, mental clarity, cognitive function under pressure. When integrated: clear thinking, emotional regulation, no mental blanking.', fragmented: 'Mind blanks, overthinking, emotional flooding', integrated: 'Clear thinking, emotional regulation under pressure', icon: 'mind' },
      { id: 'judgment', name: 'Judgment & Values', sanskrit: 'Vijnanamaya Kosha', description: 'Discernment, decision-making, values alignment. When integrated: decisions grounded in wisdom, not reaction. Values and actions aligned.', fragmented: 'Reactive decisions, values-action gap, people-pleasing', integrated: 'Wise discernment, values-aligned leadership', icon: 'judgment' },
      { id: 'identity', name: 'Identity & Purpose', sanskrit: 'Anandamaya Kosha', description: 'Purpose, meaning, existential grounding. When integrated: unshakeable sense of self, leadership from wholeness, pressure becomes privilege.', fragmented: 'Identity crisis, hollow success, existential drift', integrated: 'Unshakeable presence, purpose-driven leadership', icon: 'identity' },
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
