<template>
    <modal name="user-profile-modal"
           :adaptive="true"
           :scrollable="true"
           :height="'auto'"
           :width="'60%'"
    >
      <div class="container mt-4 mb-4" v-if="user">
        <img class="img-responsive avatar-img" :src="user.photoURL" alt="Your Github avatar" />
        <h2 class="text-center mt-4 modal-heading--black">
          {{ user.displayName }}
        </h2>
        <button class="btn-info text-center logout-btn" @click="logoutUser">
          Log out
        </button>
      </div>
    </modal>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters['auth/user']
    }
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('auth/logoutUser')
      this.$modal.hide('user-profile-modal')
    }
  }
}
</script>

<style>
.avatar-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}

.logout-btn {
  width: auto;
  margin: 0 auto;
  display: block;
  margin-top: 1em;
  border: medium none;
  border-radius: 100px;
  -webkit-box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-weight: bold;
  padding: .5em 1em;
  text-transform: uppercase;
}
</style>
