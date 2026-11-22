import { ProjectData, ProjectDetailsData } from '@/features/project/project.types';
import { assetPath } from '@/lib/paths';

export const projects: ProjectData[] = [
  {
    id: 1,
    title: { en: 'Beauty salon — from zero', pl: 'Salon kosmetyczny — od podstaw' },
    subtitle: {
      en: 'Bookings and the client base lived in scattered notes — nothing was automated.',
      pl: 'Rezerwacje i dane klientów były w rozproszonych notatkach — nic nie było zautomatyzowane.',
    },
    description: {
      en: 'Built a CRM with online booking and a sales website in 3 months. Running without failures since March 2026.',
      pl: 'W 3 miesiące stworzyliśmy system CRM z rezerwacjami online i stronę sprzedażową. Działa bez awarii od marca 2026.',
    },
    image: assetPath('/data/project/salon-home.webp'),
    projectDetailsSlug: 'beauty-salon',
  },
  {
    id: 2,
    title: { en: 'B2B SaaS — release pipeline', pl: 'B2B SaaS — proces wdrożeń' },
    subtitle: {
      en: 'Only one engineer could deploy, by hand — every release was an event.',
      pl: 'Tylko jeden inżynier mógł ręcznie wdrażać zmiany — każde wydanie było dużym wydarzeniem.',
    },
    description: {
      en: 'CI/CD with one-click rollback. The whole team ships daily.',
      pl: 'CI/CD z wycofaniem zmian jednym kliknięciem. Cały zespół wdraża codziennie.',
    },
    image: undefined,
    projectDetailsSlug: undefined,
  },
];

export const projectDetails: ProjectDetailsData[] = [
  {
    slug: 'beauty-salon',
    heroSection: {
      title: {
        en: 'From scattered notes to a system that runs the salon.',
        pl: 'Od rozproszonych notatek do systemu, który napędza salon.',
      },
      subtitle: {
        en: 'An aesthetic cosmetology center had no system at all. We built a CRM, a sales website and an online shop — and the infrastructure that keeps them running.',
        pl: 'Centrum kosmetologii estetycznej nie miało żadnego systemu. Stworzyliśmy CRM, stronę sprzedażową, sklep internetowy i infrastrukturę, która utrzymuje je w działaniu.',
      },
      cases: [
        {
          title: { en: 'Client', pl: 'Klient' },
          description: {
            en: 'Aesthetic cosmetology center, Ukraine',
            pl: 'Centrum kosmetologii estetycznej, Ukraina',
          },
        },
        {
          title: { en: 'Timeline', pl: 'Czas realizacji' },
          description: { en: '3 months', pl: '3 miesiące' },
        },
        {
          title: { en: 'Built', pl: 'Zakres' },
          description: {
            en: 'CRM, website, online shop',
            pl: 'CRM, strona internetowa, sklep online',
          },
        },
        {
          title: { en: 'Status', pl: 'Status' },
          description: {
            en: 'In production since March 2026',
            pl: 'Działa produkcyjnie od marca 2026',
          },
        },
      ],
    },
    secondarySection: {
      title: {
        en: 'Bookings lived in notes. The client base lived nowhere.',
        pl: 'Rezerwacje były w notatkach. Baza klientów nie istniała.',
      },
      bulletPoints: [
        {
          en: 'Appointments were tracked by hand — double bookings were routine',
          pl: 'Wizyty zapisywano ręcznie — podwójne rezerwacje zdarzały się regularnie',
        },
        {
          en: 'No website that could sell — clients came only through word of mouth and social media',
          pl: 'Brak strony umożliwiającej sprzedaż — klienci trafiali do salonu wyłącznie z polecenia i mediów społecznościowych',
        },
        {
          en: 'No single client base: history, procedures and contacts were scattered',
          pl: 'Brak jednej bazy klientów: historia wizyt, zabiegi i dane kontaktowe były rozproszone',
        },
        {
          en: 'Products were sold only in person',
          pl: 'Produkty sprzedawano wyłącznie na miejscu',
        },
      ],
    },
    showcaseSection: {
      title: { en: 'Three products. One system.', pl: 'Trzy produkty. Jeden system.' },
      steps: [
        {
          title: { en: 'CRM', pl: 'CRM' },
          description: {
            en: 'Bookings, client base and procedure history in one place. Staff see the day at a glance.',
            pl: 'Rezerwacje, baza klientów i historia zabiegów w jednym miejscu. Zespół widzi cały dzień na pierwszy rzut oka.',
          },
        },
        {
          title: { en: 'Sales website', pl: 'Strona sprzedażowa' },
          description: {
            en: 'Services, specialists, reviews and booking — built to turn visitors into appointments.',
            pl: 'Usługi, specjaliści, opinie i rezerwacje — strona zaprojektowana tak, by zamieniać odwiedzających w klientów.',
          },
        },
        {
          title: { en: 'Online shop', pl: 'Sklep internetowy' },
          description: {
            en: 'Professional skincare catalog with filters, cart and checkout.',
            pl: 'Katalog profesjonalnych kosmetyków z filtrami, koszykiem i płatnością.',
          },
        },
      ],
      images: [
        {
          src: assetPath('/data/project/salon-square.webp'),
          title: { en: 'Online Shop', pl: 'Sklep internetowy' },
          ratio: {
            x: 1,
            y: 1,
          },
        },
        {
          src: assetPath('/data/project/salon-phone.webp'),
          title: { en: 'Website', pl: 'Strona internetowa' },
          ratio: {
            x: 9,
            y: 16,
          },
        },
        {
          src: assetPath('/data/project/salon-wide.webp'),
          title: { en: 'CRM', pl: 'CRM' },
          ratio: {
            x: 16,
            y: 9,
          },
        },
      ],
    },
    additionalSection: {
      title: {
        en: 'Built like a product, not a one-off site.',
        pl: 'Zbudowane jak produkt, nie jednorazowa strona.',
      },
      description: {
        en: 'This is the part most studios skip. We shipped with the same setup we run for SaaS teams.',
        pl: 'Tego etapu pomija większość studiów. Wdrożyliśmy rozwiązanie na tej samej infrastrukturze, której używamy dla zespołów SaaS.',
      },
      bulletPoints: [
        {
          en: '[DRAFT] Containerized with Docker, deployed through CI/CD',
          pl: '[SZKIC] Konteneryzacja Dockerem i wdrożenia przez CI/CD',
        },
        {
          en: '[DRAFT] Monitoring and alerts — we know about issues before the salon does',
          pl: '[SZKIC] Monitoring i alerty — wiemy o problemach, zanim zauważy je salon',
        },
        {
          en: '[DRAFT] Daily backups, restore tested',
          pl: '[SZKIC] Codzienne kopie zapasowe, testowane odtwarzanie',
        },
        {
          en: '[DRAFT] Updates ship without downtime during working hours',
          pl: '[SZKIC] Aktualizacje wdrażane bez przestojów w godzinach pracy',
        },
      ],
    },
    resultsSection: {
      title: {
        en: 'The salon runs on it every day.',
        pl: 'Salon korzysta z systemu każdego dnia.',
      },
      metrics: [
        {
          value: { en: '3 mo', pl: '3 mies.' },
          description: {
            en: 'From zero to production',
            pl: 'Od pomysłu do wdrożenia produkcyjnego',
          },
        },
        {
          value: { en: '0', pl: '0' },
          description: {
            en: 'Failures since launch in March 2026',
            pl: 'Awarii od uruchomienia w marcu 2026',
          },
        },
        {
          value: { en: '1', pl: '1' },
          description: {
            en: 'System instead of notes, chats and memory',
            pl: 'System zamiast notatek, czatów i pamięci',
          },
        },
      ],
      feedback: {
        quote: {
          en: '“[TESTIMONIAL: 2–3 sentences from the salon owner — what changed for the business]”',
          pl: '„[OPINIA: 2–3 zdania właściciela salonu o tym, co zmieniło się w firmie]”',
        },
        author: {
          en: '[Name], owner — [Salon name]',
          pl: '[Imię], właściciel — [nazwa salonu]',
        },
      },
    },
  },
];

export const selectedProjectsImages: string[] = [
  assetPath('/data/placeholders/1.jpg&text=Logo+1'),
  assetPath('/data/placeholders/2.jpg&text=Screenshot+1'),
  assetPath('/data/placeholders/3.jpg&text=Screenshot+2'),
  assetPath('/data/placeholders/4.jpg&text=Screenshot+3'),
  assetPath('/data/placeholders/5.jpg&text=Logo+2'),
  assetPath('/data/placeholders/6.jpg&text=Screenshot+4'),
  assetPath('/data/placeholders/7.jpg&text=Screenshot+5'),
  assetPath('/data/placeholders/8.jpg&text=Screenshot+6'),
];
