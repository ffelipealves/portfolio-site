import Link from "next/link";

const links = [
  ["sobre", "/#sobre"],
  ["projetos", "/#projetos"],
  ["experiência", "/#experiencia"],
  ["contato", "/#contato"],
] as const;

export default function Header() {
  return (
    <header className="border-b border-line/80 bg-ink/90 px-6 backdrop-blur sm:px-10">
      <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-6">
        <Link
          href="/#inicio"
          className="font-mono text-sm font-semibold tracking-[-0.03em] text-text"
          aria-label="Voltar ao início"
        >
          FA<span className="text-stock-in">.</span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 font-mono text-[0.7rem] text-muted sm:gap-x-7 sm:text-xs">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link className="transition-colors hover:text-text" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
