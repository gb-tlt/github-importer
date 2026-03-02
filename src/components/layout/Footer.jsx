import { Link } from 'react-router-dom'
import { Linkedin, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xl font-bold text-white">
              The Leadership <span className="text-gold-400">Tattva</span>
            </Link>
            <p className="text-slate-300 mt-4 text-sm leading-relaxed">
              Deep work for leaders who want to integrate, not just perform.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-300 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:gowtham@theleadershiptattva.com" className="text-slate-300 hover:text-gold-400 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/fit-cohort" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">FIT Leadership Cohort</Link></li>
              <li><Link to="/services/one-on-one" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">One-on-One Coaching</Link></li>
              <li><Link to="/services/life-coaching" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">Life Coaching</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">About Gowtham</Link></li>
              <li><Link to="/resources" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm">gowtham@theleadershiptattva.com</li>
              <li className="text-slate-300 text-sm">Response within 24-48 hours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300/60 text-sm">&copy; 2026 The Leadership Tattva. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-300/60 text-sm hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-300/60 text-sm hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
