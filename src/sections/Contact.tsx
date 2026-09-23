import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  BriefcaseBusiness,
} from 'lucide-react'
import { motion } from 'motion/react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jaspershobana@gmail.com',
    href: 'mailto:jaspershobana@gmail.com',
  },
  {
    icon: BriefcaseBusiness,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jasper-augustin-40bba7412',
    href: 'https://www.linkedin.com/in/jasper-augustin-40bba7412/',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 88704 09051',
    href: 'tel:+918870409051',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: '#',
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Get in touch
            </p>

            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Have an interesting problem to solve?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary">
              I'm open to conversations about software engineering,
              enterprise applications, full-stack development and new
              opportunities.
            </p>

            <a
              href="mailto:jaspershobana@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition hover:bg-accent-light"
            >
              Start a conversation

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-3"
          >
            {contactItems.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    item.href.startsWith('http')
                      ? 'noreferrer'
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101216] p-5 transition hover:border-accent/20 hover:bg-[#13161c]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-text-muted">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="ml-auto shrink-0 text-text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact