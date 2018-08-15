<template>
    <modal name="user-auth-modal"
           :adaptive="true"
           :scrollable="true"
           :height="'auto'"
           :width="'50%'"
           :minWidth="300"
           @closed="clearUserData">
        <div class="container auth-container">
            <h4 class="text-center login-heading">
                Login or Sign up by clicking the Github icon
            </h4>
            <div class="row">
                <div class="col-sm-12">
                    <div class="loginForm">
                        <div class="input-group">
                            <div class="col-sm-12 text-center mb-4">
                                <button class="btn login-btn"
                                        title="Login with Gmail"
                                        @click="loginWithGmail"
                                >
                                    <img width="40" src="../assets/img/google-icon.png" />
                                </button>
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
                    <p v-if="loading" class="text-center">Please wait ...</p>
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
      successMsg: '',
      loading: false
    }
  },
  methods: {
    clearUserData () {
      this.userName = ''
      this.userEmail = ''
      this.userPassword = ''
      this.errorMsg = ''
      this.successMsg = ''
    },
    loginWithGithub () {
      this.loading = true
      var provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a GitHub Access Token.
        // Use it to access the GitHub API.
        var authToken = result.credential.accessToken
        var user = result.user
        this.$store.dispatch('auth/setCurrentUser', { user, authToken })
        return user
      })
        .then((user) => { 
          this.loading = false
          this.successMsg = 'Welcome aboard ' + user.displayName 
        })
        .then(() => { setTimeout(() => this.$modal.hide('user-auth-modal'), 500) })
        .catch((error) => {
        // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          console.log('error: ', email, credential, errorCode)
          this.errorMsg = errorMessage
        })
    },
    loginWithGmail () {
      console.log('gm login')
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
