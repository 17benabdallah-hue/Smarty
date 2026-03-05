'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type LanguageCode = 'ar' | 'en' | 'fr' | 'zh';

interface LanguageContextType {
  lang: LanguageCode;
  isRTL: boolean;
  setLanguage: (lang: LanguageCode) => void;
  t: Record<string, string>;
}

// استيراد الترجمات المحلية
import { translations } from './translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LanguageCode>('ar');

  useEffect(() => {
    // استرجاع اللغة من localStorage إذا كانت موجودة
    const stored = localStorage.getItem('app_language') as LanguageCode | null;
    if (stored && translations[stored]) {
      setLang(stored);
    }
  }, []);

  const setLanguage = (newLang: LanguageCode) => {
    if (!translations[newLang]) return;
    setLang(newLang);
    localStorage.setItem('app_language', newLang);
  };

  const isRTL = lang === 'ar'; // فقط العربية هي من اليمين لليسار
  const t = translations[lang] || translations['ar'];

  return (
    <LanguageContext.Provider value={{ lang, isRTL, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
