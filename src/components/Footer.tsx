import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#07080a]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Identity */}
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display text-sm font-bold text-white transition group-hover:border-accent/40 group-hover:bg-accent/5">
                JA
              </span>

              <span className="font-display text-sm font-semibold text-white">
                Jasper Augustin
              </span>
            </a>

            <p className="mt-3 text-sm text-text-muted">
              Senior .NET Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/jasper-augustin-40bba7412/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-text-secondary transition hover:border-accent/30 hover:bg-accent/5 hover:text-white"
            >
              in
            </a>

            <a
              href="https://github.com/Jasper-77"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-text-secondary transition hover:border-accent/30 hover:bg-accent/5 hover:text-white"
            >
              GH
            </a>

            <a
              href="#contact"
              aria-label="Contact"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-secondary transition hover:border-accent/30 hover:bg-accent/5 hover:text-white"
            >
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Jasper Augustin. All rights reserved.
          </p>

          <p>
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer