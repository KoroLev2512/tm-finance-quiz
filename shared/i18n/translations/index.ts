import { es } from './es';
import { en } from './en';
import { fr } from './fr';
import { de } from './de';
import type { Locale } from '../locales';

export const translations: Record<Locale, typeof es> = {
  es,
  en,
  fr,
  de,
};

export type TranslationType = typeof es;

