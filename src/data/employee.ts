import { Employee } from '@/features/employee/employee.types';

export const employees: Employee[] = [
  {
    id: 1,
    image: '/data/employee/vitaliy-prymak.jpg',
    firstName: 'Vitaliy',
    lastName: 'Prymak',
    description: 'Founder, DevOps engineer',
    linkedInLink: 'https://www.linkedin.com/in/vitaliy-prymak-672540226/',
    isFounder: true,
  },
  {
    id: 2,
    image: '/data/employee/mykyta-diadiunov.jpg',
    firstName: 'Mykyta',
    lastName: 'Diadiunov',
    description: 'Engineer',
    linkedInLink: 'https://www.linkedin.com/in/mykyta-diadiunov-633ab125b/',
    isFounder: false,
  },
  {
    id: 3,
    image: '/data/employee/serhii-kolodiazhnyi.jpg',
    firstName: 'Serhii',
    lastName: 'Kolodiazhnyi',
    description: 'Engineer',
    linkedInLink: 'https://www.linkedin.com/in/serhii-kolodiazhnyi-22525a25b/',
    isFounder: false,
  },
];
