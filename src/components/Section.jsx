// Shared section wrapper: consistent spacing, eyebrow + heading, fade-in.
export function Section({ id, eyebrow, title, intro, children, className = '', tone = 'default' }) {
  const bg = tone === 'alt' ? 'bg-elevated' : 'bg-bg'
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${bg} py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header data-reveal className="mb-10 max-w-2xl sm:mb-12">
          {eyebrow && (
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text ${className}`}
    >
      {children}
    </span>
  )
}
