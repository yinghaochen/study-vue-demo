import Vue from 'vue'
import CSIIVxWeb from '@csii/vx-web';
import '@csii/vx-web/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

Vue.use(CSIIVxWeb);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
