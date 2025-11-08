import { motion } from 'framer-motion'

export default function AboutContact() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      {/* Slow animated gradient background for depth */}
      <div className="pointer-events-none absolute inset-0 -z-[1] opacity-60">
        <div className="absolute inset-0 animate-[gradientShift_12s_ease-in-out_infinite] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
        <style>{`
          @keyframes gradientShift {
            0% { transform: translate3d(0,0,0) }
            50% { transform: translate3d(0,-10px,0) }
            100% { transform: translate3d(0,0,0) }
          }
        `}</style>
      </div>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl md:text-4xl"
      >
        About Abhishek
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="mt-4 max-w-3xl text-cyan-100/85"
      >
        Abhishek is a master’s student at Illinois Tech (IIT Chicago) focused on game development, XR/VR, and interactive systems. He builds Unity/Unreal prototypes and immersive training experiences, and likes combining research work with production-quality game UIs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="mailto:abhishek@example.com"
          className="group inline-flex items-center justify-center rounded-md border border-cyan-400/40 bg-white/5 px-5 py-3 text-cyan-100 transition hover:scale-[1.03] hover:border-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        >
          Contact me
        </a>
        <a
          href="https://github.com/abhishekb31"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center rounded-md border border-cyan-400/40 bg-white/5 px-5 py-3 text-cyan-100 transition hover:scale-[1.03] hover:border-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-brahmbhatt-0775971a1/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center rounded-md border border-cyan-400/40 bg-white/5 px-5 py-3 text-cyan-100 transition hover:scale-[1.03] hover:border-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}
