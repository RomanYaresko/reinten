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

export const selectedProjectsImages: string[] = [
  'data/placeholders/1.jpg&text=Logo+1',
  'data/placeholders/2.jpg&text=Screenshot+1',
  'data/placeholders/3.jpg&text=Screenshot+2',
  'data/placeholders/4.jpg&text=Screenshot+3',
  'data/placeholders/5.jpg&text=Logo+2',
  'data/placeholders/6.jpg&text=Screenshot+4',
  'data/placeholders/7.jpg&text=Screenshot+5',
  'data/placeholders/8.jpg&text=Screenshot+6',
];
