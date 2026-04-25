import ScrollReveal from '../ui/ScrollReveal'

const layerIconMap = {
  body: '/images/icons/physical-vitality.png',
  energy: '/images/icons/flow-state.png',
  mind: '/images/icons/mental-peace.png',
  judgment: '/images/icons/decision-making.png',
  identity: '/images/icons/peace-alignment.png',
}

const stickyTops = [120, 140, 160, 180, 200]
const stickyZ = [5, 4, 3, 2, 1]

export default function FiveLayersStacked({ label, title, subtitle, layers = [] }) {
  return (
    <section className="bg-navy-950 text-warm-50 py-28 pb-40 px-6 relative">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          {label && (
            <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-400 text-center mb-6">
              {label}
            </p>
          )}
          <h2 className="font-display font-normal text-center text-warm-50 mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-[0.95rem] text-center text-warm-50/70 max-w-[600px] mx-auto mb-16">
              {subtitle}
            </p>
          )}
        </ScrollReveal>

        <div className="relative">
          {layers.map((layer, i) => (
            <ScrollReveal key={layer.id} delay={i * 0.05}>
              <div
                className="lg:sticky relative bg-[#203460] border border-gold-300/10 p-8 lg:p-10 mb-6 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-start transition-all duration-400 hover:border-gold-400/30 hover:shadow-[0_8px_30px_rgba(240,222,160,0.06)]"
                style={{ top: `${stickyTops[i]}px`, zIndex: stickyZ[i] }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-navy-950/40">
                  {layerIconMap[layer.icon] ? (
                    <img src={layerIconMap[layer.icon]} alt={layer.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl">✦</span>
                  )}
                </div>
                <div>
                  <div className="font-display text-[1rem] font-medium text-gold-300 mb-0.5">{layer.name}</div>
                  <div className="text-[0.88rem] text-gold-400 italic mb-3">{layer.sanskrit}</div>
                  <div className="text-[0.88rem] leading-[1.75] text-warm-50/70 mb-3">{layer.description}</div>
                  <div className="flex flex-wrap gap-8">
                    <div className="text-[0.88rem] leading-[1.6]">
                      <span className="font-medium block mb-0.5 text-[#e87461]">Fragmented:</span>
                      <span className="text-warm-50/70">{layer.fragmented}</span>
                    </div>
                    <div className="text-[0.88rem] leading-[1.6]">
                      <span className="font-medium block mb-0.5 text-[#7ec49d]">Integrated:</span>
                      <span className="text-warm-50/70">{layer.integrated}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
