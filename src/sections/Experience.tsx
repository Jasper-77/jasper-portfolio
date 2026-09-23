import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import { motion } from 'motion/react'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/5 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Experience
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building software that solves real problems.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            A career focused on enterprise application development, full stack
            engineering, cloud integration and continuous improvement.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 hidden w-px bg-linear-to-b from-accent/60 via-white/10 to-transparent sm:block"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-[#08090b] text-accent sm:flex">
                  <BriefcaseBusiness size={17} />
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#101216] p-6 transition-colors hover:border-white/15 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                        {experience.period}
                      </p>

                      <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-text-muted">
                        {experience.company}
                      </p>
                    </div>

                    <a
                      href="#projects"
                      className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-white"
                    >
                      View related work
                      <ArrowUpRight
                        size={15}
                        className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="mt-7 max-w-3xl text-sm leading-7 text-text-secondary">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-8">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                      Key contributions
                    </p>

                    <ul className="grid gap-x-8 gap-y-3 lg:grid-cols-2">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-text-secondary"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience