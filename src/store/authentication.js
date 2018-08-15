export default {
  state: {
    user: null,
    authToken: null
  },
  actions: {
    setCurrentUser ({ commit }, userObj) {
      commit('SET_CURRENT_USER', userObj)
    }
  },
  mutations: {
    SET_CURRENT_USER (state, userObj) {
      state.user = userObj.user
      state.authToken = userObj.authToken
    }
  },
  getters: {

  }
}
