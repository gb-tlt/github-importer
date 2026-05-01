import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  white: {
    container: 'bg-white border border-navy-950/10',
    hover: 'hover:bg-warm-50/40',
    number: 'text-gold-400',
    title: 'text-navy-950',
    count: 'text-navy-950/55',
    chevron: 'text-gold-400',
  },
  cream: {
    container: 'bg-warm-50 border border-navy-950/10',
    hover: 'hover:bg-warm-50/70',
    number: 'text-gold-400',
    title: 'text-navy-950',
    count: 'text-navy-950/55',
    chevron: 'text-gold-400',
  },
  dark: {
    container: 'bg-navy-900 text-warm-50',
    hover: 'hover:bg-navy-900/70',
    number: 'text-gold-300',
    title: 'text-warm-50',
    count: 'text-warm-50/65',
    chevron: 'text-gold-300',
  },
}

export default function DisclosureRow({ number, title, countText, bg = 'cream', children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const v = variants[bg] || variants.cream

  return (
    <div className={`rounded-2xl overflow-hidden mb-4 ${v.container}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-6 p-6 md:p-8 text-left transition-colors cursor-pointer ${v.hover}`}
        aria-expanded={open}
      >
        <span className={`font-display leading-none ${v.number}`} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
          {number}
        </span>
        <span className={`flex-1 font-display font-medium leading-[1.3] ${v.title}`} style={{ fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' }}>
          {title}
        </span>
        {countText && (
          <span className={`hidden md:inline text-[0.85rem] tracking-wide ${v.count}`}>
            {countText}
          </span>
        )}
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''} ${v.chevron}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 md:px-8 pb-8 md:pb-10">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
