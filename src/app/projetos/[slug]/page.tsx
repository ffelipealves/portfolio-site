import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug as string }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.name} — Felipe Alves`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (
    !project ||
    !project.cover ||
    !project.introduction ||
    !project.context ||
    !project.architecture ||
    !project.gallery
  ) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero-grid relative overflow-hidden border-b border-line px-6 py-16 sm:px-10 sm:py-24">
          <div className="relative mx-auto max-w-5xl">
            <Link
              href="/#projetos"
              className="font-mono text-xs text-muted transition-colors hover:text-text"
            >
              ← voltar aos projetos
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]">
                  <span className="text-muted">{project.ref}</span>
                  <span className="text-stock-in">● publicado</span>
                </div>
                <h1 className="mt-6 font-mono text-5xl font-semibold tracking-[-0.06em] text-text sm:text-7xl">
                  {project.name}<span className="text-stock-in">.</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-text/80">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-sm border border-stock-in bg-stock-in px-5 py-3 font-mono text-sm text-ink transition-colors hover:bg-stock-in/85"
                    >
                      abrir projeto ↗
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-sm border border-line px-5 py-3 font-mono text-sm text-text transition-colors hover:border-muted"
                    >
                      ver código ↗
                    </a>
                  )}
                  {project.apiDocsUrl && (
                    <a
                      href={project.apiDocsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-sm border border-line px-5 py-3 font-mono text-sm text-text transition-colors hover:border-muted"
                    >
                      explorar API ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-md border border-line bg-panel shadow-2xl shadow-black/20">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  width={project.cover.width}
                  height={project.cover.height}
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">A ideia</p>
              <h2 className="section-title mt-4">Por que este projeto existe.</h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-text/80 sm:text-lg">
              <p>{project.introduction}</p>
              <p>{project.context}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-panel/35 px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Em funcionamento</p>
                <h2 className="section-title mt-4">Veja o projeto por dentro.</h2>
              </div>
              <p className="max-w-xs font-mono text-xs leading-relaxed text-muted">
                Arraste para o lado ou use Shift + scroll para navegar pela galeria.
              </p>
            </div>

            <div
              className="media-strip mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5"
              tabIndex={0}
              aria-label={`Galeria do projeto ${project.name}`}
            >
              {project.gallery.map((media) => (
                <figure
                  key={media.src}
                  className="w-[88%] shrink-0 snap-start overflow-hidden rounded-md border border-line bg-panel sm:w-[78%]"
                >
                  <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#ece8dd]">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      unoptimized={media.animated}
                      sizes="(min-width: 640px) 78vw, 88vw"
                      className="max-h-full w-full object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
                    {media.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="eyebrow">Decisões de projeto</p>
                <h2 className="section-title mt-4">O que sustenta a experiência.</h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-text/80 sm:text-lg">
                  {project.architecture}
                </p>
                <ul className="mt-8 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
                  {project.highlights?.map((highlight) => (
                    <li key={highlight} className="bg-panel p-5 text-sm leading-relaxed text-text/80">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
              {project.note && (
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {project.note}
                </p>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-sm border border-stock-in bg-stock-in/10 px-5 py-3 font-mono text-sm text-stock-in transition-colors hover:bg-stock-in/20"
                >
                  abrir demonstração ↗
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
