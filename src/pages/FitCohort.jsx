import { Users, Flame, Activity, Handshake, Mountain, Globe } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { fitCohortFAQ } from '../data/faq'
import { testimonials } from '../data/testimonials'

const timeline = [
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
]

const features = [
  { icon: Users, title: 'Peer Learning Power', text: 'Your fragmentation patterns are mirrored in your peers. Seeing your patterns in others creates profound "aha" moments that 1-to-1 coaching can\'t replicate.' },
  { icon: Flame, title: 'Pressure Simulations', text: 'We don\'t just talk about pressure\u2014we create it. Board challenges, crisis scenarios, high-stakes presentations. You practice integration under real conditions.' },
  { icon: Activity, title: 'Multi-Modal Approach', text: 'Somatic work, breathwork, energy practices, psychological processing, values alignment. Integration happens across all Five Layers, not just cognitive.' },
  { icon: Handshake, title: 'Triad Accountability', text: 'You\'re paired with 2 other leaders in a triad. Weekly check-ins between sessions. This peer accountability makes the work stick.' },
  { icon: Mountain, title: 'Retreat Bookends', text: 'Opening retreat builds trust and diagnoses patterns. Closing retreat integrates learning and ensures sustainability. Deeper work happens in immersive settings.' },
  { icon: Globe, title: 'Lifetime Community', text: 'FIT graduates join a lifetime alumni network. Monthly meetups, shared resources, ongoing support. Integration is a journey, not a 10-week event.' },
]

export default function FitCohort() {
  const cohortTestimonials = testimonials.filter(t => t.program === 'fit-cohort')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-400 text-sm font-semibold rounded-full mb-6">
                  START HERE \u2022 MOST ACCESSIBLE ENTRY POINT
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  FIT Leadership Cohort
                </h1>
                <p className="text-xl text-slate-300 mb-6">{`Group-Based Integration for Senior Leaders Who Fragment Under Pressure`}</p>
                <ul className="space-y-3 mb-8">
                  {['10-week intensive (1-8-1 structure)', '5-8 senior leaders per cohort', 'Opening & closing retreats', 'Peer learning & accountability triads', 'Lifetime community access'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="text-gold-400">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button to="/contact">Apply for Next Cohort</Button>
                  <Button href="#structure" variant="secondary">See Full Program</Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="bg-navy-800 rounded-2xl p-8 border-2 border-gold-400/30">
                <div className="text-3xl font-bold text-gold-400 font-display mb-1">{'\u20B9'}1-1.5L + GST</div>
                <p className="text-slate-300 mb-4">10 weeks \u2022 Wed 5:30 AM IST</p>
                <p className="text-slate-300 text-sm mb-6">Next cohort starts: March 2026</p>
                <Button to="/contact" className="w-full">Apply Now</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ideal For / Not For */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="Who Is This For?" subtitle="FIT is designed for proven leaders who fragment under real pressure\u2014not because they lack capability, but because their operating system hasn't been integrated." light />

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-navy-800 rounded-2xl p-8 border border-green-500/20 h-full">
                <h3 className="font-display text-xl font-bold text-white mb-4">Ideal For</h3>
                <ul className="space-y-3">
                  {[
                    'Directors, VPs, Senior Managers with 8-15+ years experience',
                    'Leaders who are capable in calm but collapse under scrutiny',
                    'Those who want peer learning and community',
                    'Leaders ready to be vulnerable in a trusted group',
                    'People who thrive with accountability and mirrors',
                    'Those seeking sustainable transformation (not quick fixes)',
                    'Leaders willing to commit 10 weeks + 2 retreat weekends',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-navy-800 rounded-2xl p-8 border border-red-500/20 h-full">
                <h3 className="font-display text-xl font-bold text-white mb-4">Not For</h3>
                <ul className="space-y-3">
                  {[
                    'Leaders who need intensive 1-to-1 work (see One-on-One)',
                    'Those uncomfortable with group vulnerability',
                    'Leaders seeking business strategy consulting',
                    'People wanting quick fixes or techniques only',
                    'Those unable to commit to Wed 5:30 AM IST schedule',
                    'Leaders currently under deep psychiatric treatment',
                    'Those unwilling to do inter-session practice work',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-red-400/70 mt-0.5 shrink-0">&#10007;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 1-8-1 Structure */}
      <section id="structure" className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="The 1-8-1 Structure" subtitle="One opening retreat, eight intensive training weeks, one closing integration retreat." light />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-4 gap-6 bg-navy-900 rounded-2xl p-8 border border-navy-800">
                  <div className="md:col-span-1">
                    <div className="bg-navy-800 rounded-xl p-4 text-center border border-gold-400/20">
                      <p className="text-gold-400 font-bold text-sm">{item.week}</p>
                      <p className="text-slate-300 text-xs mt-1">{item.label}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-display text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                    {item.layers && (
                      <ul className="mt-4 space-y-1">
                        {item.layers.map((l, j) => (
                          <li key={j} className="text-slate-300/80 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60" /> {l}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes FIT Different */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="What Makes FIT Different" subtitle="This isn't typical executive coaching or leadership training." light />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, text }, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-800 hover:border-gold-400/30 transition-colors h-full">
                  <Icon className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included + Investment */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="What's Included" light />

          <ScrollReveal>
            <div className="bg-navy-900 rounded-2xl p-8 md:p-10 border border-navy-800 mb-8">
              <ul className="space-y-4">
                {[
                  { label: 'Opening Retreat (Week 1):', desc: '2-day immersive weekend \u2022 Fragmentation diagnosis \u2022 Five Layers introduction \u2022 Cohort bonding' },
                  { label: '8 Weekly Group Sessions:', desc: '75-90 minutes each \u2022 Wednesday 5:30 AM IST \u2022 Layer-by-layer training \u2022 Pressure simulations' },
                  { label: 'Closing Retreat (Week 10):', desc: '2-day integration weekend \u2022 Final simulations \u2022 Sustainability planning \u2022 Graduation' },
                  { label: '1 Personal Session:', desc: '60 minutes 1-to-1 with Gowtham \u2022 Your specific pattern \u2022 Personalized guidance' },
                  { label: 'Triad Accountability:', desc: 'Weekly check-ins with 2 peer leaders \u2022 Between-session support' },
                  { label: 'Digital Resources:', desc: 'Guided practices \u2022 Frameworks \u2022 Reading materials \u2022 Session recordings' },
                  { label: 'Lifetime Alumni Access:', desc: 'Monthly alumni meetups \u2022 Private community \u2022 Ongoing resources' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-gold-400 mt-0.5 shrink-0">&#10003;</span>
                    <p className="text-slate-300"><strong className="text-white">{item.label}</strong> {item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-navy-900 rounded-2xl p-8 border-2 border-gold-400/30">
              <h3 className="font-display text-xl font-bold text-white mb-3">Investment</h3>
              <p className="text-slate-300 leading-relaxed mb-2">
                <strong className="text-gold-400 text-2xl">{'\u20B9'}1-1.5 Lakh + GST</strong> (pricing varies based on cohort composition and retreat location)
              </p>
              <p className="text-slate-300 text-sm">Includes: All sessions, both retreats (accommodation + meals), digital resources, 1-to-1 session, lifetime community access.</p>
              <p className="text-slate-300 text-sm mt-2">Not included: Travel to retreat locations.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="What Past Participants Say" light />
          <div className="grid md:grid-cols-2 gap-8">
            {cohortTestimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title="Frequently Asked Questions" light />
          <FAQAccordion items={fitCohortFAQ} dark />
        </div>
      </section>

      <CTASection
        heading="Ready to Stop Fragmenting?"
        subtext="Applications for March 2026 cohort are now open. Limited to 8 leaders."
        buttonText="Apply for March 2026 Cohort"
        buttonTo="/contact"
      />
    </>
  )
}
