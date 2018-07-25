<template>
    <modal name="user-auth-modal" :adaptive="true" :scrollable="true" :height="'auto'" :width="'50%'" :minWidth="300">

        <div class="container auth-container">
            <h3 class="text-center login-heading">
                Login / Sign Up
            </h3>
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
                    <form class="loginForm" action="" autocomplete="off" method="POST">
                        <div class="input-group">
                            <input type="text" class="form-control" name="username" placeholder="Username">
                        </div>
                        <hr />

                        <div class="input-group">
                            <input  type="password" class="form-control" name="password" placeholder="Password">
                        </div>
                        <span class="tag tag-danger" v-if="errorMsg">{{ erorMsg }}</span>
                        <span class="tag tag-success" v-if="successMsg">{{ successMsg }}</span>
                        <hr />
                        <button class="btn btn-lg btn-outline-primary btn-block" type="submit"><i class="fa fa-sign-in"></i> Login</button>
                    </form>
                </div>
                <div class="col-sm-12 mt-2">
                    <p class="text-center">Forgot password?</p>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
  data () {
    return {
      successMsg: '',
      errorMsg: ''
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
.btn.login-btn {
    padding: 2px;
    margin: 0 1em;
}
</style>
