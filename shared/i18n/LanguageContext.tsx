'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from './locales';
import { defaultLocale, locales } from './locales';
import { translations, type TranslationType } from './translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language and map to supported locale
function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  // Get browser languages in order of preference
  const browserLanguages = navigator.languages || [navigator.language];
  
  for (const lang of browserLanguages) {
    // Extract language code (e.g., "en-US" -> "en", "fr-FR" -> "fr")
    const langCode = lang.split('-')[0].toLowerCase();
    
    // Check if we support this language
    if (locales.includes(langCode as Locale)) {
      return langCode as Locale;
    }
  }
  
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Priority: 1. Saved locale, 2. Browser language, 3. Default locale
    const savedLocale = localStorage.getItem('locale') as Locale;
    
    if (savedLocale && translations[savedLocale]) {
      // Use saved locale
      setLocaleState(savedLocale);
    } else {
      // Auto-detect browser language
      const detectedLocale = detectBrowserLanguage();
      setLocaleState(detectedLocale);
      // Save detected locale to localStorage
      localStorage.setItem('locale', detectedLocale);
    }
    
    setIsInitialized(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

