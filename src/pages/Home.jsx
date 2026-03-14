import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import { services as defaultServices } from '../data/services'
import { testimonials as defaultTestimonials } from '../data/testimonials'
import { layers as defaultLayers } from '../data/layers'
import { useContent } from '../hooks/useContent'
import { useCollection } from '../hooks/useCollection'

const layerIconMap = {
  body: '/images/icons/physical-vitality.png',
  energy: '/images/icons/flow-state.png',
  mind: '/images/icons/mental-peace.png',
  judgment: '/images/icons/decision-making.png',
  identity: '/images/icons/peace-alignment.png',
}

const programIconMap = {
  'fit-cohort': '/images/icons/group-session.png',
  'one-on-one': '/images/icons/1-1-session.png',
  'life-coaching': '/images/icons/family-harmony.png',
}
const stickyTops = [120, 140, 160, 180, 200]
const stickyZ = [5, 4, 3, 2, 1]

const defaults = {
  hero: {
    badge: 'Integration Coaching for Senior Leaders',
    headline: 'What If Pressure Made You ',
    headlineGold: 'Stronger?',
    subtext: 'Most leaders fragment under pressure — their body betrays them, their mind goes blank, their presence collapses. It doesn\u2019t have to be this way. We help senior leaders rewire so pressure becomes power.',
    ctaPrimary: 'Book a Discovery Session',
    ctaSecondary: 'Explore Programs',
  },
  logos: {
    label: 'Trusted by leaders from',
    logos: [
      { name: 'Google', src: '/logos/google.png' },
      { name: 'Amazon', src: '/logos/amazon.png' },
      { name: 'Deloitte', src: '/logos/deloitte.png' },
      { name: 'Flex', src: '/logos/flex.png' },
      { name: 'Groww', src: '/logos/groww.png' },
      { name: 'HDFC', src: '/logos/hdfc.png' },
      { name: 'Honda', src: '/logos/honda.png' },
      { name: 'Hyundai', src: '/logos/hyundai.png' },
      { name: 'L&T', src: '/logos/lt.png' },
      { name: 'Pernod Ricard', src: '/logos/pernod-ricard.png' },
      { name: 'SBI', src: '/logos/sbi.png' },
      { name: 'TCS', src: '/logos/tcs.png' },
      { name: 'TVS', src: '/logos/tvs.png' },
      { name: 'Wells Fargo', src: '/logos/wells-fargo.png' },
      { name: 'Eightfold AI', src: '/logos/eightfold-ai.png' },
    ],
  },
  philosophy: {
    label: 'What We Stand For',
    heading: 'Skills and capacities are an outcome of an ',
    headingEmphasis: 'integrated operating system.',
    pillars: [
      { title: 'Substance Over Fluff', text: 'We don\u2019t do motivational workshops. We rebuild the system underneath your skills — so what you already know stays accessible when it matters most.' },
      { title: 'Ancient Wisdom + Modern Rigor', text: 'The Panchakosha framework. Neuroscience. Performance science from military, Olympic, and Formula One environments. Not borrowed from one tradition — integrated from many.' },
      { title: 'Practice Over Theory', text: 'Understanding doesn\u2019t create change. Daily practice does. We are practitioners, not philosophers.' },
    ],
  },
  problem: {
    title: 'The Real Problem No One Talks About',
    subtitle: "You're brilliant in calm. But when real pressure hits, something breaks.",
    cards: [
      { title: 'Your Body Betrays You', text: 'Tension floods in. Breathing gets shallow. Your posture collapses. The body remembers every past failure and re-enacts it under scrutiny.' },
      { title: 'Your Mind Goes Blank', text: 'You had the perfect response prepared. But in the moment, words vanish. You over-explain, ramble, or freeze. The brilliant strategist disappears.' },
      { title: 'Your Presence Collapses', text: "The room feels your fragmentation. Your team senses it. The board sees it. You look composed outside, but you're drowning inside." },
    ],
    closingText: 'This is fragmentation.',
    closingBody: 'It\u2019s not a skills problem. It\u2019s not a confidence problem. It\u2019s an operating system problem. Your leadership OS was never designed for the pressure you face today. Most coaching works on the surface — techniques, frameworks, tips.',
    closingHighlight: 'Integration works at the foundation.',
  },
  fiveLayers: {
    title: 'The Five Layers of Integration',
    subtitle: 'Based on the Panchakosha framework, adapted for modern leadership. We work at every layer, not just the surface.',
  },
  services: {
    label: 'How We Serve Leaders',
    title: 'Three Pathways to Integration',
    subtitle: 'Same methodology. Different formats. Which is the right fit for your situation?',
    linkText: 'Compare All Programs',
  },
  testimonials: {
    title: 'What Leaders Say',
    subtitle: 'Real transformations from real leaders. Names anonymised for confidentiality.',
  },
  aboutTlt: {
    label: 'About',
    title: 'Why The Leadership Tattva Exists',
    subtitle: 'Deep work for leaders who want to integrate, not just perform.',
    paragraphs: [
      'The Leadership Tattva was founded on a simple observation: the most capable leaders fragment under pressure. Not because they lack skill, but because their operating system — body, breath, mind, discernment, purpose — disconnects when stakes are high.',
      'We built a methodology that combines ancient Indic wisdom with modern neuroscience to create lasting integration. Not performance. Not facade. Real, embodied presence that doesn\u2019t collapse under pressure.',
      'Founded by Gowtham Balaji — a leadership coach with a bent on Indic wisdom and authenticity — The Leadership Tattva serves senior leaders who are tired of fragmentation and ready to build integration that lasts. The work happens from a farm in Tiruvannamalai. Substance over fluff. Directness over polish. Integration over performance.',
    ],
    quote: '\u201CYou did not earn the right yesterday. You have been earning it your entire life. Now own it.\u201D',
    linkText: 'Learn more about Gowtham',
  },
  assessment: {
    badge: 'Free Assessment',
    title: 'Take the Leadership Integration Audit',
    subtitle: '20 questions. 5 minutes. Discover where you fragment across the Five Layers and receive personalised integration practices.',
    ctaText: 'Start the Free Audit',
    note: 'No spam. Just clarity on your leadership pattern.',
  },
  cta: {
    heading: 'Ready to Stop Fragmenting?',
    subtext: "Book a 45-minute clarity call. We'll map your fragmentation pattern and I'll tell you honestly whether this is the right path for you.",
    buttonText: 'Book a Discovery Session',
  },
}

export default function Home() {
  const { content } = useContent('home')
  const { data: servicesData } = useCollection('services')
  const { data: testimonialsData } = useCollection('testimonials')
  const { data: layersData } = useCollection('layers')

  const c = (section, key) => content?.[section]?.[key] || defaults[section]?.[key]
  const services = servicesData?.items || defaultServices
  const testimonials = (testimonialsData?.items || defaultTestimonials).slice(0, 3)
  const layers = layersData?.items || defaultLayers

  // 3D float effect refs
  const philosophySectionRef = useRef(null)
  const floatRef = useRef(null)

  useEffect(() => {
    const floatEl = floatRef.current
    const section = philosophySectionRef.current
    if (!floatEl || !section) return

    // Skip on touch devices — use CSS animation instead
    if ('ontouchstart' in window) {
      floatEl.style.animation = 'floatAnim 6s ease-in-out infinite'
      return
    }

    const maxTilt = 8
    const smoothing = 0.08
    let cx = 0, cy = 0, tx = 0, ty = 0, phase = 0
    let animId

    const onMouseMove = (e) => {
      const rect = floatEl.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      tx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)))
      ty = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)))
    }

    const onMouseLeave = () => { tx = 0; ty = 0 }

    function animate() {
      cx += (tx - cx) * smoothing
      cy += (ty - cy) * smoothing
      phase += 0.015
      const fy = Math.sin(phase) * 14
      floatEl.style.transform = `translateY(${fy}px) rotateX(${-cy * maxTilt}deg) rotateY(${cx * maxTilt}deg)`
      floatEl.style.animation = 'none'
      animId = requestAnimationFrame(animate)
    }

    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)
    animate()

    return () => {
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(155deg, #090134 0%, #0d0240 55%, #203460 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(240,222,160,0.05) 0%, transparent 55%)' }} />
        <div className="relative z-[2] max-w-[1100px] mx-auto w-full px-6 lg:px-12 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-[520px]">
              <ScrollReveal>
                <p className="font-display text-[0.58rem] tracking-[0.35em] uppercase text-gold-400 mb-8">
                  {c('hero', 'badge')}
                </p>
                <h1 className="font-display font-normal leading-[1.15] mb-6 text-warm-50" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
                  {c('hero', 'headline')}
                  <span className="text-gold-400">{c('hero', 'headlineGold')}</span>
                </h1>
                <p className="text-[1.05rem] leading-[1.85] text-warm-50/80 mb-10">
                  {c('hero', 'subtext')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-block font-display text-[0.7rem] tracking-[0.12em] uppercase px-[2.2rem] py-[0.95rem] bg-gold-400 text-white transition-all duration-400 hover:bg-[#e05e15] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(250,110,35,0.3)]">
                    {c('hero', 'ctaPrimary')}
                  </Link>
                  <Link to="/services" className="inline-block font-display text-[0.7rem] tracking-[0.12em] uppercase px-[2.2rem] py-[0.95rem] border border-warm-50/40 text-warm-50 transition-all duration-400 hover:border-gold-300 hover:text-gold-300">
                    {c('hero', 'ctaSecondary')}
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <ScrollReveal>
                <div className="w-[380px] h-[420px] rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(252,243,231,0.08), rgba(240,222,160,0.1))', border: '1px solid rgba(240,222,160,0.15)' }}>
                  <img
                    src={c('hero', 'heroImage') || '/gowtham.jpg'}
                    alt="Gowtham Balaji - Leadership Integration Coach"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Logos */}
      <div className="bg-warm-50 border-b border-navy-950/10 py-12 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-body text-[0.7rem] tracking-[0.18em] uppercase text-navy-950/55 mb-5">
              {c('logos', 'label')}
            </p>
            <div className="flex justify-center items-center gap-8 md:gap-10 flex-wrap">
              {(c('logos', 'logos') || []).map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-14 md:h-16 lg:h-20 w-auto object-contain opacity-60 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Philosophy — What We Stand For */}
      <section ref={philosophySectionRef} className="bg-navy-950 text-warm-50 py-28 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {c('philosophy', 'label')}
            </p>
            <h2 className="font-display font-normal leading-[1.3] text-warm-50 mb-10" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
              {c('philosophy', 'heading')}
              <em className="text-gold-300 italic">{c('philosophy', 'headingEmphasis')}</em>
            </h2>
            <div className="flex flex-col gap-7">
              {(c('philosophy', 'pillars') || []).map((pillar, i) => (
                <div key={i} className="border-l-2 border-gold-400/25 pl-5 transition-all duration-400 hover:border-gold-400 hover:translate-x-1.5 cursor-default">
                  <h3 className="font-display text-[0.82rem] font-medium text-gold-300 tracking-[0.04em] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.75] text-warm-50/70">{pillar.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex justify-center items-center" style={{ perspective: '1000px' }}>
            <div
              ref={floatRef}
              className="relative w-full max-w-[480px]"
              style={{ transformStyle: 'preserve3d', willChange: 'transform', animation: 'floatAnim 6s ease-in-out infinite' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full pointer-events-none -z-[1]" style={{ background: 'radial-gradient(circle, rgba(240,222,160,0.06) 0%, transparent 70%)', animation: 'glowPulse 4s ease-in-out infinite' }} />
              <img
                src={c('philosophy', 'image') || '/images/operating-system.png'}
                alt="The Leadership Operating System"
                className="w-full h-auto block transition-[filter] duration-400"
                style={{ filter: 'drop-shadow(0 20px 50px rgba(240,222,160,0.12))' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Problem */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {c('problem', 'title')}
            </h2>
            <p className="text-[1.08rem] text-navy-950/55 mb-16">{c('problem', 'subtitle')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-7 mb-14">
            {(c('problem', 'cards') || []).map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative bg-warm-50 p-10 text-left border border-navy-950/10 overflow-hidden transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(9,1,52,0.1),0_4px_12px_rgba(250,110,35,0.08)] hover:border-transparent before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 group-hover:before:scale-x-100">
                  <h3 className="font-display text-[0.95rem] font-medium text-navy-950 mb-4">{card.title}</h3>
                  <p className="text-[0.88rem] leading-[1.75] text-navy-950/55">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="max-w-[750px] mx-auto p-10 bg-warm-50 border-l-[3px] border-gold-400 text-left">
              <p className="text-[1rem] leading-[1.85] text-navy-950">
                <span className="text-gold-400 font-medium">{c('problem', 'closingText') || 'This is fragmentation.'}</span>{' '}
                {c('problem', 'closingBody') || 'It\u2019s not a skills problem. It\u2019s not a confidence problem. It\u2019s an operating system problem. Your leadership OS was never designed for the pressure you face today. Most coaching works on the surface — techniques, frameworks, tips.'}{' '}
                <span className="text-gold-400 font-medium">{c('problem', 'closingHighlight') || 'Integration works at the foundation.'}</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Five Layers — Sticky Stacking Cards */}
      <section className="bg-navy-950 text-warm-50 py-28 pb-40 px-6 relative">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 text-center mb-6">
              {c('fiveLayers', 'title')}
            </p>
            <h2 className="font-display font-normal text-center text-warm-50 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {c('fiveLayers', 'title')}
            </h2>
            <p className="text-[0.95rem] text-center text-warm-50/70 max-w-[600px] mx-auto mb-16">
              {c('fiveLayers', 'subtitle')}
            </p>
          </ScrollReveal>

          <div className="relative">
            {layers.map((layer, i) => (
              <ScrollReveal key={layer.id} delay={i * 0.05}>
                <div
                  className="lg:sticky relative bg-[#203460] border border-gold-300/10 p-8 lg:p-10 mb-6 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-start transition-all duration-400 hover:border-gold-400/30 hover:shadow-[0_8px_30px_rgba(240,222,160,0.06)]"
                  style={{ top: `${stickyTops[i]}px`, zIndex: stickyZ[i] }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-navy-950/40">
                    {layerIconMap[layer.icon] ? (
                      <img src={layerIconMap[layer.icon]} alt={layer.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xl">✦</span>
                    )}
                  </div>
                  <div>
                    <div className="font-display text-[1rem] font-medium text-gold-300 mb-0.5">{layer.name}</div>
                    <div className="text-[0.78rem] text-gold-400 italic mb-3">{layer.sanskrit}</div>
                    <div className="text-[0.88rem] leading-[1.75] text-warm-50/70 mb-3">{layer.description}</div>
                    <div className="flex flex-wrap gap-8">
                      <div className="text-[0.78rem] leading-[1.6]">
                        <span className="font-medium block mb-0.5 text-[#e87461]">Fragmented:</span>
                        <span className="text-warm-50/70">{layer.fragmented}</span>
                      </div>
                      <div className="text-[0.78rem] leading-[1.6]">
                        <span className="font-medium block mb-0.5 text-[#7ec49d]">Integrated:</span>
                        <span className="text-warm-50/70">{layer.integrated}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Services */}
      <section className="bg-warm-50 py-28 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {c('services', 'label')}
            </p>
            <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {c('services', 'title')}
            </h2>
            <p className="text-[1rem] text-navy-950/55 mb-16">{c('services', 'subtitle')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="group relative bg-white p-10 text-left border border-navy-950/10 overflow-hidden transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(9,1,52,0.1),0_5px_15px_rgba(250,110,35,0.08)] hover:border-transparent before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 group-hover:before:scale-x-100">
                  {programIconMap[service.id] && (
                    <img src={programIconMap[service.id]} alt="" className="w-14 h-14 object-contain mb-4" />
                  )}
                  <div className="font-display text-[0.55rem] tracking-[0.2em] uppercase text-gold-400 font-medium mb-5">
                    {service.badge}
                  </div>
                  <h3 className="font-display text-[1rem] font-medium text-navy-950 leading-[1.3] mb-3">{service.title}</h3>
                  <p className="text-[0.85rem] leading-[1.75] text-navy-950/55 mb-5">{service.description}</p>
                  <Link to={service.link} className="font-display text-[0.65rem] tracking-[0.08em] uppercase text-gold-400 hover:tracking-[0.14em] transition-all duration-300 inline-block">
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link to="/services" className="font-display text-[0.7rem] tracking-[0.08em] uppercase text-gold-400 hover:tracking-[0.14em] transition-all duration-300">
              {c('services', 'linkText')} →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-navy-950 text-warm-50 py-28 px-6 relative overflow-hidden">
        <div className="absolute -top-1/2 -right-[20%] w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,222,160,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-[1100px] mx-auto relative z-[2]">
          <ScrollReveal>
            <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 text-center mb-6">
              {c('testimonials', 'title')}
            </p>
            <h2 className="font-display font-normal text-center text-warm-50 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {c('testimonials', 'title')}
            </h2>
            <p className="text-[0.92rem] text-center text-warm-50/70 mb-16">{c('testimonials', 'subtitle')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id || i} delay={i * 0.1}>
                <div className="bg-[rgba(32,52,96,0.5)] border border-gold-300/[0.08] p-10 relative transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1.5 hover:border-gold-400/25 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),0_0_30px_rgba(240,222,160,0.04)]">
                  <div className="font-display text-[3.5rem] text-gold-300/15 leading-none mb-2 select-none">&ldquo;</div>
                  <p className="text-[0.88rem] leading-[1.85] text-warm-50/80 italic mb-6">{t.quote}</p>
                  <div className="w-[30px] h-px bg-gold-400 mb-4" />
                  <div className="font-display text-[0.78rem] font-medium text-gold-300 mb-0.5">{t.author}</div>
                  <div className="text-[0.75rem] text-warm-50/70">{t.company}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. About TLT */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[750px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {c('aboutTlt', 'label')}
            </p>
            <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              {c('aboutTlt', 'title')}
            </h2>
            <p className="text-[0.95rem] text-navy-950/55 italic mb-10">{c('aboutTlt', 'subtitle')}</p>

            {(c('aboutTlt', 'paragraphs') || []).map((p, i) => (
              <p key={i} className="text-[0.95rem] leading-[1.9] text-navy-950/55 mb-5 text-left">{p}</p>
            ))}

            <div className="font-display italic text-gold-400 my-10 leading-[1.55] font-normal text-center py-8 border-t border-b border-navy-950/10" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              {c('aboutTlt', 'quote')}
            </div>

            <Link to="/about" className="font-display text-[0.68rem] tracking-[0.1em] uppercase text-gold-400 hover:tracking-[0.16em] transition-all duration-300">
              {c('aboutTlt', 'linkText')} →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Assessment */}
      <section className="bg-warm-50 py-20 px-6">
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto text-center bg-white border border-navy-950/10 p-14 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(9,1,52,0.08)] hover:border-transparent">
            <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {c('assessment', 'badge')}
            </p>
            <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-4" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)' }}>
              {c('assessment', 'title')}
            </h2>
            <p className="text-[0.92rem] text-navy-950/55 mb-8">{c('assessment', 'subtitle')}</p>
            <a
              href="#"
              className="inline-block font-display text-[0.72rem] tracking-[0.12em] uppercase px-10 py-4 bg-navy-950 text-warm-50 transition-all duration-400 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(250,110,35,0.25)]"
            >
              {c('assessment', 'ctaText')}
            </a>
            <p className="text-[0.75rem] text-navy-950/55 mt-5">{c('assessment', 'note')}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* 10. Final CTA */}
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
