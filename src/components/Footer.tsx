const issued = new Date().toLocaleDateString("pt-BR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export default function Footer() {
  return (
    <footer className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Assinatura
        </div>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-text/90">
          Aberto a estágio, projetos e conversas sobre sistemas de dados.
          Chame no e-mail ou dê uma olhada no código.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="mailto:felipe.alves0850@gmail.com"
            className="text-stock-in underline decoration-stock-in/40 underline-offset-4 hover:decoration-stock-in"
          >
            felipe.alves0850@gmail.com
          </a>
          <a
            href="https://github.com/ffelipealves"
            target="_blank"
            rel="noreferrer noopener"
            className="text-text underline decoration-line underline-offset-4 hover:decoration-muted"
          >
            github.com/ffelipealves
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-2 border-t border-line pt-6 font-mono text-[0.7rem] text-muted">
          <span>documento gerado em {issued}</span>
          <span>manifesto nº 2026-01</span>
        </div>
      </div>
    </footer>
  );
}
