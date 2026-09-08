const issued = new Date().toLocaleDateString("pt-BR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-6 px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Vamos conversar?</p>

        <div className="mt-4 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <h2 className="section-title max-w-2xl">
            Se a conversa envolve software, dados ou uma boa ideia, já temos por onde começar.
          </h2>

          <a
            href="mailto:felipe.alves0850@gmail.com"
            className="shrink-0 rounded-sm border border-stock-in bg-stock-in px-5 py-3 font-mono text-sm text-ink transition-colors hover:bg-stock-in/85"
          >
            mandar um e-mail ↗
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6 font-mono text-[0.7rem] text-muted">
          <span>Feito em Fortaleza, entre código e alguns riffs.</span>
          <div className="flex gap-5">
            <a
              href="https://github.com/ffelipealves"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-text"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:felipe.alves0850@gmail.com"
              className="transition-colors hover:text-text"
            >
              E-mail ↗
            </a>
          </div>
          <span>atualizado em {issued}</span>
        </div>
      </div>
    </footer>
  );
}
