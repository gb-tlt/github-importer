import { Target, Scale, Heart, Clock, Briefcase, Sprout, Activity, RefreshCw } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { lifeCoachingFAQ } from '../data/faq'
import { testimonials } from '../data/testimonials'

const dimensions = [
  { icon: Target, title: 'Purpose & Meaning', text: 'What actually matters to you? Beyond titles, compensation, status\u2014what is your genuine contribution? We clarify your purpose and design your life around it.' },
  { icon: Scale, title: 'Values Alignment', text: 'What do you stand for? Are you living by those values, or violating them? We audit your values and realign your choices with what you truly believe.' },
  { icon: Heart, title: 'Relationships', text: 'Marriage, family, friendships. How have they been affected by your leadership? We redesign relationship patterns and create sustainable connection.' },
  { icon: Clock, title: 'Life Rhythm & Time', text: 'How you spend your time reveals what you value. We audit your calendar, energy patterns, and design a sustainable life rhythm.' },
  { icon: Briefcase, title: 'Work-Life Integration', text: 'Not balance (that\'s a myth)\u2014integration. How can your leadership serve your life, not consume it? We redesign the whole system.' },
  { icon: Sprout, title: 'Health & Vitality', text: 'Physical, mental, emotional health. Are you depleted? We address foundations: sleep, nutrition, movement, energy management.' },
  { icon: Activity, title: 'Spiritual Grounding', text: 'For leaders seeking deeper anchoring. Existential questions, spiritual practices, philosophical frameworks. Meaning beyond achievement.' },
  { icon: RefreshCw, title: 'Transition Design', text: 'If you\'re changing roles, careers, or life chapters, we design the transition intentionally. Not reactive\u2014proactive and aligned.' },
]

const inflectionPoints = [
  { quote: "I've achieved everything I set out to achieve, but I feel empty.", desc: 'External success, internal hollowness. You\'re wondering if this is all there is.' },
  { quote: "I'm succeeding in my career but failing in my life.", desc: 'Work is thriving. Relationships, health, fulfillment are suffering.' },
  { quote: "I don't recognize myself anymore.", desc: 'You\'ve become someone you never intended to be. Your values and your actions are misaligned.' },
  { quote: "Should I stay or should I leave?", desc: 'You\'re questioning your role, company, even your entire career path.' },
  { quote: "My marriage/family is suffering because of my leadership.", desc: 'The costs of your work pattern are showing up at home.' },
  { quote: "I feel disconnected from what matters.", desc: 'You\'re going through the motions. Presence, joy, meaning\u2014all gone.' },
]

export default function LifeCoaching() {
  const lifeTestimonials = testimonials.filter(t => t.program === 'life-coaching')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-400 text-sm font-semibold rounded-full mb-6">
                  HOLISTIC \u2022 EXISTENTIAL \u2022 WHOLE-LIFE
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Life Coaching</h1>
                <p className="text-xl text-slate-300 mb-6">
                  When Leadership Feels Hollow and You Need to Realign Work with Life, Values, and Meaning
                </p>
                <ul className="space-y-3 mb-8">
                  {['Whole-life alignment at inflection points', 'Values clarification & purpose discovery', 'Relationship and life rhythm design', 'Existential exploration & meaning-making', 'Custom duration & format (typically 4 months)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="text-gold-400">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button to="/contact">Request Exploratory Call</Button>
                  <Button href="#dimensions" variant="secondary">Learn More</Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="bg-navy-800 rounded-2xl p-8 border-2 border-gold-400/30">
                <div className="text-3xl font-bold text-gold-400 font-display mb-1">{'\u20B9'}4-8L + GST</div>
                <p className="text-slate-300 mb-2">Custom (typically 4 months)</p>
                <p className="text-slate-300 text-sm mb-6">Pricing varies based on scope and format</p>
                <Button to="/contact" className="w-full">Request Call</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Inflection Points */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="This Is For Leaders at Inflection Points"
            subtitle="You're not broken. You're at a threshold. Your outer success no longer matches your inner truth."
            light
          />

          <div className="space-y-4">
            {inflectionPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-navy-800 rounded-xl p-6 border border-navy-800 hover:border-gold-400/20 transition-colors">
                  <p className="font-display text-lg text-white italic mb-2">&ldquo;{point.quote}&rdquo;</p>
                  <p className="text-slate-300 text-sm">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For / Not For */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="Who Is This For?" subtitle="Life Coaching is existential work. It's for leaders ready to question everything and redesign their life-leadership system." light />

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-navy-900 rounded-2xl p-8 border border-green-500/20 h-full">
                <h3 className="font-display text-xl font-bold text-white mb-4">Ideal For</h3>
                <ul className="space-y-3">
                  {[
                    'Leaders at major life transitions (40s, 50s, post-exit)',
                    'Those experiencing existential crisis or emptiness',
                    'Leaders whose values and actions are misaligned',
                    'Those questioning career, role, or life path',
                    'Leaders whose relationships are suffering due to work',
                    'Those seeking meaning, not just performance',
                    'Leaders ready to redesign their whole life',
                    'People open to existential and spiritual exploration',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-navy-900 rounded-2xl p-8 border border-red-500/20 h-full">
                <h3 className="font-display text-xl font-bold text-white mb-4">Not For</h3>
                <ul className="space-y-3">
                  {[
                    'Leaders seeking leadership skills only (see FIT or One-on-One)',
                    'Those wanting quick answers or action plans',
                    'Leaders uncomfortable with deep questioning',
                    'Those seeking business strategy',
                    'Leaders who aren\'t ready to change their life',
                    'People wanting validation for staying the same',
                    'Those unwilling to face hard truths',
                    'Leaders looking for surface-level fixes',
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

      {/* Eight Dimensions */}
      <section id="dimensions" className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What Life Coaching Addresses"
            subtitle="Holistic work across all dimensions of your life. We don't compartmentalize 'work' and 'life'\u2014we integrate them."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map(({ icon: Icon, title, text }, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-navy-800 rounded-2xl p-6 border border-navy-800 hover:border-gold-400/30 transition-colors h-full">
                  <Icon className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-display text-base font-bold text-white mb-2">{title}</h3>
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
          <SectionHeading title="What's Included (Custom Format)" light />

          <ScrollReveal>
            <div className="bg-navy-900 rounded-2xl p-8 md:p-10 border border-navy-800 mb-8">
              <h3 className="font-display text-lg font-bold text-white mb-6">Typical 4-Month Program</h3>
              <ul className="space-y-4">
                {[
                  { label: '12-16 Sessions:', desc: '90-120 minutes each \u2022 Custom frequency (weekly, biweekly, or intensive blocks)' },
                  { label: 'Life Audit:', desc: 'Comprehensive assessment across all dimensions \u2022 Values, time, relationships, health, meaning' },
                  { label: 'Values Clarification:', desc: 'Deep work on what you truly stand for and how to align your life with it' },
                  { label: 'Purpose Discovery:', desc: 'Existential exploration \u2022 Meaning-making \u2022 Contribution design' },
                  { label: 'Relationship Work:', desc: 'Marriage, family, friendships \u2022 Communication patterns \u2022 Repair and redesign' },
                  { label: 'Life Rhythm Design:', desc: 'Time audit \u2022 Energy management \u2022 Sustainable rhythms' },
                  { label: 'Spiritual/Philosophical Work:', desc: 'Existential questions \u2022 Practices for grounding \u2022 Meaning frameworks' },
                  { label: 'Integration Support:', desc: 'Between-session resources \u2022 Check-ins \u2022 Ongoing guidance' },
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
              <h3 className="font-display text-xl font-bold text-white mb-3">Investment: {'\u20B9'}4-8 Lakh + GST (Custom)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                Pricing varies based on scope, duration, and format. Some leaders need 3 months, others need 6.
              </p>
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Typical Range:</strong> {'\u20B9'}4L for 3-month focused work, up to {'\u20B9'}8L for 6-month comprehensive transformation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="What Clients Say" light />
          <div className="space-y-8">
            {lifeTestimonials.map((t, i) => (
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
          <FAQAccordion items={lifeCoachingFAQ} dark />
        </div>
      </section>

      <CTASection
        heading="Ready to Explore?"
        subtext="Life coaching is deeply personal. Let's have an exploratory conversation to see if this is the right path for you. The exploratory call is 60 minutes."
        buttonText="Begin a Confidential Conversation"
        buttonTo="/contact"
      />
    </>
  )
}
