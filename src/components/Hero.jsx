import { useState } from 'react'
import { heroConsole, site } from '../data/site'
import { withBase, externalProps } from '../utils'
import { Button, DownloadCvButton, ViewCvLink } from './Button'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons'

const socials = [
  { label: 'GitHub', href: site.github, Icon: GitHubIcon, external: true },
  { label: 'LinkedIn', href: site.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'Email', href: `mailto:${site.email}`, Icon: MailIcon, external: false },
]

// "Ops console" card: a status read-out styled like a terminal, so the hero
// says something about the work instead of showing an empty photo frame.
function ConsoleCard() {
  const [avatarOk, setAvatarOk] = useState(true)
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="ml-1 truncate font-mono text-xs text-muted">{heroConsole.title}</span>
        {avatarOk && (
          <img
            src={withBase(site.profileImage)}
            alt={`Portrait of ${site.name}`}
            width={28}
            height={28}
            onError={() => setAvatarOk(false)}
            className="ml-auto h-7 w-7 rounded-full border border-border object-cover"
          />
        )}
      </div>

      <dl className="flex flex-1 flex-col justify-center gap-2.5 px-4 py-4 font-mono text-[0.76rem] leading-snug sm:px-5 sm:text-[0.8rem]">
        {heroConsole.rows.map((r) => (
          <div key={r.key} className="grid grid-cols-[6rem_1fr] gap-3 sm:grid-cols-[6.5rem_1fr]">
            <dt className="truncate text-accent">
              <span aria-hidden="true" className="text-muted">$ </span>
              {r.key}
            </dt>
            <dd className="text-text">{r.value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-border px-4 py-3 font-mono text-xs leading-relaxed sm:px-5 sm:text-[0.8rem]">
        <p className="text-muted">
          <span aria-hidden="true">$ </span>
          {heroConsole.footer.command}
        </p>
        <p className="mt-1 flex items-start gap-2 text-text">
          <span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>
            {heroConsole.footer.output}
            <span aria-hidden="true" className="ml-1 animate-pulse text-accent">▍</span>
          </span>
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden bg-bg pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-fill/15 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div data-reveal className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <MapPinIcon width={14} height={14} className="text-accent" />
            {site.badge}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{site.name}</h1>
          <p className="mt-4 text-base font-semibold leading-snug text-accent sm:text-lg">{site.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{site.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DownloadCvButton size="lg" />
            <Button href="#projects" variant="secondary" size="lg" iconRight={ArrowRightIcon}>
              View Projects
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Contact Me
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ul className="flex items-center gap-2" aria-label="Social links">
              {socials.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? externalProps : {})}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              ))}
            </ul>
            <ViewCvLink />
          </div>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' }} className="mx-auto flex w-full max-w-md lg:max-w-none">
          <div className="relative flex w-full">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-fill/25 via-transparent to-accent-fill/10 blur-xl"
            />
            <div className="relative flex w-full">
              <ConsoleCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
