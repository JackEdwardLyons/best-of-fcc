<template>
    <modal name="user-auth-modal"
           :adaptive="true"
           :scrollable="true"
           :height="'auto'"
           :width="'50%'"
           :minWidth="300"
           @closed="clearAuthMessages">
        <div class="container auth-container">
            <h4 class="text-center login-heading">
                Login or Sign up <br />
                <small>Open to developers only at this stage.</small>
            </h4>

            <div class="row">
                <div class="col-sm-12">
                    <div class="loginForm">
                        <div class="input-group">
                            <div class="col-sm-12 text-center mb-4">
                                <button class="btn login-btn"
                                        title="Login with Github"
                                        @click="loginWithGithub"
                                >
                                    <img width="40" src="../assets/img/git-icon.png" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 mt-2">
                    <p class="tag text-danger text-center" v-if="errorMsg">{{ errorMsg }}</p>
                    <p class="tag text-success text-center" v-if="successMsg">{{ successMsg }}</p>
                    <p class="text-center" v-if="loading">Please wait while we fetch your Github credentials ...</p>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
      errorMsg: '',
      successMsg: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters['auth/loading']
    }
  },
  methods: {
    clearAuthMessages () {
      this.errorMsg = ''
      this.successMsg = ''
    },
    loginWithGithub () {
      this.$store.dispatch('auth/setLoadingToTrue')
      var provider = new firebase.auth.GithubAuthProvider()

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // GitHub Access Token can be used to access the GitHub API.
          var authToken = result.credential.accessToken
          var user = result.user
          this.$store.dispatch('auth/setCurrentUser', { user, authToken })
          return user
        })
        .then((user) => {
          this.$store.dispatch('auth/setLoadingToFalse')
          this.successMsg = 'Welcome aboard ' + user.displayName
        })
        .then(() => {
          setTimeout(() => this.$modal.hide('user-auth-modal'), 500)
        })
        .catch((error) => {
          this.errorMsg = `${error.message} (Error Code: ${error.code} }.`
        })
    }
  }
}
</script>

<style>
.login-heading {
    color: #000;
    margin: 1em;
}
.auth-container {
    padding: 1em;
}
.auth-option:hover {
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s ease;
}
.auth-option.active {
    text-decoration: underline;
    font-weight: bold;
}
.btn.login-btn {
    padding: 2px;
    margin: 0 1em;
}
</style>
