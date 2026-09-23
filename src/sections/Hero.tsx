import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { motion } from 'motion/react'

const technologies = [
  '.NET',
  'C#',
  'ASP.NET Core',
  'React',
  'Angular',
  'Azure',
  'Microservices',
]

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-125 w-125 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-indigo-500/5 blur-[100px]"
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-5xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-emerald-300">
                Open to new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Senior
            <br />

            <span className="bg-linear-to-r from-white via-white to-text-secondary bg-clip-text text-transparent">
              .NET Full Stack
            </span>

            <br />

            <span className="text-accent">Developer.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg"
          >
            I build scalable enterprise applications, APIs and cloud solutions
            using modern .NET, React, Angular and Azure technologies.
          </motion.p>

          {/* Technology pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-text-secondary backdrop-blur-sm"
              >
                {technology}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light"
            >
              Explore my work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              <Download size={17} />
              Download resume
            </a>
          </motion.div>
        </div>

        {/* Experience indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8"
        >
          <div>
            <p className="font-display text-2xl font-semibold text-white">
              5.5+
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Years of experience
            </p>
          </div>

          <div>
            <p className="font-display text-2xl font-semibold text-white">
              .NET
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Backend engineering
            </p>
          </div>

          <div>
            <p className="font-display text-2xl font-semibold text-white">
              Azure
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Cloud & integrations
            </p>
          </div>

          <div>
            <p className="font-display text-2xl font-semibold text-white">
              Full Stack
            </p>
            <p className="mt-1 text-xs text-text-muted">
              End-to-end development
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-6 hidden items-center gap-2 text-xs text-text-muted transition hover:text-white lg:flex"
        >
          Scroll to explore
          <ArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero