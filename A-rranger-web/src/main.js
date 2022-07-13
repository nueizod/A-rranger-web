import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from 'axios';

Vue.use(Toast);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
