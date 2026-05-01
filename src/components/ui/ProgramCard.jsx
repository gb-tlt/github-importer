import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const programIconMap = {
  'fit-cohort': '/images/icons/group-session.png',
  'one-on-one': '/images/icons/1-1-session.png',
  'life-coaching': '/images/icons/family-harmony.png',
}

export default function ProgramCard({ service, index = 0, dark = false, icon }) {
  const isGold = service.badgeColor === 'gold'
  const iconSrc = icon || programIconMap[service.id]

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? isGold
            ? 'bg-navy-800 border-2 border-gold-400 shadow-lg shadow-gold-400/10'
            : 'bg-navy-800 border border-navy-800 hover:border-gold-400/30'
          : isGold
            ? 'bg-white border-3 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
            : 'bg-white border-3 border-gold-400 shadow-md hover:shadow-lg'
      }`}>
        {iconSrc && (
          <img src={iconSrc} alt="" className="w-14 h-14 object-contain mb-4" />
        )}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 w-fit ${
          isGold ? 'bg-gold-400/20 text-gold-400' : 'bg-gold-400/10 text-gold-400'
        }`}>
          {service.badge}
        </span>

        <h3 className={`font-display text-2xl font-bold mb-2 ${dark ? 'text-white' : 'text-navy-950'}`}>
          {service.title}
        </h3>

        <p className={`text-lg font-semibold mb-4 ${isGold ? 'text-gold-400' : 'text-gold-400'}`}>
          {'\u20B9'}{service.price} | {service.duration}
        </p>

        <p className={`mb-6 leading-relaxed flex-grow ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
          {service.description}
        </p>

        <ul className="space-y-2 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className={`flex items-start gap-2 text-sm ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className="text-gold-400 mt-0.5 shrink-0">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={service.link}
          className={`inline-flex items-center gap-2 font-semibold transition-colors mt-auto ${
            isGold ? 'text-gold-400 hover:text-gold-300' : 'text-gold-400 hover:text-gold-300'
          }`}
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ScrollReveal>
  )
}
