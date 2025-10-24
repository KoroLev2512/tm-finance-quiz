export const locales = ['es', 'en', 'fr', 'de'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

export const defaultLocale: Locale = 'es';

