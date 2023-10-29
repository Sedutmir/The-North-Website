import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Copyright: 'All rights reserved',
      Download: 'Download',
      SubscribeLabel: 'Subcribe to our Newsletter',
      Subscribe: 'Subcribe',
      Promo: 'The North is a student project designed to create an interesting game about Vikings!',
    },
  },
  ru: {
    translation: {
      Copyright: 'Все права защищены',
      Download: 'Скачать',
      SubscribeLabel: 'Подпишитесь на нашу рассылку',
      Subscribe: 'Подписаться',
      Promo: 'The North - это студенческий проект, нацеленный на создание интересной игры о викингах!',
    },
  },
};

const languages = Object.keys(resources);

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: ['en'],
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, languages };
