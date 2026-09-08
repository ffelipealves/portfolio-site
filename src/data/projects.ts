export type ProjectStatus = "LIVE" | "WIP" | "NEXT";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  animated?: boolean;
};

export type Project = {
  ref: string;
  slug?: string;
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  cover?: ProjectMedia;
  demoUrl?: string;
  repoUrl?: string;
  apiDocsUrl?: string;
  introduction?: string;
  context?: string;
  architecture?: string;
  note?: string;
  highlights?: string[];
  gallery?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    ref: "ESTOCA-01",
    slug: "estoca",
    name: "Estoca",
    description:
      "Um mini ERP de estoque com uma sandbox isolada para cada visitante experimentar o sistema de verdade.",
    stack: [
      "FastAPI",
      "SQLAlchemy async",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    status: "LIVE",
    cover: {
      src: "/projects/estoca/produtos-admin.png",
      alt: "Catálogo de produtos do Estoca no perfil de administrador",
      caption: "Catálogo com busca, filtros e controle de estoque",
      width: 1440,
      height: 900,
    },
    demoUrl: "https://estoca-erp.vercel.app",
    repoUrl: "https://github.com/ffelipealves/estoca-erp",
    apiDocsUrl: "https://estoca-api.onrender.com/docs",
    introduction:
      "O Estoca nasceu como um projeto de portfólio, mas foi construído como um produto completo: frontend, API, banco de dados, autenticação, automações e infraestrutura publicados.",
    context:
      "Uma demonstração compartilhada costuma misturar os dados de todo mundo. No Estoca, cada visita cria uma sandbox própria, já preenchida com um catálogo realista, dois perfis de acesso e um histórico de movimentações.",
    architecture:
      "O frontend em Next.js conversa com uma API FastAPI organizada em routers, services e repositories. Toda entidade de negócio é filtrada por sessão no PostgreSQL, e saldo e histórico são atualizados na mesma transação.",
    note:
      "A demonstração já vem com dados e credenciais preenchidos. O backend usa o plano gratuito do Render e pode levar cerca de um minuto para despertar.",
    highlights: [
      "Sandbox isolada por visitante, com expiração, reset e limpeza automática",
      "Perfis de administrador e operador com permissões aplicadas também pela API",
      "Entrada, saída e ajuste absoluto com saldo e histórico persistidos atomicamente",
      "Painel com valor armazenado, evolução do saldo e fila de reposição",
    ],
    gallery: [
      {
        src: "/projects/estoca/painel-admin.png",
        alt: "Painel administrativo do Estoca com indicadores e gráficos",
        caption: "Painel: fechamento da sessão, evolução do saldo e valor por categoria",
        width: 1440,
        height: 1369,
      },
      {
        src: "/projects/estoca/catalogo-filtros.gif",
        alt: "Demonstração da ordenação e dos filtros do catálogo do Estoca",
        caption: "Ordenação e filtros do catálogo funcionando no navegador",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/ajuste-estoque.gif",
        alt: "Demonstração de um ajuste de estoque no Estoca",
        caption: "Ajuste absoluto com prévia do saldo antes da confirmação",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/operador-sem-permissao.gif",
        alt: "Demonstração do Estoca bloqueando uma ação sem permissão para o operador",
        caption: "Permissões em ação: o perfil operador tenta acessar um recurso restrito",
        width: 900,
        height: 563,
        animated: true,
      },
    ],
  },
  {
    ref: "WIP-02",
    name: "Em desenvolvimento",
    description:
      "Outros projetos estão tomando forma. Quando estiverem prontos para uso, ganham seu espaço por aqui.",
    stack: [],
    status: "WIP",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
