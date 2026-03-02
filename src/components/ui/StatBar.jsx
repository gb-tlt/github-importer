import ScrollReveal from './ScrollReveal'

const stats = [
  { value: '500+', label: 'Leaders Coached' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Global Organizations' },
  { value: '6', label: 'Modalities Integrated' },
]

export default function StatBar({ dark = true, items = stats }) {
  return (
    <section className={`py-16 ${dark ? 'bg-navy-900 border-y border-navy-800' : 'bg-warm-50 border-y border-warm-200'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm font-medium tracking-wide uppercase ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
