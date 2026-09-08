import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-6 border-b border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Experiência em campo</p>
          <h2 className="section-title mt-4">
            Software fica mais interessante quando encontra o mundo real.
          </h2>
        </div>

        <div className="mt-12 border-t border-line">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid gap-5 border-b border-line py-9 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <div>
                <span className="font-mono text-[0.65rem] text-stock-in">
                  0{index + 1}
                </span>
                <p className="mt-2 font-mono text-xs text-muted">
                  {item.period}
                </p>
              </div>

              <div>
                <p className="font-mono text-sm text-stock-in">{item.company}</p>
                <h3 className="mt-2 text-xl font-semibold text-text sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-text/80">
                  {item.summary}
                </p>

                <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-muted">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span aria-hidden="true" className="text-stock-in">
                        ↳
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-line px-2 py-1 font-mono text-[0.65rem] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
