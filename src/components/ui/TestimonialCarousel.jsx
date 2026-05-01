import { Play } from 'lucide-react'

export default function TestimonialCarousel({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-28 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 items-stretch py-8 animate-marquee-slow hover:[animation-play-state:paused]">
        {[...items, ...items].map((t, i) => (
          <div key={`${t.id || 'tcard'}-${i}`} className="shrink-0 w-[300px] md:w-[360px] lg:w-[400px]">
            {t.type === 'video' ? <VideoCard t={t} /> : <QuoteCard t={t} />}
          </div>
        ))}
      </div>
    </div>
  )
}

function QuoteCard({ t }) {
  return (
    <div className="h-full bg-[rgba(32,52,96,0.5)] border border-gold-300/[0.08] rounded-2xl p-10 relative transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:border-gold-400/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3),0_0_50px_rgba(240,222,160,0.18),0_0_30px_rgba(250,110,35,0.1)]">
      <div className="font-display text-[3.5rem] text-gold-300/15 leading-none mb-2 select-none">&ldquo;</div>
      <p className="text-[0.88rem] leading-[1.85] text-warm-50/80 italic mb-6">{t.quote}</p>
      <div className="w-[30px] h-px bg-gold-400 mb-4" />
      <div className="font-display text-[0.88rem] font-medium text-gold-300 mb-0.5">{t.author}</div>
      <div className="text-[0.75rem] text-warm-50/70">{t.company}</div>
    </div>
  )
}

function VideoCard({ t }) {
  const poster = t.poster || '/images/bg-hero.png'
  return (
    <a
      href={t.videoUrl || '#'}
      target={t.videoUrl ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="block group relative h-full min-h-[340px] rounded-2xl overflow-hidden border border-gold-300/20 transition-all duration-400 hover:-translate-y-2 hover:border-gold-400/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3),0_0_50px_rgba(240,222,160,0.18)]"
      style={{ backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gold-400/90 flex items-center justify-center transition-transform duration-400 group-hover:scale-110">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="font-display text-[0.88rem] font-medium text-gold-300 mb-0.5">{t.author}</div>
        <div className="text-[0.75rem] text-warm-50/80">{t.company}</div>
      </div>
    </a>
  )
}
