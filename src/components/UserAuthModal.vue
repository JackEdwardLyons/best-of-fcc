<template>
    <modal name="user-auth-modal" :adaptive="true" :scrollable="true" :height="'auto'" :width="'80%'">

        <div class="container auth-container">
            <h3 class="text-center login-heading">
                Login / Sign Up
            </h3>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <button class="btn login-btn" title="Login with GitHub">
                        <img width="40" src="../assets/img/google-icon.png" />
                    </button>
                    <button class="btn login-btn" title="Login with GitHub">
                        <img width="40" src="../assets/img/git-icon.png" />
                    </button>
                </div>
            </div>

            <div class="row kpx_row-sm-offset-3">
                <div class="col-xs-12 col-sm-6">
                    <hr />
                    <span>or</span>
                </div>
            </div>

            <div class="row kpx_row-sm-offset-3">
                <div class="col-xs-12 col-sm-6">
                    <form class="kpx_loginForm" action="" autocomplete="off" method="POST">
                        <div class="input-group">
                            <span class="input-group-addon"><span class="fa fa-user"></span></span>
                            <input type="text" class="form-control" name="username" placeholder="Username">
                        </div>
                        <hr />

                        <div class="input-group">
                            <span class="input-group-addon">
                                <span class="fa fa-key"></span>
                            </span>
                            <input  type="password" class="form-control" name="password" placeholder="Password">
                        </div>
                        <span class="tag tag-danger">Password Error!</span>
                        <span class="tag tag-success">Login success!</span>
                        <span class="tag tag-warning">Some of password must not be empty!</span>
                        <hr />
                        <button class="btn btn-lg btn-outline-primary btn-block" type="submit"><i class="fa fa-sign-in"></i> Login</button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-3">
                    <p class="kpx_forgotPwd">
                        <a href="#">Forgot password?</a>
                    </p>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {

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
