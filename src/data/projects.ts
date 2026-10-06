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
      "Tailwind CSS",
      "Radix UI",
      "Recharts",
      "Docker",
    ],
    status: "LIVE",
    cover: {
      src: "/projects/estoca/produtos-admin-coletor.png",
      alt: "Catálogo de produtos do Estoca no perfil de administrador, com a barra de status da sandbox e o menu lateral grafite",
      caption: "Catálogo com barra de status da sandbox, campo de leitura e a tecla amarela de movimentação",
      width: 1440,
      height: 900,
    },
    demoUrl: "https://estoca-erp.vercel.app",
    repoUrl: "https://github.com/ffelipealves/estoca-erp",
    apiDocsUrl: "https://estoca-api.onrender.com/docs",
    introduction:
      "O Estoca nasceu como um projeto de portfólio, mas foi construído como um produto completo: frontend, API, banco de dados, autenticação, automações e infraestrutura publicados.",
    context:
      "Uma demonstração compartilhada costuma misturar os dados de todo mundo. No Estoca, cada visita cria uma sandbox própria, já preenchida com o catálogo de um depósito de material de construção, dois perfis de acesso e um histórico de movimentações.",
    architecture:
      "O frontend em Next.js conversa com uma API FastAPI organizada em routers, services e repositories. Toda entidade de negócio é filtrada por sessão no PostgreSQL, e saldo e histórico são atualizados na mesma transação.",
    note:
      "A demonstração já vem com dados e credenciais preenchidos. O backend usa o plano gratuito do Render e pode levar cerca de um minuto para despertar.",
    highlights: [
      "Sandbox isolada por visitante, com expiração, reset e limpeza automática",
      "Interface inspirada em coletor de armazém: barra de status com o prazo da sandbox, campo de leitura e atalhos de teclado",
      "Perfis de administrador e operador com permissões aplicadas também pela API",
      "Entrada, saída e ajuste absoluto com saldo e histórico persistidos atomicamente",
      "Painel com valor armazenado, fila de estoque baixo por urgência e saldo em degrau",
      "Formulários em modal com foco preso, rascunho descartado ao fechar e proteção contra envio duplicado",
    ],
    gallery: [
      {
        src: "/projects/estoca/painel-admin-coletor.png",
        alt: "Painel administrativo do Estoca com valor armazenado, fila de estoque baixo e gráfico do saldo total",
        caption: "Painel: valor armazenado, fila de estoque baixo por urgência e saldo em degrau com cada movimentação marcada",
        width: 1440,
        height: 1326,
      },
      {
        src: "/projects/estoca/catalogo-filtros.gif",
        alt: "Demonstração da ordenação e dos filtros do catálogo do Estoca",
        caption: "Ordenação por coluna e filtros por categoria e estoque baixo, guardados na URL",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/cadastro-produto-modal.gif",
        alt: "Demonstração do cadastro de um produto em modal no Estoca",
        caption: "Cadastro em modal: a quantidade inicial já entra no histórico como uma entrada",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/edicao-produto-rascunho.gif",
        alt: "Demonstração da edição de um produto no Estoca, com o rascunho descartado ao fechar o modal",
        caption: "Edição em modal: fechar sem salvar descarta o rascunho, e o formulário reabre com os dados reais",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/exclusao-produto-confirmacao.gif",
        alt: "Demonstração da exclusão de um produto no Estoca com confirmação em modal",
        caption: "Exclusão com confirmação: o modal avisa quantas movimentações vão junto e só libera o botão depois da ciência",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/ajuste-estoque.gif",
        alt: "Demonstração de um ajuste de estoque em modal no Estoca",
        caption: "Ajuste em modal: as teclas E, S e A trocam a operação, e o visor mostra o saldo no sistema, o contado e a diferença",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/operador-sem-permissao.gif",
        alt: "Demonstração do Estoca explicando ao operador uma ação restrita e trocando para o perfil administrador",
        caption: "Perfil operador: os controles travados explicam a restrição e oferecem trocar de perfil sem perder os dados",
        width: 900,
        height: 563,
        animated: true,
      },
      {
        src: "/projects/estoca/administracao.png",
        alt: "Área de administração do Estoca com o prazo da sandbox, credenciais de demonstração e permissões por perfil",
        caption: "Administração: prazo até a sandbox expirar, credenciais de demonstração, permissões por perfil e reset",
        width: 1440,
        height: 1151,
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
