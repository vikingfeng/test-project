// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './vuex/store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
// import '@/assets/common.less';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
