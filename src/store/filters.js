const FIREBASE_DB = require('../firebase-config.js')

export default {
  state: {
    projects: [],
    allProjects: []
  },
  actions: {
    resetFilters ({ state, rootState }) {
      rootState.posts.projects = state.allProjects
    },
    onFilterSubmit ({ state, rootState, commit }, payload) {
      // filter projectsCollection by category
      FIREBASE_DB.projectsCollection
        // hard coding project category to start with
        .where('projectCategory', '==', payload.projectCategory)
        .get()
        .then(querySnapshot => {
          let projectData = querySnapshot.docs.map(item => item.data())
          commit('SET_FILTERS', projectData)
        })
        .then(n => {
          rootState.posts.projects = state.projects
        })
    }
  },
  mutations: {
    SET_FILTERS (state, payload) {
      state.projects = payload
    }
  },
  getters: {
  }
}
