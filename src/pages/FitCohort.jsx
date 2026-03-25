import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'

const defaults = {
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
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`bg-white border transition-all duration-400 overflow-hidden ${
        isOpen
          ? 'border-gold-400/20 shadow-lg shadow-navy-950/8'
          : 'border-navy-950/10 hover:shadow-md hover:shadow-navy-950/6 hover:border-transparent'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-5 md:px-8 md:py-6 cursor-pointer text-left hover:bg-gold-400/[0.02] transition-colors"
      >
        <span className="font-display text-xl text-gold-300 font-normal mr-4 min-w-[30px] hidden md:inline">
          {item.number}
        </span>
        <div className="flex-1">
          <div className="font-display text-sm md:text-[0.9rem] font-medium text-navy-950 leading-snug mb-0.5">
            {item.title}
          </div>
          <div className="text-[0.82rem] text-navy-950/55 leading-relaxed">
            {item.subtitle}
          </div>
        </div>
        <div
          className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ml-4 text-sm transition-all duration-300 ${
            isOpen
              ? 'bg-gold-400 border-gold-400 text-white rotate-45'
              : 'border-navy-950/10 text-gold-400'
          }`}
        >
          +
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div
              className="accordion-content-html px-6 pb-6 md:px-8 md:pb-8 md:pl-[4.2rem] [&>p]:text-[0.88rem] [&>p]:leading-[1.85] [&>p]:text-navy-950/55 [&>p]:mb-3 [&_strong]:text-navy-950 [&_strong]:font-medium [&>ul]:list-none [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-1.5 [&>ul]:mt-2 [&_li]:text-[0.85rem] [&_li]:leading-[1.75] [&_li]:text-navy-950/55"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FitCohort() {
  const { content } = useContent('fitCohort')
  const [openAccordions, setOpenAccordions] = useState({})

  const c = (section, key) => content?.[section]?.[key] || defaults[section]?.[key]

  const toggleAccordion = (groupIndex, itemIndex) => {
    setOpenAccordions(prev => {
      const key = `${groupIndex}-${itemIndex}`
      const currentOpen = prev[groupIndex]
      if (currentOpen === itemIndex) {
        return { ...prev, [groupIndex]: null }
      }
      return { ...prev, [groupIndex]: itemIndex }
    })
  }

  const outcomeGroups = c('outcomes', 'groups') || []
  const journeyPhases = c('journey', 'phases') || []
  const numberItems = c('numbers', 'items') || []
  const whoItems = c('who', 'items') || []
  const testimonialItems = c('testimonials', 'items') || []

  return (
    <>
      {/* 1. Hero — Navy gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-navy-950 via-[#0d0240] to-[#203460] text-warm-50 overflow-hidden"
        style={{ padding: '10rem 0 7rem' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 25% 55%, rgba(240,222,160,0.04) 0%, transparent 55%)' }}
        />
        <div className="relative z-10 max-w-[750px] mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6">
              {c('hero', 'label')}
            </p>
            <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal text-warm-50 leading-tight mb-6">
              {c('hero', 'title')}
            </h1>
            <p className="text-[1.05rem] text-warm-50/70 leading-[1.85] max-w-[620px] mx-auto mb-10">
              {c('hero', 'subtitle')}
            </p>
            <Link to="/contact" className="inline-block font-display text-[0.72rem] tracking-[0.14em] uppercase px-10 py-4 bg-gold-400 text-white hover:bg-[#e05e15] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(250,110,35,0.3)] transition-all duration-400">
              {c('hero', 'ctaText')}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Problem — White bg */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6">
              {c('problem', 'label')}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-navy-950 leading-tight mb-8">
              {c('problem', 'title')}
            </h2>
            <div className="w-[50px] h-0.5 bg-gold-400 mb-8" />
          </ScrollReveal>
          {(c('problem', 'paragraphs') || []).map((p, i) => (
            <ScrollReveal key={i}>
              <p
                className="text-[0.95rem] leading-[1.95] text-navy-950/55 mb-5 [&>strong]:text-navy-950 [&>strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Outcomes — Beige bg */}
      <section className="bg-warm-50 py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6 text-center">
              {c('outcomes', 'label')}
            </p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-navy-950 leading-tight text-center mb-4">
              {c('outcomes', 'title')}
            </h2>
            <p className="text-[0.95rem] text-navy-950/55 text-center max-w-[550px] mx-auto mb-12">
              {c('outcomes', 'subtitle')}
            </p>
          </ScrollReveal>

          {outcomeGroups.map((group, gi) => (
            <div key={gi} className="mb-12 last:mb-0">
              <ScrollReveal>
                <div className="font-display text-[0.7rem] tracking-[0.25em] uppercase text-gold-400 mb-3 pl-2">
                  {group.label}
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="flex flex-col gap-4">
                  {(group.items || []).map((item, ii) => (
                    <AccordionItem
                      key={ii}
                      item={item}
                      isOpen={openAccordions[gi] === ii}
                      onToggle={() => toggleAccordion(gi, ii)}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Journey — Navy bg */}
      <section className="bg-navy-950 text-warm-50 py-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6 text-center">
              {c('journey', 'label')}
            </p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-warm-50 leading-tight text-center mb-4">
              {c('journey', 'title')}
            </h2>
            <p className="text-[0.95rem] text-warm-50/70 text-center max-w-[550px] mx-auto mb-16">
              {c('journey', 'subtitle')}
            </p>
          </ScrollReveal>

          <div className="relative pl-10">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gold-300/15"
              style={{ left: '15px' }}
            />

            {journeyPhases.map((phase, i) => (
              <ScrollReveal key={i}>
                <div className="relative mb-10 last:mb-0 pl-8">
                  {/* Dot */}
                  <div
                    className="absolute w-3 h-3 rounded-full bg-gold-400 border-2 border-navy-950 z-10"
                    style={{ left: '-33px', top: '0.3rem' }}
                  />
                  <div className="font-display text-[0.68rem] tracking-[0.2em] uppercase text-gold-400 mb-1.5">
                    {phase.phaseLabel}
                  </div>
                  <div className="font-display text-base font-medium text-gold-300 mb-2">
                    {phase.title}
                  </div>
                  <p
                    className="text-[0.88rem] leading-[1.8] text-warm-50/70 [&>strong]:text-warm-50 [&>strong]:font-medium"
                    dangerouslySetInnerHTML={{ __html: phase.body }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Numbers — White bg */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6">
              {c('numbers', 'label')}
            </p>
            <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-normal text-navy-950 leading-tight mb-12">
              {c('numbers', 'title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {numberItems.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-[2.2rem] font-normal text-navy-950 leading-none mb-2">
                    {item.value}
                  </div>
                  <div className="text-[0.72rem] tracking-wide text-navy-950/55 leading-snug">
                    {item.label}<br />{item.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Who — Beige bg */}
      <section className="bg-warm-50 py-28 px-6">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6">
              {c('who', 'label')}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.4rem,2.8vw,2rem)] font-normal text-navy-950 leading-tight mb-8">
              {c('who', 'title')}
            </h2>
            <div className="w-[50px] h-0.5 bg-gold-400 mb-8" />
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-[0.95rem] leading-[1.9] text-navy-950/55 mb-6">
              {c('who', 'intro')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {whoItems.map((item, i) => (
                <li key={i} className="text-[0.9rem] leading-[1.75] text-navy-950/55 pl-5 relative">
                  <span className="absolute left-0 top-[0.55rem] w-1.5 h-1.5 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Testimonials — Navy bg */}
      <section className="bg-navy-950 text-warm-50 py-28 px-6 relative overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-40%', right: '-15%', width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(240,222,160,0.03) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6 text-center">
              {c('testimonials', 'label')}
            </p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-warm-50 leading-tight text-center mb-12">
              {c('testimonials', 'title')}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonialItems.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[rgba(32,52,96,0.4)] border border-gold-300/8 py-[2.2rem] px-[1.8rem] transition-all duration-400 hover:-translate-y-[5px] hover:border-gold-400/20 hover:shadow-xl hover:shadow-black/18">
                  <div className="font-display text-[2.5rem] text-gold-300/15 leading-none mb-1 select-none">"</div>
                  <p className="text-[0.85rem] leading-[1.85] text-warm-50/80 italic mb-5">{t.text}</p>
                  <div className="w-[25px] h-px bg-gold-400 mb-3" />
                  <div className="font-display text-[0.75rem] font-medium text-gold-300 mb-0.5">{t.role}</div>
                  <div className="text-[0.72rem] text-warm-50/70">{t.company}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Investment — Beige bg */}
      <section className="bg-warm-50 py-20 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase font-normal text-gold-400 mb-6">
              {c('investment', 'label')}
            </p>
            <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-normal text-navy-950 leading-tight mb-6">
              {c('investment', 'title')}
            </h2>
            <div className="font-display text-3xl text-navy-950 font-normal mb-4">
              {c('investment', 'price')}
            </div>
            <p className="text-[0.9rem] text-navy-950/55 leading-[1.85]">
              {c('investment', 'note')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. CTA — Navy gradient */}
      <section className="bg-gradient-to-br from-navy-950 to-[#203460] text-warm-50 text-center py-28 px-6 relative overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(250,110,35,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal text-warm-50 leading-tight mb-4">
              {c('cta', 'heading')}
            </h2>
            <p className="text-[0.95rem] text-warm-50/70 leading-[1.85] mb-10">
              {c('cta', 'body')}
            </p>
            <Link to="/contact" className="inline-block font-display text-[0.72rem] tracking-[0.14em] uppercase px-12 py-4 bg-gold-400 text-white hover:bg-[#e05e15] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(250,110,35,0.3)] transition-all duration-400">
              {c('cta', 'buttonText')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
