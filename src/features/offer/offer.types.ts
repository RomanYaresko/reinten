import type { DataLocaleString } from '@/features/data/data.types';

export interface Offer<Text = string> {
  id: number;
  title: Text;
  description: Text;
  children: Offer<Text>[];
}

export type OfferData = Offer<DataLocaleString>;
