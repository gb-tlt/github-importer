import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import { useContent } from '../hooks/useContent'

const defaults = {
  hero: {
    badge: 'About',
    title: 'Why The Leadership Tattva Exists',
    subtitle: 'We exist because the most capable leaders fragment under pressure — and no one is addressing why.',
  },
  observed: {
    label: 'What We Saw',
    title: 'The Pattern No One Was Naming',
    subtitle: 'After working with hundreds of senior leaders, we noticed the same thing again and again.',
    problems: [
      { bold: 'The body betrays first.', text: 'Tension, shallow breathing, collapsed posture — before the mind even registers pressure, the nervous system has already fragmented.' },
      { bold: 'The mind goes blank second.', text: "The brilliant strategist who had the perfect answer prepared can't access it when the room is watching." },
      { bold: 'Presence collapses third.', text: 'The team senses it. The board sees it. Composed outside, drowning inside.' },
      { bold: "Skills-based coaching doesn't fix it.", text: 'Leaders try communication training, executive coaching, leadership workshops. The techniques work in calm. They vanish under pressure.' },
      { bold: 'The damage spreads beyond work.', text: 'The same fragmentation that shows up in boardrooms enters relationships, health, and sense of self.' },
    ],
    works: [
      { bold: 'Start with the body, not the mind.', text: 'Nervous system regulation, somatic awareness, and physical grounding create the foundation everything else is built on.' },
      { bold: 'Work at every layer simultaneously.', text: 'Body, energy, mind, judgment, purpose — the Panchakosha framework addresses all five, not just the cognitive surface.' },
      { bold: 'Indic wisdom meets modern neuroscience.', text: "The Yoga Sutras, Sankhya, Navarasa, and the Bhagavad Gita aren't ancient philosophy — they're precision tools for how the human system operates under stress." },
      { bold: 'Use pressure as the training ground.', text: "Integration that hasn't been tested under real stakes isn't integration. We simulate and work within high-pressure moments, not away from them." },
      { bold: 'Daily practice rewires permanently.', text: 'Not weekend workshops. Not quarterly offsites. Daily, embodied practice that changes the operating system at the structural level.' },
    ],
    closing: 'This is what The Leadership Tattva was built on.',
    closingText: "Not a theory. Not a borrowed framework. A methodology built from the ground up — rooted in the intelligence traditions of this land, validated by the neuroscience of this era, and proven with hundreds of leaders who stopped fragmenting and started leading from stability.",
  },
  philosophy: {
    title: 'What Guides Our Work',
    subtitle: 'Our Principles',
    items: [
      {
        title: 'Integration Over Performance',
        text: "Most coaching optimises for performance. We optimise for integration. When you're integrated, performance appears naturally. When you chase performance without integration, you fragment.",
      },
      {
        title: 'Practice Over Theory',
        text: "Understanding doesn't create change. Daily practice does. We don't give you frameworks to think about. We give you practices to embody. Daily rigor, not weekend inspiration.",
      },
      {
        title: 'Pressure Is a Privilege',
        text: "Pressure isn't the problem. Pressure is the training ground. It reveals exactly where you fragment. We use it as a diagnostic and as a forge — because integration that hasn't been tested under fire isn't integration.",
      },
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
          'Gowtham spent years in corporate leadership — leading operations, strategy, and teams. He made solid decisions when there was time. He was articulate in low-stakes meetings. He could lead in calm.',
          "But when real pressure hit — scrutiny, crisis decisions, high-stakes presentations — something broke. His body would tighten. His mind would blank. His presence would collapse. <strong>He was succeeding on paper and fragmenting inside.</strong> The pressure seeped into his relationships, his health, his sense of self.",
        ],
      },
      {
        label: 'The Search',
        paragraphs: [
          "He left corporate life, built a farm in Tiruvannamalai, and began studying what actually fixes the system underneath. Not one tradition, but many — yoga therapy, somatic work, energy healing, Advaita Vedanta, the Yoga Sutras, depth psychology, neuroscience. He trained under teachers who carried these traditions with rigour, not as weekend retreats but as lived practice.",
        ],
      },
      {
        label: 'What Changed',
        paragraphs: [
          'When he addressed each layer — body, energy, mind, judgment, purpose — slowly and with discipline, everything shifted.',
        ],
        practiceLabel: "What Gowtham's own practice produced",
        practiceItems: [
          'His body stopped betraying him under scrutiny — grounded posture, steady breathing became the default, not the effort',
          'His mind stayed clear under pressure — no blanking, no over-explaining, no freezing',
          'His decisions became grounded in judgment, not reaction — conviction replaced people-pleasing',
          'Pressure started making him calmer, sharper, more intuitive — not less',
          'His relationships, health, and sense of purpose realigned — integration spread beyond leadership into every domain of life',
        ],
      },
      {
        label: 'The Work Now',
        paragraphs: [
          "When Gowtham brought this integrated methodology to senior leaders — CXOs, founders, VPs from companies like Google, Amazon, Barclays, and Apollo Hospitals — the same shifts appeared. Leaders who had tried five executive coaches and found none that stuck began reporting permanent changes within weeks.",
          '<strong>If I can do it, every leader can do it. Every leader deserves an uncompromising, honourable and joyful life.</strong>',
        ],
      },
    ],
    detailLabel: 'Where the work happens',
    detailText: 'From a farm in Tiruvannamalai, Tamil Nadu — far from the noise, close to the work. Sessions begin at 5:30 AM. The environment is intentional.',
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
    heading: "If This Resonates, Let's Talk.",
    subtext: "Book a clarity call — a 45-minute conversation to understand your pattern and see if there's a fit.",
    buttonText: 'Book a Clarity Call',
  },
}

export default function About() {
  const { content } = useContent('about')

  const c = (section, key) => content?.[section]?.[key] || defaults[section]?.[key]

  const problems = c('observed', 'problems') || defaults.observed.problems
  const works = c('observed', 'works') || defaults.observed.works
  const philosophyItems = c('philosophy', 'items') || defaults.philosophy.items
  const chapters = c('founder', 'chapters') || defaults.founder.chapters
  const lineagePeople = c('lineage', 'people') || defaults.lineage.people

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-navy-950 via-[#0d0240] to-[#203460] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(240,222,160,0.04)_0%,transparent_55%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-32">
          <div className="max-w-[700px]">
            <ScrollReveal>
              <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">{c('hero', 'badge')}</p>
              <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal text-warm-50 mb-6">
                {c('hero', 'title')}
              </h1>
              <p className="text-[1.08rem] text-warm-50/70 leading-[1.85] max-w-[600px]">
                {c('hero', 'subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. What We Observed */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">{c('observed', 'label')}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-navy-950 mb-2">{c('observed', 'title')}</h2>
            <p className="text-[0.98rem] text-navy-950/55 mb-12 max-w-[650px]">{c('observed', 'subtitle')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: What Keeps Breaking */}
            <ScrollReveal>
              <div>
                <p className="font-display text-[0.75rem] tracking-[0.2em] uppercase font-medium text-gold-400 mb-6">What Keeps Breaking</p>
                {problems.map((item, i) => (
                  <div key={i} className="flex gap-4 mb-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-[0.55rem]" />
                    <p className="text-[0.92rem] leading-[1.8] text-navy-950/55">
                      <strong className="text-navy-950 font-medium">{item.bold}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: What Actually Works */}
            <ScrollReveal>
              <div>
                <p className="font-display text-[0.75rem] tracking-[0.2em] uppercase font-medium text-[#5a9e6f] mb-6">What Actually Works</p>
                {works.map((item, i) => (
                  <div key={i} className="flex gap-4 mb-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5a9e6f] shrink-0 mt-[0.55rem]" />
                    <p className="text-[0.92rem] leading-[1.8] text-navy-950/55">
                      <strong className="text-navy-950 font-medium">{item.bold}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Divider + Closing */}
            <div className="col-span-full">
              <ScrollReveal>
                <div className="w-full h-px bg-navy-950/10 mb-12" />
              </ScrollReveal>
              <ScrollReveal>
                <div className="max-w-[700px] py-8 px-10 bg-warm-50 border-l-[3px] border-gold-400">
                  <p className="text-[0.95rem] leading-[1.85] text-navy-950">
                    <span className="text-gold-400 font-medium">{c('observed', 'closing')}</span> {c('observed', 'closingText')}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6 text-center">{c('philosophy', 'subtitle')}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-navy-950 text-center mb-14">{c('philosophy', 'title')}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-white p-10 border border-navy-950/10 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(9,1,52,0.1),0_4px_12px_rgba(250,110,35,0.08)] hover:border-transparent cursor-default">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                  <h3 className="font-display text-[0.9rem] font-medium text-navy-950 mb-3 leading-[1.35]">{item.title}</h3>
                  <p className="text-[0.88rem] leading-[1.8] text-navy-950/55">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Founder */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          <ScrollReveal>
            <div className="sticky top-[120px] w-full max-lg:max-w-[300px] max-lg:mx-auto max-lg:relative max-lg:top-auto">
              <img
                src="/images/gowtham-seated.png"
                alt="Gowtham Balaji"
                className="w-full object-contain border border-navy-950/10"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">The Founder</p>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-normal text-navy-950 mb-1">{c('founder', 'name')}</h2>
              <p className="text-[0.85rem] text-navy-950/55 italic mb-10">{c('founder', 'role')}</p>
            </ScrollReveal>

            {chapters.map((chapter, ci) => (
              <ScrollReveal key={ci}>
                <div className="mb-10">
                  <p className="font-display text-[0.75rem] tracking-[0.2em] uppercase font-medium text-gold-400 mb-3">{chapter.label}</p>
                  {chapter.paragraphs.map((para, pi) => (
                    <p
                      key={pi}
                      className="text-[0.95rem] leading-[1.95] text-navy-950/55 mb-4 [&_strong]:text-navy-950 [&_strong]:font-medium"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}

                  {chapter.practiceItems && (
                    <div className="mt-4 py-8 px-10 bg-warm-50 border-l-[3px] border-gold-400">
                      <p className="font-display text-[0.75rem] tracking-[0.2em] uppercase font-medium text-gold-400 mb-4">{chapter.practiceLabel}</p>
                      {chapter.practiceItems.map((item, pi) => (
                        <div key={pi} className="flex gap-3 mb-3 items-start">
                          <div className="w-[5px] h-[5px] rounded-full bg-gold-400 shrink-0 mt-2" />
                          <p className="text-[0.9rem] leading-[1.75] text-navy-950/55">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <div className="mt-8 pt-6 border-t border-navy-950/10">
                <p className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-gold-400 mb-2">{c('founder', 'detailLabel')}</p>
                <p className="text-[0.88rem] leading-[1.8] text-navy-950/55">{c('founder', 'detailText')}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Lineage */}
      <section className="py-20 px-6 bg-warm-50">
        <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">{c('lineage', 'label')}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-navy-950 mb-2">{c('lineage', 'title')}</h2>
            <p className="text-[0.95rem] text-navy-950/55 italic mb-12">{c('lineage', 'subtitle')}</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex justify-center gap-12 flex-wrap">
              {lineagePeople.map((person, i) => (
                <div key={i} className="group text-center max-w-[140px] transition-all duration-400 hover:-translate-y-1 cursor-default">
                  <div className="w-[100px] h-[100px] rounded-full mx-auto mb-4 bg-white border-2 border-gold-300/40 group-hover:border-gold-400 transition-colors duration-300 overflow-hidden">
                    {person.photo ? (
                      <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[0.75rem] text-navy-950/40 font-display tracking-wide">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <p className="font-display text-[0.75rem] font-medium text-navy-950 mb-0.5">{person.name}</p>
                  <p className="text-[0.72rem] text-navy-950/55 leading-[1.5]">{person.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        heading={c('cta', 'heading')}
        subtext={c('cta', 'subtext')}
        buttonText={c('cta', 'buttonText')}
        buttonTo="/contact"
        dark
      />
    </>
  )
}
