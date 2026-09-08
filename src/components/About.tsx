import { profileFacts } from "@/data/profile";

export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-6 border-b border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.35fr_0.65fr] md:gap-20">
        <div>
          <p className="eyebrow">Um pouco sobre mim</p>
          <h2 className="section-title mt-4">
            A curiosidade veio antes do código.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-text/80 sm:text-lg">
            <p>
              Sempre gostei de mexer em computadores e entender o que existia
              por trás da tela. Essa curiosidade me levou primeiro às redes e,
              depois, à Engenharia da Computação na UFC.
            </p>
            <p>
              Hoje, gosto especialmente de projetos em que software, dados e
              hardware precisam conversar. E gosto ainda mais quando posso
              construir isso ao lado de pessoas de áreas diferentes — é onde
              aparecem as melhores perguntas e os maiores aprendizados.
            </p>
          </div>
        </div>

        <dl className="divide-y divide-line border-y border-line md:self-end">
          {profileFacts.map(([label, value]) => (
            <div
              key={label}
              className="py-4"
            >
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {label}
              </dt>
              <dd className="mt-1.5 text-sm text-text/90">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
