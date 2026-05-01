/**
 * Seed Supabase via direct Postgres connection (bypasses RLS).
 * Run once: node scripts/seed-pg.mjs
 */
import pg from 'pg'
const { Client } = pg

const client = new Client({
  connectionString: 'postgresql://postgres:Tltgowtham1234@db.aibqiqyhnyertokazube.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }
})

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
      linkedinUrl: '#',
      instagramUrl: '#',
      copyright: '\u00A9 2026 The Leadership Tattva. All rights reserved.',
    },
  },
  home: {
    hero: {
      badge: 'Executive Presence For Senior Leaders',
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
    sidebar: { email: 'connect@theleadershiptattva.com', responseTime: 'Within 24-48 hours', linkedinUrl: '#', instagramUrl: '#' },
    confidentiality: { title: 'Confidentiality', text: 'All conversations are strictly confidential. Your information is never shared.' },
  },
  services: {
    hero: {
      badge: 'Services',
      title: 'Three Pathways to Integration',
      subtitle: 'All three use the same Five Layers methodology. Depth, format, and intensity differ. Start with FIT Cohort, then move deeper if needed.',
    },
    programs: {
      title: 'Explore Your Options',
      subtitle: "Same methodology. Different formats. All three are powerful\u2014which is the right fit for YOUR situation?",
    },
    disclaimer: {
      title: 'Important Note',
      text: 'While this coaching program can be therapeutic and uses foundations from psychology, it is <strong>not a replacement for therapy or psychiatric treatment</strong>. I do not work with individuals who are currently under deep psychiatric treatment. If you are working with a psychologist or psychiatrist and they are comfortable with you engaging in coaching work, I am happy to have a conversation with them to assess fit.',
    },
    comparison: {
      title: 'Compare All Three',
      subtitle: 'Side-by-side comparison to help you choose',
      rows: [
        ['Investment', '\u20B91-1.5L + GST', '\u20B98L + GST', '\u20B94-8L + GST'],
        ['Duration', '10 weeks', '4 months', '4 months (custom)'],
        ['Sessions', '8 group + 1 personal + 2 retreats', '16 personalized sessions', 'Custom (12-16)'],
        ['Format', 'Group (5-8 leaders)', 'Premium 1-to-1', 'Custom 1-to-1'],
        ['Best For', 'Directors, VPs, Senior Managers', 'CXOs, Founders (\u20B930L+)', 'Leaders seeking life alignment'],
        ['Key Benefit', 'Peer learning + community', 'Maximum depth + customization', 'Life realignment + meaning'],
      ],
    },
    decisionFramework: {
      title: 'Not Sure Which Is Right?',
      subtitle: 'Ask yourself these questions to find your path.',
      items: [
        {
          title: 'Complexity',
          fit: "Your challenges are common to senior leaders and you'd benefit from peer perspectives",
          one: 'Your challenges are deeply complex, requiring intensive personalized work',
          life: "You're questioning your whole life direction, not just leadership",
        },
        {
          title: 'Budget',
          fit: '\u20B91-1.5L is accessible (most accessible)',
          one: '\u20B98L+ is accessible',
          life: '\u20B94-8L custom is accessible',
        },
        {
          title: 'Learning Style',
          fit: 'You thrive with peer feedback and community',
          one: 'You prefer deep individual attention and holistic transformation',
          life: 'You need existential exploration, not just leadership',
        },
        {
          title: 'Desired Outcome',
          fit: 'Integration with peer accountability + community',
          one: 'Complete OS rewiring\u2014physiology, emotions, purpose, spiritual',
          life: 'Life-work alignment, meaning, values',
        },
      ],
    },
    cta: {
      heading: 'All Three Pathways Are Powerful',
      subtext: "The question isn't which is 'best'\u2014it's which is the right fit for your situation right now. Most leaders start with FIT Cohort.",
      buttonText: 'Book a Clarity Call',
    },
  },
  fitCohort: {
    hero: {
      badge: 'START HERE \u2022 MOST ACCESSIBLE ENTRY POINT',
      title: 'FIT Leadership Cohort',
      subtitle: 'Group-Based Integration for Senior Leaders Who Fragment Under Pressure',
      highlights: [
        '10-week intensive (1-8-1 structure)',
        '5-8 senior leaders per cohort',
        'Opening & closing retreats',
        'Peer learning & accountability triads',
        'Lifetime community access',
      ],
      ctaPrimary: 'Apply for Next Cohort',
      ctaSecondary: 'See Full Program',
    },
    priceBox: {
      price: '\u20B91-1.5L + GST',
      schedule: '10 weeks \u2022 Wed 5:30 AM IST',
      nextCohort: 'Next cohort starts: March 2026',
      ctaText: 'Apply Now',
    },
    idealFor: {
      title: 'Who Is This For?',
      subtitle: "FIT is designed for proven leaders who fragment under real pressure\u2014not because they lack capability, but because their operating system hasn't been integrated.",
      items: [
        'Directors, VPs, Senior Managers with 8-15+ years experience',
        'Leaders who are capable in calm but collapse under scrutiny',
        'Those who want peer learning and community',
        'Leaders ready to be vulnerable in a trusted group',
        'People who thrive with accountability and mirrors',
        'Those seeking sustainable transformation (not quick fixes)',
        'Leaders willing to commit 10 weeks + 2 retreat weekends',
      ],
    },
    notFor: {
      items: [
        'Leaders who need intensive 1-to-1 work (see One-on-One)',
        'Those uncomfortable with group vulnerability',
        'Leaders seeking business strategy consulting',
        'People wanting quick fixes or techniques only',
        'Those unable to commit to Wed 5:30 AM IST schedule',
        'Leaders currently under deep psychiatric treatment',
        'Those unwilling to do inter-session practice work',
      ],
    },
    timeline: {
      title: 'The 1-8-1 Structure',
      subtitle: 'One opening retreat, eight intensive training weeks, one closing integration retreat.',
      items: [
        {
          week: 'WEEK 1',
          label: 'Opening Retreat',
          title: 'Foundation & Diagnosis',
          description: '2-day immersive weekend retreat. Map your fragmentation pattern. Understand the Five Layers. Build trust with your cohort. Conduct pressure simulations. Create personalized integration plan.',
        },
        {
          week: 'WEEKS 2-9',
          label: '8 Training Weeks',
          title: 'Layer-by-Layer Integration',
          description: 'Weekly 75-90 minute sessions every Wednesday 5:30 AM IST. Each week focuses on one layer with teaching, practice, peer feedback, simulation exercises, and triad accountability check-ins.',
          layers: [
            'Week 2: Body & Somatic Intelligence',
            'Week 3: Energy Management & Vitality',
            'Week 4: Mental Clarity Under Pressure',
            'Week 5: Judgment & Decision-Making',
            'Week 6: Values & Integrity Alignment',
            'Week 7: Identity & Self-Authorship',
            'Week 8: Relationships & Leadership Presence',
            'Week 9: Spiritual Grounding',
          ],
        },
        {
          week: 'WEEK 10',
          label: 'Closing Retreat',
          title: 'Integration & Sustainability',
          description: '2-day integration weekend retreat. Synthesize all layers. Run final pressure simulations to test integration. Create post-cohort sustainability plan. Graduate ceremony. Transition into lifetime alumni community.',
        },
      ],
    },
    features: {
      title: 'What Makes FIT Different',
      subtitle: "This isn't typical executive coaching or leadership training.",
      items: [
        { icon: 'Users', title: 'Peer Learning Power', text: 'Your fragmentation patterns are mirrored in your peers. Seeing your patterns in others creates profound "aha" moments that 1-to-1 coaching can\'t replicate.' },
        { icon: 'Flame', title: 'Pressure Simulations', text: 'We don\'t just talk about pressure\u2014we create it. Board challenges, crisis scenarios, high-stakes presentations. You practice integration under real conditions.' },
        { icon: 'Activity', title: 'Multi-Modal Approach', text: 'Somatic work, breathwork, energy practices, psychological processing, values alignment. Integration happens across all Five Layers, not just cognitive.' },
        { icon: 'Handshake', title: 'Triad Accountability', text: 'You\'re paired with 2 other leaders in a triad. Weekly check-ins between sessions. This peer accountability makes the work stick.' },
        { icon: 'Mountain', title: 'Retreat Bookends', text: 'Opening retreat builds trust and diagnoses patterns. Closing retreat integrates learning and ensures sustainability. Deeper work happens in immersive settings.' },
        { icon: 'Globe', title: 'Lifetime Community', text: 'FIT graduates join a lifetime alumni network. Monthly meetups, shared resources, ongoing support. Integration is a journey, not a 10-week event.' },
      ],
    },
    inclusions: {
      title: "What's Included",
      items: [
        { label: 'Opening Retreat (Week 1):', desc: '2-day immersive weekend \u2022 Fragmentation diagnosis \u2022 Five Layers introduction \u2022 Cohort bonding' },
        { label: '8 Weekly Group Sessions:', desc: '75-90 minutes each \u2022 Wednesday 5:30 AM IST \u2022 Layer-by-layer training \u2022 Pressure simulations' },
        { label: 'Closing Retreat (Week 10):', desc: '2-day integration weekend \u2022 Final simulations \u2022 Sustainability planning \u2022 Graduation' },
        { label: '1 Personal Session:', desc: '60 minutes 1-to-1 with Gowtham \u2022 Your specific pattern \u2022 Personalized guidance' },
        { label: 'Triad Accountability:', desc: 'Weekly check-ins with 2 peer leaders \u2022 Between-session support' },
        { label: 'Digital Resources:', desc: 'Guided practices \u2022 Frameworks \u2022 Reading materials \u2022 Session recordings' },
        { label: 'Lifetime Alumni Access:', desc: 'Monthly alumni meetups \u2022 Private community \u2022 Ongoing resources' },
      ],
    },
    investment: {
      title: 'Investment',
      price: '\u20B91-1.5 Lakh + GST',
      includes: 'Includes: All sessions, both retreats (accommodation + meals), digital resources, 1-to-1 session, lifetime community access.',
      excludes: 'Not included: Travel to retreat locations.',
    },
    cta: {
      heading: 'Ready to Stop Fragmenting?',
      subtext: 'Applications for March 2026 cohort are now open. Limited to 8 leaders.',
      buttonText: 'Apply for March 2026 Cohort',
    },
  },
  oneOnOne: {
    hero: {
      badge: 'PREMIUM \u2022 BESPOKE TRANSFORMATION',
      title: 'One-on-One ',
      titleGold: 'Leadership Coaching',
      subtitle: 'Deep, Bespoke Transformation for CXOs & Senior Leaders with Complex Challenges',
      highlights: [
        '16 personalized sessions over 4 months',
        'Physiology, emotions, purpose, spiritual alignment',
        'WhatsApp access between sessions',
        'Multi-modal approach customized to YOU',
        'Optional Tiruvannamalai retreat',
      ],
      ctaPrimary: 'Request Intake Call',
      ctaSecondary: 'See Full Program',
    },
    priceBox: {
      price: '\u20B98L + GST',
      details: '4 months \u2022 16 sessions \u2022 Flexible scheduling',
      note: 'Limited to 6 clients at a time',
      ctaText: 'Request Intake Call',
    },
    idealFor: {
      title: 'Who Is This Premium Program For?',
      subtitle: 'Bespoke, intensive work for senior leaders with complex, multi-layered challenges who need maximum depth and personalization.',
      items: [
        'CXOs, Founders, VPs with \u20B930L+ annual compensation',
        'Leaders with complex, multi-layered fragmentation',
        'Those needing intensive private work (not group)',
        'Leaders ready for deep emotional and spiritual work',
        'Those who value maximum customization',
        'Leaders willing to commit 4 months intensively',
        'People seeking complete OS rewiring, not surface fixes',
      ],
    },
    notFor: {
      items: [
        'Leaders wanting quick fixes or 3-session solutions',
        'Those seeking business strategy consulting',
        'Leaders who prefer group learning (see FIT Cohort)',
        'Those uncomfortable with deep vulnerability',
        'Leaders under deep psychiatric treatment',
        'People wanting only cognitive/talk-based coaching',
        'Those unable to invest \u20B98L+ and 4 months',
      ],
    },
    sessionPhases: {
      title: 'The 16-Session Journey',
      subtitle: 'Four months of deep, personalized transformation across physiology, emotions, purpose, and spiritual layers.',
      footnote: 'This is a framework, not a rigid structure. Your specific challenges determine the actual flow. Sessions are 60-120 minutes each.',
      phases: [
        { phase: 'Sessions 1-2', title: 'Foundation', items: ['Fragmentation pattern diagnosis', 'Physiology assessment (blood work if needed)', 'Baseline nervous system mapping', 'Goal and intention setting'] },
        { phase: 'Sessions 3-5', title: 'Physical Layer', items: ['Somatic integration practices', 'Body-based trauma release', 'Breathwork and nervous system regulation', 'Energy management foundations'] },
        { phase: 'Sessions 6-8', title: 'Emotional Layer', items: ['Emotional healing and processing', 'Shadow work and identity patterns', 'High emotional intensity frameworks', 'Relationship dynamics'] },
        { phase: 'Sessions 9-11', title: 'Purpose & Alignment', items: ['Purpose discovery and clarification', 'Values alignment work', 'Life-leadership integration', 'Decision-making frameworks'] },
        { phase: 'Sessions 12-14', title: 'Spiritual Layer', items: ['Spiritual alignment practices', 'Advaita Vedanta teachings (if relevant)', 'Past-life regression (where appropriate)', 'Existential integration'] },
        { phase: 'Sessions 15-16', title: 'Integration', items: ['Synthesis across all layers', 'Sustainability planning', 'Post-program practices', 'Future growth map'] },
      ],
    },
    modalities: {
      title: 'Multi-Modal Methodology',
      subtitle: 'I customize the modality mix to what serves YOUR transformation. Not everyone needs every modality.',
    },
    inclusions: {
      title: "What's Included",
      packageTitle: 'Complete Premium Package',
      items: [
        { label: '16 Personalized Sessions:', desc: '60-120 min each \u2022 Flexible scheduling \u2022 Multi-modal approach customized to you' },
        { label: 'WhatsApp Access:', desc: 'Between-session support \u2022 Quick check-ins \u2022 Real-time guidance during high-pressure situations' },
        { label: 'Physiology Work:', desc: 'Blood work assessment (if needed) \u2022 Nutrition and sleep optimization \u2022 Physical foundations' },
        { label: 'Emotional Healing:', desc: 'Trauma-informed processing \u2022 Shadow work \u2022 Past patterns release' },
        { label: 'Purpose & Alignment:', desc: 'Values clarification \u2022 Life-leadership integration \u2022 Meaning and contribution work' },
        { label: 'Spiritual Layer:', desc: 'Energy healing \u2022 Philosophical teachings \u2022 Past-life regression (where appropriate)' },
        { label: 'Optional Tiruvannamalai Retreat:', desc: '2-3 day immersive retreat at sacred site (additional cost)' },
        { label: 'Post-Program Support:', desc: '3-month check-in session \u2022 Alumni community access' },
      ],
    },
    investment: {
      title: 'Investment: \u20B98 Lakh + GST',
      description: 'Premium, bespoke work with maximum customization and depth. Limited to 6 active clients at any time.',
      payment: 'Full upfront or 2 installments (50% at start, 50% at Session 8)',
      disclaimer: 'While this coaching can be therapeutic, it is not a replacement for therapy or psychiatric treatment. If you are working with a mental health professional and they are comfortable with you engaging in coaching, I am happy to consult with them.',
    },
    cta: {
      heading: 'Ready for Deep Work?',
      subtext: "Limited to 6 active clients. Request an intake call to explore fit. The intake call itself is valuable\u2014you'll leave with clarity on your pattern even if we don't work together.",
      buttonText: 'Request Intake Call',
    },
  },
  lifeCoaching: {
    hero: {
      badge: 'HOLISTIC \u2022 EXISTENTIAL \u2022 WHOLE-LIFE',
      title: 'Life Coaching',
      subtitle: 'When Leadership Feels Hollow and You Need to Realign Work with Life, Values, and Meaning',
      highlights: [
        'Whole-life alignment at inflection points',
        'Values clarification & purpose discovery',
        'Relationship and life rhythm design',
        'Existential exploration & meaning-making',
        'Custom duration & format (typically 4 months)',
      ],
      ctaPrimary: 'Request Exploratory Call',
      ctaSecondary: 'Learn More',
    },
    priceBox: {
      price: '\u20B94-8L + GST',
      duration: 'Custom (typically 4 months)',
      note: 'Pricing varies based on scope and format',
      ctaText: 'Request Call',
    },
    inflectionPoints: {
      title: 'This Is For Leaders at Inflection Points',
      subtitle: "You're not broken. You're at a threshold. Your outer success no longer matches your inner truth.",
      items: [
        { quote: "I've achieved everything I set out to achieve, but I feel empty.", desc: 'External success, internal hollowness. You\'re wondering if this is all there is.' },
        { quote: "I'm succeeding in my career but failing in my life.", desc: 'Work is thriving. Relationships, health, fulfillment are suffering.' },
        { quote: "I don't recognize myself anymore.", desc: 'You\'ve become someone you never intended to be. Your values and your actions are misaligned.' },
        { quote: "Should I stay or should I leave?", desc: 'You\'re questioning your role, company, even your entire career path.' },
        { quote: "My marriage/family is suffering because of my leadership.", desc: 'The costs of your work pattern are showing up at home.' },
        { quote: "I feel disconnected from what matters.", desc: 'You\'re going through the motions. Presence, joy, meaning\u2014all gone.' },
      ],
    },
    idealFor: {
      title: 'Who Is This For?',
      subtitle: "Life Coaching is existential work. It's for leaders ready to question everything and redesign their life-leadership system.",
      items: [
        'Leaders at major life transitions (40s, 50s, post-exit)',
        'Those experiencing existential crisis or emptiness',
        'Leaders whose values and actions are misaligned',
        'Those questioning career, role, or life path',
        'Leaders whose relationships are suffering due to work',
        'Those seeking meaning, not just performance',
        'Leaders ready to redesign their whole life',
        'People open to existential and spiritual exploration',
      ],
    },
    notFor: {
      items: [
        'Leaders seeking leadership skills only (see FIT or One-on-One)',
        'Those wanting quick answers or action plans',
        'Leaders uncomfortable with deep questioning',
        'Those seeking business strategy',
        'Leaders who aren\'t ready to change their life',
        'People wanting validation for staying the same',
        'Those unwilling to face hard truths',
        'Leaders looking for surface-level fixes',
      ],
    },
    dimensions: {
      title: 'What Life Coaching Addresses',
      subtitle: "Holistic work across all dimensions of your life. We don't compartmentalize 'work' and 'life'\u2014we integrate them.",
    },
    inclusions: {
      title: "What's Included (Custom Format)",
      programTitle: 'Typical 4-Month Program',
      items: [
        { label: '12-16 Sessions:', desc: '90-120 minutes each \u2022 Custom frequency (weekly, biweekly, or intensive blocks)' },
        { label: 'Life Audit:', desc: 'Comprehensive assessment across all dimensions \u2022 Values, time, relationships, health, meaning' },
        { label: 'Values Clarification:', desc: 'Deep work on what you truly stand for and how to align your life with it' },
        { label: 'Purpose Discovery:', desc: 'Existential exploration \u2022 Meaning-making \u2022 Contribution design' },
        { label: 'Relationship Work:', desc: 'Marriage, family, friendships \u2022 Communication patterns \u2022 Repair and redesign' },
        { label: 'Life Rhythm Design:', desc: 'Time audit \u2022 Energy management \u2022 Sustainable rhythms' },
        { label: 'Spiritual/Philosophical Work:', desc: 'Existential questions \u2022 Practices for grounding \u2022 Meaning frameworks' },
        { label: 'Integration Support:', desc: 'Between-session resources \u2022 Check-ins \u2022 Ongoing guidance' },
      ],
    },
    investment: {
      title: 'Investment: \u20B94-8 Lakh + GST (Custom)',
      description: 'Pricing varies based on scope, duration, and format. Some leaders need 3 months, others need 6.',
      range: 'Typical Range: \u20B94L for 3-month focused work, up to \u20B98L for 6-month comprehensive transformation.',
    },
    cta: {
      heading: 'Ready to Explore?',
      subtext: "Life coaching is deeply personal. Let's have an exploratory conversation to see if this is the right path for you. The exploratory call is 60 minutes.",
      buttonText: 'Begin a Confidential Conversation',
    },
  },
  resources: {
    hero: {
      badge: 'Resources',
      title: 'Insights for Leaders Who Want Depth',
      subtitle: 'Assessments, articles, and frameworks to help you navigate pressure and build integrated leadership. No fluff. Just depth.',
    },
    assessments: {
      title: 'Free Leadership Assessments',
      subtitle: 'Understand where you fragment under pressure. 5-minute assessments, instant insights.',
      items: [
        {
          icon: 'BarChart3',
          title: 'Leadership Integration Audit',
          description: '20-question assessment mapping where you fragment across the Five Layers (body, energy, mind, judgment, values). Receive personalized report + integration practices.',
          cta: 'Take the Audit',
          note: 'Email required for results',
          premium: true,
        },
        {
          icon: 'Zap',
          title: 'Pressure Pattern Diagnostic',
          description: 'Identify your specific fragmentation pattern under pressure. Do you freeze? Over-control? Collapse? Fragment intellectually? Get clarity on YOUR pattern.',
          cta: 'Discover Your Pattern',
          note: '5-minute assessment',
        },
        {
          icon: 'CheckCircle',
          title: 'Five-Layer Readiness Check',
          description: 'Are you ready for deep integration work? This 10-question check helps you assess your readiness for transformation.',
          cta: 'Check Your Readiness',
          note: 'Instant results',
        },
      ],
    },
    categories: {
      title: 'Explore by Topic',
      subtitle: 'Browse insights organized by what matters most to you.',
      items: [
        { tag: 'PRESSURE', color: 'bg-red-500/10 text-red-400', title: 'Leadership Under Pressure', desc: 'Decision-making under stress, presence in crisis, managing team anxiety, board challenges' },
        { tag: 'METHODOLOGY', color: 'bg-blue-500/10 text-blue-400', title: 'Five Layers Framework', desc: 'Body, energy, mind, judgment, values integration. Layer 3 vs Layer 1 work.' },
        { tag: 'PRACTICES', color: 'bg-green-500/10 text-green-400', title: 'Integration Practices', desc: 'Somatic practices, breathwork, daily rituals, sustainable integration' },
        { tag: 'STORIES', color: 'bg-purple-500/10 text-purple-400', title: 'Real Stories & Case Studies', desc: 'Client transformations, leadership journeys, lessons learned' },
      ],
    },
    articles: {
      title: 'Latest Insights',
      subtitle: 'New perspectives on integration, leadership, and pressure.',
      items: [
        { category: 'Pressure', color: 'bg-red-500/10 text-red-400', title: 'Why Smart Leaders Make Dumb Decisions Under Pressure', desc: 'You\'re brilliant in calm. But when the board challenges you publicly, something breaks. Here\'s why your nervous system fragments.', read: '8 min read', date: 'Jan 2026' },
        { category: 'Methodology', color: 'bg-blue-500/10 text-blue-400', title: 'Layer 3 vs Layer 1: Why Surface Coaching Fails Leaders', desc: 'Most coaching works on techniques (Layer 1). Real transformation happens at Layer 3 and deeper: body, energy, nervous system, identity.', read: '12 min read', date: 'Jan 2026' },
        { category: 'Practice', color: 'bg-green-500/10 text-green-400', title: 'The 5-Minute Integration Practice for Busy Leaders', desc: 'You don\'t need an hour. This somatic practice rewires your nervous system in 5 minutes. Do it before high-stakes meetings.', read: '6 min read', date: 'Dec 2025' },
        { category: 'Story', color: 'bg-purple-500/10 text-purple-400', title: 'How a CEO Stopped Fragmenting in Board Meetings', desc: 'She was brilliant but would go blank when challenged publicly. Here\'s how she rewired her operating system through somatic work.', read: '10 min read', date: 'Dec 2025' },
        { category: 'Methodology', color: 'bg-blue-500/10 text-blue-400', title: 'The Body Never Lies: Somatic Intelligence in Leadership', desc: 'Your body knows you\'re fragmenting before your mind does. Learn to read the signals and intervene early.', read: '9 min read', date: 'Nov 2025' },
        { category: 'Pressure', color: 'bg-red-500/10 text-red-400', title: 'Presence Under Fire: Leading Through Crisis Without Collapsing', desc: 'When your team is panicking, they need your integrated presence. Here\'s how to stay grounded when chaos hits.', read: '11 min read', date: 'Nov 2025' },
      ],
    },
    newsletter: {
      title: 'Stay Connected',
      subtitle: 'Join 500+ leaders receiving weekly insights on integration and leadership.',
      note: 'We respect your inbox. Unsubscribe anytime.',
    },
  },
}

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

async function seed() {
  await client.connect()
  console.log('Connected. Seeding...')

  for (const [id, data] of Object.entries(content)) {
    await client.query(
      `INSERT INTO content (id, data) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET data = $2`,
      [id, JSON.stringify(data)]
    )
    console.log(`  content/${id} ✓`)
  }

  for (const [id, data] of Object.entries(collections)) {
    await client.query(
      `INSERT INTO collections (id, data) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET data = $2`,
      [id, JSON.stringify(data)]
    )
    console.log(`  collections/${id} ✓`)
  }

  await client.end()
  console.log('Done! Supabase seeded successfully.')
}

seed().catch(err => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
