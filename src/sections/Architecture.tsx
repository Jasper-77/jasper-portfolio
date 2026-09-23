import {
  ArrowRight,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  LockKeyhole,
  Server,
} from 'lucide-react'
import { motion } from 'motion/react'

const principles = [
  {
    icon: Boxes,
    number: '01',
    title: 'Separation of concerns',
    description:
      'Keep UI, business logic, APIs and data access independently maintainable.',
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'API-first integration',
    description:
      'Use well-defined APIs as boundaries between applications, services and external systems.',
  },
  {
    icon: LockKeyhole,
    number: '03',
    title: 'Secure by design',
    description:
      'Build authentication and authorization into application architecture rather than treating security as an afterthought.',
  },
  {
    icon: Database,
    number: '04',
    title: 'Performance-conscious data',
    description:
      'Design database access carefully and optimise queries where application performance depends on them.',
  },
  {
    icon: Cloud,
    number: '05',
    title: 'Cloud-ready services',
    description:
      'Use managed cloud capabilities where they provide reliable storage, integration and operational benefits.',
  },
  {
    icon: Server,
    number: '06',
    title: 'Maintainable systems',
    description:
      'Prefer reusable components, clear boundaries and understandable code over unnecessary complexity.',
  },
]

function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
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
            Architecture lab
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Thinking beyond the code.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            A practical view of how I approach enterprise application
            architecture, API integration, security, data and cloud services.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e12] p-6 sm:p-10"
        >
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Enterprise application pattern
                </p>

                <p className="mt-2 font-display text-lg font-semibold text-white">
                  Full-stack + cloud architecture
                </p>
              </div>

              <span className="hidden rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[11px] text-accent sm:block">
                Conceptual model
              </span>
            </div>

            {/* Client */}
            <ArchitectureNode
              label="Client Applications"
              detail="React / Angular"
              icon={<Boxes size={18} />}
            />

            <ArchitectureConnector />

            {/* API */}
            <ArchitectureNode
              label="Application APIs"
              detail="ASP.NET Core / REST"
              icon={<Server size={18} />}
              highlighted
            />

            <ArchitectureConnector />

            {/* Services */}
            <div className="grid gap-3 sm:grid-cols-3">
              <ArchitectureNode
                label="Business Services"
                detail="Domain logic"
                icon={<GitBranch size={18} />}
              />

              <ArchitectureNode
                label="Security"
                detail="JWT / RBAC"
                icon={<LockKeyhole size={18} />}
              />

              <ArchitectureNode
                label="Workflow"
                detail="Rules / automation"
                icon={<Boxes size={18} />}
              />
            </div>

            <ArchitectureConnector />

            {/* Data */}
            <div className="grid gap-3 sm:grid-cols-2">
              <ArchitectureNode
                label="Relational Data"
                detail="SQL Server"
                icon={<Database size={18} />}
              />

              <ArchitectureNode
                label="Cloud Data"
                detail="Azure Cosmos DB"
                icon={<Database size={18} />}
              />
            </div>

            <ArchitectureConnector />

            {/* Cloud */}
            <ArchitectureNode
              label="Cloud & Integration Services"
              detail="Azure Blob Storage · Key Vault · Application Insights"
              icon={<Cloud size={18} />}
            />
          </div>
        </motion.div>

        {/* Principles */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Engineering principles
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon

              return (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-[#101216] p-6 transition hover:bg-[#151820]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-accent">
                      <Icon size={17} />
                    </div>

                    <span className="font-mono text-[10px] text-text-muted">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-base font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {principle.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ArchitectureNodeProps {
  label: string
  detail: string
  icon: React.ReactNode
  highlighted?: boolean
}

function ArchitectureNode({
  label,
  detail,
  icon,
  highlighted = false,
}: ArchitectureNodeProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border p-4 sm:p-5 ${
        highlighted
          ? 'border-accent/30 bg-accent/5'
          : 'border-white/10 bg-white/[0.025]'
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          highlighted
            ? 'bg-accent/10 text-accent'
            : 'bg-white/5 text-text-secondary'
        }`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="mt-1 text-xs text-text-muted">{detail}</p>
      </div>
    </div>
  )
}

function ArchitectureConnector() {
  return (
    <div className="flex h-10 items-center justify-center">
      <div className="flex h-full flex-col items-center">
        <div className="h-5 w-px bg-white/10" />
        <ArrowRight
          size={13}
          className="rotate-90 text-accent/60"
        />
      </div>
    </div>
  )
}

export default Architecture