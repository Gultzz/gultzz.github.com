export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

const shared = {
  name: "Gustavo Schultz",
  stack: [
    "ReactJS",
    "React Native",
    "Angular",
    "Expo",
    "NextJS",
    "JavaScript",
    "TypeScript",
    "NodeJS",
    "NestJS",
    "ExpressJS",
    "C#",
  ],
  contacts: {
    github: { label: "Gultzz", href: "https://github.com/Gultzz" },
    linkedin: {
      label: "Gustavo Schultz",
      href: "https://www.linkedin.com/in/gustavo-schultz-cruz/",
    },
    phone: { label: "+55 (41) 9 9684-3725", href: "tel:+5541996843725" },
    email: {
      label: "gustavo.schulr@gmail.com",
      href: "mailto:gustavo.schulr@gmail.com",
    },
  },
  skills: [
    {
      name: "Programming Logic",
      ptName: "Lógica de Programação",
      years: 6,
      level: 100,
    },
    { name: "ReactJS", years: 6, level: 100, certificate: true },
    { name: "React Native", years: 6, level: 100 },
    { name: "JavaScript", years: 6, level: 100, certificate: true },
    { name: "TypeScript", years: 6, level: 100 },
    { name: "Node", years: 3, level: 80 },
    { name: "Nest", years: 4, level: 80 },
    { name: "C#", years: 4, level: 80 },
    { name: "AngularJS", years: 1.5, level: 80 },
    { name: "Angular", years: 4, level: 100 },
    { name: "Express", years: 2, level: 70 },
    { name: "Web Design", years: 6, level: 80 },
    { name: "Git", years: 6, level: 80 },
    { name: "HTML", years: 6, level: 100 },
    { name: "CSS", years: 6, level: 100, certificate: true },
    {
      name: "Frontend Development",
      ptName: "Desenvolvimento Frontend",
      years: 6,
      level: 100,
      certificate: true,
    },
  ],
} as const;

const copy = {
  pt: {
    lang: "pt-BR",
    position: "Desenvolvedor Fullstack",
    intro:
      "Interfaces precisas. Sistemas sólidos. Experiências feitas para pessoas.",
    navigation: "Navegação",
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Competências",
      contact: "Contato",
    },
    aboutTitle: "Sobre mim",
    about: [
      "Sou desenvolvedor fullstack com cerca de 5 anos de experiência, especializado em frontend utilizando Next.js, Angular e React Native para aplicações mobile.",
      "Também possuo sólida experiência em backend, com foco em NestJS e C#. Sou reconhecido pela busca constante em entregar soluções de alta qualidade, sempre priorizando desempenho, eficiência e boas práticas.",
    ],
    personality: "Personalidade",
    personalityUrl: "https://www.16personalities.com/br/personalidade-istj",
    experienceTitle: "Experiências",
    experienceIntro:
      "Uma trajetória entre produtos web, mobile e decisões de arquitetura.",
    experiences: [
      {
        company: "IATec",
        role: "Desenvolvedor de Sistemas Fullstack",
        period: "05/2025 — Atual",
        items: [
          "Desenvolvimento frontend web com JavaScript, Angular, TypeScript, SCSS e SASS.",
          "Desenvolvimento backend com C# (.NET) e MongoDB.",
          "Gerenciamento de estado com NgRx e RxJS.",
          "Versionamento com Git e Azure DevOps, metodologias ágeis com Kanban e trabalho em equipe.",
        ],
      },
      {
        company: "EGS Sistemas",
        role: "Desenvolvedor Fullstack",
        period: "10/2023 — 05/2025",
        items: [
          "Desenvolvimento e deploy web com ReactJS, AngularJS, TypeScript e NextJS; CSS com Styled Components, Tailwind, SCSS e SASS.",
          "Aplicações mobile com React Native, Expo, D3.js, Skia e Reanimated.",
          "Backend com C# (.NET 8) e MySQL; estado com Redux e Zustand; integrações REST.",
          "Liderança em decisões de arquitetura, publicação nas lojas, code review e trabalho em equipe.",
        ],
      },
      {
        company: "Firedev IT",
        role: "Desenvolvedor Frontend",
        period: "11/2021 — 07/2023",
        items: [
          "Desenvolvimento frontend web com JavaScript, ReactJS, TypeScript, NextJS e Styled Components.",
          "Desenvolvimento mobile com React Native, Expo e TypeScript.",
          "Integrações REST, estado global com Context, testes com Jest e Testing Library.",
          "GitHub e GitLab, code review e trabalho em squads com Scrum e Kanban.",
        ],
      },
    ],
    languagesTitle: "Idiomas",
    portuguese: "Português — nativo",
    english: "Inglês — B2",
    certificate: "Ver certificado",
    skillsTitle: "Principais competências",
    skillsIntro:
      "Nível atual e tempo de experiência. Use foco, toque ou hover para explorar.",
    years: "anos",
    year: "ano",
    level: "nível",
    linkedInCertificate: "Certificado LinkedIn",
    contactTitle: "Vamos conversar",
    contactIntro: "Links diretos, sem formulários intermediários.",
    phone: "Telefone",
    resume: "Baixar currículo",
    resumeFile: "/gustavo-schultz-cv-pt.pdf",
    skip: "Pular para o conteúdo",
    portraitAlt: "Retrato de Gustavo Schultz",
    stackLabel: "Tecnologias principais",
    opensNewWindow: "abre em uma nova janela",
    pdfDocument: "documento PDF",
    scroll: "Role para explorar",
    footer: "Construído com atenção a conteúdo, movimento e performance.",
  },
  en: {
    lang: "en",
    position: "Fullstack Developer",
    intro: "Precise interfaces. Solid systems. Experiences made for people.",
    navigation: "Navigation",
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    aboutTitle: "About me",
    about: [
      "I am a fullstack developer with about 5 years of experience, specialized in frontend development using Next.js, Angular, and React Native for mobile applications.",
      "I also have solid backend experience focused on NestJS and C#. I constantly pursue high-quality solutions, prioritizing performance, efficiency, and best practices.",
    ],
    personality: "Personality",
    personalityUrl: "https://www.16personalities.com/istj-personality",
    experienceTitle: "Experience",
    experienceIntro:
      "A path through web and mobile products and architecture decisions.",
    experiences: [
      {
        company: "IATec",
        role: "Fullstack Systems Developer",
        period: "05/2025 — Present",
        items: [
          "Web frontend development with JavaScript, Angular, TypeScript, SCSS and SASS.",
          "Backend development with C# (.NET) and MongoDB.",
          "Global state management with NgRx and RxJS.",
          "Version control with Git and Azure DevOps, agile methodologies with Kanban and teamwork.",
        ],
      },
      {
        company: "EGS Sistemas",
        role: "Fullstack Developer",
        period: "10/2023 — 05/2025",
        items: [
          "Web development and deployment with ReactJS, AngularJS, TypeScript and NextJS; CSS with Styled Components, Tailwind, SCSS and SASS.",
          "Mobile applications with React Native, Expo, D3.js, Skia and Reanimated.",
          "Backend with C# (.NET 8) and MySQL; state with Redux and Zustand; REST integrations.",
          "Architecture leadership, store releases, code review and collaborative delivery.",
        ],
      },
      {
        company: "Firedev IT",
        role: "Frontend Developer",
        period: "11/2021 — 07/2023",
        items: [
          "Web frontend development with JavaScript, ReactJS, TypeScript, NextJS and Styled Components.",
          "Mobile development with React Native, Expo and TypeScript.",
          "REST integrations, global state with Context, tests with Jest and Testing Library.",
          "GitHub and GitLab, code review and squad work with Scrum and Kanban.",
        ],
      },
    ],
    languagesTitle: "Languages",
    portuguese: "Portuguese — native",
    english: "English — B2",
    certificate: "View certificate",
    skillsTitle: "Core skills",
    skillsIntro:
      "Current level and years of experience. Use focus, touch or hover to explore.",
    years: "years",
    year: "year",
    level: "level",
    linkedInCertificate: "LinkedIn certificate",
    contactTitle: "Let’s talk",
    contactIntro: "Direct links, with no forms in the way.",
    phone: "Phone",
    resume: "Download résumé",
    resumeFile: "/gustavo-schultz-cv-en.pdf",
    skip: "Skip to content",
    portraitAlt: "Portrait of Gustavo Schultz",
    stackLabel: "Core technologies",
    opensNewWindow: "opens in a new window",
    pdfDocument: "PDF document",
    scroll: "Scroll to explore",
    footer: "Built with care for content, motion and performance.",
  },
} as const;

export function getPortfolio(locale: Locale) {
  return { ...shared, ...copy[locale], locale };
}

export type Portfolio = ReturnType<typeof getPortfolio>;
