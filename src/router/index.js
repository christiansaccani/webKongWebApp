// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import i18n from '@/i18n'; // Importa la configurazione di vue-i18n

// Aggiungi il prefisso della lingua nella configurazione del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Gestisce correttamente la sottocartella in produzione
  routes: routes.map((route) => ({
    ...route,
    path: '/:lang' + route.path // Aggiungi il prefisso lingua
  }))
});

// Middleware per aggiornare la lingua
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en'; // Se non è presente una lingua nel percorso, usa 'en' come lingua di default
  const supportedLocales = ['en', 'it', 'fr', 'es']; // Lingue supportate

  if (!supportedLocales.includes(lang)) {
    // Se la lingua non è supportata, reindirizza alla lingua di default ('en')
    return next({ path: `/en${to.path}`, replace: true });
  }

  // Imposta la lingua corrente
  i18n.global.locale = lang;

  next();
});

// Gestione degli errori del router
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

// Attende che il router sia pronto e rimuove il flag di reload dinamico
router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
