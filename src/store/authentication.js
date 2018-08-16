import firebase from 'firebase'

export default {
  state: {
    authToken: null,
    user: null,
    loading: false
  },
  actions: {
    setLoadingToTrue ({ commit }) {
      commit('SET_LOADING_TO_TRUE')
    },
    setLoadingToFalse ({ commit }) {
      commit('SET_LOADING_TO_FALSE')
    },
    setCurrentUser ({ state, commit }, userObj) {
      commit('SET_CURRENT_USER', userObj)
    },
    logoutUser ({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => commit('LOG_OUT_USER'))
        .catch((error) => { console.log('error logging out: ', error) })
    }
  },
  mutations: {
    SET_LOADING_TO_TRUE (state) {
      state.loading = true
    },
    SET_LOADING_TO_FALSE (state) {
      state.loading = false
    },
    SET_CURRENT_USER (state, userObj) {
      state.user = userObj.user
      state.authToken = userObj.authToken
    },
    LOG_OUT_USER (state) {
      state.user = ''
      state.authToken = ''
    }
  },
  getters: {
    user: (state) => state.user,
    loading: (state) => state.loading
  }
}
