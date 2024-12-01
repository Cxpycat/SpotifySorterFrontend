import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import './assets/main.css';
import i18n from "../i18n/index.js";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas, faUserSecret} from '@fortawesome/free-solid-svg-icons'

library.add(fas, faUserSecret)

const app = createApp(App);

app.use(router);

app.use(VueAxios, axios);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
