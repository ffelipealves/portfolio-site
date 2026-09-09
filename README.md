# Portfólio — Felipe Alves

Portfólio pessoal de Felipe Alves, desenvolvedor fullstack e estudante de
Engenharia da Computação na UFC, com foco em backend, sistemas conectados e
APIs.

O site apresenta os projetos como um manifesto de estoque: cada trabalho é um
item identificado por referência, estado operacional e tecnologias utilizadas.
A interface segue uma estética de relatório técnico, com tipografia monoespaçada,
paleta escura e indicadores inspirados em movimentações de estoque.

## Estado atual

O projeto contém uma página única responsiva, em português do Brasil, formada
pelas seguintes seções:

- navegação por âncoras, apresentação e links de contato;
- introdução pessoal e informações de formação;
- grade de projetos com estados `LIVE`, `WIP` e `NEXT`;
- modal responsivo do Estoca com efeito glass, carrossel, resumo técnico e links externos;
- rota estática detalhada mantida como acesso direto e alternativa ao modal;
- áreas de atuação organizadas por capacidades;
- trajetória profissional no LESC/UFC e na Agrolite;
- interesses fora do código;
- chamada final para contato.

Projetos cadastrados atualmente:

| Referência | Projeto | Estado | Destinos |
| --- | --- | --- | --- |
| `ESTOCA-01` | Estoca | `LIVE` | demonstração, repositório e documentação da API |
| `WIP-02` | Em desenvolvimento | `WIP` | ainda não publicado |

## Tecnologias

- Next.js 16.3.4 com App Router;
- React 19.2.8;
- TypeScript em modo estrito;
- Tailwind CSS 4;
- fontes IBM Plex Sans e IBM Plex Mono carregadas com `next/font`;
- ESLint 9 com a configuração recomendada do Next.js.

A maior parte da interface usa componentes de servidor. A seção de projetos é
um componente de cliente para controlar o modal, o carrossel e a navegação por
teclado, sem chamadas de API ou dependências visuais externas.

## Estrutura

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css       # tokens visuais, tema e animação de entrada
│   ├── layout.tsx        # fontes, metadados e layout raiz
│   ├── page.tsx          # composição da página inicial
│   └── projetos/[slug]/  # página estática de cada projeto publicado
├── components/
│   ├── About.tsx         # introdução pessoal e formação
│   ├── BeyondCode.tsx    # guitarra e videogames
│   ├── Capabilities.tsx  # áreas de atuação e ferramentas
│   ├── EstocaWakeUp.tsx  # aquecimento não bloqueante da API do Estoca
│   ├── Experience.tsx    # trajetória profissional
│   ├── Footer.tsx        # chamada final e canais de contato
│   ├── Header.tsx        # identidade e navegação por âncoras
│   ├── Hero.tsx          # apresentação principal
│   └── Projects.tsx      # grade, modal glass e carrossel de projetos
└── data/
    ├── experience.ts     # experiências e contribuições profissionais
    ├── profile.ts        # capacidades e informações pessoais
    └── projects.ts       # tipos e conteúdo do manifesto
```

O arquivo `src/app/page.tsx` apenas define a ordem das seções. Projetos,
experiências e informações de perfil ficam centralizados em `src/data`,
evitando que conteúdo estruturado se misture à apresentação dos componentes.

## Modelo de projeto

Cada item do manifesto segue o tipo `Project`:

```ts
type ProjectStatus = "LIVE" | "WIP" | "NEXT";

type Project = {
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
```

Os estados são exibidos da seguinte forma:

- `LIVE`: projeto publicado e acessível;
- `WIP`: projeto em desenvolvimento;
- `NEXT`: entrada planejada, ainda sem links públicos.

## Execução local

Requisitos:

- Node.js compatível com Next.js 16;
- npm.

Instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | inicia o ambiente de desenvolvimento |
| `npm run build` | gera a versão de produção |
| `npm run start` | executa a versão de produção gerada |
| `npm run lint` | analisa o código com ESLint |

## Atualização de conteúdo

Para incluir um projeto, adicione um novo objeto ao array `projects` em
`src/data/projects.ts`. A grade da página inicial é atualizada automaticamente.
Projetos com capa podem abrir o modal; itens sem mídia aparecem como entradas em
desenvolvimento, sem ação de abertura.

Para preencher o modal, informe capa, galeria, links e campos editoriais. Um
`slug` também publica a rota direta `src/app/projetos/[slug]/page.tsx`, gerada
com `generateStaticParams` durante o build. As capturas e demonstrações locais
ficam em `public/projects/<slug>/`.

Áreas de atuação e dados breves de perfil ficam em `src/data/profile.ts`. A
trajetória profissional é mantida em `src/data/experience.ts`. Os textos mais
editoriais de apresentação, história pessoal, interesses e contato ficam nos
respectivos componentes.

## Design e acessibilidade

Os tokens de cor e tipografia são definidos em `src/app/globals.css` e expostos
ao Tailwind por meio de `@theme inline`. A interface inclui:

- foco visível para navegação por teclado;
- hierarquia semântica de títulos e regiões da página;
- contraste específico para cada estado de projeto;
- adaptação para telas pequenas;
- modal fechado por `Escape` ou clique no fundo e com rolagem da página bloqueada;
- carrossel operável por botões e seletores identificados para leitores de tela;
- navegação suave entre as seções;
- desativação da animação de entrada quando o usuário prefere movimento reduzido;
- links externos com `noopener` e `noreferrer`.

## Observações de implementação

- Os metadados e o idioma `pt-BR` são configurados em `src/app/layout.tsx`.
- A data no rodapé é produzida com `new Date()` durante a renderização e pode
  refletir o momento do build ou da resposta do servidor.
- O projeto não utiliza variáveis de ambiente no estado atual.
- Ao carregar a página inicial, o navegador envia um `GET /healthz` opaco e não
  bloqueante para antecipar o despertar da API do Estoca no Render. Falhas nessa
  otimização são ignoradas e não afetam a navegação do portfólio.
- O favicon é mantido em `src/app/favicon.ico`; não há outros recursos públicos
  fora das mídias usadas nas páginas de projeto.

## Regra para manutenção do Next.js

Esta versão do Next.js possui mudanças incompatíveis com versões anteriores.
Antes de modificar código, consulte o guia relevante em
`node_modules/next/dist/docs/`, conforme determinado pelo `AGENTS.md`. As
dependências precisam estar instaladas para que essa documentação local esteja
disponível.

## Deploy

A versão de produção é hospedada na Vercel:

- [portfolio-site-five-zeta-16.vercel.app](https://portfolio-site-five-zeta-16.vercel.app)

O projeto da Vercel está integrado ao repositório do GitHub. Novos commits
enviados para a branch `main` iniciam automaticamente um deploy de produção.

O domínio de produção é público. Endereços técnicos de deploy gerados pela
Vercel podem continuar protegidos e não devem ser usados como link de divulgação.
