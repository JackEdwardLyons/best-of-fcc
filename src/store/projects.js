const FIREBASE_DB = require('../firebase-config.js')

export default {
  state: {
    projects: []
  },
  actions: {
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

  },
  getters: {
    getProjects: (state) => { }
  }
}
