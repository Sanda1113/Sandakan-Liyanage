import { useCallback, useEffect, useMemo, useState } from 'react'
import { navLinks, site } from '../data/site'
import { useActiveSection } from '../hooks/useReveal'
import { DownloadCvButton } from './Button'
import { CloseIcon, MenuIcon } from './Icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  const ids = useMemo(() => navLinks.map((l) => l.href.slice(1)), [])
  const onActive = useCallback((id) => setActive(id), [])
  useActiveSection(ids, onActive)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-bg/85 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight" aria-label={`${site.name} – home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-fill font-mono text-sm text-on-accent">
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <DownloadCvButton size="sm" />
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-bg/95 backdrop-blur-md lg:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
                  active === l.href.slice(1) ? 'text-accent' : 'text-text'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-3 pb-2 sm:hidden">
            <DownloadCvButton className="w-full" />
          </li>
        </ul>
      </div>
    </header>
  )
}
