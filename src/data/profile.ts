export type Capability = {
  index: string;
  title: string;
  description: string;
  tools: string[];
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Backend e dados",
    description:
      "APIs, regras de negócio e bancos relacionais pensados para continuar claros quando o sistema cresce.",
    tools: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Celery"],
  },
  {
    index: "02",
    title: "Sistemas conectados",
    description:
      "Serviços em nuvem e integrações que aproximam o software de sensores, dispositivos e operações reais.",
    tools: ["AWS Lambda", "SQS", "IoT Core", "Docker", "CI/CD"],
  },
  {
    index: "03",
    title: "Produtos completos",
    description:
      "Interfaces web e mobile que transformam fluxos complexos em experiências simples para quem usa.",
    tools: ["Next.js", "React", "React Native", "TypeScript"],
  },
];

export const profileFacts = [
  ["base", "Fortaleza, Ceará"],
  ["formação", "Engenharia da Computação — UFC"],
  ["idiomas", "Português e inglês avançado"],
] as const;
