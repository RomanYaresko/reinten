import { OfferData } from '@/features/offer/offer.types';

export const offers: OfferData[] = [
  {
    id: 1,
    title: { en: 'Build', pl: 'Tworzymy' },
    description: { en: 'Software your business runs on.', pl: 'Oprogramowanie dla Twojej firmy.' },
    children: [
      {
        id: 2,
        title: { en: 'Web apps & internal tools', pl: 'Aplikacje webowe i narzędzia wewnętrzne' },
        description: {
          en: 'CRMs, booking systems, dashboards — built around how your business actually works.',
          pl: 'Systemy CRM, rezerwacje i panele — dopasowane do sposobu działania Twojej firmy.',
        },
        children: [],
      },
      {
        id: 3,
        title: { en: 'Websites & online shops', pl: 'Strony internetowe i sklepy online' },
        description: {
          en: 'Sites that sell, with the catalog, cart and checkout behind them.',
          pl: 'Strony, które sprzedają — z katalogiem, koszykiem i procesem płatności.',
        },
        children: [],
      },
      {
        id: 4,
        title: { en: 'Support after launch', pl: 'Wsparcie po wdrożeniu' },
        description: {
          en: 'Sites that sell, with the catalog, cart and checkout behind them.',
          pl: 'Pomagamy utrzymać oprogramowanie bezpieczne, stabilne i aktualne.',
        },
        children: [],
      },
    ],
  },
  {
    id: 5,
    title: { en: 'Run', pl: 'Utrzymujemy' },
    description: {
      en: 'Infrastructure that doesn’t need you watching it.',
      pl: 'Infrastruktura, która nie wymaga ciągłego nadzoru.',
    },
    children: [
      {
        id: 6,
        title: { en: 'Release & deploy reliability', pl: 'Niezawodne wydania i wdrożenia' },
        description: {
          en: 'CI/CD that makes shipping routine instead of risky, with rollback that works.',
          pl: 'CI/CD, dzięki któremu wdrożenia są rutynowe i bezpieczne, z działającym wycofaniem zmian.',
        },
        children: [],
      },
      {
        id: 7,
        title: { en: 'Monitoring & recovery', pl: 'Monitoring i odzyskiwanie' },
        description: {
          en: 'You hear about incidents before your customers do — with a tested plan to recover.',
          pl: 'Dowiesz się o problemie przed klientami i będziesz mieć sprawdzony plan przywrócenia działania.',
        },
        children: [],
      },
      {
        id: 8,
        title: { en: 'Cloud cost visibility', pl: 'Przejrzyste koszty chmury' },
        description: {
          en: 'Every line on the bill maps to something you can name.',
          pl: 'Każda pozycja na fakturze odpowiada konkretnej usłudze.',
        },
        children: [],
      },
    ],
  },
];
