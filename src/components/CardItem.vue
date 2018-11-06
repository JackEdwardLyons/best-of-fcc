<template>
    <li class="list-group-item">
        <article class="card-body">
            <span :class="categoryBgClass(project.projectCategory)" class="font-xs-60 ml-2 badge mt-1-xs pull-right">{{ project.projectCategory }}</span>
            <a :href="project.projectUrl" target="_blank">
                <h4 class="card-title" data-test__project-title>
                <i class="fa fa-link" aria-hidden="true"></i>
                    {{ project.projectTitle }}
                    <small class="author sm-60" data-test__project-auth>
                        posted by {{ project.projectAuth }}
                    </small>
                </h4>
            </a>
            <p class="card-text">
                {{ project.longDescription }} <br>
                <strong>Posted on {{ setLocalDateFormat(project.dateAdded) }}.</strong>
            </p>
            <div class="item-meta d-flex justify-content-between">
                <span class="item-meta__likes text-center">
                    <span class="badge badge-info vote-count mr-1 mb-1-xs">{{ project.likes }} {{ project.likes === 1 ? 'Vote' : 'Votes' }}</span>
                    <span class="vote-add" v-if="userIsLoggedIn">
                        <i @click="likeProject(project.id, project.likes)" class="fa fa-thumbs-up fa-thumbs-up-xs"></i>
                    </span>
                    <span class="vote-add text-danger" v-else>
                        Please log in to vote.
                    </span>
                </span>
                <div class="item-meta__tags-list ml-1-xs">
                    <p>
                        <b>Tags: &nbsp;</b>
                        <span class="card-link font-xs-60 ml-2 item-meta__tags-list__badge badge badge-info mt-1-xs"
                           v-for="tag in project.selectedTags"
                           :key="tag"
                        >
                            {{ tag }}
                        </span>
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
  },
  methods: {
    likeProject (projectId, projectLikes) {
      this.$store.dispatch('posts/likeProject', { projectId, projectLikes })
    },
    categoryBgClass (projectCategory) {
      return {
        'Front End': 'badge-primary',
        'Back End': 'badge-secondary',
        'Full Stack': 'badge-danger',
        'Data Visualization': 'badge-success'
      }[projectCategory]
    },
    setLocalDateFormat (date) {
      let formattedDate = new Date(date)
      return formattedDate.toLocaleDateString('en-GB')
    }
  }
}
</script>

<style>
.card-body .fa-link {
    font-size: 70%;
    bottom: 2px;
    position: relative;
}

.card-text, 
p, 
b {
    color: #00313a;
}

@media screen and (max-width: 700px) {
    .card-title .author {
        display: block;
    }
}
</style>
