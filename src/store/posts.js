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
      const loggedInUserUID = state.rootState.auth.user.uid
      let docId = `${loggedInUserUID}_${payload.projectId}`

      FIREBASE_DB.likesCollection.doc(docId).get().then(doc => {
        if (doc.exists) {
          return
        }
        FIREBASE_DB.likesCollection.doc(docId).set({
          projectId: payload.projectId,
          userId: loggedInUserUID
        }).then(() => {
          // update post likes
          FIREBASE_DB.projectsCollection.doc(payload.projectId).update({
            likes: payload.projectLikes + 1
          })
        })
      }).catch(err => { console.log(err) })
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
