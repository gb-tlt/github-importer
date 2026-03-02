import Button from './Button'
import ScrollReveal from './ScrollReveal'

export default function CTASection({
  heading = "Ready to Stop Fragmenting?",
  subtext = "Book a 45-minute clarity call. We'll map your fragmentation pattern and I'll tell you honestly whether this is the right path for you.",
  buttonText = "Book a Discovery Session",
  buttonTo = "/contact",
  dark = true,
}) {
  return (
    <section className={`py-24 ${dark ? 'bg-navy-950' : 'bg-warm-50'}`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto mb-8" />
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${dark ? 'text-white' : 'text-navy-950'}`}>
            {heading}
          </h2>
          <p className={`text-lg mb-10 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
            {subtext}
          </p>
          <Button to={buttonTo} variant={dark ? 'primary' : 'primary'} size="lg">
            {buttonText}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
