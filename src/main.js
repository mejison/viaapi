import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
extend('required', required);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

export default app