import { useState } from 'react'
import { BarChart3, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'

const assessments = [
  {
    icon: BarChart3,
    title: 'Leadership Integration Audit',
    description: '20-question assessment mapping where you fragment across the Five Layers (body, energy, mind, judgment, values). Receive personalized report + integration practices.',
    cta: 'Take the Audit',
    note: 'Email required for results',
    premium: true,
  },
  {
    icon: Zap,
    title: 'Pressure Pattern Diagnostic',
    description: 'Identify your specific fragmentation pattern under pressure. Do you freeze? Over-control? Collapse? Fragment intellectually? Get clarity on YOUR pattern.',
    cta: 'Discover Your Pattern',
    note: '5-minute assessment',
  },
  {
    icon: CheckCircle,
    title: 'Five-Layer Readiness Check',
    description: 'Are you ready for deep integration work? This 10-question check helps you assess your readiness for transformation.',
    cta: 'Check Your Readiness',
    note: 'Instant results',
  },
]

const categories = [
  { tag: 'PRESSURE', color: 'bg-red-500/10 text-red-400', title: 'Leadership Under Pressure', desc: 'Decision-making under stress, presence in crisis, managing team anxiety, board challenges' },
  { tag: 'METHODOLOGY', color: 'bg-blue-500/10 text-blue-400', title: 'Five Layers Framework', desc: 'Body, energy, mind, judgment, values integration. Layer 3 vs Layer 1 work.' },
  { tag: 'PRACTICES', color: 'bg-green-500/10 text-green-400', title: 'Integration Practices', desc: 'Somatic practices, breathwork, daily rituals, sustainable integration' },
  { tag: 'STORIES', color: 'bg-purple-500/10 text-purple-400', title: 'Real Stories & Case Studies', desc: 'Client transformations, leadership journeys, lessons learned' },
]

const articles = [
  { category: 'Pressure', color: 'bg-red-500/10 text-red-400', title: 'Why Smart Leaders Make Dumb Decisions Under Pressure', desc: 'You\'re brilliant in calm. But when the board challenges you publicly, something breaks. Here\'s why your nervous system fragments.', read: '8 min read', date: 'Jan 2026' },
  { category: 'Methodology', color: 'bg-blue-500/10 text-blue-400', title: 'Layer 3 vs Layer 1: Why Surface Coaching Fails Leaders', desc: 'Most coaching works on techniques (Layer 1). Real transformation happens at Layer 3 and deeper: body, energy, nervous system, identity.', read: '12 min read', date: 'Jan 2026' },
  { category: 'Practice', color: 'bg-green-500/10 text-green-400', title: 'The 5-Minute Integration Practice for Busy Leaders', desc: 'You don\'t need an hour. This somatic practice rewires your nervous system in 5 minutes. Do it before high-stakes meetings.', read: '6 min read', date: 'Dec 2025' },
  { category: 'Story', color: 'bg-purple-500/10 text-purple-400', title: 'How a CEO Stopped Fragmenting in Board Meetings', desc: 'She was brilliant but would go blank when challenged publicly. Here\'s how she rewired her operating system through somatic work.', read: '10 min read', date: 'Dec 2025' },
  { category: 'Methodology', color: 'bg-blue-500/10 text-blue-400', title: 'The Body Never Lies: Somatic Intelligence in Leadership', desc: 'Your body knows you\'re fragmenting before your mind does. Learn to read the signals and intervene early.', read: '9 min read', date: 'Nov 2025' },
  { category: 'Pressure', color: 'bg-red-500/10 text-red-400', title: 'Presence Under Fire: Leading Through Crisis Without Collapsing', desc: 'When your team is panicking, they need your integrated presence. Here\'s how to stay grounded when chaos hits.', read: '11 min read', date: 'Nov 2025' },
]

export default function Resources() {
  const [email, setEmail] = useState('')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-6">Resources</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights for Leaders Who Want Depth
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Assessments, articles, and frameworks to help you navigate pressure and build integrated leadership. No fluff. Just depth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Free Assessments */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Free Leadership Assessments"
            subtitle="Understand where you fragment under pressure. 5-minute assessments, instant insights."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {assessments.map(({ icon: Icon, title, description, cta, note, premium }, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`bg-navy-800 rounded-2xl p-8 text-center h-full flex flex-col border ${
                  premium ? 'border-gold-400/30' : 'border-navy-800'
                } hover:border-gold-400/30 transition-colors`}>
                  <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
                  <Button href="#" className="w-full mb-2">{cta}</Button>
                  <p className="text-slate-300/50 text-xs">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Topic */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Explore by Topic" subtitle="Browse insights organized by what matters most to you." light />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-navy-900 rounded-2xl p-6 border border-navy-800 hover:border-gold-400/30 transition-colors cursor-pointer text-center h-full">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${cat.color}`}>
                    {cat.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-slate-300 text-sm">{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Latest Insights" subtitle="New perspectives on integration, leadership, and pressure." light />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-navy-800 rounded-2xl overflow-hidden border border-navy-800 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-navy-900 to-navy-950 flex items-center justify-center relative">
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${article.color}`}>
                      {article.category}
                    </span>
                    <span className="text-navy-800 font-display text-6xl font-bold opacity-20">TLT</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-lg font-bold text-white mb-2">{article.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{article.desc}</p>
                    <p className="text-slate-300/50 text-xs">{article.read} \u2022 {article.date}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-navy-900 rounded-2xl p-10 md:p-14 border border-gold-400/20 text-center">
              <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-6" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Stay Connected</h2>
              <p className="text-slate-300 mb-8">
                Join 500+ leaders receiving weekly insights on integration and leadership.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!') }} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 px-4 py-3 bg-navy-800 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-navy-800 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <Button type="submit" size="md">Subscribe</Button>
              </form>
              <p className="text-slate-300/50 text-xs mt-4">We respect your inbox. Unsubscribe anytime.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
