import type { StackData } from '@/features/stack/stack.types';

export const stacks: StackData[] = [
  {
    id: 1,
    title: {
      en: 'Infrastructure',
      pl: 'Infrastruktura',
      uk: 'Інфраструктура',
      ru: 'Инфраструктура',
      es: 'Infraestructura',
      de: 'Infrastruktur',
    },
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
    title: {
      en: 'Backend',
      pl: 'Backend',
      uk: 'Бекенд',
      ru: 'Бэкенд',
      es: 'Backend',
      de: 'Backend',
    },
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
    title: {
      en: 'Frontend',
      pl: 'Frontend',
      uk: 'Фронтенд',
      ru: 'Фронтенд',
      es: 'Frontend',
      de: 'Frontend',
    },
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
];
