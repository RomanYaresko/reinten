import { Stack } from '@/features/stack/stack.types';

export const stacks: Stack[] = [
  {
    id: 1,
    title: 'Infrastructure',
    technologies: [
      'Kubernetes',
      'Docker',
      'AWS',
      'Cloud',
      'Bare metal servers',
      'CI/CD',
      'Systems Monitoring & Observability',
      'NoSQL Databases',
      'Configuration Management',
    ],
  },
  {
    id: 2,
    title: 'Backend',
    technologies: [
      'Go',
      'Gorm',
      'Gin',
      'Java',
      'Maven',
      'Gradle',
      'Spring Boot',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
    ],
  },
  {
    id: 3,
    title: 'Frontend',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
];
