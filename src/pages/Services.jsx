import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ProgramCard from '../components/ui/ProgramCard'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-6">Services</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Three Pathways to Integration
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              All three use the same Five Layers methodology. Depth, format, and intensity differ. Start with FIT Cohort, then move deeper if needed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Explore Your Options"
            subtitle="Same methodology. Different formats. All three are powerful\u2014which is the right fit for YOUR situation?"
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {services.map((service, i) => (
              <ProgramCard key={service.id} service={service} index={i} dark />
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <div className="bg-navy-800 rounded-2xl p-8 border border-gold-400/20 max-w-4xl mx-auto">
              <h4 className="text-white font-semibold mb-2">Important Note</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                While this coaching program can be therapeutic and uses foundations from psychology, it is <strong className="text-white">not a replacement for therapy or psychiatric treatment</strong>. I do not work with individuals who are currently under deep psychiatric treatment. If you are working with a psychologist or psychiatrist and they are comfortable with you engaging in coaching work, I am happy to have a conversation with them to assess fit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Compare All Three" subtitle="Side-by-side comparison to help you choose" light />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gold-400/30">
                    <th className="py-4 pr-4 text-gold-400 font-semibold uppercase tracking-wide">Dimension</th>
                    <th className="py-4 px-4 text-gold-400 font-semibold uppercase tracking-wide">FIT Cohort</th>
                    <th className="py-4 px-4 text-gold-400 font-semibold uppercase tracking-wide">One-on-One</th>
                    <th className="py-4 pl-4 text-gold-400 font-semibold uppercase tracking-wide">Life Coaching</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Investment', '\u20B91-1.5L + GST', '\u20B98L + GST', '\u20B94-8L + GST'],
                    ['Duration', '10 weeks', '4 months', '4 months (custom)'],
                    ['Sessions', '8 group + 1 personal + 2 retreats', '16 personalized sessions', 'Custom (12-16)'],
                    ['Format', 'Group (5-8 leaders)', 'Premium 1-to-1', 'Custom 1-to-1'],
                    ['Best For', 'Directors, VPs, Senior Managers', 'CXOs, Founders (\u20B930L+)', 'Leaders seeking life alignment'],
                    ['Key Benefit', 'Peer learning + community', 'Maximum depth + customization', 'Life realignment + meaning'],
                  ].map(([dim, fit, one, life], i) => (
                    <tr key={i} className="border-b border-navy-800">
                      <td className="py-4 pr-4 text-white font-medium">{dim}</td>
                      <td className="py-4 px-4 text-slate-300">{fit}</td>
                      <td className="py-4 px-4 text-slate-300">{one}</td>
                      <td className="py-4 pl-4 text-slate-300">{life}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Not Sure Which Is Right?"
            subtitle="Ask yourself these questions to find your path."
            light
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Complexity',
                fit: 'Your challenges are common to senior leaders and you\'d benefit from peer perspectives',
                one: 'Your challenges are deeply complex, requiring intensive personalized work',
                life: 'You\'re questioning your whole life direction, not just leadership',
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
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-800 h-full">
                  <h4 className="text-gold-400 font-semibold mb-4">{item.title}</h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-slate-300"><span className="text-white font-medium">FIT Cohort:</span> {item.fit}</p>
                    <p className="text-slate-300"><span className="text-white font-medium">One-on-One:</span> {item.one}</p>
                    <p className="text-slate-300"><span className="text-white font-medium">Life Coaching:</span> {item.life}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="All Three Pathways Are Powerful"
        subtext="The question isn't which is 'best'\u2014it's which is the right fit for your situation right now. Most leaders start with FIT Cohort."
        buttonText="Book a Clarity Call"
        buttonTo="/contact"
      />
    </>
  )
}
