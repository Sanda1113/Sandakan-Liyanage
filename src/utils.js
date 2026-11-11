// Prefix a root-relative path ("/file.pdf") with Vite's base URL so the site
// also works when deployed under a sub-path (e.g. GitHub Pages project sites).
export function withBase(path) {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`
}

export const externalProps = { target: '_blank', rel: 'noopener noreferrer' }

export function initials(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}
