import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', label, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = end / (duration * 60) // 60fps
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-heading text-4xl sm:text-5xl font-black text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 font-medium text-sm sm:text-base">
        {label}
      </div>
    </motion.div>
  )
}
