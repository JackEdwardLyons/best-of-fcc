<template>
  <header>
    <nav class="navbar fcc-navbar navbar-expand-lg navbar-dark" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img width="200" src="https://d33wubrfki0l68.cloudfront.net/4caa71c705cde0b749c14919b776d3aeb86701dd/458cf/img/freecodecamp.svg" />
        </a>

        <div class="">
          <ul class="d-flex ml-auto" style="list-style: none;">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#" @click="showModal('about-modal')">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#" @click="showModal('add-project-modal')">Add Project</a>
            </li>
            <li class="nav-item">
              <a class="js-scroll-trigger menu-btn btn-sm" href="#trial">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="banner-block pb-0" id="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="text-white">Best of <strong>FreeCodeCamp</strong></h1>
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
  </header>
</template>

<script>
import AboutModal from './AboutModal'
import AddProjectModal from './AddProjectModal.vue'
export default {
  components: {
    AboutModal,
    AddProjectModal
  },
  methods: {
    showModal (modalName) {
      this.$modal.show(modalName)
    }
  }
}
</script>
