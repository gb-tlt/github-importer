import { Link } from 'react-router-dom'
import { Home, User, Briefcase, Users, Crown, Heart, BookOpen, Phone, Globe, Database, Compass } from 'lucide-react'

const pages = [
  { to: '/admin/home', icon: Home, label: 'Home Page', desc: 'Hero, presence section, leadership matters, programs, testimonials, lead magnet, CTA' },
  { to: '/admin/about', icon: User, label: 'About Page', desc: 'Hero, founder story, three depths of work, credentials, lineage' },
  { to: '/admin/the-work', icon: Compass, label: 'The Work Page', desc: '6-arc explanation: challenge, root cause, reframe, solution, promise, principles, audit CTA' },
  { to: '/admin/services', icon: Briefcase, label: 'Services Page', desc: 'Program cards, comparison table, decision framework' },
  { to: '/admin/fit-cohort', icon: Users, label: 'FIT Cohort', desc: 'Hero, pricing, timeline, features, inclusions, investment' },
  { to: '/admin/one-on-one', icon: Crown, label: 'One-on-One', desc: 'Hero, pricing, session phases, modalities, inclusions' },
  { to: '/admin/life-coaching', icon: Heart, label: 'Life Coaching', desc: 'Hero, pricing, inflection points, dimensions, inclusions' },
  { to: '/admin/resources', icon: BookOpen, label: 'Resources', desc: 'Assessments, categories, articles, newsletter' },
  { to: '/admin/contact', icon: Phone, label: 'Contact', desc: 'Form settings, sidebar info, confidentiality note' },
  { to: '/admin/global', icon: Globe, label: 'Global Settings', desc: 'Stats bar, footer content' },
  { to: '/admin/collections', icon: Database, label: 'Collections', desc: 'Services, testimonials, FAQs, layers, credentials' },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-300 mt-2">Manage all website content from here.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map(({ to, icon: Icon, label, desc }) => (
          <Link
            key={to}
            to={to}
            className="bg-navy-900 rounded-xl p-6 border border-navy-800 hover:border-gold-400/30 transition-all hover:-translate-y-0.5 group"
          >
            <Icon className="w-8 h-8 text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-semibold mb-1">{label}</h3>
            <p className="text-slate-300/60 text-sm">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
