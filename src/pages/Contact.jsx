import { useState } from 'react'
import { Mail, Clock, Linkedin, Instagram, Youtube, Shield } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { contactFAQ as defaultFAQ } from '../data/faq'
import { useContent } from '../hooks/useContent'
import { useCollection } from '../hooks/useCollection'

const defaults = {
  hero: {
    badge: 'Contact',
    title: "Let\u2019s Have a Conversation",
    subtitle: "Whether you\u2019re curious about FIT Cohort, one-on-one coaching, life coaching, or just want to explore what integration means for your leadership, I\u2019m here.",
  },
  form: {
    title: 'Book a Clarity Call',
    subtitle: '45 minutes to understand your challenges, explore fit, and answer your questions. No obligation.',
    submitText: 'Request Clarity Call',
  },
  sidebar: {
    email: 'gowtham@theleadershiptattva.com',
    responseTime: 'Within 24-48 hours',
    linkedinUrl: 'https://www.linkedin.com/in/gbcoach/',
    instagramUrl: 'https://www.instagram.com/gowtham.balaji.coach/',
    youtubeUrl: 'https://www.youtube.com/@gbcoach',
  },
  confidentiality: {
    title: 'Confidentiality',
    text: 'All conversations are strictly confidential. Your information is never shared. Coaching conversations are protected by professional confidentiality protocols.',
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', role: '', company: '', experience: '', interest: '', message: '',
  })

  const { content } = useContent('contact')
  const { data: faqData } = useCollection('faq')
  const c = (section, key) => content?.[section]?.[key] || defaults[section]?.[key]
  const faq = faqData?.contact || defaultFAQ

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! Gowtham will respond within 24-48 hours.')
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-6">{c('hero', 'badge')}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {c('hero', 'title')}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {c('hero', 'subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-warm-200">
                  <h2 className="font-display text-2xl font-bold text-navy-950 mb-2">{c('form', 'title')}</h2>
                  <p className="text-slate-700 mb-8">{c('form', 'subtitle')}</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy-950 mb-2">Your Name *</label>
                        <input
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 placeholder-slate-700/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-950 mb-2">Email Address *</label>
                        <input
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 placeholder-slate-700/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy-950 mb-2">Role / Title *</label>
                        <input
                          type="text" name="role" required value={formData.role} onChange={handleChange}
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 placeholder-slate-700/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="e.g., VP Engineering, Founder"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-950 mb-2">Company / Industry</label>
                        <input
                          type="text" name="company" value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 placeholder-slate-700/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-950 mb-2">Years of Leadership Experience</label>
                      <select
                        name="experience" value={formData.experience} onChange={handleChange}
                        className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15-20">15-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-950 mb-2">Program Interest</label>
                      <select
                        name="interest" value={formData.interest} onChange={handleChange}
                        className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="">Not sure yet</option>
                        <option value="fit-cohort">FIT Leadership Cohort</option>
                        <option value="one-on-one">One-on-One Leadership Coaching</option>
                        <option value="life-coaching">Life Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-950 mb-2">What brings you here? * (3-5 sentences)</label>
                      <textarea
                        name="message" required value={formData.message} onChange={handleChange} rows={5}
                        className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-navy-950 placeholder-slate-700/50 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                        placeholder="Share briefly what's happening in your leadership right now and what you're hoping to explore."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      {c('form', 'submitText')}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl p-8 border border-warm-200">
                  <h3 className="font-display text-xl font-bold text-navy-950 mb-6">Direct Contact</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-navy-950 font-medium">Email</p>
                        <p className="text-slate-700 text-sm">{c('sidebar', 'email')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-navy-950 font-medium">Response Time</p>
                        <p className="text-slate-700 text-sm">{c('sidebar', 'responseTime')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white rounded-2xl p-8 border border-warm-200">
                  <h3 className="font-display text-xl font-bold text-navy-950 mb-6">Connect</h3>
                  <div className="space-y-4">
                    <a href={c('sidebar', 'linkedinUrl')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-gold-400 transition-colors">
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </a>
                    <a href={c('sidebar', 'instagramUrl')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-gold-400 transition-colors">
                      <Instagram className="w-5 h-5" /> Instagram
                    </a>
                    <a href={c('sidebar', 'youtubeUrl')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-gold-400 transition-colors">
                      <Youtube className="w-5 h-5" /> YouTube
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-white rounded-2xl p-8 border border-gold-400/20">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-navy-950 font-semibold mb-2">{c('confidentiality', 'title')}</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {c('confidentiality', 'text')}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-950 mb-2">Where the Work Happens</h3>
              <p className="text-slate-600">From a farm in Tiruvannamalai, Tamil Nadu — far from the noise, close to the work.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-warm-200 shadow-sm" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62322.45!2d79.04!3d12.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce4e19a867b7%3A0x51b13e26beabc36c!2sTiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Leadership Tattva Location - Tiruvannamalai"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title="What Happens on a Clarity Call?" light />
          <FAQAccordion items={faq} dark />
        </div>
      </section>
    </>
  )
}
