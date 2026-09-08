export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-grid relative overflow-hidden border-b border-line px-6 py-20 sm:px-10 sm:py-32"
    >
      <div className="relative mx-auto max-w-5xl">
        <div
          className="print-in flex flex-wrap items-baseline justify-between gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase"
          style={{ animationDelay: "0ms" }}
        >
          <span>Felipe Alves / Portfólio</span>
          <span className="text-stock-in">Fortaleza, CE</span>
        </div>

        <h1
          className="print-in mt-10 max-w-4xl font-mono text-[clamp(2.75rem,8vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-text"
          style={{ animationDelay: "90ms" }}
        >
          Software que conecta dados, pessoas e o mundo real<span className="text-stock-in">.</span>
        </h1>

        <p
          className="print-in mt-8 max-w-2xl text-lg leading-relaxed text-text/85 sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          Oi, eu sou o Felipe. Desenvolvedor fullstack com foco em backend,
          APIs e sistemas conectados — curioso pelo caminho inteiro, do sensor
          à interface.
        </p>

        <div
          className="print-in mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "230ms" }}
        >
          <a
            href="#projetos"
            className="rounded-sm border border-stock-in bg-stock-in/10 px-5 py-2.5 font-mono text-sm text-stock-in transition-colors hover:bg-stock-in/20"
          >
            Ver projetos ↓
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

        <div
          className="print-in mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line/70 pt-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted"
          style={{ animationDelay: "300ms" }}
        >
          <span>Python / TypeScript</span>
          <span>Backend / Cloud / IoT</span>
          <span>Eng. da Computação — UFC</span>
        </div>
      </div>
    </section>
  );
}
