<template>
    <li class="list-group-item">
        <div class="card-body">
            <a href="https://codepen.io/JackEdwardLyons/pen/bEpPqB" target="_blank">
                <h4 class="card-title">
                    {{ project.projectTitle }}
                    <small class="author sm-60">
                        posted by {{ project.projectAuth }}
                    </small>
                </h4>
            </a>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ project.shortDescription }}
            </h6>
            <p class="card-text">
                {{ project.longDescription }}
                <b class="clickable">Show more</b>
            </p>
            <div class="item-meta d-flex justify-content-between">
                <span class="item-meta__likes text-center">
                    <span class="badge badge-info vote-count mr-1 mb-1-xs">{{ project.likes }} Votes</span>
                    <span class="vote-add" v-if="userIsLoggedIn">
                        <i class="fa fa-thumbs-up fa-thumbs-up-xs"></i>
                    </span>
                </span>
                <div class="item-meta__tags-list ml-1-xs">
                    <p>
                        <b>Tags: &nbsp;</b>
                        <a href="#" class="card-link font-xs-60 ml-2 badge badge-primary mt-1-xs"
                           v-for="tag in project.selectedTags"
                           :key="tag"
                        >
                            {{ tag }}
                        </a>
                    </p>
                    <span class="font-xs-60 ml-2 badge badge-danger mt-1-xs pull-right">{{ project.projectCategory }}</span>
                </div>
            </div>
        </div>
        </li>
</template>

<script>
export default {
  props: ['project'],
  computed: {
    userIsLoggedIn () {
      return this.$store.getters['auth/user']
    }
  }
}
</script>

<style>

</style>
