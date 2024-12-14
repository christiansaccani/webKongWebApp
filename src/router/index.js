// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';
import i18n from '@/i18n';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: routes.map((route) => ({
    ...route,
    path: '/:lang' + route.path
  }))
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || 'en';
  const supportedLocales = ['en', 'it', 'fr', 'es'];

  if (!supportedLocales.includes(lang)) {
    return next({ path: `/en${to.path}`, replace: true });
  }

  i18n.global.locale = lang;

  if (!to.params.lang && to.path !== '/en') {
    return next({ path: `/en${to.path}`, replace: true });
  }

  next();
});

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
