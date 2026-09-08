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
- áreas de atuação organizadas por capacidades;
- manifesto de projetos com estados `LIVE`, `WIP` e `NEXT`;
- destaque técnico do projeto Estoca;
- trajetória profissional no LESC/UFC e na Agrolite;
- interesses fora do código;
- chamada final para contato.

Projetos cadastrados atualmente:

| Referência | Projeto | Estado | Destinos |
| --- | --- | --- | --- |
| `ESTOCA-01` | Estoca | `LIVE` | demonstração, repositório e documentação da API |
| `NEXT-02` | Próxima entrada | `NEXT` | ainda não publicado |

## Tecnologias

- Next.js 16.3.4 com App Router;
- React 19.2.8;
- TypeScript em modo estrito;
- Tailwind CSS 4;
- fontes IBM Plex Sans e IBM Plex Mono carregadas com `next/font`;
- ESLint 9 com a configuração recomendada do Next.js.

A implementação atual usa apenas componentes de servidor. Não há estado no
cliente, chamadas de API ou dependências de componentes externos.

## Estrutura

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css       # tokens visuais, tema e animação de entrada
│   ├── layout.tsx        # fontes, metadados e layout raiz
│   └── page.tsx          # composição da página inicial
├── components/
│   ├── About.tsx         # introdução pessoal e formação
│   ├── BeyondCode.tsx    # guitarra e videogames
│   ├── Capabilities.tsx  # áreas de atuação e ferramentas
│   ├── Experience.tsx    # trajetória profissional
│   ├── Footer.tsx        # chamada final e canais de contato
│   ├── Header.tsx        # identidade e navegação por âncoras
│   ├── Hero.tsx          # apresentação principal
│   ├── ManifestTable.tsx # listagem de projetos e estados
│   └── Spotlight.tsx     # detalhamento do projeto Estoca
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
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  demoUrl?: string;
  repoUrl?: string;
  apiDocsUrl?: string;
  highlights?: string[];
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
`src/data/projects.ts`. A tabela do manifesto é atualizada automaticamente.

O destaque atual procura especificamente pela referência `ESTOCA-01`. Para
destacar outro projeto, ajuste a seleção em `src/components/Spotlight.tsx` e
forneça o campo `highlights` no respectivo item.

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
- navegação suave entre as seções;
- desativação da animação de entrada quando o usuário prefere movimento reduzido;
- links externos com `noopener` e `noreferrer`.

## Observações de implementação

- Os metadados e o idioma `pt-BR` são configurados em `src/app/layout.tsx`.
- A data no rodapé é produzida com `new Date()` durante a renderização e pode
  refletir o momento do build ou da resposta do servidor.
- O projeto não utiliza variáveis de ambiente no estado atual.
- O favicon é mantido em `src/app/favicon.ico`; não há outros recursos públicos
  no estado atual.

## Regra para manutenção do Next.js

Esta versão do Next.js possui mudanças incompatíveis com versões anteriores.
Antes de modificar código, consulte o guia relevante em
`node_modules/next/dist/docs/`, conforme determinado pelo `AGENTS.md`. As
dependências precisam estar instaladas para que essa documentação local esteja
disponível.

## Deploy

A versão de produção é hospedada na Vercel:

- [portfolio-site-felipe-team3.vercel.app](https://portfolio-site-felipe-team3.vercel.app)

O projeto da Vercel está integrado ao repositório do GitHub. Novos commits
enviados para a branch `main` iniciam automaticamente um deploy de produção.

O acesso ao endereço publicado pode depender das regras de proteção da Vercel
configuradas para o projeto.
