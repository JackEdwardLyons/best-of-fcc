<template>
  <header>
    <nav class="navbar fcc-navbar navbar-expand-lg navbar-dark" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img width="200" src="https://d33wubrfki0l68.cloudfront.net/4caa71c705cde0b749c14919b776d3aeb86701dd/458cf/img/freecodecamp.svg" />
        </a>
        <ul class="d-flex ml-auto" style="list-style: none;">
          <li class="nav-item">
            <a class="nav-link"
               href="#"
               @click="showModal('about-modal')"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="#"
               @click="showModal('add-project-modal')"
               v-if="userIsLoggedIn"
            >
              Add Project
            </a>
          </li>
          <li class="nav-item">
            <a class="menu-btn btn-sm"
               href="#"
               @click="showModal('user-auth-modal')"
               v-if="!userIsLoggedIn"
            >
              Log In | Sign Up
            </a>
            <a class="menu-btn btn-sm"
               href="#"
               @click="logoutUser"
               v-else
            >
              Log out
            </a>
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
    <div class="effectiv"><img alt="" class="svg" src="../assets/img/bg.svg"></div>
    <!-- About Modal -->
    <about-modal />
    <!-- Add New Project Modal -->
    <add-project-modal />
    <!-- Log in / Sign up Modal -->
    <user-auth-modal />
  </header>
</template>

<script>
import { modalMethods } from '@/mixins/modalMethods'
import AboutModal from './AboutModal'
import AddProjectModal from './AddProjectModal.vue'
import UserAuthModal from './UserAuthModal.vue'

export default {
  mixins: [modalMethods],
  components: {
    AboutModal,
    AddProjectModal,
    UserAuthModal
  },
  computed: {
    userIsLoggedIn () {
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
