import { Heart, Zap, Brain, Target, Sparkles, BarChart3 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import TestimonialCard from '../components/ui/TestimonialCard'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { oneOnOneFAQ as defaultFAQ } from '../data/faq'
import { testimonials as defaultTestimonials } from '../data/testimonials'
import { useContent } from '../hooks/useContent'
import { useCollection } from '../hooks/useCollection'

const sessionPhases = [
  { phase: 'Sessions 1-2', title: 'Foundation', items: ['Fragmentation pattern diagnosis', 'Physiology assessment (blood work if needed)', 'Baseline nervous system mapping', 'Goal and intention setting'] },
  { phase: 'Sessions 3-5', title: 'Physical Layer', items: ['Somatic integration practices', 'Body-based trauma release', 'Breathwork and nervous system regulation', 'Energy management foundations'] },
  { phase: 'Sessions 6-8', title: 'Emotional Layer', items: ['Emotional healing and processing', 'Shadow work and identity patterns', 'High emotional intensity frameworks', 'Relationship dynamics'] },
  { phase: 'Sessions 9-11', title: 'Purpose & Alignment', items: ['Purpose discovery and clarification', 'Values alignment work', 'Life-leadership integration', 'Decision-making frameworks'] },
  { phase: 'Sessions 12-14', title: 'Spiritual Layer', items: ['Spiritual alignment practices', 'Advaita Vedanta teachings (if relevant)', 'Past-life regression (where appropriate)', 'Existential integration'] },
  { phase: 'Sessions 15-16', title: 'Integration', items: ['Synthesis across all layers', 'Sustainability planning', 'Post-program practices', 'Future growth map'] },
]

const modalities = [
  { icon: Heart, title: 'Somatic & Body Work', text: 'Your body holds fragmentation patterns.', items: ['Somatic experiencing practices', 'Breathwork and pranayama', 'Yoga therapy applications', 'Body-based trauma release', 'Nervous system regulation'] },
  { icon: Zap, title: 'Energy Healing', text: 'Reiki master-level work for leaders under pressure.', items: ['Energy assessment and clearing', 'Chakra balancing for leadership', 'Depletion vs vitality diagnosis', 'Practical energy management', 'Grounding practices'] },
  { icon: Brain, title: 'Psychological Processing', text: 'Depth psychology for leaders.', items: ['Shadow work and blind spots', 'Emotional healing and trauma-informed work', 'Identity and self-authorship', 'Relationship patterns', 'Cognitive reframing under pressure'] },
  { icon: Target, title: 'Purpose & Values', text: 'Existential work for meaningful leadership.', items: ['Purpose discovery and clarification', 'Values alignment audits', 'Life-leadership integration', 'Meaning-making under pressure', 'Legacy and contribution'] },
  { icon: Sparkles, title: 'Spiritual & Philosophical', text: 'For leaders seeking deeper grounding.', items: ['Advaita Vedanta teachings', 'Yoga Sutras applications', 'Past-life regression (where appropriate)', 'Spiritual practices for leadership', 'Existential integration'] },
  { icon: BarChart3, title: 'Leadership Application', text: 'Bringing it all into your actual leadership.', items: ['Real-time case work', 'Pressure simulation and practice', 'Decision-making frameworks', 'Team and relationship dynamics', 'Sustainable integration practices'] },
]

const defaults = {
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
}

export default function OneOnOne() {
  const { content } = useContent('oneOnOne')
  const { data: testimonialsData } = useCollection('testimonials')
  const { data: faqData } = useCollection('faq')

  const c = (section, key) => content?.[section]?.[key] || defaults[section]?.[key]
  const testimonials = testimonialsData?.items || defaultTestimonials
  const oneOnOneTestimonials = testimonials.filter(t => t.program === 'one-on-one')
  const faq = faqData?.oneOnOne || defaultFAQ

  const phases = content?.sessionPhases?.phases || sessionPhases
  const mods = modalities

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 bg-gold-400/20 text-gold-400 text-sm font-semibold rounded-full mb-6">
                  {c('hero', 'badge')}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  {c('hero', 'title')}<span className="text-gold-gradient">{c('hero', 'titleGold')}</span>
                </h1>
                <p className="text-xl text-slate-300 mb-6">{c('hero', 'subtitle')}</p>
                <ul className="space-y-3 mb-8">
                  {(c('hero', 'highlights') || []).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="text-gold-400">&#9733;</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button to="/contact">{c('hero', 'ctaPrimary')}</Button>
                  <Button href="#journey" variant="secondary">{c('hero', 'ctaSecondary')}</Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="bg-navy-800 rounded-2xl p-8 border-2 border-gold-400 shadow-lg shadow-gold-400/10">
                <div className="text-3xl font-bold text-gold-400 font-display mb-1">{c('priceBox', 'price')}</div>
                <p className="text-slate-300 mb-2">{c('priceBox', 'details')}</p>
                <p className="text-gold-400/80 text-sm mb-6">{c('priceBox', 'note')}</p>
                <Button to="/contact" className="w-full">{c('priceBox', 'ctaText')}</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ideal For / Not For */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title={c('idealFor', 'title')} subtitle={c('idealFor', 'subtitle')} light />

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-navy-800 rounded-2xl p-8 border border-green-500/20 h-full">
                <h3 className="font-display text-xl font-bold text-white mb-4">Ideal For</h3>
                <ul className="space-y-3">
                  {(c('idealFor', 'items') || []).map((item, i) => (
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
                  {(c('notFor', 'items') || []).map((item, i) => (
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

      {/* 16-Session Journey */}
      <section id="journey" className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title={c('sessionPhases', 'title')} subtitle={c('sessionPhases', 'subtitle')} light />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-navy-900 rounded-2xl p-6 border border-navy-800 h-full">
                  <p className="text-gold-400 text-sm font-semibold mb-1">{phase.phase}</p>
                  <h4 className="font-display text-lg font-bold text-white mb-3">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60 mt-1.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-center">
            <p className="text-slate-300/70 text-sm italic">
              {c('sessionPhases', 'footnote')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title={c('modalities', 'title')} subtitle={c('modalities', 'subtitle')} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mods.map(({ icon: Icon, title, text, items }, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-warm-200 hover:border-gold-400/30 transition-colors h-full">
                  <Icon className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-display text-lg font-bold text-navy-950 mb-2">{title}</h3>
                  <p className="text-slate-700 text-sm mb-4">{text}</p>
                  <ul className="space-y-1.5">
                    {items.map((item, j) => (
                      <li key={j} className="text-slate-700/80 text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold-400/50 mt-2 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included + Investment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title={c('inclusions', 'title')} />

          <ScrollReveal>
            <div className="bg-warm-50 rounded-2xl p-8 md:p-10 border-2 border-gold-400/20 mb-8">
              <h3 className="font-display text-xl font-bold text-navy-950 mb-6">{c('inclusions', 'packageTitle')}</h3>
              <ul className="space-y-4">
                {(c('inclusions', 'items') || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-gold-400 mt-0.5 shrink-0">&#9733;</span>
                    <p className="text-slate-700"><strong className="text-navy-950">{item.label}</strong> {item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-warm-50 rounded-2xl p-8 border-2 border-gold-400">
              <h3 className="font-display text-xl font-bold text-navy-950 mb-3">{c('investment', 'title')}</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-2">
                {c('investment', 'description')}
              </p>
              <p className="text-slate-700 text-sm">
                <strong className="text-navy-950">Payment Options:</strong> {c('investment', 'payment')}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-6">
            <div className="bg-warm-100 rounded-2xl p-6 border border-gold-400/20">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-navy-950">Important:</strong> {c('investment', 'disclaimer')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading title="What Premium Clients Say" light />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oneOnOneTestimonials.map((t, i) => (
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
          <FAQAccordion items={faq} dark />
        </div>
      </section>

      <CTASection
        heading={c('cta', 'heading')}
        subtext={c('cta', 'subtext')}
        buttonText={c('cta', 'buttonText')}
        buttonTo="/contact"
      />
    </>
  )
}
