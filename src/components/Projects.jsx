import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const featured = [
  {
    title: 'Character Rig & Animation Demo',
    link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/CharacterRig.html',
    tags: ['3D', 'Rigging', 'Game Pipeline'],
    text: 'Demonstration of character rig/animation workflow for game environments.',
  },
  {
    title: 'Mario Platformer',
    link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/Mario.html',
    tags: ['Game', 'Platformer'],
    text: 'Recreated classic platforming movement, collisions and level flow.',
  },
  {
    title: 'Gameplay Prototype',
    link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/Bog.html',
    tags: ['Prototype'],
    text: 'Rapid prototype to test mechanics and interaction.',
  },
]

const secondary = [
  { title: 'Bog', link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/Bog.html' },
  { title: 'SWF', link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/SWF.html' },
  { title: 'FC', link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/FC.html' },
]

const apps = [
  { title: 'Pharmacy Management System', link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/PharmacyMS.html' },
  { title: 'Sports Management System', link: 'https://abhishekb31.github.io/AbhishekBrahmbhatt/SportsMS.html' },
]

const cardBase = 'rounded-xl border border-cyan-400/30 bg-white/5 backdrop-blur-md shadow-xl'

function useStaggerControls(delayBase = 0) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  useEffect(() => {
    if (inView) controls.start('show')
  }, [inView, controls])
  return { ref, controls }
}

export default function Projects() {
  // Featured stagger
  const { ref: featRef, controls: feat } = useStaggerControls()
  const { ref: secRef, controls: sec } = useStaggerControls()
  const { ref: appRef, controls: app } = useStaggerControls()

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl md:text-4xl"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="mt-2 max-w-3xl text-cyan-100/80"
      >
        Selected game, XR and application builds.
      </motion.p>

      {/* Featured big cards */}
      <div ref={featRef} className="mt-10 grid gap-6 md:grid-cols-3">
        {featured.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            variants={{
              hidden: { opacity: 0, x: i === 0 ? -24 : i === 1 ? 0 : 24, y: i === 1 ? 24 : 0 },
              show: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
              },
            }}
            initial="hidden"
            animate={feat}
            className={`${cardBase} group relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]`}
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-400/10" />
            <div className="flex h-full flex-col">
              <div className="mb-3 flex items-center gap-2 text-xs text-cyan-200/80">
                {p.tags.map((t) => (
                  <span key={t} className="rounded border border-cyan-300/30 px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{p.text}</p>
              <div className="mt-auto">
                <div className="mt-4 h-32 w-full overflow-hidden rounded-md bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Secondary prototypes grid */}
      <div ref={secRef} className="mt-14 grid gap-6 md:grid-cols-3">
        {secondary.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.14 },
              },
            }}
            initial="hidden"
            animate={sec}
            className={`${cardBase} group relative overflow-hidden p-5`}
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-400/10" />
            <div className="flex h-40 items-end justify-between overflow-hidden rounded-md bg-white/5">
              <div className="p-4">
                <h4 className="text-lg">{p.title}</h4>
                <p className="mt-1 text-sm text-cyan-100/75 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Quick prototype info
                </p>
              </div>
              <div className="h-full w-24 bg-gradient-to-b from-cyan-500/20 to-purple-600/20 transition-transform duration-300 group-hover:translate-y-[-8px]" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Applications / Management Builds */}
      <div className="mt-16" ref={appRef}>
        <motion.h3
          variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
          initial="hidden"
          animate={app}
          className="text-2xl"
        >
          Application / Management Builds
        </motion.h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {apps.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } },
              }}
              initial="hidden"
              animate={app}
              className={`${cardBase} group relative overflow-hidden p-5 transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]`}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-400/10" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg">{p.title}</h4>
                  <span className="mt-1 inline-flex items-center text-sm text-cyan-200/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View project →
                  </span>
                </div>
                <div className="h-14 w-24 rounded-md bg-gradient-to-tr from-cyan-500/20 to-blue-600/20" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
