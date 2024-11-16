import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './core/router/pages'
import Toaster from "@meforma/vue-toaster";
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const app = createApp(App);
const vuetify = createVuetify();
const pinia = createPinia();

app.use(router);
app.use(Toaster);
app.use(pinia);
app.use(vuetify);

app.mount("#app");