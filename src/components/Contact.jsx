import { useState } from 'react'
import { contactIntro, site } from '../data/site'
import { externalProps } from '../utils'
import { Button, DownloadCvButton, ViewCvLink } from './Button'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, SendIcon } from './Icons'
import { Section } from './Section'

const details = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, Icon: MailIcon },
  { label: 'LinkedIn', value: 'sandakan-liyanage', href: site.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', value: 'Sanda1113', href: site.github, Icon: GitHubIcon, external: true },
  { label: 'Location', value: site.location, Icon: MapPinIcon },
]

const inputCls =
  'mt-1.5 w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-text placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40'

export function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const usingFormspree = Boolean(site.formspreeId)

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_gotcha')) return // honeypot

    if (!usingFormspree) {
      // mailto fallback: open the visitor's email client pre-filled.
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      intro={contactIntro}
      tone="alt"
    >
      <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Left column stretches to the form's height; the CV card is pinned to the bottom edge. */}
        <div data-reveal className="flex flex-col gap-6">
          <ul className="space-y-4">
            {details.map(({ label, value, href, Icon, external }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-accent">
                  <Icon width={18} height={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
                  {href ? (
                    <a href={href} {...(external ? externalProps : {})} className="block truncate text-sm font-medium hover:text-accent hover:underline underline-offset-4">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-surface p-5">
            <div className="min-w-0 flex-1">
              <p className="font-bold">Prefer a PDF?</p>
              <p className="text-sm text-muted">Grab my latest CV in one click.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <DownloadCvButton />
              <ViewCvLink />
            </div>
          </div>
        </div>

        <form
          data-reveal
          style={{ '--reveal-delay': '100ms' }}
          onSubmit={onSubmit}
          noValidate={false}
          className="rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6"
          aria-describedby="form-note"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input className={inputCls} type="text" name="name" autoComplete="name" required placeholder="Your name" />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input className={inputCls} type="email" name="email" autoComplete="email" required placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium">
            Message
            <textarea className={`${inputCls} min-h-36 resize-y`} name="message" required placeholder="Tell me about the role or project…" />
          </label>
          {/* Honeypot for bots */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          {usingFormspree && <input type="hidden" name="_subject" value="New message from portfolio" />}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button type="submit" icon={SendIcon} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </Button>
            <p id="form-note" className="text-xs text-muted">
              {usingFormspree ? 'Sent securely via Formspree.' : 'Opens your email app with the message pre-filled.'}
            </p>
          </div>

          <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm">
            {status === 'sent' && <span className="text-emerald-500">Thanks, your message is on its way. I'll reply soon.</span>}
            {status === 'error' && (
              <span className="text-rose-500">
                Something went wrong. Please email me directly at{' '}
                <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
              </span>
            )}
          </p>
        </form>
      </div>
    </Section>
  )
}
