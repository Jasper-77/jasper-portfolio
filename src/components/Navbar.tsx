import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Cloud', href: '#cloud' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Jasper Augustin home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-display text-sm font-bold text-white backdrop-blur-xl transition group-hover:border-accent/50 group-hover:bg-accent/10">
            JA
          </span>

          <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">
            Jasper Augustin
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-black/30 px-6 py-3 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent/70 hover:bg-accent/20 md:block"
        >
          Let's connect
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 overflow-hidden rounded-2xl border border-white/10 bg-[#101216]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm text-text-secondary transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white"
            >
              Let's connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar