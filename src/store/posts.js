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
    likeProject ({ state, rootState, commit }, payload) {
      // when the user clicks the vote thumbs up...
      const loggedInUserUID = rootState.auth.user.uid
      let docId = `${loggedInUserUID}_${payload.projectId}`
      let likesCollection = FIREBASE_DB.likesCollection.doc(docId)

      likesCollection.get().then(doc => {
        if (doc.exists) {
          return
        }
        likesCollection.set({
          projectId: payload.projectId,
          userId: loggedInUserUID
        }).then((data) => {
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
