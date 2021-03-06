/** *
 * Authentication Vuex Store
 * Everything required to authenticate users with Github and Firebase
 * **/
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
const FIREBASE_DB = require('../firebase-config.js')

export default {
  state: {
    user: null,
    loading: false,
    successMsg: '',
    errorMsg: ''
  },

  actions: {
    setLoadingToTrue ({ commit }) {
      commit('SET_LOADING_TO_TRUE')
    },

    setLoadingToFalse ({ commit }) {
      commit('SET_LOADING_TO_FALSE')
    },

    clearAuthMessages ({ commit }) {
      commit('CLEAR_AUTH_MESSAGES')
    },

    setCurrentUser ({ commit }, userObj) {
      commit('SET_CURRENT_USER', userObj)
    },

    fetchUserProfile ({ state, commit }) {
      FIREBASE_DB.usersCollection
        .doc(state.user.uid)
        .get()
        .catch(err => { alert(err) })
    },

    logoutUser ({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => commit('LOG_OUT_USER'))
        .catch((error) => commit('SET_ERROR_MSG', `${error.message} (Error Code: ${error.code} }.`))
    },

    loginWithGithub ({ dispatch, commit }) {
      var provider = new firebase.auth.GithubAuthProvider()
      // const FIREBASE_DB = firebase.database()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // GitHub Access Token can be used to access the GitHub API.
          // var authToken = result.credential.accessToken
          var user = result.user
          dispatch('setCurrentUser', { user })
          dispatch('fetchUserProfile')

          FIREBASE_DB.usersCollection.doc(user.uid)
            .set({
              name: user.displayName,
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL
            })
            .catch((e) => alert('error storing user in db: ', e))
          return user
        })
        .then((user) => {
          dispatch('setLoadingToFalse')
          commit('SET_SUCCESS_MSG', `Welcome aboard ${user.displayName}`)
        })
        .catch((error) => {
          commit('SET_ERROR_MSG', `${error.message} (Error Code: ${error.code} }.`)
        })
    }
  },

  mutations: {
    SET_LOADING_TO_TRUE (state) {
      state.loading = true
    },

    SET_SUCCESS_MSG (state, payload) {
      state.successMsg = payload
    },

    SET_ERROR_MSG (state, payload) {
      state.errorMsg = payload
    },

    CLEAR_AUTH_MESSAGES (state) {
      state.successMsg = ''
      state.errorMsg = ''
    },

    SET_LOADING_TO_FALSE (state) {
      state.loading = false
    },

    SET_CURRENT_USER (state, userObj) {
      if (userObj.user) {
        state.user = userObj.user
      } else {
        state.user = userObj
      }
    },

    LOG_OUT_USER (state) {
      state.user = ''
    }
  },

  getters: {
    user: (state) => state.user,
    loading: (state) => state.loading,
    successMsg: (state) => state.successMsg,
    errorMsg: (state) => state.errorMsg
  }
}
