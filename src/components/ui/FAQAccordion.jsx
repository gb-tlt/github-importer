import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function FAQAccordion({ items, dark = false }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={index * 0.05}>
          <div className={`rounded-xl overflow-hidden ${
            dark ? 'bg-navy-800 border border-navy-800' : 'bg-white border border-warm-200'
          }`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex items-center justify-between p-5 text-left cursor-pointer ${
                dark ? 'hover:bg-navy-800/80' : 'hover:bg-warm-50'
              }`}
            >
              <span className={`font-semibold pr-4 ${dark ? 'text-white' : 'text-navy-950'}`}>
                {item.q}
              </span>
              <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              } ${dark ? 'text-gold-400' : 'text-gold-400'}`} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`px-5 pb-5 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
