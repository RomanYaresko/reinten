import { Employee } from '@/features/employee/employee.types';
import { assetPath } from '@/lib/paths';

export const employees: Employee[] = [
  {
    id: 1,
    image: assetPath('/data/employee/vitaliy-prymak.jpg'),
    firstName: 'Vitaliy',
    lastName: 'Prymak',
    description: 'Founder, DevOps engineer',
    linkedInLink: 'https://www.linkedin.com/in/vitaliy-prymak-672540226/',
    isFounder: true,
  },
  {
    id: 2,
    image: assetPath('/data/employee/mykyta-diadiunov.jpg'),
    firstName: 'Mykyta',
    lastName: 'Diadiunov',
    description: 'Engineer',
    linkedInLink: 'https://www.linkedin.com/in/mykyta-diadiunov-633ab125b/',
    isFounder: false,
  },
  {
    id: 3,
    image: assetPath('/data/employee/serhii-kolodiazhnyi.jpg'),
    firstName: 'Serhii',
    lastName: 'Kolodiazhnyi',
    description: 'Engineer',
    linkedInLink: 'https://www.linkedin.com/in/serhii-kolodiazhnyi-22525a25b/',
    isFounder: false,
  },
  {
    id: 4,
    image: assetPath('/data/employee/maria-yastriebova.jpg'),
    firstName: 'Maria',
    lastName: 'Yastriebova',
    description: 'Product Designer',
    linkedInLink: 'https://www.linkedin.com/in/mariia-yastriebova-524392241/',
    isFounder: false,
  },
  {
    id: 5,
    image: assetPath('/data/employee/pavel-moroz.png'),
    firstName: 'Pavel',
    lastName: 'Moroz',
    description: 'SEO specialist',
    linkedInLink: 'https://www.linkedin.com/in/pavel-moroz-3865701a4/',
    isFounder: false,
  },
];
