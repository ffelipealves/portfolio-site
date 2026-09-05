export default function Hero() {
  return (
    <section className="border-b border-line px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div
          className="print-in flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase"
          style={{ animationDelay: "0ms" }}
        >
          <span>Manifesto Nº 2026-01</span>
          <span className="text-stock-in">status: em construção</span>
        </div>

        <h1
          className="print-in mt-6 font-mono text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl"
          style={{ animationDelay: "90ms" }}
        >
          Felipe Alves
        </h1>

        <p
          className="print-in mt-3 font-mono text-sm text-muted sm:text-base"
          style={{ animationDelay: "160ms" }}
        >
          Engenharia da Computação — UFC, Ceará
        </p>

        <p
          className="print-in mt-8 max-w-2xl text-lg leading-relaxed text-text/90 sm:text-xl"
          style={{ animationDelay: "230ms" }}
        >
          Construo sistemas que administram dados reais: estoque, sessões,
          transações. Este site é o manifesto do que já foi despachado — e do
          que ainda está no depósito.
        </p>

        <div
          className="print-in mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#manifesto"
            className="rounded-sm border border-stock-in bg-stock-in/10 px-5 py-2.5 font-mono text-sm text-stock-in transition-colors hover:bg-stock-in/20"
          >
            Ver o manifesto ↓
          </a>
          <a
            href="https://github.com/ffelipealves"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-sm border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-muted"
          >
            GitHub
          </a>
          <a
            href="mailto:felipe.alves0850@gmail.com"
            className="rounded-sm border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-muted"
          >
            E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
