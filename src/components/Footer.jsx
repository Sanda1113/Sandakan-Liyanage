import { site } from '../data/site'
import { externalProps } from '../utils'
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const links = [
  { label: 'LinkedIn', href: site.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: site.github, Icon: GitHubIcon, external: true },
  { label: 'Email', href: `mailto:${site.email}`, Icon: MailIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {site.year} {site.name}. Built with React &amp; Tailwind CSS.
        </p>
        <ul className="flex items-center gap-2" aria-label="Footer links">
          {links.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? externalProps : {})}
                className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <Icon width={16} height={16} />
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#top"
              aria-label="Back to top"
              title="Back to top"
              className="ml-1 grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUpIcon width={18} height={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
