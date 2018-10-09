import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './store/authentication'
import projects from './store/posts'
import filters from './store/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: {
      ...authentication,
      namespaced: true
    },
    posts: {
      ...projects,
      namespaced: true
    },
    filters: {
      ...filters,
      namespaced: true
    }
  }
})
