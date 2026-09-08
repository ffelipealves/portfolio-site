export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  details: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "dez 2025 — agora",
    role: "Desenvolvedor Fullstack",
    company: "LESC / UFC",
    summary:
      "Desenvolvimento de um sistema de monitoramento hídrico que conecta aplicações web, serviços em nuvem e dispositivos em campo.",
    details: [
      "APIs e modelagem de dados com FastAPI, SQLAlchemy e PostgreSQL",
      "Integrações com SQS, Lambda e IoT Core, além de tarefas assíncronas com Celery",
      "Colaboração com a equipe de hardware na definição de contratos e fluxos de dados",
    ],
    tags: ["Python", "Next.js", "AWS", "IoT", "Docker"],
  },
  {
    period: "mai — dez 2025",
    role: "Desenvolvedor Mobile & Web",
    company: "Agrolite",
    summary:
      "Construção de experiências web e mobile para uma plataforma de fazenda inteligente usada em diferentes regiões do Brasil.",
    details: [
      "Arquitetura offline-first com banco local e sincronização automática",
      "Módulos de monitoramento de piquetes, água, bovinos e inventário",
      "Integração com antenas e dispositivos IoT usados no campo",
    ],
    tags: ["React Native", "React", "Offline-first", "IoT"],
  },
];
