export interface SkillCategory {
  id: string
  label: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend Engineering',
    description:
      'Building APIs, services and enterprise application backends with the .NET ecosystem.',
    skills: [
      'C#',
      '.NET Core 6/8',
      'ASP.NET Core',
      'ASP.NET MVC',
      'Web API',
      'Entity Framework Core',
      'LINQ',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    description:
      'Developing responsive and maintainable interfaces with modern frontend technologies.',
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
  },
  {
    id: 'data',
    label: 'Data & Persistence',
    description:
      'Working with relational and NoSQL data stores, queries and database performance.',
    skills: [
      'SQL Server',
      'T-SQL',
      'Stored Procedures',
      'Query Optimization',
      'Performance Tuning',
      'Azure Cosmos DB',
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture & APIs',
    description:
      'Designing scalable application structures and integrations for enterprise systems.',
    skills: [
      'Microservices Architecture',
      'REST API Design',
      'API Integration',
      'Enterprise Applications',
      'Application Modernization',
      'Rule Engines',
      'Workflow Automation',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    description:
      'Building and supporting cloud-enabled applications and delivery pipelines.',
    skills: [
      'Azure Blob Storage',
      'Azure Cosmos DB',
      'Azure Key Vault',
      'Application Insights',
      'CI/CD Pipelines',
      'SendGrid',
    ],
  },
  {
    id: 'security',
    label: 'Security',
    description:
      'Implementing authentication, authorization and role-based access control.',
    skills: [
      'JWT',
      'RBAC',
      'IdentityServer',
      'Authentication',
      'Authorization',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    description:
      'Engineering practices and tools used throughout the software development lifecycle.',
    skills: [
      'Git',
      'Postman',
      'Azure DevOps',
      'Agile / Scrum',
      'Code Reviews',
      'Unit Testing',
      'GitHub Copilot',
    ],
  },
]