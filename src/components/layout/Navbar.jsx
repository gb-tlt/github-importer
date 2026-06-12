import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

const servicesChildren = [
  { path: '/services/fit-cohort', label: 'FIT Leadership Cohort' },
  { path: '/services/one-on-one', label: 'One-on-One Coaching' },
  { path: '/services/life-coaching', label: 'Life Coaching' },
]

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/the-work', label: 'The Work' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services', children: servicesChildren },
  { path: '/resources', label: 'Resources' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  const isServicesActive = (path) =>
    path === '/services' && location.pathname.startsWith('/services')

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center">
            <img src="/images/logo-horizontal.png" alt="The Leadership Tattva" className="h-24 md:h-28 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const active =
                location.pathname === link.path || isServicesActive(link.path)
              if (link.children) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.path)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        active ? 'text-gold-400' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {openDropdown === link.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64"
                        >
                          <div className="bg-navy-950/98 backdrop-blur-md border border-navy-800 rounded-lg shadow-xl shadow-black/30 py-2">
                            {link.children.map(child => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  location.pathname === child.path
                                    ? 'text-gold-400 bg-navy-900/60'
                                    : 'text-white/80 hover:text-white hover:bg-navy-900/60'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-gold-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Button to="/contact" variant="primary" size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-navy-800"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map(link => {
                const active =
                  location.pathname === link.path || isServicesActive(link.path)
                if (link.children) {
                  return (
                    <div key={link.path}>
                      <div className="flex items-center justify-between">
                        <Link
                          to={link.path}
                          className={`block text-base font-medium py-2 ${
                            active ? 'text-gold-400' : 'text-white/80'
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(v => !v)}
                          className="text-white/80 p-2"
                          aria-label="Toggle services submenu"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="pl-4 border-l border-navy-800 ml-2 space-y-2 overflow-hidden"
                          >
                            {link.children.map(child => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className={`block text-sm py-2 ${
                                  location.pathname === child.path
                                    ? 'text-gold-400'
                                    : 'text-white/70'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-base font-medium py-2 ${
                      active ? 'text-gold-400' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-4">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Book a Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
