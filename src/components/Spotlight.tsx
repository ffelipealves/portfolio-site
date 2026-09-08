import { projects } from "@/data/projects";

export default function Spotlight() {
  const estoca = projects.find((p) => p.ref === "ESTOCA-01");
  if (!estoca) return null;

  return (
    <section className="border-b border-line bg-panel/35 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Por dentro de {estoca.ref}</p>

        <h2 className="section-title mt-4">
          Um projeto para aprender construindo — e deixar qualquer pessoa testar.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          No {estoca.name}, quis ir além de uma tela de cadastro: o desafio foi
          organizar regras de estoque, permissões e isolamento de dados em uma
          experiência segura para demonstração.
        </p>

        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {estoca.highlights?.map((highlight) => (
            <div key={highlight} className="bg-panel p-5">
              <p className="text-sm leading-relaxed text-text/85">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          O acesso de demonstração já vem preenchido na interface — perfil de
          administrador e de operador, ambos com senha{" "}
          <code className="rounded-sm border border-line px-1.5 py-0.5 font-mono text-xs text-text">
            demo123
          </code>
          . O backend roda no plano gratuito do Render e pode levar cerca de
          um minuto para responder após um período sem tráfego.
        </p>
      </div>
    </section>
  );
}
