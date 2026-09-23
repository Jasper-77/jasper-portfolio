import { Check, Code2 } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { skillCategories } from '../data/skills'

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const activeSkillCategory =
    skillCategories.find((category) => category.id === activeCategory) ??
    skillCategories[0]

  return (
    <section
      id="skills"
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
            Technical expertise
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The tools behind the work.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-secondary">
            A broad full-stack toolkit built around .NET and enterprise
            application development, supported by modern frontend, cloud,
            database and security technologies.
          </p>
        </motion.div>

        {/* Skills explorer */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#101216] lg:grid-cols-[280px_1fr]">
          {/* Categories */}
          <div className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
            {skillCategories.map((category) => {
              const isActive = category.id === activeCategory

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? 'bg-accent/10 text-white'
                      : 'text-text-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Code2
                    size={16}
                    className={isActive ? 'text-accent' : 'text-text-muted'}
                  />

                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>

          {/* Skills */}
          <motion.div
            key={activeSkillCategory.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-7 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {activeSkillCategory.label}
            </p>

            <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold text-white">
              {activeSkillCategory.description}
            </h3>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {activeSkillCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.035 }}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm text-text-secondary">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills