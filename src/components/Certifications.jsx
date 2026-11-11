import { useState } from 'react'
import { certifications } from '../data/certifications'
import { initials, withBase } from '../utils'
import { Button } from './Button'
import { AwardIcon, CheckIcon, CopyIcon, ExternalLinkIcon } from './Icons'
import { Section } from './Section'

function Badge({ cert }) {
  const [ok, setOk] = useState(Boolean(cert.badge))
  if (ok) {
    return (
      <img
        src={withBase(cert.badge)}
        alt={`${cert.issuer} logo`}
        width={72}
        height={72}
        loading="lazy"
        onError={() => setOk(false)}
        className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-xl border border-border bg-white object-cover"
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`${cert.issuer} badge placeholder`}
      className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-xl border border-border bg-surface-2 font-mono text-lg font-bold text-accent"
    >
      {initials(cert.issuer)}
    </div>
  )
}

function CredentialId({ id }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(id)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable; the ID is still selectable */
    }
  }
  return (
    <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
      <span className="font-mono uppercase tracking-[0.12em]">ID</span>
      <code className="select-all rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.72rem] text-text">{id}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Credential ID copied' : 'Copy credential ID'}
        className="inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 font-medium text-muted hover:text-accent"
      >
        {copied ? <CheckIcon width={14} height={14} className="text-emerald-500" /> : <CopyIcon width={14} height={14} />}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </p>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials" tone="alt">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <li
            key={c.name}
            data-reveal
            style={{ '--reveal-delay': `${(i % 3) * 70}ms` }}
            className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-card"
          >
            <div className="flex items-start gap-4">
              <Badge cert={c} />
              <div className="min-w-0">
                <h3 className="font-bold leading-snug">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted">
                  <AwardIcon width={14} height={14} className="text-accent" />
                  <time>{c.date}</time>
                </p>
              </div>
            </div>

            {c.credentialId && <CredentialId id={c.credentialId} />}

            {c.verifyUrl && (
              <div className="mt-auto pt-4">
                <Button href={c.verifyUrl} external variant="secondary" size="sm" iconRight={ExternalLinkIcon} aria-label={`Verify ${c.name}`}>
                  Verify
                </Button>
                {c.verifyNote && <p className="mt-2 text-xs text-muted">{c.verifyNote}</p>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
