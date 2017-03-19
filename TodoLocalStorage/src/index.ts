import Vue from 'vue';
import router from './router';
import App from './app';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App }
})
