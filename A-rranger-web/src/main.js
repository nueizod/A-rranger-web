import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from 'axios';
import VModal from 'vue-js-modal'

Vue.use(Toast);
Vue.use(VModal, { dynamic: true });

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.config.errorHandler = (e) => {
  console.error(e);
  Vue.prototype.$toast.error(e.message);
}

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app')
