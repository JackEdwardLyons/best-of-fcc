<template>
    <li class="list-group-item">
        <article class="card-body">
            <span class="font-xs-60 ml-2 badge badge-danger mt-1-xs pull-right">{{ project.projectCategory }}</span>
            <a href="https://codepen.io/JackEdwardLyons/pen/bEpPqB" target="_blank">
                <h4 class="card-title" data-test__project-title>
                    {{ project.projectTitle }}
                    <small class="author sm-60" data-test__project-auth>
                        posted by {{ project.projectAuth }}
                    </small>
                </h4>
            </a>
            <p class="card-text">
                {{ project.longDescription }}
            </p>
            <div class="item-meta d-flex justify-content-between">
                <span class="item-meta__likes text-center">
                    <span class="badge badge-info vote-count mr-1 mb-1-xs">{{ project.likes }} Votes</span>
                    <span class="vote-add" v-if="userIsLoggedIn">
                        <i class="fa fa-thumbs-up fa-thumbs-up-xs"></i>
                    </span>
                    <span class="vote-add text-danger" v-else>
                        Please log in to vote.
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
                </div>
            </div>
        </article>
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
