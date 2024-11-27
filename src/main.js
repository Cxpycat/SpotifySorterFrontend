import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import './assets/main.css';
import i18n from "../i18n/index.js";

const app = createApp(App);

app.use(router);

app.use(VueAxios, axios);
app.use(i18n);

app.mount('#app');
