import type { Locale } from './i18n/copy';

export type Localized = {
  pt: string;
  en: string;
};

export type Product = {
  id: string;
  name: Localized;
  category: Localized;
  detail: Localized;
  image: string;
  modelImage: string;
  imageAlt: Localized;
};

export type CartLine = Product & {
  quantity: number;
};

export function tx(value: Localized, locale: Locale) {
  return value[locale];
}
