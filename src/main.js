// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import { i18n } from './i18n/i18n.config';

import 'swiper/dist/css/swiper.min.css';
import './style-sheets/global.scss';
import './style-sheets/media-lg.scss';
import './style-sheets/media-xs.scss';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
