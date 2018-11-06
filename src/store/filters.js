const FIREBASE_DB = require('../firebase-config.js')

// Firebase Parameters to Filter
// -----------------------------
// selectedTags      {Array}
// projectCategory   {String}
// likes             {Number}
// dateAdded         {Date}

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
      var searchByRank = payload.rank === 'popular' || payload.rank === 'newest'

      // todo: Handling of this needs some more work...
      if (payload.projectCategory !== 'category' && !searchByRank) {
        query = query.where('projectCategory', '==', payload.projectCategory)
      }

      if (payload.tag !== 'tag' && !searchByRank) {
        query = query.where('selectedTags', 'array-contains', payload.tag)
      }

      if (payload.rank === 'popular') {
        query = query.orderBy('likes', 'desc')
      }

      if (payload.rank === 'newest') {
        query = query.orderBy('dateAdded', 'desc')
      }

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
