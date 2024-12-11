// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// i18n (multilingua)
import i18n from './i18n';

const app = createApp(App);

// Registra i plugin personalizzati
registerPlugins(app);

// Usa i18n per la gestione della lingua
app.use(i18n);

// Font Awesome per le icone
import '@fortawesome/fontawesome-free/css/all.css';

app.mount('#app');
