import { useState } from 'react'
import { externalProps, withBase } from '../utils'
import { DiagramIcon, ExternalLinkIcon } from './Icons'
import { Modal } from './Modal'

function Diagram({ src, alt }) {
  // Keyed by `src` from the parent, so a new diagram starts fresh.
  const [state, setState] = useState('loading') // loading | ok | error
  return (
    <div className="relative min-h-40 bg-white">
      {state === 'loading' && <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-surface-2" />}
      {state !== 'error' ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          onLoad={() => setState('ok')}
          onError={() => setState('error')}
          className={`relative block h-auto w-full transition-opacity duration-300 ${state === 'ok' ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <div role="img" aria-label={alt} className="grid min-h-40 place-items-center gap-2 bg-surface-2 p-6 text-center text-sm text-muted">
          <DiagramIcon width={32} height={32} className="text-accent" />
          <span>The diagram could not be loaded. Use the link below to open it directly.</span>
        </div>
      )}
    </div>
  )
}

export function ArchitectureModal({ project, onClose }) {
  const architecture = project?.architecture
  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy="arch-title" eyebrow="Architecture case study" title={project?.title}>
      {architecture && (
        <>
          <figure className="overflow-hidden rounded-xl border border-border">
            <Diagram key={architecture.image} src={withBase(architecture.image)} alt={architecture.alt} />
            <figcaption className="flex items-center justify-between gap-3 border-t border-border bg-surface-2 px-4 py-2 text-xs text-muted">
              <span>Architecture diagram</span>
              <a href={withBase(architecture.image)} {...externalProps} className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                Open full size <ExternalLinkIcon width={14} height={14} />
              </a>
            </figcaption>
          </figure>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {architecture.sections.map((s) => (
              <div key={s.heading} className="rounded-xl border border-border bg-bg p-4">
                <dt className="text-sm font-bold">{s.heading}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</dd>
              </div>
            ))}
          </dl>
        </>
      )}
    </Modal>
  )
}
