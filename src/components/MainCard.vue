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
                            <ul class="list-group list-group-flush">
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

export default {
  components: {
    CardItem,
    SortFilter
  },
  computed: {
    projects () {
      return this.$store.getters['posts/getProjects']
    }
  }
}
</script>
