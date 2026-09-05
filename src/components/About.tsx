const spec: Array<[string, string]> = [
  ["local", "Ceará, Brasil"],
  ["formação", "Engenharia da Computação — UFC"],
  ["foco", "Backend, sistemas de dados, APIs"],
  ["stack", "Python, TypeScript, FastAPI, Next.js, PostgreSQL, Docker"],
];

export default function About() {
  return (
    <section className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Ficha técnica
        </div>

        <div className="mt-8 divide-y divide-line border-t border-line">
          {spec.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                {label}
              </dt>
              <dd className="text-sm text-text/90">{value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
