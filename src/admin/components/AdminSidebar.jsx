import { NavLink } from 'react-router-dom'
import { Home, User, Briefcase, Users, Crown, Heart, BookOpen, Phone, Globe, Database, LogOut, Compass } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const navItems = [
  { to: '/admin', icon: Home, label: 'Dashboard', end: true },
  { to: '/admin/home', icon: Home, label: 'Home Page' },
  { to: '/admin/about', icon: User, label: 'About Page' },
  { to: '/admin/the-work', icon: Compass, label: 'The Work Page' },
  { to: '/admin/services', icon: Briefcase, label: 'Services Page' },
  { to: '/admin/fit-cohort', icon: Users, label: 'F.I.T. Cohort' },
  { to: '/admin/one-on-one', icon: Crown, label: 'One-on-One' },
  { to: '/admin/life-coaching', icon: Heart, label: 'Life Coaching' },
  { to: '/admin/resources', icon: BookOpen, label: 'Resources' },
  { to: '/admin/contact', icon: Phone, label: 'Contact' },
  { to: '/admin/global', icon: Globe, label: 'Global (Stats/Footer)' },
  { to: '/admin/collections', icon: Database, label: 'Collections' },
]

export default function AdminSidebar() {
  const { logout } = useAuth()

  return (
    <aside className="w-64 bg-navy-900 border-r border-navy-800 min-h-screen flex flex-col shrink-0">
      <div className="p-6 border-b border-navy-800">
        <p className="font-display text-lg font-bold text-white">
          TLT <span className="text-gold-400">Admin</span>
        </p>
        <p className="text-slate-300/60 text-xs mt-1">Content Management</p>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-2.5 text-sm transition-colors ${
                isActive ? 'text-gold-400 bg-gold-400/10 border-r-2 border-gold-400' : 'text-slate-300 hover:text-white hover:bg-navy-800/50'
              }`
            }
          >
            <Icon className="w-4 h-4" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-navy-800">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:text-red-400 transition-colors w-full rounded-lg hover:bg-navy-800/50"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>
    </aside>
  )
}
