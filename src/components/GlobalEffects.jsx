import { useEffect } from 'react'

// Global visual/interaction effects: smooth scroll, halo cursor
export default function GlobalEffects() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    // Halo cursor for interactive elements marked with .cursor-target
    const onMove = (e) => {
      const halo = document.getElementById('halo-cursor')
      if (!halo) return
      halo.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div>
      <div
        id="halo-cursor"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur-md transition-transform duration-75"
        style={{ width: 36, height: 36 }}
      />
    </div>
  )
}
