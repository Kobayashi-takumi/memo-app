import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './firebase/firebaseLogin.js'
import './firebase/firestore.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
