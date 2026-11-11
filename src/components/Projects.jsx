import { useState } from 'react'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { withBase } from '../utils'
import { Button } from './Button'
import { ArchitectureModal } from './ArchitectureModal'
import { GalleryModal } from './GalleryModal'
import { CheckIcon, DiagramIcon, ExternalLinkIcon, GitHubIcon, ImagesIcon } from './Icons'
import { Chip, Section } from './Section'

function ProjectCard({ project, index, onOpenArchitecture, onOpenGallery }) {
  const shots = project.screenshots ?? []
  const cover = shots[0]

  return (
    <article
      data-reveal
      style={{ '--reveal-delay': `${(index % 2) * 90}ms` }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/60"
    >
      {cover && (
        <button
          type="button"
          onClick={() => onOpenGallery(project)}
          aria-label={`Open screenshots of ${project.title}`}
          aria-haspopup="dialog"
          className="group relative block aspect-[16/9] w-full overflow-hidden border-b border-border bg-[#070b10] text-left"
        >
          <img
            src={withBase(cover.src)}
            alt={cover.caption}
            loading="lazy"
            decoding="async"
            className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
              cover.contain ? 'object-contain p-2' : 'object-cover object-top'
            }`}
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-black/65 px-2 py-1 text-xs font-semibold text-white backdrop-blur">
            <ImagesIcon width={14} height={14} />
            {shots.length} screenshots
          </span>
        </button>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <header>
          <h3 className="text-lg font-bold leading-snug sm:text-xl">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.role}</p>
        </header>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{project.description}</p>

        <p className="mt-4 flex gap-2 rounded-lg border border-accent/30 bg-accent-soft p-3 text-sm">
          <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
          <span>
            <span className="font-semibold">Result: </span>
            {project.result}
          </span>
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Button href={project.repoUrl} external variant="secondary" size="sm" icon={GitHubIcon} aria-label={`View code for ${project.title} on GitHub`}>
            View Code
          </Button>

          {shots.length > 0 && (
            <Button variant="primary" size="sm" icon={ImagesIcon} onClick={() => onOpenGallery(project)} aria-haspopup="dialog">
              Screenshots
            </Button>
          )}

          {project.reportUrl && (
            <Button href={project.reportUrl} external variant="primary" size="sm" icon={ExternalLinkIcon} aria-label={`View report: ${project.title}`}>
              View Report
            </Button>
          )}

          {project.architecture && (
            <Button
              variant="ghost"
              size="sm"
              icon={DiagramIcon}
              onClick={() => onOpenArchitecture(project)}
              aria-haspopup="dialog"
              className="!border-border"
            >
              View Architecture
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [archProject, setArchProject] = useState(null)
  const [galleryProject, setGalleryProject] = useState(null)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="Cloud architectures, full-stack platforms and an offline-first field app. Application projects include screenshots; cloud lab environments are torn down after each session, so those link to the written report and architecture."
      tone="alt"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} onOpenArchitecture={setArchProject} onOpenGallery={setGalleryProject} />
        ))}
      </div>

      <div data-reveal className="mt-10 flex justify-center">
        <Button href={site.github} external variant="secondary" icon={GitHubIcon} iconRight={ExternalLinkIcon}>
          See all my repositories
        </Button>
      </div>

      <ArchitectureModal project={archProject} onClose={() => setArchProject(null)} />
      <GalleryModal key={galleryProject?.title ?? 'none'} project={galleryProject} onClose={() => setGalleryProject(null)} />
    </Section>
  )
}
