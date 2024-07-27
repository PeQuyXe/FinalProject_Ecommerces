// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import vi from './locales/vi/translation.json';

// Cấu hình i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: 'vn',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;