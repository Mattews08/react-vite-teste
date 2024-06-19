import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to Our Hamburger Shop',
          menu: 'Menu',
          addToCart: 'Add to Cart',
          cart: 'Your Cart',
          clearCart: 'Clear Cart',
          loading: 'Loading...',
        },
      },
      pt: {
        translation: {
          welcome: 'Bem-vindo à Nossa Hamburgueria',
          menu: 'Cardápio',
          addToCart: 'Adicionar ao Carrinho',
          cart: 'Seu Carrinho',
          clearCart: 'Esvaziar Carrinho',
          loading: 'Carregando...',
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
