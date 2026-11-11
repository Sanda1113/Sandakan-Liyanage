import { skillGroups } from '../data/skills'
import { Chip, Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <section
            key={group.name}
            data-reveal
            style={{ '--reveal-delay': `${(i % 3) * 70}ms` }}
            aria-labelledby={`skill-${i}`}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <h3 id={`skill-${i}`} className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {group.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
