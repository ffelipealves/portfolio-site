"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { projects, type Project, type ProjectMedia, type ProjectStatus } from "@/data/projects";

const statusLabel: Record<ProjectStatus, string> = {
  LIVE: "● publicado",
  WIP: "● em desenvolvimento",
  NEXT: "○ em breve",
};

function ProjectGallery({ media }: { media: ProjectMedia[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = media[activeIndex];
  const changeSlide = (direction: -1 | 1) =>
    setActiveIndex((current) => (current + direction + media.length) % media.length);

  return (
    <div className="flex min-h-0 flex-col bg-ink/60">
      <div className="relative flex min-h-[18rem] flex-1 items-center justify-center overflow-hidden sm:min-h-[25rem] md:min-h-[35rem]">
        <Image
          key={activeMedia.src}
          src={activeMedia.src}
          alt={activeMedia.alt}
          width={activeMedia.width}
          height={activeMedia.height}
          unoptimized={activeMedia.animated}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="max-h-[68vh] w-full object-contain"
          priority
        />

        {media.length > 1 && (
          <div className="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
            <button type="button" onClick={() => changeSlide(-1)} className="pointer-events-auto grid size-11 place-items-center rounded-full border border-white/20 bg-ink/70 font-mono text-xl text-text shadow-lg backdrop-blur-md transition hover:border-stock-in hover:bg-stock-in hover:text-ink" aria-label="Imagem anterior">
              ←
            </button>
            <button type="button" onClick={() => changeSlide(1)} className="pointer-events-auto grid size-11 place-items-center rounded-full border border-white/20 bg-ink/70 font-mono text-xl text-text shadow-lg backdrop-blur-md transition hover:border-stock-in hover:bg-stock-in hover:text-ink" aria-label="Próxima imagem">
              →
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-white/10 bg-panel/70 px-5 py-4 backdrop-blur-md">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm leading-relaxed text-text/75">{activeMedia.caption}</p>
          <span className="shrink-0 font-mono text-[0.65rem] text-muted">
            {String(activeIndex + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
          </span>
        </div>
        {media.length > 1 && (
          <div className="mt-4 flex gap-2" aria-label="Selecionar imagem do projeto">
            {media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1 flex-1 rounded-full transition-colors ${index === activeIndex ? "bg-stock-in" : "bg-white/15 hover:bg-white/30"}`}
                aria-label={`Ver imagem ${index + 1}: ${item.caption}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const media = project.cover ? [project.cover, ...(project.gallery ?? [])] : project.gallery ?? [];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-md sm:p-6"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="project-modal-enter relative grid max-h-[calc(100vh-1.5rem)] w-full max-w-7xl overflow-y-auto rounded-2xl border border-white/15 bg-panel/80 shadow-2xl shadow-black/50 backdrop-blur-2xl md:max-h-[calc(100vh-3rem)] md:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.9fr)] md:overflow-hidden"
      >
        <button ref={closeButtonRef} type="button" onClick={onClose} className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/15 bg-ink/75 font-mono text-lg text-text shadow-lg backdrop-blur-md transition hover:border-stock-in hover:text-stock-in" aria-label="Fechar detalhes do projeto">
          ×
        </button>

        {media.length > 0 && <ProjectGallery media={media} />}

        <div className="overflow-y-auto px-6 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
            <span className="text-muted">{project.ref}</span>
            <span className="text-stock-in">{statusLabel[project.status]}</span>
          </div>

          <h3 id="project-modal-title" className="mt-5 font-mono text-3xl font-semibold tracking-tight text-text sm:text-4xl">{project.name}</h3>
          <p className="mt-5 text-base leading-relaxed text-text/80">{project.introduction ?? project.description}</p>

          {project.context && (
            <div className="mt-7 border-l-2 border-stock-in/60 pl-4">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-stock-in">A ideia</p>
              <p className="mt-2 text-sm leading-relaxed text-text/70">{project.context}</p>
            </div>
          )}

          {project.highlights && (
            <ul className="mt-7 space-y-3 text-sm leading-relaxed text-text/75">
              {project.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex gap-3"><span className="mt-1 text-stock-in">↳</span><span>{highlight}</span></li>
              ))}
            </ul>
          )}

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[0.65rem] text-muted">{tech}</li>
            ))}
          </ul>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer noopener" className="flex min-h-12 items-center justify-center rounded-md bg-stock-in px-5 font-mono text-xs font-semibold uppercase tracking-wide text-ink transition hover:bg-text">
                Acessar projeto ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer noopener" className="flex min-h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 font-mono text-xs font-semibold uppercase tracking-wide text-text transition hover:border-stock-in hover:text-stock-in">
                Ver repositório ↗
              </a>
            )}
          </div>

          {project.note && <p className="mt-5 text-xs leading-relaxed text-muted">{project.note}</p>}
        </div>
      </section>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="scroll-mt-6 border-b border-line px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Projetos</p>
            <h2 className="section-title mt-4">Coisas que já saíram do papel.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">Uma seleção do que está pronto para testar — e um pouco do que ainda está sendo construído.</p>
          </div>
          <span className="font-mono text-xs text-muted">{projects.length} projeto(s)</span>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const canOpen = Boolean(project.cover);
            return (
              <article key={project.ref} className={`group overflow-hidden rounded-md border border-line bg-panel ${canOpen ? "transition-colors hover:border-muted" : "opacity-70"}`}>
                {project.cover ? (
                  <button type="button" onClick={() => setSelectedProject(project)} className="block w-full cursor-pointer overflow-hidden border-b border-line text-left" aria-label={`Conhecer o projeto ${project.name}`}>
                    <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]" />
                  </button>
                ) : (
                  <div className="project-placeholder flex aspect-[16/10] items-center justify-center border-b border-line"><span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">em construção</span></div>
                )}

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.65rem] uppercase tracking-wide">
                    <span className="text-muted">{project.ref}</span>
                    <span className={project.status === "LIVE" ? "text-stock-in" : "text-stock-low"}>{statusLabel[project.status]}</span>
                  </div>
                  <h3 className="mt-6 font-mono text-2xl font-semibold text-text">{project.name}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-relaxed text-text/75">{project.description}</p>

                  {project.stack.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
                      {project.stack.slice(0, 4).map((tech) => <li key={tech} className="rounded-sm border border-line px-2 py-1 font-mono text-[0.65rem] text-muted">{tech}</li>)}
                    </ul>
                  )}

                  {canOpen && (
                    <button type="button" onClick={() => setSelectedProject(project)} className="mt-7 flex w-full items-center justify-between rounded-md bg-stock-in px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-ink transition hover:bg-text">
                      <span>Explorar projeto</span><span aria-hidden="true">→</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
