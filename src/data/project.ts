import { Project } from '@/features/project/project.types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Beauty salon — from zero',
    subtitle: 'Bookings and the client base lived in scattered notes — nothing was automated.',
    description:
      'Built a CRM with online booking and a sales website in 3 months. Running without failures since March 2026.',
    photo: '/data/salon-home.webp',
  },
  {
    id: 2,
    title: 'B2B SaaS — release pipeline',
    subtitle: 'Only one engineer could deploy, by hand — every release was an event.',
    description: 'CI/CD with one-click rollback. The whole team ships daily.',
    photo: undefined,
  },
];
