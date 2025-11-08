import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    {
      title: 'Research Assistant — XR / VR (IIT Chicago)',
      bullets: [
        'Worked on immersive/near-miss VR training experiences.',
        'Quest deployment and eye-tracker sync.',
        'Collaboration with faculty.',
      ],
    },
    {
      title: 'Game / Software Projects',
      bullets: [
        'Unity and Unreal prototypes.',
        'Rapid gameplay iteration.',
      ],
    },
  ]

  return (
    <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl md:text-4xl"
      >
        Experience & Roles
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.15 }}
            className="rounded-xl border border-cyan-400/30 bg-white/5 p-6 shadow-xl backdrop-blur-md transition hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-cyan-100/85">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
