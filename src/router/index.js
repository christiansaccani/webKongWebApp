// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import i18n from '@/i18n'; // Importa la configurazione di vue-i18n

// Aggiungi un middleware per gestire il prefisso della lingua nel percorso
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map((route) => ({
    ...route,
    path: '/:locale' + route.path // Aggiungi il prefisso lingua
  }))
});

// Middleware per aggiornare la lingua
router.beforeEach((to, from, next) => {
  const locale = to.params.locale; // Ottieni la lingua dal percorso
  const supportedLocales = ['en', 'it', 'fr', 'es']; // Lingue supportate

  if (!locale || !supportedLocales.includes(locale)) {
    // Redirigi alla lingua di default se non valida
    return next({ path: `/en${to.path}`, replace: true });
  }

  // Imposta la lingua corrente
  if (i18n.global.locale !== locale) {
    i18n.global.locale = locale;
  }

  next();
});

// Workaround per https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
