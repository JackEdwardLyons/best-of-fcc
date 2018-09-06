const FIREBASE_DB = require('../firebase-config.js')

export default {
  state: {
    projects: []
  },
  actions: {
    setProjects ({ commit }, payload) {
      commit('SET_PROJECTS', payload)
    },
    addProject (state, payload) {
      FIREBASE_DB.projectsCollection
        .add({
          ...payload,
          likes: 0
        })
        .then(ref => { console.log(ref) }) // this.post.content = '' })
        .catch(err => { console.log(err) })
    },
    likeProject (state, payload) {
      // when the user clicks the vote thumbs up...
    }
  },
  mutations: {
    SET_PROJECTS (state, payload) {
      state.projects = payload
    }
  },
  getters: {
    getProjects: (state) => { return state.projects }
  }
}
