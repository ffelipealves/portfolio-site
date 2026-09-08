export default function BeyondCode() {
  return (
    <section className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <p className="eyebrow">Fora do código</p>
          <h2 className="section-title mt-4">Nem tudo precisa virar deploy.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-md border border-line bg-panel p-6">
            <span className="font-mono text-xs text-stock-in">canal 01</span>
            <h3 className="mt-8 font-mono text-lg font-semibold">Guitarra</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Um jeito diferente de exercitar atenção, ritmo e criatividade —
              sem uma tela no meio.
            </p>
          </article>

          <article className="rounded-md border border-line bg-panel p-6">
            <span className="font-mono text-xs text-stock-in">canal 02</span>
            <h3 className="mt-8 font-mono text-lg font-semibold">Videogames</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Gosto de explorar sistemas, histórias e mundos feitos para serem
              descobertos aos poucos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
