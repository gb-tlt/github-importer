import { Briefcase, Award, Heart, Zap, Brain, BookOpen } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'

const credentialIcons = { briefcase: Briefcase, award: Award, heart: Heart, zap: Zap, brain: Brain, book: BookOpen }

import { credentials } from '../data/credentials'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-6">About</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Man Behind the Method
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              From corporate fragmentation to helping leaders integrate under pressure
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <ScrollReveal className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden border border-gold-400/20 shadow-2xl shadow-gold-400/5 sticky top-28">
                <img
                  src="/gowtham.jpg"
                  alt="Gowtham Balaji - Leadership Integration Coach"
                  className="w-full aspect-square object-cover object-top"
                />
                <div className="bg-navy-800 p-4 text-center">
                  <p className="text-white font-display text-lg font-semibold">Gowtham Balaji</p>
                  <p className="text-slate-300 text-sm mt-1">Leadership Integration Coach</p>
                  <div className="w-8 h-0.5 bg-gold-400 mx-auto mt-3" />
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold text-white mb-6">
                  My Story: From Fragmentation to Integration
                </h2>
              </ScrollReveal>

              {[
                "I spent many years in corporate leadership roles\u2014leading operations, strategy, and more. On paper, I was succeeding. Inside, I was fragmenting.",
                "I made solid decisions when there was time. I was fairly articulate in meetings with not-so-big-leaders. I could lead in calm. But when real pressure hit\u2014scrutiny, crisis decisions, high-stakes presentations to clients, vendors\u2014something broke. My body would tighten. My mind would blank. My presence would collapse. I looked composed on the outside, but I was drowning inside.",
                "Slowly, the pressure seeped into my relationship back home with my wife\u2014I was becoming an annoying husband, an irritated father. I could see my health, happiness, and personal fulfillment slowly slipping away from my hands.",
                "I tried everything: I quit corporate, built a farm with cows and natural farming. I listened to books, podcasts, audio books, interviews. I explored mindfulness techniques, some form of therapy. Frankly, all these helped, but they didn\u2019t fix the core issue. I was still fragmenting under pressure.",
                "Then I discovered body-based work, yoga therapy, energy healing, yoga sutras, Mahabharata, and trauma-informed coaching. I learned that my fragmentation wasn\u2019t happening only at the behavioral level\u2014it was happening at the foundational levels: body, energy, nervous system, emotional layer, in my identity, and my spiritual level too.",
                "When I addressed each one of these slowly over time, everything changed. My body stopped betraying me. My mind stayed clear under pressure. My decisions became grounded in judgment, not reaction. I didn\u2019t just learn techniques\u2014I rewired my operating system.",
              ].map((text, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p className="text-slate-300 leading-relaxed text-lg">{text}</p>
                </ScrollReveal>
              ))}

              <ScrollReveal>
                <div className="bg-navy-800 rounded-2xl p-8 border border-gold-400/20 mt-8">
                  <p className="text-white text-lg leading-relaxed font-display italic">
                    &ldquo;With practice, these days, pressure makes me more calm, sharp, intuitive and powerful&mdash;all while being fully aligned and authentic to myself, nurturing my family and being aligned to business goals.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p className="text-slate-300 leading-relaxed text-lg">
                  <strong className="text-white">If I can do it, every leader can do it. Every leader deserves an uncompromising, honourable and joyful life.</strong> I now help other senior leaders do what I did: stop fragmenting, start integrating. Live a thriving life in every aspect of it.
                </p>
                <p className="text-gold-400 font-display italic text-lg mt-4">
                  May every tough situation make you stronger from within.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Background & Training"
            subtitle="I bring together leadership experience, coaching certifications, and depth modalities to serve senior leaders."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((cred, i) => {
              const Icon = credentialIcons[cred.icon] || Briefcase
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-navy-900 rounded-2xl p-8 border border-navy-800 hover:border-gold-400/30 transition-colors h-full">
                    <Icon className="w-8 h-8 text-gold-400 mb-4" />
                    <h3 className="font-display text-lg font-bold text-white mb-3">{cred.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{cred.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="My Coaching Philosophy" subtitle="These principles guide how I work with leaders." light />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Integration Over Performance',
                text: 'Most coaching optimizes for performance. I optimize for integration. When you\'re integrated, presence expands, and performance appears naturally.',
              },
              {
                title: 'Layer 3 and Deeper, Not Layer 1',
                text: 'I don\'t teach techniques (Layer 1). I work at Layer 3 and deeper: body, energy, mind, judgment, values, identity, spiritual. When the foundation is solid, techniques emerge organically.',
              },
              {
                title: 'Pressure Is a Privilege',
                text: 'Pressure isn\'t the problem. Pressure is a privilege. It reveals where you fragment. I use pressure as a diagnostic tool and as a training ground.',
              },
              {
                title: 'Multi-Modal Approach',
                text: 'One size doesn\'t fit all. Some leaders need somatic work. Some need energy healing. Some need psychological processing. I customize the modality to what serves you.',
              },
              {
                title: 'Honesty Over Politeness',
                text: 'I\'ll tell you the truth, not what you want to hear. If this work isn\'t right for you, I\'ll say so. If you\'re not ready, I\'ll say so. Honesty serves you better than niceness.',
              },
              {
                title: 'Long-Term Rewiring',
                text: 'This isn\'t a 3-session fix. Integration takes time. I work with leaders who are ready to commit to 3-6 months of deep work. Quick fixes don\'t rewire operating systems.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-800 h-full">
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="How This Differs from Other Coaching" light />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gold-400/30">
                    <th className="py-4 pr-6 text-gold-400 font-semibold text-sm uppercase tracking-wide">Traditional Executive Coaching</th>
                    <th className="py-4 pl-6 text-gold-400 font-semibold text-sm uppercase tracking-wide">My Approach (Integration Coaching)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Focuses on skills, behaviors, communication', 'Focuses on body, energy, nervous system, values, identity, spiritual'],
                    ['Works on what you DO (Layer 1)', 'Works on how you ARE (Layer 3 and deeper)'],
                    ['Mostly talk-based, cognitive', 'Multi-modal: somatic, energy, psychological, trauma, spiritual'],
                    ['30-45 minute sessions, often monthly', '60-120 minute sessions, intensive work'],
                    ['Generic curriculum applied to all clients', 'Fully customized to YOUR fragmentation pattern'],
                    ['Avoids pressure (calm environment only)', 'Uses pressure as training ground (simulation-based)'],
                    ['Professional but distant relationship', 'Deep trust, vulnerability required, direct access'],
                  ].map(([trad, mine], i) => (
                    <tr key={i} className="border-b border-navy-800">
                      <td className="py-4 pr-6 text-slate-300/70">{trad}</td>
                      <td className="py-4 pl-6 text-white font-medium">{mine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-8" />
            <p className="text-slate-300 text-lg leading-relaxed">
              Outside of coaching, I tend to my farm with cows and natural farming practices. I live with my family and draw deep inspiration from Tiruvannamalai, a sacred site that informs much of my spiritual grounding. Everything I teach, I practice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        heading="Ready to Explore If This Work Fits You?"
        subtext="Book a 45-minute clarity call. We'll map your fragmentation pattern and I'll tell you honestly whether this is the right path for you."
        buttonText="Book Your Clarity Call"
        buttonTo="/contact"
      />
    </>
  )
}
