import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import API from './plugins/api';

Vue.prototype.$http = API
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  el: '#app',
  render: h => h(App),
 
}).$mount('#app')
