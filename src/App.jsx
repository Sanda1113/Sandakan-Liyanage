import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useReveal()

  // Deep links like /#projects: the section exists only after React renders,
  // so scroll to it once on mount.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    // Stop the browser restoring the previous scroll position over our own scroll.
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    go()
    // Re-run once web fonts and images have finished loading, since either can shift layout above the target.
    document.fonts?.ready?.then(go)
    if (document.readyState !== 'complete') window.addEventListener('load', go, { once: true })
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent-fill focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
