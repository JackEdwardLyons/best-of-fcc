<template>
  <header>
    <nav class="navbar fcc-navbar navbar-expand-lg navbar-dark" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/">
            <img alt="FreeCodeCamp logo" width="200" src="https://d33wubrfki0l68.cloudfront.net/4caa71c705cde0b749c14919b776d3aeb86701dd/458cf/img/freecodecamp.svg" />
        </a>
        <ul class="d-flex ml-auto" style="list-style: none;">
          <li class="nav-item">
            <span class="nav-link"
               @click="showModal('about-modal')"
            >
              About
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link"
               @click="showModal('add-project-modal')"
               v-if="loggedInUser"
            >
              Add Project
            </span>
          </li>
          <li class="nav-item">
            <span class="menu-btn btn-sm"
               @click="showModal('user-auth-modal')"
               v-if="!loggedInUser"
            >
              Log In | Sign Up
            </span>
            <span class="menu-btn btn-sm"
               @click="logoutUser"
               v-else
            >
              Log out
            </span>
          </li>
          <li class="nav-item">
            <span class="menu-btn btn-sm"
              @click="showModal('user-profile-modal')"
              v-if="loggedInUser"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
      </div>
    </nav>
    <section class="banner-block pb-0" id="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="text-white">Best of <strong>Free Code Camp</strong></h1>
            </div>
          </div>
        </div>
    </section>
    <!-- Curvy base of the page -->
    <div class="effectiv"><img alt="green background svg" class="svg" src="../../assets/img/bg.svg"></div>
    <!-- About Modal -->
    <about-modal />
    <!-- Add New Project Modal -->
    <add-project-modal />
    <!-- Log in / Sign up Modal -->
    <user-auth-modal />
    <!-- User Profile Modal -->
    <user-profile-modal />
  </header>
</template>

<script>
import modalMethods from '@/mixins/modalMethods'
import AboutModal from '../Modals/AboutModal'
import AddProjectModal from '../Modals/AddProjectModal.vue'
import UserAuthModal from '../Modals/UserAuthModal.vue'
import UserProfileModal from '../Modals/UserProfileModal.vue'

export default {
  mixins: [modalMethods],
  components: {
    AboutModal,
    AddProjectModal,
    UserAuthModal,
    UserProfileModal
  },
  computed: {
    loggedInUser () {
      return this.$store.getters['auth/user']
    }
  },
  methods: {
    logoutUser () {
      this.$store.dispatch('auth/logoutUser')
    }
  }
}
</script>
