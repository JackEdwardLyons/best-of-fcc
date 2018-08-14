<template>
    <modal name="user-auth-modal" 
           :adaptive="true" 
           :scrollable="true" 
           :height="'auto'" 
           :width="'50%'" 
           :minWidth="300"
           @closed="clearUserData">
        <div class="container auth-container">
            <h4 class="text-center login-heading" @click="switchAuthOption">
                <span :class="{ 'active': authOption === 'login' }" class="auth-option">Login</span>
                &nbsp;
                <span :class="{ 'active': authOption === 'signup' }" class="auth-option">Sign Up</span>
            </h4>
            <div class="row">
                <div class="col-sm-12 text-center mb-4">
                    <button class="btn login-btn" title="Login with GitHub">
                        <img width="40" src="../assets/img/google-icon.png" />
                    </button>
                    <button class="btn login-btn" title="Login with GitHub">
                        <img width="40" src="../assets/img/git-icon.png" />
                    </button>
                </div>
                <div class="col-sm-12">
                    <form class="loginForm" action="" autocomplete="off" @submit.prevent="authenticateUser">
                        <div class="input-group">
                            <input
                                v-model="model.email"
                                type="email"
                                class="form-control"
                                name="email"
                                placeholder="Email"
                            >
                        </div>
                        <hr />

                        <div class="input-group">
                            <input
                                v-model="model.password"
                                type="password"
                                class="form-control"
                                name="password"
                                placeholder="Password"
                            >
                        </div>
                        <hr />
                        <button class="btn btn-lg btn-outline-primary btn-block"
                                type="submit"
                                @click="authenticateUser"
                        >
                            {{ authOption }}
                        </button>
                    </form>
                </div>
                <div class="col-sm-12 mt-2">
                    <p class="tag text-danger text-center" v-if="errorMsg">{{ errorMsg }}</p>
                    <p class="tag text-success text-center" v-if="successMsg">{{ successMsg }}</p>
                    <p class="text-center">Forgot password?</p>
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
      successMsg: '',
      errorMsg: '',
      model: {
        email: '',
        password: ''
      },
      authOption: 'login'
    }
  },
  methods: {
    clearUserData () {
      this.model.email = ''
      this.model.password = ''
      this.errorMsg = ''
    },
    switchAuthOption () {
      return this.authOption === 'login'
        ? this.authOption = 'signup'
        : this.authOption = 'login'
    },
    authenticateUser () {
      return this.authOption === 'login'
        ? this.loginUser()
        : this.signupUser()
    },
    signupUser () {
      var self = this
      var email = this.model.email
      var password = this.model.password
      this.clearUserData()
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('thanks for signing up ', email)
          this.$modal.hide('user-auth-modal')
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/weak-password') {
            self.errorMsg = 'The password is too weak.'
          } else {
            self.errorMsg = errorMessage
            console.log(self.errorMsg)
          }
          self.errorMsg = errorMessage
          console.log(error)
        })
    },
    loginUser () {
      var self = this
      var email = this.model.email
      var password = this.model.password
      this.clearUserData()
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('hi there ', email)
          this.$modal.hide('user-auth-modal')
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/wrong-password') {
            self.errorMsg = 'The password is too weak.'
          } else {
            self.errorMsg = errorMessage
            console.log(self.errorMsg)
          }
          self.errorMsg = errorMessage
          console.log(error)
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
