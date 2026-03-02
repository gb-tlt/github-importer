import { useState } from 'react'
import { Mail, Clock, Linkedin, Instagram, Shield } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { contactFAQ } from '../data/faq'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', role: '', company: '', experience: '', interest: '', message: '',
  })

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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block text-gold-400 font-medium text-sm tracking-widest uppercase mb-6">Contact</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&rsquo;s Have a Conversation
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you&rsquo;re curious about FIT Cohort, one-on-one coaching, life coaching, or just want to explore what integration means for your leadership, I&rsquo;m here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-navy-800 rounded-2xl p-8 md:p-10 border border-navy-800">
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Book a Clarity Call</h2>
                  <p className="text-slate-300 mb-8">45 minutes to understand your challenges, explore fit, and answer your questions. No obligation.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Your Name *</label>
                        <input
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                        <input
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Role / Title *</label>
                        <input
                          type="text" name="role" required value={formData.role} onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="e.g., VP Engineering, Founder"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Company / Industry</label>
                        <input
                          type="text" name="company" value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Years of Leadership Experience</label>
                      <select
                        name="experience" value={formData.experience} onChange={handleChange}
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10-15">10-15 years</option>
                        <option value="15-20">15-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Program Interest</label>
                      <select
                        name="interest" value={formData.interest} onChange={handleChange}
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="">Not sure yet</option>
                        <option value="fit-cohort">FIT Leadership Cohort</option>
                        <option value="one-on-one">One-on-One Leadership Coaching</option>
                        <option value="life-coaching">Life Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">What brings you here? * (3-5 sentences)</label>
                      <textarea
                        name="message" required value={formData.message} onChange={handleChange} rows={5}
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                        placeholder="Share briefly what's happening in your leadership right now and what you're hoping to explore."
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Request Clarity Call
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-800">
                  <h3 className="font-display text-xl font-bold text-white mb-6">Direct Contact</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-slate-300 text-sm">gowtham@theleadershiptattva.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                      <div>
                        <p className="text-white font-medium">Response Time</p>
                        <p className="text-slate-300 text-sm">Within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-navy-800">
                  <h3 className="font-display text-xl font-bold text-white mb-6">Connect</h3>
                  <div className="space-y-4">
                    <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-gold-400 transition-colors">
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-gold-400 transition-colors">
                      <Instagram className="w-5 h-5" /> Instagram
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-navy-800 rounded-2xl p-8 border border-gold-400/20">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gold-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Confidentiality</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        All conversations are strictly confidential. Your information is never shared. Coaching conversations are protected by professional confidentiality protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading title="What Happens on a Clarity Call?" light />
          <FAQAccordion items={contactFAQ} dark />
        </div>
      </section>
    </>
  )
}
