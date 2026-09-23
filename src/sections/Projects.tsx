import { ArrowUpRight, Layers3 } from 'lucide-react'
import { motion } from 'motion/react'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/5 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Featured work
            </p>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineering problems, solved.
            </h2>

            <p className="mt-5 text-base leading-8 text-text-secondary">
              Selected engineering work spanning application modernization,
              workflow automation, performance, security, cloud integration
              and reusable enterprise components.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-xs text-text-muted lg:flex">
            <Layers3 size={15} />
            Real-world engineering experience
          </div>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101216] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-[#13161c] sm:p-8"
            >
              {/* Accent glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/5 blur-3xl transition group-hover:bg-accent/10"
              />

              {/* Top row */}
              <div className="relative flex items-start justify-between">
                <span className="font-display text-sm font-semibold text-accent">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-text-muted">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-12">
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary">
                  {project.description}
                </p>

                {/* Impact */}
                {project.impact && (
                  <div className="mt-6 inline-flex items-center rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
                    <span className="font-display text-lg font-semibold text-accent">
                      {project.impact}
                    </span>
                  </div>
                )}

                {/* Details */}
                <ul className="mt-7 space-y-3">
                  {project.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-6 text-text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="relative mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] text-text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Bottom link */}
              <div className="relative mt-7 flex items-center justify-end">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-text-muted transition group-hover:text-white">
                  Engineering case study
                  <ArrowUpRight
                    size={14}
                    className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects