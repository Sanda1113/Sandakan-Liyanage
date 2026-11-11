import { useEffect, useRef } from 'react'
import { CloseIcon } from './Icons'

// Accessible modal built on the native <dialog> element: focus trapping,
// Escape to close and an inert background come for free. Click on the
// backdrop closes it too.
export function Modal({ open, onClose, labelledBy, eyebrow, title, children, size = 'lg' }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (!open || !dlg) return
    if (!dlg.open) dlg.showModal()
    document.documentElement.classList.add('modal-open')
    return () => document.documentElement.classList.remove('modal-open')
  }, [open])

  if (!open) return null
  const width = size === 'xl' ? 'w-[min(100vw-1.5rem,72rem)]' : 'w-[min(100vw-1.5rem,60rem)]'

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
      aria-labelledby={labelledBy}
      className={`m-auto ${width} max-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-2xl border border-border bg-surface p-0 text-text shadow-card backdrop:bg-transparent`}
    >
      <div className="flex max-h-[calc(100dvh-1.5rem)] flex-col">
        <header className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div className="min-w-0">
            {eyebrow && (
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
            )}
            <h2 id={labelledBy} className="mt-1 text-lg font-bold sm:text-xl">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-muted hover:text-accent"
          >
            <CloseIcon />
          </button>
        </header>
        <div className="overflow-y-auto px-5 py-5 sm:px-6">{children}</div>
      </div>
    </dialog>
  )
}
