import { createI18n } from 'vue-i18n';

// Importa i file JSON
import en from './locales/en.json';
import it from './locales/it.json';
import fr from './locales/fr.json';

// Configurazione
const i18n = createI18n({
  locale: 'en', // Lingua di default
  fallbackLocale: 'en', // Lingua fallback
  messages: {
    en,
    it,
    fr
  }
});

export default i18n;