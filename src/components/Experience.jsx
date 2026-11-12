import { experience } from '../data/experience'
import { Chip, Section } from './Section'
import { BriefcaseIcon } from './Icons'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="timeline relative space-y-8 pl-8">
        {experience.map((job, i) => (
          <li key={job.role + job.company} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-8 top-1.5 grid h-[1.125rem] w-[1.125rem] place-items-center rounded-full border-2 ${
                job.current ? 'border-accent-fill bg-accent-fill' : 'border-border bg-bg'
              }`}
            >
              {job.current && <span className="h-1.5 w-1.5 rounded-full bg-on-accent" />}
            </span>

            <article className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">{job.role}</h3>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted">
                    <BriefcaseIcon width={14} height={14} className="text-accent" />
                    <span className="font-medium text-text">{job.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{job.location}</span>
                    {job.employment && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{job.employment}</span>
                      </>
                    )}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 sm:items-end">
                  <time className="rounded-md bg-accent-soft px-2 py-1 font-mono text-xs font-semibold text-accent">
                    {job.period}
                  </time>
                  {job.note && <span className="text-xs font-medium text-muted">{job.note}</span>}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fill" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {job.responsibilities?.length > 0 && (
                <div className="mt-4 rounded-xl border border-border bg-bg p-3.5">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">Core responsibilities</p>
                  <ul className="mt-2 grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fill" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.tags?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key technologies">
                  {job.tags.map((t) => (
                    <li key={t}>
                      <Chip>{t}</Chip>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
