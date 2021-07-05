import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(createDynamicForms())
  .mount('#app')
