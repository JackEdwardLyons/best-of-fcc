const FIREBASE_DB = require('../firebase-config.js')

// Firebase Parameters to Filter
// -----------------------------
// selectedTags      {Array}
// projectCategory   {String}
// votes             {Number}

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
      var query = FIREBASE_DB.projectsCollection

      // todo: This needs refactoring to remove duplication
      // if (payload.projectCategory !== 'category') {
      //   query = query.where('projectCategory', '==', payload.projectCategory)
      // }

      console.log(payload.likes)
      if (payload.likes > 0) {
        query = query.where('selectedTags', 'array-contains', payload.tags)
      }

      // if (payload.tags !== 'tags') {
      //   query = query.where('selectedTags', 'array-contains', payload.tags)
      // }

      query
        .get()
        .then(querySnapshot => {
          let projectData = querySnapshot.docs.map(item => item.data())
          commit('SET_FILTERS', projectData)
        })
        .then(n => { rootState.posts.projects = state.projects })
    }
  },
  mutations: {
    SET_FILTERS (state, payload) {
      state.projects = payload
    }
  }
}
