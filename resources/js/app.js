import './bootstrap';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { store } from '@/stores/userStore';
import { Quasar, Notify } from 'quasar';
import quasarLang from 'quasar/lang/lt';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

createApp(App)
    .use(store)
    .use(router)
    .use(Quasar, {
        plugins: {
          Notify
        },
        lang: quasarLang
      })
    .mount('#app')
