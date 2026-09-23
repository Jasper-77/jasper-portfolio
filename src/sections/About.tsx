import { ArrowUpRight, Code2, Cloud, Layers3, Server } from 'lucide-react'
import { motion } from 'motion/react'

const focusAreas = [
  {
    icon: Server,
    title: 'Backend Engineering',
    description:
      'Designing robust APIs and enterprise services with C#, .NET and ASP.NET Core.',
  },
  {
    icon: Layers3,
    title: 'Full Stack Development',
    description:
      'Building responsive, maintainable applications across React, Angular and modern web technologies.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Integration',
    description:
      'Working with Azure services, cloud integrations, storage, messaging and distributed systems.',
  },
  {
    icon: Code2,
    title: 'Enterprise Solutions',
    description:
      'Developing scalable business applications with a focus on maintainability, performance and reliability.',
  },
]

function About() {
  return (
    <section id="about" className="relative border-t border-white/5 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              About me
            </p>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineering with purpose.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
              I&apos;m a Senior .NET Full Stack Developer focused on building
              scalable enterprise applications, APIs and cloud-powered
              solutions. My work spans backend engineering, modern frontend
              development, Azure services and system integrations.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-text-muted">
              I enjoy solving complex engineering problems, modernising
              applications and turning business requirements into reliable,
              maintainable software.
            </p>
          </div>
        </motion.div>

        {/* Focus areas */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-[#101216] p-7 transition-colors hover:bg-[#151820]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <h3 className="font-display text-base font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-muted">
                  {area.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Engineering philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-muted">
              Engineering philosophy
            </p>

            <p className="mt-4 max-w-3xl font-display text-xl leading-8 text-white sm:text-2xl">
              Build it clean. Make it scalable. Keep it maintainable.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted">
              Good software is not only about making something work. It is
              about creating systems that remain understandable, testable and
              adaptable as they grow.
            </p>
          </div>

          <a
            href="#experience"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white"
          >
            Explore my experience
            <ArrowUpRight
              size={17}
              className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About