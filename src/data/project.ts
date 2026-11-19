import { Project, ProjectDetails } from '@/features/project/project.types';
import { assetPath } from '@/lib/paths';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Beauty salon — from zero',
    subtitle: 'Bookings and the client base lived in scattered notes — nothing was automated.',
    description:
      'Built a CRM with online booking and a sales website in 3 months. Running without failures since March 2026.',
    image: assetPath('/data/project/salon-home.webp'),
    projectDetailsSlug: 'beauty-salon',
  },
  {
    id: 2,
    title: 'B2B SaaS — release pipeline',
    subtitle: 'Only one engineer could deploy, by hand — every release was an event.',
    description: 'CI/CD with one-click rollback. The whole team ships daily.',
    image: undefined,
    projectDetailsSlug: undefined,
  },
];

export const projectDetails: ProjectDetails[] = [
  {
    slug: 'beauty-salon',
    heroSection: {
      title: 'From scattered notes to a system that runs the salon.',
      subtitle:
        'An aesthetic cosmetology center had no system at all. We built a CRM, a sales website and an online shop — and the infrastructure that keeps them running.',
      cases: [
        { title: 'Client', description: 'Aesthetic cosmetology center, Ukraine' },
        { title: 'Timeline', description: '3 months' },
        { title: 'Built', description: 'CRM, website, online shop' },
        { title: 'Status', description: 'In production since March 2026' },
      ],
    },
    secondarySection: {
      title: 'Bookings lived in notes. The client base lived nowhere.',
      bulletPoints: [
        'Appointments were tracked by hand — double bookings were routine',
        'No website that could sell — clients came only through word of mouth and social media',
        'No single client base: history, procedures and contacts were scattered',
        'Products were sold only in person',
      ],
    },
    showcaseSection: {
      title: 'Three products. One system.',
      steps: [
        {
          title: 'CRM',
          description:
            'Bookings, client base and procedure history in one place. Staff see the day at a glance.',
        },
        {
          title: 'Sales website',
          description:
            'Services, specialists, reviews and booking — built to turn visitors into appointments.',
        },
        {
          title: 'Online shop',
          description: 'Professional skincare catalog with filters, cart and checkout.',
        },
      ],
      images: [
        {
          src: assetPath('/data/project/salon-square.webp'),
          title: 'Online Shop',
          ratio: {
            x: 1,
            y: 1,
          },
        },
        {
          src: assetPath('/data/project/salon-phone.webp'),
          title: 'Website',
          ratio: {
            x: 9,
            y: 16,
          },
        },
        {
          src: assetPath('/data/project/salon-wide.webp'),
          title: 'CRM',
          ratio: {
            x: 16,
            y: 9,
          },
        },
      ],
    },
    additionalSection: {
      title: 'Built like a product, not a one-off site.',
      description:
        'This is the part most studios skip. We shipped with the same setup we run for SaaS teams.',
      bulletPoints: [
        '[DRAFT] Containerized with Docker, deployed through CI/CD',
        '[DRAFT] Monitoring and alerts — we know about issues before the salon does',
        '[DRAFT] Daily backups, restore tested',
        '[DRAFT] Updates ship without downtime during working hours',
      ],
    },
    resultsSection: {
      title: 'The salon runs on it every day.',
      metrics: [
        {
          value: '3 mo',
          description: 'From zero to production',
        },
        {
          value: '0',
          description: 'Failures since launch in March 2026',
        },
        {
          value: '1',
          description: 'System instead of notes, chats and memory',
        },
      ],
      feedback: {
        quote:
          '“[TESTIMONIAL: 2–3 sentences from the salon owner — what changed for the business]”',
        author: '[Name], owner — [Salon name]',
      },
    },
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
