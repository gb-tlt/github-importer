import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ end = 0, prefix = '', suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    let frame
    const tick = (now) => {
      const t = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(end * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, end, duration])

  return <span ref={ref}>{prefix}{value.toLocaleString('en-US')}{suffix}</span>
}
