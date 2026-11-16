import { offers } from '@/data/offer';
import { Offer } from '@/features/offer/offer.types';

export async function getOffers(): Promise<Offer[]> {
  return offers;
}
