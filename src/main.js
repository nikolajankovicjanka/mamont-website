import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import'./style/index.scss'

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrimeVue from 'primevue/config'

//plugins

import Image from './plugins/Image'

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(Image)
app.use(PrimeVue);
app.mount('#app');

