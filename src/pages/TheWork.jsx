import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useContent } from '../hooks/useContent'

const defaults = {
  hero: {
    badge: 'The Work',
    lines: [
      "You're a CXO, VP, Director, Senior leader.",
      'Your strategies are sound. Your track record speaks. Your team respects you.',
    ],
    pivot: 'But, your nervous system is running the show.',
    closing: "That gap — where your body tightens, your words vanish, and the room feels what you're hiding — is where your leadership quietly collapses.",
  },
  arc1: {
    eyebrow: 'Arc 1 of 6 — The Challenge',
    title: "What’s Actually Happening Inside You",
    intro: "McKinsey publishes it. Deloitte cites it. CCL researches it. Every major firm agrees — the real barrier in leadership is the whole human being. And then they run the same behavioural competency workshop they’ve been running for twenty years. Here’s what’s actually happening inside the leaders they keep training.",
    showsUpHeading: 'What Shows Up In The Room',
    showsUp: [
      { title: 'Your Body Betrays You', text: 'Tension floods in. Breathing shallows. Posture collapses. The body remembers every past failure and re-enacts it the moment scrutiny arrives.' },
      { title: 'Your Mind Goes Blank', text: "You had the response. In the moment, it vanishes. You over-explain, ramble, or freeze. The strategist who’s sharp in private disappears in public." },
      { title: 'Your Presence Collapses', text: "The room feels it before you do. Your team senses it. The board sees it. You look composed on the outside. Inside, you’re drowning." },
    ],
    underneathHeading: "What’s Underneath",
    underneath: [
      { title: 'The Voice That Edits You Before You Speak', text: "Not the loud inner critic. The quieter one — three minutes before you walk in — whispering: soften this, don’t push too hard, they won’t accept it. No communication training touches this." },
      { title: 'Your Identity Is Performing, Not Leading', text: 'Somewhere along the way, you learned what a leader is supposed to look like. The gap between who you perform and who you actually are compounds quietly — until pressure makes it visible.' },
      { title: 'The Success Is Real. Something Still Feels Hollow.', text: "The track record is there. The title is there. And yet there’s a question the next promotion won’t answer: is this what I’m actually here for? That’s a purpose problem. It belongs in leadership work." },
    ],
    dataHeading: 'The Data Behind the Pattern',
    data: [
      { stat: '~35%', title: 'Entirely Inside the Leader', text: 'Blind spots. Reactive patterns. Identity rigidity. No strategy session, no skills training, no external intervention reaches here. Only deep inner work — at the operating system level — does.' },
      { stat: '~60%', title: 'Integration Across 6 Domains', text: "Self-awareness, credibility, role identity, interpersonal effectiveness, adaptive capacity, organisational thinking. These don’t shift because circumstances changed. They shift because the leader did — internally." },
      { stat: '~40%', title: 'Market Forces', text: "Operational failures, business context, external pressure. Inner work doesn’t remove this 40%. It determines whether a leader suffers with it — or handles it to grow." },
    ],
    dataNote: "Sources: Deductions from CCL’s research data on Fundamental 4 Core Leadership Skills across organisational levels — personal limitations, interpersonal rigidity, self-awareness, and credibility gaps rank in the top 5 at every single level.",
    patternsHeading: 'Six Patterns Leaders Live With',
    patterns: [
      { title: 'The High-Pressure Trigger', text: "In the workshop, you’re composed. On Monday, when the client threatens to leave, your nervous system fires before your mind can intervene. The training held fine. Pressure moved faster than the learning." },
      { title: "The Urgency Addict’s Loop", text: "Firefighting feels like progress. Back-to-back responses deliver a dopamine signal that makes stillness feel like falling behind. Leaders avoid deep work not from laziness — they’ve lost access to stillness entirely." },
      { title: 'The Body That Stopped Talking', text: 'Poor sleep. Shallow breathing. Headaches every Sunday evening. The body is reporting on the leadership environment with precision. No one taught you to read it.' },
      { title: 'The Zero-Sum Life', text: 'Every hour with family feels stolen from the career. Every hour at the office feels stolen from people who matter. The training room never addresses this — because it assumes the subject of leadership is the professional.' },
      { title: 'The Loss of Meta-Awareness', text: 'Too many micro-decisions. Too many partial conversations. Leaders lose the ability to observe their own thinking. When that tank empties, empathy goes first. Then clear judgment. Then self-regulation.' },
      { title: 'Immunity to Change', text: 'You want to empower your team. You keep micromanaging. Not from lack of intention — from a hidden internal commitment protecting something deeper. The pain is knowing exactly who you want to be, and acting like someone else. Every day.' },
    ],
    patternsNote: 'Sources: CCL research on Fundamental 4 Core Leadership Skills. HBR / Potential Project research across 35,000 leaders — 67% cite fragmented attention as their primary performance drain. Robert Kegan and Lisa Lahey, Harvard Graduate School of Education — Immunity to Change.',
  },
  arc2: {
    eyebrow: 'Arc 2 of 6 — The Root Cause',
    title: "Why Established Coaching/Training Won’t Fix This",
    intro: 'McKinsey, Deloitte, CCL, HBR have built multi-billion dollar dominance on one model: the leader as professional. Shifting to a whole-person methodology faces structural, economic, and cultural barriers. They know this — the evidence is in their own publications. Here is why the system cannot fix what it was not built to fix. And why that gap lands squarely on you.',
    traps: [
      { title: 'The Professional Persona Trap', text: "Sanitising leadership into competencies lets the industry ignore your personal history, your stress responses, your inner conflicts. You’re taught to perform leadership. The part of you that actually feels the pressure is treated as a personal problem to fix on your own time." },
      { title: 'The Scalability Trap', text: "Modular. Repeatable. Deliverable to thousands. That’s the design. Addressing your specific nervous system, your particular emotional triggers, your identity patterns — that requires intimate, non-linear work that cannot be put in a module. You receive standardised medicine for a unique condition." },
      { title: 'The KPI Bias', text: "Procurement buys what can be measured. Survey scores. Completion rates. You cannot put a quarterly number on ‘integration of a reactive pattern.’ So the industry optimises for what looks good on a spreadsheet. Your sense of meaning, your emotional regulation, your peace of mind — left off the agenda." },
      { title: 'The Expertise Barrier', text: 'Most corporate coaches are trained in business — not psychology, not somatic work, not trauma-informed care. When you hit a deep internal wall, the session pivots back to tactics. You are told, explicitly or implicitly: take your humanity to a therapist. Bring your performance to us.' },
      { title: 'The Heroic Leader Mythology', text: 'The economic model rewards the limitless leader — infinite hours, infinite stress absorption, personal life left at the door. So the industry sells resilience — how to absorb more. Not wholeness — how to live sustainably.' },
      { title: 'The Shelf-Ware Economy', text: "Firms have invested billions in IP built on behavioural models from the 1980s. Rebuilding from the ground up — trauma-informed, identity-level, whole-person — is reinvestment they won’t make while the existing material is still selling. You’re receiving outdated software. Not because the update doesn’t exist. Because replacing it doesn’t work for their economics." },
    ],
    note: "Sources: Jeffrey Pfeffer, Stanford — Leadership B.S. Gabor Maté / Dr. Stephen Porges — Polyvagal Theory and Trauma-Informed approaches to performance. Robert Kegan — In Over Our Heads; Immunity to Change. Sage Journal — research on the Ideal Worker norm. Georgenson (1982) and subsequent meta-analyses on training transfer failure.",
  },
  arc3: {
    eyebrow: 'Arc 3 of 6 — The Reframe',
    title: "You’re Not Broken. The Western Framework Is. And They Know It.",
    paragraphs: [
      'This is fragmentation. And it is not a character flaw. It is what happens when a well-designed human being is asked to operate inside a framework never built for the whole of them.',
      "The Western professional model split the leader in two: the person who shows up at work, and the person who exists everywhere else. You were rewarded for sustaining that split. And you’ve been paying the cost of it ever since.",
      'You are not a mindset problem. You are not a confidence problem. You are not a skills problem. You are a human being whose operating system has been running on fragmentation — and whose nervous system has been managing the consequences alone.',
    ],
    pullQuotes: [
      "The problem isn’t who you are. It’s what you’ve been asked to split off.",
      'Skills without integration break under pressure. Integration without skills is incomplete. You need both — and the order matters.',
      "Integrated leaders don’t perform well under pressure. They show up as themselves under pressure. That’s a different goal, and a different path.",
    ],
    checklistTitle: 'What Integrated Leadership Actually Looks Like',
    checklist: [
      'The same person in the boardroom and at the dinner table',
      "Conviction that doesn’t require rehearsal",
      'Presence the room feels before you speak',
      'A body, mind, and set of values speaking the same language',
      'Your team and family getting the real version — not the leftover',
    ],
  },
  arc4: {
    eyebrow: 'Arc 4 of 6 — The Solution',
    title: 'A Different Model — How This Work Is Actually Built',
    intro: 'This is not mindfulness repackaged for boardrooms. It is not motivation. It is a rigorous, evidence-grounded methodology that works at the layer where fragmentation actually lives — and where every other approach stops short.',
    intro2: "A leader is not a professional unit with a leadership gap. A leader is a human being — with a nervous system already running on chronic activation, a full life outside the office that doesn’t stay outside the office, an emotional history that shows up in every high-stakes room, and an identity shaped by years of performing what the corporate environment rewarded. Whole-person integration starts from this reality. Not from a competency framework. Not from a job description. From the actual human being in front of us.",
    pillars: [
      { title: 'The Nervous System First', text: "Most coaching starts with what you think and what you say. This work starts with what your body is doing — because a nervous system in chronic activation cannot produce authentic leadership regardless of what the mind decides. Dr. Stephen Porges’ Polyvagal Theory establishes that calm authority and genuine connection are only accessible from a state of physiological regulation. Not from willpower. Not from better frameworks. From a regulated body." },
      { title: 'Your Whole Life Is the Actual Context', text: "You don’t walk into a high-stakes meeting as a ‘professional.’ You walk in as a person who may not have slept, who had friction at home, who is carrying financial pressure, whose health has been quietly deteriorating. An approach that ignores this context is working on a version of you that doesn’t exist. Integration has to hold inside the actual life you are living — not in an idealised environment where none of those variables apply." },
      { title: 'Trauma-Informed Means Precise, Not Therapy', text: 'Many leadership patterns — hypervigilance, freeze responses, the need to control, chronic people-pleasing — are not character flaws. They are adaptive responses encoded in the nervous system, now running automatically in professional contexts where they no longer serve. Working with these patterns requires understanding their origin and physiological mechanism — not just their surface behaviour. Without this precision, coaching addresses the symptom. The pattern returns. Every time. Deeply based on work done by Raghu Ananthanarayanan and others.' },
      { title: 'Somatic Work Is Not Alternative Medicine', text: 'The way a leader breathes, holds tension, occupies physical space, or collapses under scrutiny — these are not cosmetic details. They are the operating system. And they cannot be changed through cognitive insight alone. This practice is evidence-backed, drawn from somatic experiencing work by Anuradha, Sacred paths, yoga therapy, and performance science used in military and Olympic environments.' },
      { title: 'Inner Intelligence Over External Prescription', text: "Your capacity for clear judgment, authentic presence, and wise leadership is already in you — obscured by accumulated stress responses, inherited patterns, and years of performing a version of yourself that the corporate environment reinforced. The work is not construction. It is excavation. Robert Kegan’s research at Harvard establishes clearly: the difference between a leader who knows what to do and one who does it under pressure is not more information — it is a different order of inner development." },
    ],
    closingHeading: 'One standard applies to everything we do: does it hold when pressure arrives?',
    closingBody: 'Not in the coaching session. Not in a calm moment of self-reflection. In the room where the stakes are real, the eyes are on you, and the decision cannot wait. Integration that only works in ideal conditions is not integration. This is the bar.',
    note: 'Sources: Raghu Ananthanarayanan and others — Saptasvara. Dr. Stephen Porges — Polyvagal Theory and the science of the social nervous system. Robert Kegan, Harvard Graduate School of Education — adult development theory. Peter Levine — Somatic Experiencing. Performance science from military, Olympic, and high-performance sport environments.',
  },
  arc5: {
    eyebrow: 'Arc 5 of 6 — The Promise',
    title: 'What Leaders Say After This Work',
    quote: "I came in because I was good in every meeting except the ones that mattered. The moment the CEO walked in, something in me shifted — my voice changed, my sentences got longer, I started explaining when I should have been stating. I knew exactly what was happening and couldn’t stop it.\n\nWhat changed wasn’t a technique. The work went somewhere I didn’t expect — into the version of me that had decided, a long time ago, that being too visible was dangerous. Once that moved, the room stopped being something I had to manage. I just showed up.\n\nWhat I didn’t expect: I became a better father. Not because we worked on that. Because the same thing that made me shrink in the boardroom was making me unavailable at home. When one shifted, both did.\n\nThis is for leaders who know the problem isn’t skill. Who have tried the obvious things and are ready to go somewhere different.",
    attribution: 'VP, Taxation, Financial Services',
    detail: '14 years experience',
  },
  arc6: {
    eyebrow: 'Arc 6 of 6 — What We Stand For',
    title: 'What We Stand For',
    intro: 'We exist for one reason: so that the right leaders can show up fully, speak their truth, and lead with authenticity, alignment, and dharma. There are enough loud voices with nothing behind them. This is for the ones who have something real to say — and need to find their way back to saying it.',
    principles: [
      { title: 'Your skills are not the problem — access to them under pressure is.', text: "Everything you’ve learned is already in there. Every framework, every experience, every hard-won judgment. The problem is that under pressure, you can’t reach it. This work doesn’t add more to what you know. It rebuilds the system that makes what you already have consistently accessible — when it matters most." },
      { title: 'Your power back to you — not to a coach or a program.', text: "Real integration creates independence, not dependency. This work is done when you no longer need it. You’ll leave with a rewired operating system that is yours. A daily practice. An inner bhumi that’s stable." },
      { title: 'Ancient depth. Rigorous standards.', text: 'The Panchakosha framework. Neuroscience. Performance science drawn from military, Olympic, and high-performance environments. Not borrowed spirituality dressed up for boardrooms. The integration of the deepest understanding of human performance — from wisdom traditions stress-tested over centuries, and disciplines refined under the hardest conditions on earth.' },
      { title: 'Integration Over Performance.', text: 'We are not here to make you better at performing. We are here to help you stop performing altogether — and start leading from who you actually are. That shift changes everything: how you speak, how you decide, how your team experiences you, how you experience yourself.' },
    ],
  },
  cta: {
    title: 'Where Do You Fragment? Discover in Under 5 Minutes.',
    intro: 'Most leaders have a dominant pattern — a layer where pressure hits first. Where the body tightens, or the mind blanks, or the inner voice takes over, or the identity starts performing. Knowing yours is where the work begins.',
    auditTitle: 'The Leadership Integration Audit',
    auditDesc: '20 questions. 5 minutes. Mapped across the five layers — Body, Breath and Energy, Emotions, Discernment, Joy and Purposefulness.',
    auditOutcomes: [
      'Your dominant fragmentation layer named clearly',
      'A specific description of how that pattern shows up under pressure',
      'One practice to begin working at that layer — immediately',
    ],
    auditClosing: 'This is not a lead magnet. It is a diagnostic. The same one we use at the start of every engagement.',
    auditCta: 'Start the Free Audit',
    auditNote: 'No sign-up required to begin. Results are yours — not stored, not sold, not used to sell you something.',
    callBridge: 'If what you see in the results matches what you already suspected — a 45-minute clarity call will tell you exactly where to start and whether this is the right path for you.',
    callCta: 'Book a Clarity Call',
  },
}

export default function TheWork() {
  const { content } = useContent('theWork')
  const c = (section, key) => content?.[section]?.[key] ?? defaults[section]?.[key]

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-warm-50 py-28 md:py-36 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(240,222,160,0.06) 0%, transparent 60%)' }} />
        <div className="relative z-[2] max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-8">
              {c('hero', 'badge')}
            </p>
            {(c('hero', 'lines') || []).map((line, i) => (
              <p key={i} className="font-display font-normal text-warm-50 leading-[1.3] mb-3" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>
                {line}
              </p>
            ))}
            <p className="font-display italic text-gold-400 leading-[1.3] mt-8 mb-6" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}>
              {c('hero', 'pivot')}
            </p>
            <p className="text-[1.05rem] leading-[1.85] text-warm-50/75 max-w-[720px]">
              {c('hero', 'closing')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Arc 1 — The Challenge */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400 mb-5">
              {c('arc1', 'eyebrow')}
            </p>
            <h2 className="font-display font-normal text-navy-950 mb-6 leading-[1.25]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('arc1', 'title')}
            </h2>
            <p className="text-[1rem] leading-[1.85] text-navy-950/65 max-w-[820px] mb-16">{c('arc1', 'intro')}</p>
          </ScrollReveal>

          {/* Shows up in the room */}
          <ScrollReveal>
            <h3 className="font-display text-[1.15rem] font-medium text-navy-950 mb-8 tracking-[0.02em]">{c('arc1', 'showsUpHeading')}</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {(c('arc1', 'showsUp') || []).map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative h-full bg-warm-50 p-8 border border-navy-950/10 transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(9,1,52,0.1),0_4px_12px_rgba(250,110,35,0.08)] hover:border-transparent">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                  <h4 className="font-display text-[0.95rem] font-medium text-navy-950 mb-4">{card.title}</h4>
                  <p className="text-[0.88rem] leading-[1.8] text-navy-950/55">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* What's underneath */}
          <ScrollReveal>
            <h3 className="font-display text-[1.15rem] font-medium text-navy-950 mb-8 tracking-[0.02em]">{c('arc1', 'underneathHeading')}</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {(c('arc1', 'underneath') || []).map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative h-full bg-warm-50 p-8 border border-navy-950/10 transition-all duration-[400ms] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(9,1,52,0.1),0_4px_12px_rgba(250,110,35,0.08)] hover:border-transparent">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                  <h4 className="font-display text-[0.95rem] font-medium text-navy-950 mb-4">{card.title}</h4>
                  <p className="text-[0.88rem] leading-[1.8] text-navy-950/55">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* The data behind the pattern */}
          <ScrollReveal>
            <h3 className="font-display text-[1.15rem] font-medium text-navy-950 mb-8 tracking-[0.02em]">{c('arc1', 'dataHeading')}</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {(c('arc1', 'data') || []).map((blob, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-navy-950 text-warm-50 p-10 h-full">
                  <div className="font-display text-gold-400 leading-none mb-3" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}>
                    {blob.stat}
                  </div>
                  <h4 className="font-display text-[1rem] font-medium text-warm-50 mb-3">{blob.title}</h4>
                  <p className="text-[0.85rem] leading-[1.75] text-warm-50/65">{blob.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-[0.78rem] italic text-navy-950/45 leading-[1.7] max-w-[820px] mb-20">{c('arc1', 'dataNote')}</p>
          </ScrollReveal>

          {/* Six patterns */}
          <ScrollReveal>
            <h3 className="font-display text-[1.15rem] font-medium text-navy-950 mb-8 tracking-[0.02em]">{c('arc1', 'patternsHeading')}</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {(c('arc1', 'patterns') || []).map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-warm-50 border border-navy-950/10 p-8 h-full hover:border-gold-400/40 transition-colors duration-300">
                  <h4 className="font-display text-[0.95rem] font-medium text-navy-950 mb-3">{p.title}</h4>
                  <p className="text-[0.88rem] leading-[1.8] text-navy-950/55">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-[0.78rem] italic text-navy-950/45 leading-[1.7] max-w-[820px] mt-6">{c('arc1', 'patternsNote')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Arc 2 — The Root Cause */}
      <section className="bg-warm-50 py-28 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400 mb-5">
              {c('arc2', 'eyebrow')}
            </p>
            <h2 className="font-display font-normal text-navy-950 mb-6 leading-[1.25]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('arc2', 'title')}
            </h2>
            <p className="text-[1rem] leading-[1.85] text-navy-950/65 max-w-[820px] mb-14">{c('arc2', 'intro')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {(c('arc2', 'traps') || []).map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white border border-navy-950/10 p-8 h-full hover:border-gold-400/40 transition-colors duration-300">
                  <h4 className="font-display text-[0.95rem] font-medium text-navy-950 mb-3">{p.title}</h4>
                  <p className="text-[0.88rem] leading-[1.8] text-navy-950/55">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-[0.78rem] italic text-navy-950/45 leading-[1.7] max-w-[820px] mt-6">{c('arc2', 'note')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Arc 3 — The Reframe */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400 mb-5">
              {c('arc3', 'eyebrow')}
            </p>
            <h2 className="font-display font-normal text-navy-950 mb-10 leading-[1.25]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('arc3', 'title')}
            </h2>
            {(c('arc3', 'paragraphs') || []).map((para, i) => (
              <p key={i} className="text-[1rem] leading-[1.9] text-navy-950/70 mb-6">{para}</p>
            ))}
          </ScrollReveal>

          <div className="my-14 space-y-6">
            {(c('arc3', 'pullQuotes') || []).map((q, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <blockquote className="border-l-[3px] border-gold-400 pl-6 py-3 bg-warm-50/60">
                  <p className="font-display italic font-medium text-navy-950 leading-[1.55]" style={{ fontSize: 'clamp(1rem, 1.9vw, 1.2rem)' }}>
                    {q}
                  </p>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 bg-warm-50 border border-navy-950/10 p-10">
              <h3 className="font-display text-[1rem] font-medium text-navy-950 mb-6 tracking-[0.02em]">
                {c('arc3', 'checklistTitle')}
              </h3>
              <ul className="space-y-4">
                {(c('arc3', 'checklist') || []).map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0 mt-[0.65rem]" />
                    <span className="text-[0.95rem] leading-[1.8] text-navy-950/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Arc 4 — The Solution */}
      <section className="bg-navy-950 text-warm-50 py-28 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400 mb-5">
              {c('arc4', 'eyebrow')}
            </p>
            <h2 className="font-display font-normal text-warm-50 mb-8 leading-[1.25]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('arc4', 'title')}
            </h2>
            <p className="text-[1rem] leading-[1.9] text-warm-50/75 mb-6">{c('arc4', 'intro')}</p>
            <p className="text-[0.95rem] leading-[1.9] text-warm-50/65 mb-14">{c('arc4', 'intro2')}</p>
          </ScrollReveal>

          <div className="space-y-6">
            {(c('arc4', 'pillars') || []).map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="grid md:grid-cols-[120px_1fr] gap-6 lg:gap-10 items-start py-8 border-l-[3px] border-gold-400/40 pl-6 lg:pl-8 hover:border-gold-400 transition-colors duration-300">
                  <div className="font-display text-gold-300 leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-medium text-gold-300 mb-3 tracking-[0.02em]">{p.title}</h3>
                    <p className="text-[0.92rem] leading-[1.85] text-warm-50/70">{p.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 p-10 bg-[rgba(32,52,96,0.5)] border-l-[3px] border-gold-400">
              <h3 className="font-display italic text-gold-300 mb-4 leading-[1.4]" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}>
                {c('arc4', 'closingHeading')}
              </h3>
              <p className="text-[0.95rem] leading-[1.85] text-warm-50/75">{c('arc4', 'closingBody')}</p>
            </div>
            <p className="text-[0.78rem] italic text-warm-50/45 leading-[1.7] max-w-[900px] mt-6">{c('arc4', 'note')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Arc 5 — The Promise */}
      <section className="bg-warm-50 py-28 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400 mb-5 text-center">
              {c('arc5', 'eyebrow')}
            </p>
            <h2 className="font-display font-normal text-navy-950 mb-12 leading-[1.25] text-center" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}>
              {c('arc5', 'title')}
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white border border-navy-950/10 p-10 md:p-14 relative">
              <div className="font-display text-[5rem] text-gold-400/20 leading-none mb-2 select-none">&ldquo;</div>
              {(c('arc5', 'quote') || '').split(/\n\n+/).map((para, i) => (
                <p key={i} className="font-display italic text-navy-950 leading-[1.7] mb-5" style={{ fontSize: 'clamp(0.98rem, 1.7vw, 1.15rem)' }}>
                  {para}
                </p>
              ))}
              <div className="mt-8 pt-6 border-t border-navy-950/10 flex flex-wrap items-baseline gap-3">
                <span className="font-display text-[0.95rem] font-medium text-gold-400 tracking-[0.02em]">— {c('arc5', 'attribution')}</span>
                {c('arc5', 'detail') && <span className="text-[0.82rem] text-navy-950/55">| {c('arc5', 'detail')}</span>}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Arc 6 — What We Stand For */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.7rem] tracking-[0.3em] uppercase text-gold-400 mb-5">
              {c('arc6', 'eyebrow')}
            </p>
            <h2 className="font-display font-normal text-navy-950 mb-8 leading-[1.25]" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              {c('arc6', 'title')}
            </h2>
            <p className="text-[1rem] leading-[1.9] text-navy-950/70 max-w-[820px] mb-14">{c('arc6', 'intro')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {(c('arc6', 'principles') || []).map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="group relative bg-warm-50 border border-navy-950/10 p-9 h-full transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(9,1,52,0.08)] hover:border-transparent">
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                  <div className="font-display text-[0.7rem] tracking-[0.2em] text-gold-300 font-medium mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-display text-[1rem] font-medium text-navy-950 mb-4 leading-[1.4]">{p.title}</h4>
                  <p className="text-[0.9rem] leading-[1.85] text-navy-950/60">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Conversion */}
      <section className="bg-navy-950 text-warm-50 py-24 md:py-28 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display font-normal text-warm-50 mb-6 leading-[1.25]" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}>
              {c('cta', 'title')}
            </h2>
            <p className="text-[1rem] leading-[1.85] text-warm-50/70 max-w-[820px] mb-14">{c('cta', 'intro')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            <ScrollReveal>
              <div>
                <h3 className="font-display text-gold-300 mb-4 leading-[1.4]" style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)' }}>
                  {c('cta', 'auditTitle')}
                </h3>
                <p className="text-[0.95rem] leading-[1.85] text-warm-50/70 mb-5">{c('cta', 'auditDesc')}</p>
                <p className="font-display text-[0.78rem] tracking-[0.2em] uppercase text-gold-400 mb-3">You will leave with:</p>
                <ul className="space-y-3 mb-6">
                  {(c('cta', 'auditOutcomes') || []).map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-[0.6rem]" />
                      <span className="text-[0.92rem] leading-[1.75] text-warm-50/75">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[0.88rem] italic text-warm-50/55 leading-[1.7]">{c('cta', 'auditClosing')}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-[rgba(32,52,96,0.5)] border border-gold-300/15 p-10">
                <a
                  href="#"
                  className="inline-block w-full text-center font-display text-[0.78rem] tracking-[0.14em] uppercase px-8 py-4 bg-gold-400 text-white transition-all duration-300 hover:bg-[#e05e15] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(250,110,35,0.3)] mb-5"
                >
                  {c('cta', 'auditCta')}
                </a>
                <p className="text-[0.82rem] italic text-warm-50/60 leading-[1.7] mb-8">{c('cta', 'auditNote')}</p>

                <div className="pt-8 border-t border-warm-50/10">
                  <p className="text-[0.92rem] leading-[1.8] text-warm-50/75 mb-5">{c('cta', 'callBridge')}</p>
                  <Link
                    to="/contact"
                    className="inline-block w-full text-center font-display text-[0.78rem] tracking-[0.14em] uppercase px-8 py-4 border border-warm-50/40 text-warm-50 transition-all duration-300 hover:border-gold-300 hover:text-gold-300"
                  >
                    {c('cta', 'callCta')}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
