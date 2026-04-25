import { Link } from 'react-router-dom'
import CTASection from '../components/ui/CTASection'
import ScrollReveal from '../components/ui/ScrollReveal'
import TestimonialCarousel from '../components/ui/TestimonialCarousel'
import { services as defaultServices } from '../data/services'
import { testimonials as defaultTestimonials } from '../data/testimonials'
import { useContent } from '../hooks/useContent'
import { useCollection } from '../hooks/useCollection'

const programIconMap = {
  'fit-cohort': '/images/icons/group-session.png',
  'one-on-one': '/images/icons/1-1-session.png',
  'life-coaching': '/images/icons/family-harmony.png',
}

const defaults = {
  hero: {
    badge: 'Integration Coaching for Senior Leaders',
    headline: 'Executive Presence For Senior Leaders',
    headlineGold: '',
    subtext: "Most leaders fragment under pressure — their body betrays them, their mind goes blank, their presence collapses. It doesn’t have to be this way. We help senior leaders rewire their leadership operating system, so that when pressure strikes, what shows up is their presence, mastery and impact.",
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
  presence: {
    label: 'A Moment of Truth',
    heading: 'Presence is a result of an ',
    headingEmphasis: 'integrated',
    headingTail: ' leadership operating system.',
    sub: "You know what you're capable of. You also know what happens when pressure hits.",
    seoHeadline: 'CXO & Founder Leadership Coaching in Chennai',
    cards: [
      {
        quote: "I had the answer. I just didn’t say it.",
        body: "You knew exactly what should be said. You had the data. You had the conviction. But the moment you opened your mouth, something shrank. You softened the point. You hedged. Someone else said it three minutes later and got the credit. You walked out knowing — again — that <strong>the problem isn’t what you know.</strong>",
      },
      {
        quote: "Why do I sound different when authority walks in?",
        body: "Your voice in a 1:1 with your team is one voice. Your voice in front of the board is another. You can feel the shift happen — the pitch rises, sentences get longer, you start explaining when you should be stating. <strong>It’s not confidence you’re missing. It’s integration</strong> — the connection between what you know and how it comes out of your body.",
      },
      {
        quote: "I know the leader I can be. I’ve met him once or twice.",
        body: "You’ve had the moments. Rare ones — where you were fully there, spoke with unshakeable clarity, and the room moved. You know that leader exists inside you. The question isn’t whether you’re capable of it. <strong>The question is why you can’t access him consistently</strong> — especially when it matters most.",
      },
    ],
  },
  leadershipMatters: {
    label: 'A Way Forward',
    heading: 'Your Leadership Matters',
    quote: "There is nothing more dangerous than a loud voice with no real substance; and nothing more tragic than a good leader who has something to say, but can’t bring themselves to say it.",
    bridge: [
      "There’s a different way to show up. It awaits you.",
      "And when you choose that, results, rewards, recognition follow you.",
    ],
    cards: [
      { title: 'Come back to yourself.', text: 'The version of you that knew, before you somehow learnt to shrink.' },
      { title: 'Let your depth and spontaneity take up space.', text: 'Not by being louder. By being fully present, integrating from inside.' },
      { title: "Step in and co-create the kind of world you’d want to work in.", text: 'One where the thoughtful ones are heard, not hijacked.' },
      { title: 'Do the real inner work. Not the performance of it.', text: 'The inner rewiring. The daily practice. The uncomfortable honesty.' },
      { title: 'Walk with us, for a while.', text: "Not because you’re broken. Because you’re ready." },
    ],
    closingLead: 'For a real leader,',
    closingLines: [
      'This path is the way out of mediocrity and silent suffering.',
      "This practice ensures you don’t slide back into invisibility, self-doubts and fears.",
      'This work brings your presence and mastery to impact; rewards follow.',
    ],
  },
  services: {
    label: 'How We Serve Leaders',
    title: 'Develop Leadership Presence, Clarity & Impact Without Losing Yourself',
    subtitle: 'Same methodology. Different pathways to integration.',
    linkText: 'Compare All Programs',
    clarityPrompt: "Not sure where to start? A clarity call will help us figure out the right path together.",
  },
  testimonials: {
    statStrip: '10,000+ Leaders Trained · 120+ Senior Leaders Coached 1-to-1 · Results Where It Counts: Profession, Relationships, Well-being',
    title: 'What Leaders Say',
    subtitle: "Don’t take our word for it. Hear from leaders who did the work.",
  },
  aboutTlt: {
    label: 'About',
    title: 'Why The Leadership Tattva Exists',
    paragraphs: [
      'There is a voice inside every capable leader that knows they can do more, be more, impact more. But somewhere between the pressure and the performance, that voice learned to stay quiet.',
      "We built The Leadership Tattva because we believe this: when that voice finds its ground, when the leader behind the title shows up fully, something shifts. Not just in their career. In every situation they walk into. In every team they lead. In every decision they make. The best ideas surface. The right work gets done. People stop performing and start contributing. That’s the world we want to help build. One integrated leader at a time.",
    ],
    credentials: 'Gowtham Balaji, Leadership Coach for CXOs, Founders And Senior Leaders — 150+ Leaders Coached In Private Exclusive 1-to-1 · 10,000+ Leaders Trained · 7+ Years of Practice',
    hook: "What we’ve observed across hundreds of leaders, what we’ve found actually works, and the philosophy that drives everything we do.",
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
    subtext: "Book a 45-minute clarity call. You’ll walk away knowing exactly where you fragment, why, and whether this is the right path forward.",
    buttonText: 'Book a Clarity Call',
  },
}

export default function Home() {
  const { content } = useContent('home')
  const { data: servicesData } = useCollection('services')
  const { data: testimonialsData } = useCollection('testimonials')

  const c = (section, key) => content?.[section]?.[key] ?? defaults[section]?.[key]
  const services = servicesData?.items || defaultServices
  const testimonials = testimonialsData?.items || defaultTestimonials

  const presenceCards = c('presence', 'cards') || []
  const leadershipCards = c('leadershipMatters', 'cards') || []
  const leadershipBridge = c('leadershipMatters', 'bridge') || []
  const leadershipClosing = c('leadershipMatters', 'closingLines') || []
  const aboutParagraphs = c('aboutTlt', 'paragraphs') || []
  const logos = c('logos', 'logos') || []

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(155deg, #090134 0%, #0d0240 55%, #203460 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/bg-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(240,222,160,0.06) 0%, transparent 55%)' }} />

        <div className="relative z-[2] max-w-[820px] mx-auto w-full px-6 lg:px-12 py-24 md:py-28 text-center">
          <ScrollReveal>
            <img src="/images/logo-square.png" alt="The Leadership Tattva" className="h-28 md:h-32 w-auto mx-auto mb-6 opacity-95 drop-shadow-[0_0_40px_rgba(240,222,160,0.15)]" />
            <p className="font-display text-[0.68rem] tracking-[0.35em] uppercase text-gold-400 mb-6">
              {c('hero', 'badge')}
            </p>
            <h1 className="font-display font-normal leading-[1.15] mb-5 text-warm-50" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)' }}>
              {c('hero', 'headline')}
              {c('hero', 'headlineGold') && <span className="text-gold-400">{c('hero', 'headlineGold')}</span>}
            </h1>
            <p className="text-[1.02rem] leading-[1.8] text-warm-50/80 mb-8 max-w-[680px] mx-auto">
              {c('hero', 'subtext')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-block font-display text-[0.7rem] tracking-[0.12em] uppercase px-[2.2rem] py-[0.95rem] bg-gold-400 text-white transition-all duration-400 hover:bg-[#e05e15] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(250,110,35,0.3)]">
                {c('hero', 'ctaPrimary')}
              </Link>
              <Link to="/services" className="inline-block font-display text-[0.7rem] tracking-[0.12em] uppercase px-[2.2rem] py-[0.95rem] border border-warm-50/40 text-warm-50 transition-all duration-400 hover:border-gold-300 hover:text-gold-300">
                {c('hero', 'ctaSecondary')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Logos — separate cream strip below hero */}
      <div className="bg-warm-50 border-b border-navy-950/10 py-12 px-6">
        <div className="text-center">
          <p className="font-body text-[0.7rem] tracking-[0.18em] uppercase text-navy-950/55 mb-5">
            {c('logos', 'label')}
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-warm-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-warm-50 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-10 items-center animate-marquee hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={`${logo.name}-${i}`}
                  src={logo.src}
                  alt={logo.name}
                  className="h-14 md:h-16 lg:h-20 w-auto object-contain shrink-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Presence Section */}
      <section className="bg-warm-50 py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-[10%] -left-[5%] w-[400px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(250,110,35,0.04) 0%, transparent 60%)' }} />
        <div className="absolute bottom-[15%] -right-[5%] w-[450px] h-[450px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,222,160,0.08) 0%, transparent 60%)' }} />

        <div className="max-w-[1000px] mx-auto relative z-[2]">
          <div className="text-center max-w-[720px] mx-auto mb-20">
            <ScrollReveal>
              <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 mb-7">
                {c('presence', 'label')}
              </p>
              <h3 className="sr-only">{c('presence', 'seoHeadline')}</h3>
              <h2 className="font-display font-normal leading-[1.35] text-navy-950 mb-6" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}>
                {c('presence', 'heading')}
                <em className="text-gold-400 italic">{c('presence', 'headingEmphasis')}</em>
                {c('presence', 'headingTail')}
              </h2>
              <p className="text-[1.02rem] text-navy-950/55 italic leading-[1.7] max-w-[580px] mx-auto">
                {c('presence', 'sub')}
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-12 lg:gap-10">
            {presenceCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={`group relative bg-white border border-navy-950/10 p-8 md:p-12 max-w-full lg:max-w-[620px] transition-all duration-500 [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(9,1,52,0.08),0_8px_20px_rgba(250,110,35,0.06)] hover:border-transparent ${
                    i === 0 ? 'lg:self-start lg:ml-[2%]' : i === 1 ? 'lg:self-end lg:mr-[2%]' : 'lg:self-start lg:ml-[8%]'
                  }`}
                >
                  <span className="absolute top-0 left-0 w-[3px] h-full bg-gold-400 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]" />
                  <div className="absolute top-8 right-10 font-display text-[0.7rem] tracking-[0.2em] text-gold-300 font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="font-display italic leading-[1.35] text-navy-950 mb-7 pr-12" style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)' }}>
                    <span className="font-display text-[2.8rem] leading-[0] align-[-0.35rem] text-gold-400 mr-1 not-italic opacity-80">&ldquo;</span>
                    {card.quote}
                  </p>
                  <div className="w-[40px] h-px bg-gold-400/40 mb-6" />
                  <p className="text-[0.92rem] leading-[1.9] text-navy-950/55" dangerouslySetInnerHTML={{ __html: card.body }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Your Leadership Matters */}
      <section className="bg-white py-28 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-[780px] mx-auto mb-14">
              <p className="font-display text-[0.62rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
                {c('leadershipMatters', 'label')}
              </p>
              <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-10" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)' }}>
                {c('leadershipMatters', 'heading')}
              </h2>
              <blockquote className="font-display italic text-navy-950 leading-[1.5] border-t border-b border-navy-950/10 py-8 mb-10" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' }}>
                <span className="font-display text-[2.8rem] leading-[0] align-[-0.35rem] text-gold-400 mr-1 not-italic opacity-80">&ldquo;</span>
                {c('leadershipMatters', 'quote')}
              </blockquote>
              {leadershipBridge.map((p, i) => (
                <p key={i} className="text-[1.02rem] leading-[1.8] text-navy-950/70 mb-3">{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {leadershipCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative bg-warm-50 p-8 md:p-9 h-full border border-navy-950/10 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(9,1,52,0.1),0_4px_12px_rgba(250,110,35,0.08)] hover:border-transparent">
                  <span className="absolute top-0 left-0 w-full h-[3px] bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms]" />
                  <div className="absolute top-6 right-7 font-display text-[0.7rem] tracking-[0.2em] text-gold-300 font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-[1rem] font-medium text-navy-950 leading-[1.35] mb-4 pr-10">
                    {card.title}
                  </h3>
                  <div className="w-[30px] h-px bg-gold-400/40 mb-4" />
                  <p className="text-[0.9rem] leading-[1.8] text-navy-950/55">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center max-w-[720px] mx-auto">
              <p className="font-display text-[0.72rem] tracking-[0.25em] uppercase text-gold-400 mb-6">
                {c('leadershipMatters', 'closingLead')}
              </p>
              <div className="space-y-4">
                {leadershipClosing.map((line, i) => (
                  <p key={i} className="font-display italic text-navy-950 leading-[1.55]" style={{ fontSize: 'clamp(0.98rem, 1.8vw, 1.15rem)' }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. What Leaders Say — Carousel */}
      <section className="bg-navy-950 text-warm-50 py-28 px-6 relative overflow-hidden">
        <div className="absolute -top-1/2 -right-[20%] w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,222,160,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <ScrollReveal>
            <p className="font-display text-[0.68rem] tracking-[0.28em] uppercase text-gold-300 text-center mb-4 leading-[1.7]">
              {c('testimonials', 'statStrip')}
            </p>
            <h2 className="font-display font-normal text-center text-warm-50 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              {c('testimonials', 'title')}
            </h2>
            <p className="text-[0.95rem] text-center text-warm-50/70 mb-16 max-w-[600px] mx-auto">
              {c('testimonials', 'subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialCarousel items={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. About TLT */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-[780px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {c('aboutTlt', 'label')}
            </p>
            <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-10" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              {c('aboutTlt', 'title')}
            </h2>

            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-[0.98rem] leading-[1.9] text-navy-950/70 mb-6 text-left">{p}</p>
            ))}

            <div className="font-display text-gold-400 my-10 leading-[1.7] py-8 border-t border-b border-navy-950/10" style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1rem)' }}>
              {c('aboutTlt', 'credentials')}
            </div>

            <p className="text-[0.95rem] leading-[1.8] text-navy-950/65 mb-8 italic">
              {c('aboutTlt', 'hook')}
            </p>

            <Link to="/about" className="font-display text-[0.78rem] tracking-[0.1em] uppercase text-gold-400 hover:tracking-[0.16em] transition-all duration-300">
              {c('aboutTlt', 'linkText')} →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Services */}
      <section className="bg-warm-50 py-28 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {c('services', 'label')}
            </p>
            <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              {c('services', 'title')}
            </h2>
            <p className="text-[1rem] text-navy-950/55 mb-16">{c('services', 'subtitle')}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="group relative bg-white p-10 text-left border border-navy-950/10 overflow-hidden h-full transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(9,1,52,0.1),0_5px_15px_rgba(250,110,35,0.08)] hover:border-transparent before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 group-hover:before:scale-x-100">
                  {programIconMap[service.id] && (
                    <img src={programIconMap[service.id]} alt="" className="w-14 h-14 object-contain mb-4" />
                  )}
                  <div className="font-display text-[0.75rem] tracking-[0.2em] uppercase text-gold-400 font-medium mb-5">
                    {service.badge}
                  </div>
                  <h3 className="font-display text-[1rem] font-medium text-navy-950 leading-[1.3] mb-3">{service.title}</h3>
                  <p className="text-[0.85rem] leading-[1.75] text-navy-950/55 mb-5">{service.description}</p>
                  <Link to={service.link} className="font-display text-[0.75rem] tracking-[0.08em] uppercase text-gold-400 hover:tracking-[0.14em] transition-all duration-300 inline-block">
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link to="/services" className="font-display text-[0.7rem] tracking-[0.08em] uppercase text-gold-400 hover:tracking-[0.14em] transition-all duration-300 block mb-6">
              {c('services', 'linkText')} →
            </Link>
            <p className="text-[0.92rem] text-navy-950/60 italic max-w-[520px] mx-auto">
              {c('services', 'clarityPrompt')}{' '}
              <a href="#final-cta" className="text-gold-400 not-italic font-medium hover:text-[#e05e15] transition-colors duration-300 underline-offset-4 hover:underline">
                Book a clarity call →
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Assessment */}
      <section className="bg-white py-20 px-6">
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto text-center bg-warm-50 border border-navy-950/10 p-14 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(9,1,52,0.08)] hover:border-transparent">
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
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

      {/* 8. Final CTA */}
      <div id="final-cta" className="scroll-mt-24">
        <CTASection
          heading={c('cta', 'heading')}
          subtext={c('cta', 'subtext')}
          buttonText={c('cta', 'buttonText')}
          buttonTo="/contact"
          dark
        />
      </div>
    </>
  )
}
