import { useCallback, useEffect, useState } from 'react'
import { withBase } from '../utils'
import { ArrowRightIcon, PauseIcon, PlayIcon } from './Icons'
import { Modal } from './Modal'

const AUTOPLAY_MS = 2000

export function GalleryModal({ project, onClose }) {
  const shots = project?.screenshots ?? []
  const count = shots.length
  const [index, setIndex] = useState(0)
  // Autoplay is on by default; the Pause button in the caption bar stops it.
  const [playing, setPlaying] = useState(true)
  const current = shots[index]

  const go = useCallback((delta) => setIndex((i) => (count ? (i + delta + count) % count : 0)), [count])

  // Advance every 2 s while open and playing. `index` is a dependency so any
  // manual navigation restarts the countdown instead of cutting it short.
  useEffect(() => {
    if (!project || !playing || count < 2) return
    const id = window.setTimeout(() => go(1), AUTOPLAY_MS)
    return () => window.clearTimeout(id)
  }, [project, playing, count, go, index])

  // Arrow keys move between images while the gallery is open.
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, go])

  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy="gallery-title" eyebrow="Screenshots" title={project?.title} size="xl">
      {current && (
        <>
          <figure className="overflow-hidden rounded-xl border border-border bg-[#070b10]">
            <div className="relative grid min-h-[40vh] place-items-center">
              <img
                key={current.src}
                src={withBase(current.src)}
                alt={current.caption}
                loading="eager"
                decoding="async"
                className="max-h-[62vh] w-auto max-w-full object-contain"
              />
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur hover:bg-black/75"
                  >
                    <ArrowRightIcon className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur hover:bg-black/75"
                  >
                    <ArrowRightIcon />
                  </button>
                </>
              )}
              {count > 1 && playing && (
                <span
                  key={index}
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-0.5 bg-accent-fill"
                  style={{ animation: `gallery-progress ${AUTOPLAY_MS}ms linear forwards` }}
                />
              )}
            </div>
            <figcaption className="flex items-start justify-between gap-4 border-t border-border bg-surface-2 px-4 py-3 text-sm">
              <span className="text-text">{current.caption}</span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="font-mono text-xs text-muted" aria-live="polite">
                  {index + 1} / {count}
                </span>
                {count > 1 && (
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => !p)}
                    aria-pressed={playing}
                    aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                    title={playing ? 'Pause slideshow' : 'Play slideshow'}
                    className="grid h-8 w-8 place-items-center rounded-md border border-border text-muted hover:text-accent"
                  >
                    {playing ? <PauseIcon width={16} height={16} /> : <PlayIcon width={16} height={16} />}
                  </button>
                )}
              </span>
            </figcaption>
          </figure>

          {count > 1 && (
            <ul className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="All screenshots">
              {shots.map((s, i) => (
                <li key={s.src} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                    className={`block h-14 w-24 overflow-hidden rounded-md border-2 bg-[#070b10] transition-colors ${
                      i === index ? 'border-accent' : 'border-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={withBase(s.src)} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </Modal>
  )
}
