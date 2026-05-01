import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ProgramCard from '../components/ui/ProgramCard'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { services as defaultServices } from '../data/services'
import { useContent } from '../hooks/useContent'
import { useCollection } from '../hooks/useCollection'

const defaults = {
  hero: {
    title: 'Three Pathways to Integration',
    subtitle: 'All three use the same Five Layers methodology. Depth, format, and intensity differ. Start with FIT Cohort, then move deeper if needed.',
  },
  programs: {
    title: 'Explore Your Options',
    subtitle: "Same methodology. Different formats. All three are powerful\u2014which is the right fit for YOUR situation?",
  },
  disclaimer: {
    title: '\u2695\uFE0F Important Note: This Work Is Not a Replacement for Therapy or Psychiatric Treatment',
    text: 'While this coaching program can be therapeutic and uses foundations from psychology, it is <strong>not a replacement for therapy or psychiatric treatment</strong>. I do not work with individuals who are currently under deep psychiatric treatment. If you are working with a psychologist or psychiatrist and they are comfortable with you engaging in coaching work, I am happy to have a conversation with them to assess fit. I have worked successfully with leaders in this scenario before, always in consultation with their mental health professional.',
  },
  comparison: {
    title: 'Compare All Three',
    subtitle: 'Side-by-side comparison to help you choose',
    rows: [
      ['Investment', '\u20B91-1.5L + GST', '\u20B98L + GST', '\u20B94-8L + GST'],
      ['Duration', '10 weeks (1-8-1 structure)', '4 months', '4 months (custom)'],
      ['Sessions', '8 group + 1 personal + 2 retreats', '16 personalized sessions', 'Custom (typically 12-16)'],
      ['Format', 'Group (5-8 leaders)', 'Premium 1-to-1', 'Custom 1-to-1'],
      ['Best For', 'Directors, VPs, Senior Managers', 'CXOs, Founders (\u20B930L+)', 'Leaders seeking life alignment'],
      ['Key Benefit', 'Peer learning + community', 'Maximum depth, holistic transformation', 'Life realignment + meaning'],
      ['Includes', 'Triads, peer mirrors, lifetime community', 'Physiology, emotional healing, purpose, past-life regression', 'Values, relationships, existential work'],
    ],
  },
  decisionFramework: {
    title: 'Not Sure Which Is Right?',
    subtitle: 'Ask yourself these questions to find your path.',
    items: [
      {
        title: 'Complexity',
        fit: "Your challenges are common to senior leaders and you'd benefit from peer perspectives",
        one: 'Your challenges are deeply complex, requiring intensive personalized work across physiology, emotions, purpose, and spiritual layers',
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
        title: 'Time Commitment',
        fit: '10 weeks, weekly sessions + 2 retreat weekends',
        one: '4 months, flexible scheduling (16 sessions)',
        life: '4 months, custom schedule',
      },
      {
        title: 'Desired Outcome',
        fit: 'Integration with peer accountability + community',
        one: 'Complete OS rewiring\u2014physiology, emotions, purpose, spiritual alignment',
        life: 'Life-work alignment, meaning, values',
      },
    ],
    closingText: "Still not sure? That's completely normal. Book a clarity call.",
  },
  cta: {
    heading: 'All Three Pathways Are Powerful',
    subtext: "The question isn't which is \"best\"\u2014it's which is the right FIT for your situation right now. Most leaders start with FIT Cohort.",
    buttonText: 'Book a Clarity Call',
  },
}

export default function Services() {
  const { content } = useContent('services')
  const { data: servicesData } = useCollection('services')

  const c = (section, key) => content?.[section]?.[key] || defaults[section]?.[key]
  const services = servicesData?.items || defaultServices

  const comparisonRows = c('comparison', 'rows')
  const frameworkItems = c('decisionFramework', 'items')
  const closingText = c('decisionFramework', 'closingText')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-navy-950 to-[#1a0a5c] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {c('hero', 'title')}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {c('hero', 'subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title={c('programs', 'title')}
            subtitle={c('programs', 'subtitle')}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {services.map((service, i) => (
              <ProgramCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <div className="bg-[#fff9e6] border-l-4 border-[#D4AF37] rounded-r-2xl p-6 max-w-4xl mx-auto">
              <h4 className="text-navy-950 font-semibold mb-2 text-lg">{c('disclaimer', 'title')}</h4>
              <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: c('disclaimer', 'text') }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title={c('comparison', 'title')} subtitle={c('comparison', 'subtitle')} />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm bg-white rounded-2xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-navy-950">
                    <th className="py-4 px-4 text-white font-semibold">Dimension</th>
                    <th className="py-4 px-4 text-white font-semibold">FIT Cohort (START HERE)</th>
                    <th className="py-4 px-4 text-white font-semibold">One-on-One Leadership <span className="text-[#D4AF37]">★</span></th>
                    <th className="py-4 px-4 text-white font-semibold">Life Coaching</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([dim, fit, one, life], i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-warm-50 transition-colors">
                      <td className="py-4 px-4 text-navy-950 font-semibold">{dim}</td>
                      <td className="py-4 px-4 text-slate-700">{fit}</td>
                      <td className="py-4 px-4 text-slate-700">{one}</td>
                      <td className="py-4 px-4 text-slate-700">{life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#fcf3e7] rounded-2xl p-8 md:p-12">
            <SectionHeading
              title={c('decisionFramework', 'title')}
              subtitle={c('decisionFramework', 'subtitle')}
            />

            <div className="grid md:grid-cols-2 gap-6">
              {frameworkItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border-l-4 border-gold-400 h-full">
                    <h4 className="text-navy-950 font-semibold mb-3">Q{i + 1}: {item.title}</h4>
                    <div className="space-y-3 text-sm">
                      <p className="text-slate-600"><span className="text-navy-950 font-semibold">FIT Cohort:</span> {item.fit}</p>
                      <p className="text-slate-600"><span className="text-navy-950 font-semibold">One-on-One:</span> {item.one}</p>
                      <p className="text-slate-600"><span className="text-navy-950 font-semibold">Life Coaching:</span> {item.life}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {closingText && (
              <div className="text-center mt-10">
                <p className="text-slate-600 mb-4 text-lg">{closingText}</p>
                <Link to="/contact">
                  <Button>Schedule Clarity Call</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

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
