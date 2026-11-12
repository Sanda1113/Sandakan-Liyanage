# Sandakan Liyanage — Portfolio

Single-page personal portfolio built with **React 19 + Vite + Tailwind CSS v4**. Fully static: no backend, deploys anywhere that serves files.

- One fixed dark theme: deep petrol navy with a warm amber accent, tuned for low glare
- Sticky navbar with active-section highlighting and a mobile menu
- Scroll fade-ins (disabled for users who prefer reduced motion)
- Screenshot gallery and architecture case-study modals built on the native `<dialog>` element
- Semantic HTML, keyboard navigable, AA-contrast colour tokens
- SEO title, meta description, Open Graph and Twitter cards
- Responsive down to 360 px with no horizontal scrolling

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

```bash
npm run build     # production build into dist/
npm run preview   # serve the built site locally
```

## Edit the content (no layout changes needed)

All text lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `site.js` | Name, headline, tagline, badge, links, email, CV path, Formspree ID, nav items, About text |
| `experience.js` | Experience timeline |
| `projects.js` | Project cards, screenshots, report links, architecture modal content |
| `skills.js` | Skill groups and chips |
| `certifications.js` | Certification cards and Verify links |
| `education.js` | Education timeline |

### Things to fill in

1. **CV** — `public/Sandakan_Liyanage_CV.pdf` is already in place. Replace it whenever you update your CV; the file name is referenced in `site.js`.
2. **Profile photo** — optional `public/images/profile.jpg` (square, 128 px or larger). When present it appears as a small avatar in the hero console card; the card itself is driven by `heroConsole` in `site.js`.
3. **Certification badges** — drop PNGs into `public/images/badges/` using the names listed in `certifications.js`. Missing badges fall back to an issuer monogram.
4. **Verify links** — all five are set in `certifications.js`. Empty values hide the button; `credentialId` adds a copyable ID for verify pages that need it typed in.
5. **Project screenshots** — live in `public/images/projects/<project>/` and are listed per project in `projects.js` as `screenshots: [{ src, caption }]`. The first one is the card cover (add `contain: true` for diagrams so they are not cropped). The gallery auto-advances every 2 seconds, with a pause button.
6. **Project reports** — PDFs live in `public/reports/` and are linked via `reportUrl`, so "View Report" opens them in a browser tab instead of downloading. Replace the files there when you update a report.
7. **Contact form** — create a free form at <https://formspree.io>, copy its ID and set `formspreeId` in `site.js`. With no ID the form opens the visitor's email app with the message pre-filled (mailto fallback).
8. **Social preview image** — optional `public/images/og-image.png` (1200 × 630 px) for LinkedIn / Twitter link previews.
9. **Canonical URL** — update the `canonical` and `og:url` values in `index.html` once you know your final domain.

## Deploy (free)

### GitHub Pages (current setup)

Repository: `Sanda1113/Sandakan-Liyanage` · Live site: <https://sandakan.is-a.dev/>

The workflow at `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Pages is configured with **Source: GitHub Actions** and the custom domain `sandakan.is-a.dev` (registered through <https://github.com/is-a-dev/register>, DNS CNAME to `sanda1113.github.io`). `public/CNAME` keeps that domain attached across deploys, and `vite.config.js` uses `base: '/'`. The old URL <https://sanda1113.github.io/Sandakan-Liyanage/> redirects here.

All asset paths (CV, images, reports) go through a `withBase()` helper, so if the site ever moves back under a sub-path, only `base` needs to change (set `VITE_BASE` for one build, or edit `vite.config.js`).

### Changing the domain

Add the new domain to `public/CNAME`, point its DNS at GitHub Pages (CNAME record to `sanda1113.github.io`), update the canonical and Open Graph URLs in `index.html`, then enable **Enforce HTTPS** in the repository's Pages settings.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

Import the repository; Vercel detects Vite automatically (build `npm run build`, output `dist`).

## Project structure

```
public/               static files served as-is (CV, favicon, images)
src/
  data/               ← all editable content
  components/         Navbar, Hero, About, Experience, Projects, ArchitectureModal,
                      Skills, Certifications, Education, Contact, Footer, Button, Section, Icons
  hooks/              useTheme (dark/light), useReveal (scroll fade-in + active section)
  utils.js            withBase(), external-link props, initials()
  index.css           Tailwind import, colour tokens, reveal/tooltip/dialog styles
```
