export const authentication = {
  state: { },
  mutations: {
    setUser (state, user) {
      // state.user = user
    },
    logout (state) {
      // state.user = null
    }
  },
  getters: {
    username: state => {
      // return state.user && state.user.username
    }
  }
}
