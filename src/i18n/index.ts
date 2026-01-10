import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEn from './locales/en/common.json';
import heroEn from './locales/en/hero.json';
import headerEn from './locales/en/header.json';
import servicesEn from './locales/en/services.json';
import aboutEn from './locales/en/about.json';
import contactEn from './locales/en/contact.json';
import proofEn from './locales/en/proof.json';
import footerEn from './locales/en/footer.json';
import errorsEn from './locales/en/errors.json';
import homepageEn from './locales/en/homepage.json';
import protocolEn from './locales/en/protocol.json';
import workshopsEn from './locales/en/workshops.json';
import buildEn from './locales/en/build.json';

const resources = {
  en: {
    common: commonEn,
    hero: heroEn,
    header: headerEn,
    services: servicesEn,
    about: aboutEn,
    contact: contactEn,
    proof: proofEn,
    footer: footerEn,
    errors: errorsEn,
    homepage: homepageEn,
    protocol: protocolEn,
    workshops: workshopsEn,
    build: buildEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: [
      'common',
      'hero',
      'header',
      'services',
      'about',
      'contact',
      'proof',
      'footer',
      'errors',
      'homepage',
      'protocol',
      'workshops',
      'build',
    ],
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
