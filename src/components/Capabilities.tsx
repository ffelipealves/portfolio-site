import { capabilities } from "@/data/profile";

export default function Capabilities() {
  return (
    <section className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="eyebrow">O que eu construo</p>
          <h2 className="section-title mt-4">
            Gosto de acompanhar o caminho inteiro de uma ideia.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Do dado que chega de um dispositivo até a interface que alguém usa
            para tomar uma decisão.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.index} className="bg-panel p-6 sm:p-8">
              <span className="font-mono text-xs text-stock-in">
                /{capability.index}
              </span>
              <h3 className="mt-8 font-mono text-lg font-semibold text-text">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text/75">
                {capability.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
                {capability.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-sm border border-line px-2 py-1 font-mono text-[0.65rem] text-muted"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
