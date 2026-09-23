export interface Project {
  number: string
  category: string
  title: string
  description: string
  impact?: string
  technologies: string[]
  details: string[]
}

export const projects: Project[] = [
  {
    number: '01',
    category: 'Application Modernization',
    title: 'MVC → React Modernization',
    description:
      'Modernizing enterprise application modules by transitioning legacy MVC experiences to reusable React and TypeScript interfaces.',
    technologies: [
      '.NET',
      'React',
      'TypeScript',
      'REST APIs',
      'HTML5',
      'CSS3',
    ],
    details: [
      'Modernized enterprise application modules using React and TypeScript.',
      'Developed reusable frontend components for consistent experiences across modules.',
      'Integrated frontend components with backend services and APIs.',
      'Focused on maintainability, consistency and scalable frontend architecture.',
    ],
  },

  {
    number: '02',
    category: 'Workflow Automation',
    title: 'Dynamic Rule Engine',
    description:
      'A configurable rule-building experience designed to replace hard-coded workflow logic with flexible business rules.',
    technologies: [
      'Angular',
      'TypeScript',
      'Reactive Forms',
      '.NET',
      'Workflow Automation',
    ],
    details: [
      'Built dynamic rule configuration using Angular Reactive Forms.',
      'Supported nested conditions and dynamic rule structures.',
      'Enabled business workflows to be configured without repeatedly changing hard-coded logic.',
      'Integrated rule configuration into enterprise workflow processes.',
    ],
  },

  {
    number: '03',
    category: 'Performance Engineering',
    title: 'API Performance Optimization',
    description:
      'Improved enterprise API responsiveness through SQL Server stored procedure and LINQ query optimisation.',
    impact: '45% faster API response time',
    technologies: [
      'C#',
      'ASP.NET Core',
      'SQL Server',
      'T-SQL',
      'LINQ',
    ],
    details: [
      'Analysed API performance bottlenecks across application and database layers.',
      'Optimized SQL Server stored procedures and database queries.',
      'Improved LINQ query efficiency.',
      'Achieved a 45% improvement in API response time.',
    ],
  },

  {
    number: '04',
    category: 'Enterprise Security',
    title: 'JWT & RBAC Security',
    description:
      'Implemented authentication and granular role-based authorization for enterprise SaaS applications.',
    technologies: [
      'JWT',
      'RBAC',
      'IdentityServer',
      'ASP.NET Core',
      'Authentication',
      'Authorization',
    ],
    details: [
      'Implemented JWT-based authentication.',
      'Designed role-based access control for enterprise applications.',
      'Integrated IdentityServer for authentication and authorization workflows.',
      'Applied granular permissions across protected application functionality.',
    ],
  },

  {
    number: '05',
    category: 'Cloud Integration',
    title: 'Azure Document & Notification Pipeline',
    description:
      'Integrated cloud services for enterprise document storage and automated notification workflows.',
    technologies: [
      'Azure Blob Storage',
      'Azure',
      'SendGrid',
      '.NET',
      'REST APIs',
    ],
    details: [
      'Integrated Azure Blob Storage for document storage workflows.',
      'Connected application services with automated notification capabilities.',
      'Supported document management and enterprise workflow scenarios.',
      'Contributed to CI/CD-based deployment workflows.',
    ],
  },

  {
    number: '06',
    category: 'Reusable Components',
    title: 'Enterprise Multiselect Component',
    description:
      'Designed reusable multiselect functionality to provide consistent selection experiences across multiple enterprise application modules.',
    technologies: [
      'React',
      'TypeScript',
      '.NET',
      'REST APIs',
      'Component Design',
    ],
    details: [
      'Designed reusable multiselect global dropdown components.',
      'Integrated components with external systems and APIs.',
      'Extended consistent functionality across multiple application modules.',
      'Reduced duplicated frontend implementation across the application.',
    ],
  },
]