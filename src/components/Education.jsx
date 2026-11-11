import { education } from '../data/education'
import { GraduationIcon } from './Icons'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <ol className="timeline relative space-y-6 pl-8">
        {education.map((e, i) => (
          <li key={e.degree} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-8 top-1.5 grid h-[1.125rem] w-[1.125rem] place-items-center rounded-full border-2 ${
                e.current ? 'border-accent-fill bg-accent-fill' : 'border-border bg-bg'
              }`}
            >
              {e.current && <span className="h-1.5 w-1.5 rounded-full bg-on-accent" />}
            </span>
            <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-lg font-bold">{e.degree}</h3>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                    <GraduationIcon width={14} height={14} className="text-accent" />
                    <span className="font-medium text-text">{e.institution}</span>
                    {e.detail && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{e.detail}</span>
                      </>
                    )}
                  </p>
                </div>
                <time className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs font-semibold text-accent">{e.period}</time>
              </div>
              {e.status && <p className="mt-3 text-sm font-medium">{e.status}</p>}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
