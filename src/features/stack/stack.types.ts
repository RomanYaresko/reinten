import type { DataLocaleString } from '@/features/data/data.types';

export interface Stack<Text = string> {
  id: number;
  title: Text;
  technologies: string[];
}

export type StackData = Stack<DataLocaleString>;
