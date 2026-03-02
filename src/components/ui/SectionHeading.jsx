import ScrollReveal from './ScrollReveal'

export default function SectionHeading({ title, subtitle, light = false, className = '', align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'

  return (
    <ScrollReveal className={`mb-12 ${alignClass} ${className}`}>
      <div className={`w-12 h-0.5 bg-gold-400 mb-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-700'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
