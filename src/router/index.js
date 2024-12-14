// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import i18n from '@/i18n'; // Importa la configurazione di vue-i18n

// Aggiungi la tua rotta con il prefisso per la lingua
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang', // Prefisso lingua
      name: 'Home',
      component: routes[0].component, // Mantieni il componente esistente per la Home
      beforeEnter: (to, from, next) => {
        const lang = to.params.lang || 'en'; // Imposta la lingua di default a 'en'
        i18n.global.locale = lang; // Imposta la lingua
        next();
      }
    },
    ...routes // Aggiungi tutte le altre rotte
  ]
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
