import {
  Activity,
  Cloud as CloudIcon,
  Database,
  KeyRound,
  Layers3,
  Server,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { motion } from 'motion/react'

const cloudCapabilities = [
  {
    icon: Database,
    title: 'Cloud Storage',
    description:
      'Integrated Azure Blob Storage for enterprise document and file management workflows.',
    technologies: ['Azure Blob Storage'],
  },
  {
    icon: Layers3,
    title: 'Cloud Data',
    description:
      'Worked with cloud-native data services alongside relational SQL Server workloads.',
    technologies: ['Azure Cosmos DB', 'SQL Server'],
  },
  {
    icon: KeyRound,
    title: 'Secrets & Security',
    description:
      'Applied secure application configuration and protected service credentials using managed cloud capabilities.',
    technologies: ['Azure Key Vault', 'JWT', 'RBAC'],
  },
  {
    icon: Activity,
    title: 'Observability',
    description:
      'Used application monitoring capabilities to support troubleshooting and application visibility.',
    technologies: ['Application Insights'],
  },
  {
    icon: Workflow,
    title: 'Integration',
    description:
      'Connected enterprise applications with cloud services, APIs, storage and notification workflows.',
    technologies: ['REST APIs', 'Azure Services', 'SendGrid'],
  },
  {
    icon: Server,
    title: 'Application Delivery',
    description:
      'Worked with CI/CD-based development and deployment workflows for enterprise applications.',
    technologies: ['CI/CD', 'Azure DevOps'],
  },
]

function Cloud() {
  return (
    <section
      id="cloud"
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
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-accent">
              <CloudIcon size={18} />
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Cloud & Integration
            </p>
          </div>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building beyond the application layer.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary">
            My experience extends from application development into cloud
            storage, data, security, observability, integration and delivery
            workflows.
          </p>
        </motion.div>

        {/* Cloud flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e12]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative p-6 sm:p-10">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Cloud application flow
                </p>

                <p className="mt-2 font-display text-lg font-semibold text-white">
                  Application → Services → Cloud
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-text-muted">
                Azure ecosystem
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-5">
              <CloudFlowNode
                label="Frontend"
                detail="React / Angular"
              />

              <CloudArrow />

              <CloudFlowNode
                label="APIs"
                detail="ASP.NET Core"
                active
              />

              <CloudArrow />

              <CloudFlowNode
                label="Cloud Services"
                detail="Azure"
              />
            </div>

            <div className="my-6 h-px bg-white/5" />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MiniCloudNode
                icon={<Database size={16} />}
                label="Storage"
                detail="Blob Storage"
              />

              <MiniCloudNode
                icon={<Database size={16} />}
                label="Data"
                detail="Cosmos DB"
              />

              <MiniCloudNode
                icon={<ShieldCheck size={16} />}
                label="Security"
                detail="Key Vault"
              />

              <MiniCloudNode
                icon={<Activity size={16} />}
                label="Monitoring"
                detail="App Insights"
              />
            </div>
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {cloudCapabilities.map((capability, index) => {
            const Icon = capability.icon

            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group bg-[#101216] p-6 transition hover:bg-[#151820]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent transition group-hover:border-accent/30 group-hover:bg-accent/5">
                    <Icon size={18} />
                  </div>

                  <span className="font-mono text-[10px] text-text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-base font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {capability.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {capability.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

interface CloudFlowNodeProps {
  label: string
  detail: string
  active?: boolean
}

function CloudFlowNode({
  label,
  detail,
  active = false,
}: CloudFlowNodeProps) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        active
          ? 'border-accent/30 bg-accent/5'
          : 'border-white/10 bg-white/[0.025]'
      }`}
    >
      <p className="text-sm font-medium text-white">{label}</p>
      <p className="mt-1 text-xs text-text-muted">{detail}</p>
    </div>
  )
}

function CloudArrow() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <div className="h-px w-full bg-white/10" />
      <span className="-ml-1 text-xs text-accent/60">→</span>
    </div>
  )
}

interface MiniCloudNodeProps {
  icon: React.ReactNode
  label: string
  detail: string
}

function MiniCloudNode({
  icon,
  label,
  detail,
}: MiniCloudNodeProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-accent">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-white">{label}</p>
        <p className="mt-0.5 text-[11px] text-text-muted">{detail}</p>
      </div>
    </div>
  )
}

export default Cloud