import { projects, type ProjectStatus } from "@/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  LIVE: "text-stock-in border-stock-in/40 bg-stock-in/10",
  WIP: "text-stock-low border-stock-low/40 bg-stock-low/10",
  NEXT: "text-muted border-line bg-transparent",
};

const statusLabel: Record<ProjectStatus, string> = {
  LIVE: "● live",
  WIP: "● em obra",
  NEXT: "○ em aberto",
};

export default function ManifestTable() {
  return (
    <section id="manifesto" className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span>Itens do manifesto</span>
          <span>{projects.length} lançamento(s)</span>
        </div>

        <div className="mt-8 divide-y divide-line border-t border-line">
          {projects.map((project) => {
            const isNext = project.status === "NEXT";
            return (
              <article
                key={project.ref}
                className={`grid grid-cols-1 gap-x-6 gap-y-3 py-6 sm:grid-cols-[7rem_1fr_9rem] ${
                  isNext ? "opacity-60" : ""
                }`}
              >
                <div className="font-mono text-xs text-muted sm:pt-1">
                  {project.ref}
                </div>

                <div>
                  <h3 className="font-mono text-lg font-semibold text-text">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-text/80">
                    {project.description}
                  </p>

                  {project.stack.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-sm border border-line px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}

                  {!isNext && (project.demoUrl || project.repoUrl) && (
                    <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-stock-in underline decoration-stock-in/40 underline-offset-4 hover:decoration-stock-in"
                        >
                          ver demo →
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-text underline decoration-line underline-offset-4 hover:decoration-muted"
                        >
                          código →
                        </a>
                      )}
                      {project.apiDocsUrl && (
                        <a
                          href={project.apiDocsUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-text underline decoration-line underline-offset-4 hover:decoration-muted"
                        >
                          api docs →
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="sm:pt-1 sm:text-right">
                  <span
                    className={`inline-block rounded-sm border px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wide ${statusStyles[project.status]}`}
                  >
                    {statusLabel[project.status]}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
