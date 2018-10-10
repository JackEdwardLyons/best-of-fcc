<template>
    <section class="features-block" id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-sm-12 offset-md-1">
                    <div class="project-item text-center">
                        <div class="custom-card card card-outline-primary h-100">
                            <div class="card-body bg-primary">
                                <h6 class="text-white">Filter Results</h6>
                                <sort-filter></sort-filter>
                            </div>
                            <div v-if='loading' class="loading-placeholder">
                                <code-loader></code-loader>
                            </div>
                            <div v-if='!loading && projects.length === 0' class="pt-4 pb-4">
                                <h3 class="text-center text-black">There are no results to display</h3>
                            </div>
                            <ul class="list-group list-group-flush" v-if="!loading && projects.length > 0">
                                <card-item v-for="project in projects"
                                           :key="project.id"
                                           :project="project">
                                </card-item>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardItem from './CardItem.vue'
import SortFilter from './SortFilter.vue'
import { CodeLoader } from 'vue-content-loader'

export default {
  components: {
    CardItem,
    SortFilter,
    CodeLoader
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    projects () {
      return this.$store.getters['posts/getProjects']
    }
  },
  watch: {
    projects () {
      if (this.projects && this.projects.length > 0) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.loading-placeholder {
    margin: 2em 0 0 2em;
    height: 200px;
}
</style>
