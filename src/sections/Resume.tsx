import {
  ArrowDownToLine,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  MapPin,
} from 'lucide-react'
import { motion } from 'motion/react'

function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101216]"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
          />

          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:p-14">
            {/* Main content */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Resume
              </p>

              <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A closer look at my engineering experience.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary">
                Download my latest resume for a concise overview of my
                professional experience, technical skills, projects and
                engineering achievements.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-accent-light"
                >
                  <ArrowDownToLine size={17} />
                  Download resume
                </a>

                <a
                  href="https://www.linkedin.com/in/jasper-augustin-40bba7412/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  <ExternalLink size={16} />
                  LinkedIn profile
                </a>
              </div>
            </div>

            {/* Resume summary */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <ResumeDetail
                icon={<BriefcaseBusiness size={17} />}
                label="Experience"
                value="5+ years"
              />

              <ResumeDetail
                icon={<FileText size={17} />}
                label="Primary stack"
                value=".NET · C# · React · Angular"
              />

              <ResumeDetail
                icon={<MapPin size={17} />}
                label="Current location"
                value="Chennai, India"
              />

              <ResumeDetail
                icon={<FileText size={17} />}
                label="Resume"
                value="Updated 2026"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface ResumeDetailProps {
  icon: React.ReactNode
  label: string
  value: string
}

function ResumeDetail({ icon, label, value }: ResumeDetailProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex items-center gap-2 text-accent">
        {icon}

        <span className="text-xs font-medium text-text-muted">
          {label}
        </span>
      </div>

      <p className="mt-3 font-display text-sm font-medium text-white">
        {value}
      </p>
    </div>
  )
}

export default Resume