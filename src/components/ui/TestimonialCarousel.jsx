import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function TestimonialCarousel({ items = [] }) {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const firstCard = track.querySelector('[data-testimonial-card]')
    const delta = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.8
    track.scrollBy({ left: dir * delta, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth pb-4 -mx-6 px-6"
      >
        {items.map((t, i) => (
          <div
            key={t.id || i}
            data-testimonial-card
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%]"
          >
            {t.type === 'video' ? (
              <VideoCard t={t} />
            ) : (
              <QuoteCard t={t} />
            )}
          </div>
        ))}
      </div>

      {items.length > 3 && (
        <div className="hidden lg:flex absolute -top-16 right-0 gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-gold-300/20 text-warm-50/80 hover:text-gold-300 hover:border-gold-400/40 flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-gold-300/20 text-warm-50/80 hover:text-gold-300 hover:border-gold-400/40 flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  )
}

function QuoteCard({ t }) {
  return (
    <div className="h-full bg-[rgba(32,52,96,0.5)] border border-gold-300/[0.08] p-10 relative transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1.5 hover:border-gold-400/25 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2),0_0_30px_rgba(240,222,160,0.04)]">
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
      className="block group relative h-full min-h-[340px] overflow-hidden border border-gold-300/20 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold-400/40"
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
