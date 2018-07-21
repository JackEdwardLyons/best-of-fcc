import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // get rid of url hash, which leverages history.pushState
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
