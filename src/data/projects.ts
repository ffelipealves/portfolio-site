export type ProjectStatus = "LIVE" | "WIP" | "NEXT";

export type Project = {
  ref: string;
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  demoUrl?: string;
  repoUrl?: string;
  apiDocsUrl?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    ref: "ESTOCA-01",
    name: "Estoca",
    description:
      "Mini ERP de estoque. Cada visitante recebe uma sandbox isolada para explorar produtos, categorias e movimentações sem ver dados de outra pessoa.",
    stack: [
      "FastAPI",
      "SQLAlchemy async",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    status: "LIVE",
    demoUrl: "https://estoca-erp.vercel.app",
    repoUrl: "https://github.com/ffelipealves/estoca-erp",
    apiDocsUrl: "https://estoca-api.onrender.com/docs",
    highlights: [
      "Sandbox isolada por sessão — nenhuma tabela de negócio cruza dados entre visitantes",
      "Perfis de admin e operador com CRUD de produtos, categorias e histórico de movimentações",
      "Entrada, saída e ajuste absoluto de estoque, com bloqueio automático sem saldo suficiente",
      "Fechamento de estoque com valor total, unidades e fila de reposição por urgência",
    ],
  },
  {
    ref: "NEXT-02",
    name: "Próxima entrada",
    description: "Ainda sendo construído. Volte em breve para ver o que entrou no manifesto.",
    stack: [],
    status: "NEXT",
  },
];
