import ScrollReveal from '../ui/ScrollReveal'

export default function ProblemCards({
  title,
  subtitle,
  cards = [],
  closingText,
  closingBody,
  closingHighlight,
}) {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display font-normal leading-[1.3] text-navy-950 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            {title}
          </h2>
          {subtitle && <p className="text-[1.08rem] text-navy-950/55 mb-16">{subtitle}</p>}
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-7 mb-14">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative bg-warm-50 p-10 text-left border border-navy-950/10 overflow-hidden transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(9,1,52,0.1),0_4px_12px_rgba(250,110,35,0.08)] hover:border-transparent before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-400 group-hover:before:scale-x-100">
                <h3 className="font-display text-[0.95rem] font-medium text-navy-950 mb-4">{card.title}</h3>
                <p className="text-[0.88rem] leading-[1.75] text-navy-950/55">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {(closingText || closingBody || closingHighlight) && (
          <ScrollReveal>
            <div className="max-w-[750px] mx-auto p-10 bg-warm-50 border-l-[3px] border-gold-400 text-left">
              <p className="text-[1rem] leading-[1.85] text-navy-950">
                {closingText && <span className="text-gold-400 font-medium">{closingText}</span>}
                {closingBody && <> {closingBody} </>}
                {closingHighlight && <span className="text-gold-400 font-medium">{closingHighlight}</span>}
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
