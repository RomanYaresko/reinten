import { offers } from '@/data/offer';
import type { Offer, OfferData } from '@/features/offer/offer.types';
import type { Locale } from '@/i18n/routing';

function localizeOffer(offer: OfferData, locale: Locale): Offer {
  return {
    id: offer.id,
    title: offer.title[locale],
    description: offer.description[locale],
    children: offer.children.map((child) => localizeOffer(child, locale)),
  };
}

export async function getOffers(locale: Locale): Promise<Offer[]> {
  return offers.map((offer) => localizeOffer(offer, locale));
}
