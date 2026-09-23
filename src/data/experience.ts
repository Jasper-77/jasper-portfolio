export interface Experience {
  period: string
  role: string
  company: string
  project: string
  domain: string
  description: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    period: 'Feb 2026 — Present',
    role: 'Senior Software Engineer',
    company: 'Softura',
    project: 'MyKomatsu — KX Fleet Application',
    domain: 'Industrial Fleet Management',
    description:
      'Working on an enterprise industrial fleet application, focusing on application modernization, React-based development, reusable components and integration with backend services and APIs.',
    highlights: [
      'Led MVC-to-React modernization across PLM, OEM and Alert modules using .NET and React with TypeScript.',
      'Designed and implemented reusable Multiselect Global Dropdown components integrated with external systems and APIs.',
      'Developed scalable React UI components using TypeScript, HTML5 and CSS3.',
      'Collaborated with cross-functional Agile teams on requirements, code reviews, debugging and application improvements.',
    ],
    technologies: [
      '.NET',
      'C#',
      'React',
      'TypeScript',
      'REST APIs',
      'HTML5',
      'CSS3',
      'Azure',
    ],
  },

  {
    period: 'Aug 2023 — Feb 2026',
    role: 'Software Analyst',
    company: 'Agilysys',
    project: 'DataMagine & eForms',
    domain: 'Enterprise SaaS Automation',
    description:
      'Developed enterprise document management and workflow automation solutions using ASP.NET Core, Angular, SQL Server and Azure services within a microservices-oriented architecture.',
    highlights: [
      'Designed and developed RESTful APIs using C# and ASP.NET Core 6/8 within a microservices-oriented architecture.',
      'Built Angular modules with Reactive Forms for workflow management, approvals and configurable business rules.',
      'Implemented JWT authentication and RBAC security using IdentityServer.',
      'Optimized SQL Server stored procedures and LINQ queries, improving API response time by 45%.',
      'Integrated Azure Blob Storage and SendGrid for document storage and automated notifications.',
      'Developed a dynamic Rule Builder with nested conditions and configurable workflow rules.',
    ],
    technologies: [
      'C#',
      '.NET 6/8',
      'ASP.NET Core',
      'Angular',
      'TypeScript',
      'SQL Server',
      'Azure Blob Storage',
      'IdentityServer',
      'JWT',
      'RBAC',
    ],
  },

  {
    period: 'Aug 2021 — Aug 2023',
    role: 'Software Engineer',
    company: 'Novac Technology Solutions',
    project: 'Kazito POS Platform',
    domain: 'Retail SaaS',
    description:
      'Developed billing, inventory and customer management capabilities for a retail SaaS platform, working across backend services, frontend components, databases and deployment activities.',
    highlights: [
      'Developed billing, inventory and customer management modules using C#, .NET Core and SQL Server.',
      'Built responsive and reusable React components using TypeScript, HTML5, CSS3 and JavaScript.',
      'Worked on modular frontend architecture for scalable application development.',
      'Improved API and database performance for high-volume POS transactions.',
      'Supported debugging, UAT and deployment activities across the application lifecycle.',
    ],
    technologies: [
      'C#',
      '.NET Core',
      'React',
      'TypeScript',
      'JavaScript',
      'SQL Server',
      'HTML5',
      'CSS3',
    ],
  },
]