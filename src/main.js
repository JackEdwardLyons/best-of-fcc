import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vmodal from 'vue-js-modal'

import './assets/style/bootstrap.min.css'
import './assets/style/fontawesome-all.css'
import './assets/style/main.css'

const fb = require('./firebase-config.js')

Vue.use(vmodal, { dynamic: true })
Vue.config.productionTip = false

let app
// This will make sure Firebase initializes before
// loading the app when a user refreshes a page.
fb.auth.onAuthStateChanged(user => {
  if (user) {
    console.log('already logged in', user)
    store.dispatch('auth/setCurrentUser', user)
  }

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
