import { Offer } from '@/features/offer/offer.types';

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Build',
    description: 'Software your business runs on.',
    children: [
      {
        id: 2,
        title: 'Web apps & internal tools',
        description:
          'CRMs, booking systems, dashboards — built around how your business actually works.',
        children: [],
      },
      {
        id: 3,
        title: 'Websites & online shops',
        description: 'Sites that sell, with the catalog, cart and checkout behind them.',
        children: [],
      },
      {
        id: 4,
        title: 'Support after launch',
        description: 'Sites that sell, with the catalog, cart and checkout behind them.',
        children: [],
      },
    ],
  },
  {
    id: 5,
    title: 'Run',
    description: 'Infrastructure that doesn’t need you watching it.',
    children: [
      {
        id: 6,
        title: 'Release & deploy reliability',
        description:
          'CI/CD that makes shipping routine instead of risky, with rollback that works.',
        children: [],
      },
      {
        id: 7,
        title: 'Monitoring & recovery',
        description:
          'You hear about incidents before your customers do — with a tested plan to recover.',
        children: [],
      },
      {
        id: 8,
        title: 'Cloud cost visibility',
        description: 'Every line on the bill maps to something you can name.',
        children: [],
      },
    ],
  },
];
