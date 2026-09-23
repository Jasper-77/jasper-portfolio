import {
  ArrowUpRight,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
} from 'lucide-react'
import { motion } from 'motion/react'

const highlights = [
  {
    number: '01',
    icon: Gauge,
    metric: '45%',
    title: 'API performance improvement',
    description:
      'Optimised SQL Server stored procedures and LINQ queries to improve enterprise API response time.',
    tags: ['ASP.NET Core', 'SQL Server', 'LINQ'],
  },
  {
    number: '02',
    icon: GitBranch,
    metric: 'MVC → React',
    title: 'Enterprise application modernization',
    description:
      'Contributed to modernizing enterprise application modules by transitioning legacy MVC experiences to React and TypeScript.',
    tags: ['React', 'TypeScript', '.NET'],
  },
  {
    number: '03',
    icon: Layers3,
    metric: 'Dynamic',
    title: 'Rule-driven workflow automation',
    description:
      'Built a configurable Rule Builder supporting nested conditions and dynamic business workflow rules.',
    tags: ['Angular', 'Reactive Forms', 'Workflow'],
  },
  {
    number: '04',
    icon: LockKeyhole,
    metric: 'JWT + RBAC',
    title: 'Enterprise application security',
    description:
      'Implemented authentication and role-based authorization using JWT and IdentityServer for protected application functionality.',
    tags: ['JWT', 'RBAC', 'IdentityServer'],
  },
]

function Highlights() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Engineering highlights
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Impact beyond implementation.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            A few examples of the engineering problems I've worked on and the
            outcomes they were designed to achieve.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid gap-4 lg:grid-cols-2">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon

            return (
              <motion.article
                key={highlight.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101216] p-6 transition duration-300 hover:border-accent/20 hover:bg-[#13161c] sm:p-8"
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/5 blur-3xl transition duration-500 group-hover:bg-accent/10"
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                      <Icon size={19} />
                    </div>

                    <span className="font-mono text-xs text-text-muted">
                      {highlight.number}
                    </span>
                  </div>

                  <p className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {highlight.metric}
                  </p>

                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {highlight.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary">
                    {highlight.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {highlight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-medium text-text-muted transition group-hover:text-accent">
                    Engineering outcome
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Highlights