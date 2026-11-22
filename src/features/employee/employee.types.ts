import type { DataLocaleString } from '@/features/data/data.types';

export interface Employee<Text = string> {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  description: Text;
  linkedInLink: string;
  isFounder: boolean;
}

export type EmployeeData = Employee<DataLocaleString>;
