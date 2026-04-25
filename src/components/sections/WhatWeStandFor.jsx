import { useEffect, useRef } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

export default function WhatWeStandFor({
  label,
  heading,
  headingEmphasis,
  pillars = [],
  image = '/images/operating-system.png',
}) {
  const sectionRef = useRef(null)
  const floatRef = useRef(null)

  useEffect(() => {
    const floatEl = floatRef.current
    const section = sectionRef.current
    if (!floatEl || !section) return

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
    <section ref={sectionRef} className="bg-navy-950 text-warm-50 py-28 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          {label && (
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 mb-6">
              {label}
            </p>
          )}
          <h2 className="font-display font-normal leading-[1.3] text-warm-50 mb-10" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
            {heading}
            {headingEmphasis && <em className="text-gold-300 italic">{headingEmphasis}</em>}
          </h2>
          <div className="flex flex-col gap-7">
            {pillars.map((pillar, i) => (
              <div key={i} className="border-l-2 border-gold-400/25 pl-5 transition-all duration-400 hover:border-gold-400 hover:translate-x-1.5 cursor-default">
                <h3 className="font-display text-[0.92rem] font-medium text-gold-300 tracking-[0.04em] mb-1">
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
              src={image}
              alt="The Leadership Operating System"
              className="w-full h-auto block transition-[filter] duration-400"
              style={{ filter: 'drop-shadow(0 20px 50px rgba(240,222,160,0.12))' }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
