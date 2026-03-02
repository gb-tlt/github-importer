import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ProgramCard from '../components/ui/ProgramCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import StatBar from '../components/ui/StatBar'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import LayerIcon from '../components/icons/LayerIcons'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { layers } from '../data/layers'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-gold-400/10 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-6">
                  Integration Coaching for Senior Leaders
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  You Don&rsquo;t Need More Leadership Skills.{' '}
                  <span className="text-gold-gradient">You Need Integration.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                  Senior leaders don&rsquo;t fail because they lack skills. They fragment under pressure&mdash;body tightens, mind blanks, presence collapses. I help you rewire the operating system so pressure makes you stronger.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button to="/contact" size="lg">
                    Book a Discovery Session
                  </Button>
                  <Button to="/services" variant="secondary" size="lg">
                    Explore Programs
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-400/20 overflow-hidden shadow-2xl shadow-gold-400/5">
                  <img
                    src="/gowtham.jpg"
                    alt="Gowtham Balaji - Leadership Integration Coach"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-400/30 rounded-2xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-gold-400/20 rounded-xl" />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown className="w-5 h-5 text-gold-400/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="The Real Problem No One Talks About"
            subtitle="You're brilliant in calm. But when real pressure hits, something breaks."
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {[
              {
                title: 'Your Body Betrays You',
                text: 'Tension floods in. Breathing gets shallow. Your posture collapses. The body remembers every past failure and re-enacts it under scrutiny.',
              },
              {
                title: 'Your Mind Goes Blank',
                text: 'You had the perfect response prepared. But in the moment, words vanish. You over-explain, ramble, or freeze. The brilliant strategist disappears.',
              },
              {
                title: 'Your Presence Collapses',
                text: 'The room feels your fragmentation. Your team senses it. The board sees it. You look composed outside, but you\'re drowning inside.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-800 hover:border-gold-400/30 transition-colors h-full">
                  <div className="w-10 h-0.5 bg-gold-400 mb-6" />
                  <h3 className="font-display text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <div className="bg-navy-800 rounded-2xl p-8 md:p-12 border border-gold-400/20 max-w-4xl mx-auto">
              <p className="text-slate-300 text-lg leading-relaxed text-center">
                <span className="text-white font-semibold">This is fragmentation.</span> It&rsquo;s not a skills problem. It&rsquo;s not a confidence problem. It&rsquo;s an operating system problem. Your leadership OS was never designed for the pressure you face today. Most coaching works on the surface&mdash;techniques, frameworks, tips. <span className="text-gold-400 font-semibold">Integration works at the foundation.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Five Layers Framework */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="The Five Layers of Integration"
            subtitle="Based on the Pancha Kosha framework from Yoga Sutras, adapted for modern leadership. We work at every layer, not just the surface."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {layers.map((layer, i) => (
              <ScrollReveal key={layer.id} delay={i * 0.1}>
                <div className="bg-navy-900 rounded-2xl p-8 border border-navy-800 hover:border-gold-400/30 transition-all duration-300 h-full group">
                  <div className="text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                    <LayerIcon type={layer.icon} className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{layer.name}</h3>
                  <p className="text-gold-400/70 text-sm italic mb-4">{layer.sanskrit}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{layer.description}</p>
                  <div className="border-t border-navy-800 pt-4 mt-auto">
                    <p className="text-xs text-slate-300">
                      <span className="text-red-400/80">Fragmented:</span> {layer.fragmented}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      <span className="text-green-400/80">Integrated:</span> {layer.integrated}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Three Pathways to Integration"
            subtitle="Same methodology. Different formats. All three are powerful\u2014which is the right fit for your situation?"
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {services.map((service, i) => (
              <ProgramCard key={service.id} service={service} index={i} dark />
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors">
              Compare All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            title="This Is Not Traditional Executive Coaching"
            subtitle="Most coaching scratches the surface. Integration goes to the foundation."
            light
          />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gold-400/30">
                    <th className="py-4 pr-6 text-gold-400 font-semibold text-sm uppercase tracking-wide">Traditional Executive Coaching</th>
                    <th className="py-4 pl-6 text-gold-400 font-semibold text-sm uppercase tracking-wide">Integration Coaching</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Focuses on skills, behaviors, communication', 'Focuses on body, energy, nervous system, values, identity'],
                    ['Works on what you DO (surface)', 'Works on how you ARE (foundation)'],
                    ['Mostly talk-based, cognitive', 'Multi-modal: somatic, energy, psychological, spiritual'],
                    ['30-45 minute sessions, often monthly', '60-120 minute sessions, intensive work'],
                    ['Generic curriculum applied to all', 'Fully customized to YOUR fragmentation pattern'],
                    ['Avoids pressure (calm environment only)', 'Uses pressure as training ground'],
                    ['Professional but distant relationship', 'Deep trust, vulnerability required, direct access'],
                  ].map(([trad, integ], i) => (
                    <tr key={i} className="border-b border-navy-800">
                      <td className="py-4 pr-6 text-slate-300/70">{trad}</td>
                      <td className="py-4 pl-6 text-white font-medium">{integ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <StatBar />

      {/* Social Proof */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What Leaders Say"
            subtitle="Real transformations from real leaders. Names anonymized for confidentiality."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="bg-navy-800 rounded-2xl p-10 md:p-16 border border-gold-400/20">
              <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-4">
                Free Assessment
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Take the Leadership Integration Audit
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                20 questions. 5 minutes. Discover where you fragment across the Five Layers and receive personalized integration practices.
              </p>
              <Button to="/resources" size="lg">
                Start the Free Audit
              </Button>
              <p className="text-slate-300/60 text-sm mt-4">No spam. Just clarity on your leadership pattern.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Ready to Stop Fragmenting?"
        subtext="Book a 45-minute clarity call. We'll map your fragmentation pattern and I'll tell you honestly whether this is the right path for you."
        buttonText="Book a Discovery Session"
        buttonTo="/contact"
      />
    </>
  )
}
