import Vue from 'vue'
import Vuex from 'vuex'
import { authentication } from './store/authentication'
import { projects } from './store/projects'
import { filters } from './store/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication: {
      authentication,
      namespaced: true
    },
    projects: {
      projects,
      namespaced: true
    },
    filters: {
      filters,
      namespaced: true
    }
  }
})
