'use client';

import React, { useContext } from 'react';
import { LanguageContext } from '@/lib/LanguageContext';
import { ErrorHandlerContext } from '@/lib/error-context';
import { SystemManager } from '@/lib/SystemManager';

export const SettingsScreen = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const errorHandler = useContext(ErrorHandlerContext);

  const handleLanguageChange = (lang: string) => {
    try {
      setLanguage(lang);
      alert(`تم تغيير اللغة إلى ${lang}`);
    } catch (error) {
      errorHandler?.onError(error);
    }
  };

  const toggleDarkMode = () => {
    try {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    } catch (error) {
      errorHandler?.onError(error);
    }
  };

  const checkRegistries = async () => {
    try {
      const statuses = await SystemManager.checkRegistryStatus();
      console.log('Registry statuses:', statuses);
      alert('تم فحص حالة النظام، تحقق من الكونسول');
    } catch (error) {
      errorHandler?.onError(error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">إعدادات التطبيق</h1>

      {/* اللغة */}
      <div>
        <h2 className="font-semibold">اللغة</h2>
        {['ar', 'en', 'fr', 'zh'].map((langCode) => (
          <button
            key={langCode}
            className={`px-2 py-1 m-1 border ${language === langCode ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => handleLanguageChange(langCode)}
          >
            {langCode.toUpperCase()}
          </button>
        ))}
      </div>

      {/* الوضع الليلي */}
      <div>
        <h2 className="font-semibold">الوضع الليلي</h2>
        <button className="px-2 py-1 border border-gray-300" onClick={toggleDarkMode}>
          تبديل الوضع
        </button>
      </div>

      {/* التحقق من الخدمات */}
      <div>
        <h2 className="font-semibold">فحص النظام</h2>
        <button className="px-2 py-1 border border-gray-300" onClick={checkRegistries}>
          تحقق من الخدمات الخارجية
        </button>
      </div>

      {/* مزيد من الإعدادات يمكن إضافتها هنا */}
    </div>
  );
};
