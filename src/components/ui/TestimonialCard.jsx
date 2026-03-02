import { Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial, dark = true }) {
  return (
    <div className={`rounded-2xl p-8 h-full flex flex-col ${
      dark ? 'bg-navy-800 border border-navy-800' : 'bg-white border border-warm-200'
    }`}>
      <Quote className="w-8 h-8 text-gold-400/40 mb-4 shrink-0" />
      <p className={`font-display italic text-lg leading-relaxed mb-6 flex-grow ${
        dark ? 'text-slate-300' : 'text-slate-700'
      }`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="border-t border-gold-400/20 pt-4 mt-auto">
        <p className={`font-semibold ${dark ? 'text-white' : 'text-navy-950'}`}>
          {testimonial.author}
        </p>
        <p className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
          {testimonial.company}
        </p>
      </div>
    </div>
  )
}
