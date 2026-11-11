import { site } from '../data/site'
import { withBase, externalProps } from '../utils'
import { DownloadIcon, EyeIcon } from './Icons'

const variants = {
  primary:
    'bg-accent-fill text-on-accent hover:brightness-110 shadow-[0_8px_24px_-10px_var(--accent-fill)] border border-transparent',
  secondary:
    'bg-transparent text-text border border-border hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-muted hover:text-accent border border-transparent',
}

const sizes = {
  sm: 'h-9 px-3 text-sm gap-1.5',
  md: 'h-11 px-4 text-sm gap-2',
  lg: 'h-12 px-5 text-base gap-2',
}

const baseCls =
  'inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap transition-[color,background-color,border-color,filter,transform] duration-200 active:scale-[0.98]'

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  icon: Icon,
  iconRight: IconRight,
  className = '',
  children,
  ...rest
}) {
  const cls = `${baseCls} ${sizes[size]} ${variants[variant]} ${className}`
  const content = (
    <>
      {Icon && <Icon width={18} height={18} />}
      <span>{children}</span>
      {IconRight && <IconRight width={16} height={16} />}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? externalProps : {})} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  )
}

export function DownloadCvButton({ size = 'md', variant = 'primary', className = '' }) {
  return (
    <Button
      href={withBase(site.cvFile)}
      download={site.cvDownloadName}
      icon={DownloadIcon}
      size={size}
      variant={variant}
      className={className}
    >
      Download CV
    </Button>
  )
}

export function ViewCvLink({ className = '' }) {
  return (
    <a
      href={withBase(site.cvFile)}
      {...externalProps}
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent underline-offset-4 hover:underline ${className}`}
    >
      <EyeIcon width={16} height={16} />
      View CV
      <span className="sr-only"> (opens PDF in a new tab)</span>
    </a>
  )
}
