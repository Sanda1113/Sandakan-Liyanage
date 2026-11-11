import { about } from '../data/site'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Reliability-minded, cloud-native." tone="alt">
      <div data-reveal className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      {/* Highlight cards sit below the text in one equal-height row. */}
      <dl data-reveal style={{ '--reveal-delay': '100ms' }} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((h) => (
          <div key={h.label} className="flex h-full flex-col rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">{h.label}</dt>
            <dd className="mt-2 text-sm font-medium leading-relaxed">{h.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
