import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Motion language inspired by kprverse.com (scroll-triggered, staggered, console intro)

const consoleLines = [
  '// loading immersive portfolio…',
  '// env: Unity · Unreal · XR',
  '// status: online',
]

export default function Hero() {
  const [typed, setTyped] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const containerRef = useRef(null)
  const splineRef = useRef(null)

  // Typewriter sequence
  useEffect(() => {
    let mounted = true
    async function run() {
      setIsTyping(true)
      for (const line of consoleLines) {
        if (!mounted) break
        await typeLine(line)
        await wait(250)
      }
      setIsTyping(false)
    }
    run()
    return () => {
      mounted = false
    }
  }, [])

  const typeLine = (line) =>
    new Promise((resolve) => {
      let i = 0
      setTyped((prev) => [...prev, ''])
      const idx = typed.length
      const timer = setInterval(() => {
        i++
        setTyped((prev) => {
          const copy = [...prev]
          copy[idx] = line.slice(0, i)
          return copy
        })
        if (i >= line.length) {
          clearInterval(timer)
          resolve()
        }
      }, 20)
    })

  const wait = (ms) => new Promise((r) => setTimeout(r, ms))

  // Mouse parallax for the hero background
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const bounds = useMemo(() => ({ w: 120, h: 60 }), [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = ((e.clientX - cx) / rect.width) * bounds.w
      const dy = ((e.clientY - cy) / rect.height) * bounds.h
      setParallax({ x: dx, y: dy })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [bounds])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#05070a] text-white"
    >
      {/* Animated gradient backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 600px at 20% 10%, rgba(0,255,255,0.12), transparent 60%), radial-gradient(900px 500px at 80% 90%, rgba(0,140,255,0.14), transparent 60%)',
          }}
        />
        <motion.div
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          }}
          className="absolute inset-0"
        >
          <Spline
            ref={splineRef}
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
        {/* Noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light" style={{ backgroundImage: 'url(/noise.png)', backgroundSize: 'auto' }} />
        {/* Subtle top gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-[#05070a]/60" />
      </motion.div>

      {/* Top-right HUD: sound toggle */}
      <div className="absolute right-6 top-6 z-10">
        <button
          aria-label="Toggle sound"
          className="cursor-target group relative rounded-full border border-cyan-400/40 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md transition-all hover:border-cyan-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
        >
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          sound on/off
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight md:text-6xl"
        >
          Abhishek Brahmbhatt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
          className="mt-4 max-w-2xl text-base text-cyan-100/90 md:text-lg"
        >
          Game & XR Developer · Unity / Unreal · IIT Chicago
        </motion.p>

        {/* Console lines */}
        <div className="mt-8 w-full max-w-2xl rounded-lg border border-cyan-400/30 bg-white/5 p-4 text-left font-mono text-cyan-100/90 backdrop-blur-md">
          <AnimatePresence>
            {typed.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex"
              >
                <span className="mr-2 text-cyan-400">$</span>
                <span>
                  {line}
                  {i === typed.length - 1 && isTyping ? (
                    <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-cyan-300/70 align-middle" />
                  ) : null}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="cursor-target group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-400/50 bg-cyan-500/10 px-6 py-3 text-base text-cyan-100 shadow-[0_0_0_0_rgba(34,211,238,0)] transition-all hover:scale-[1.03] hover:border-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
          >
            <span className="relative z-10">View Projects</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  )
}
