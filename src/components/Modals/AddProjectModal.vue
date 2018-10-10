<template>
    <modal v-if="loggedInUser"
           name="add-project-modal"
           @closed='resetFields'
           :adaptive="true"
           :scrollable="true"
           :height="'auto'"
           :width="'80%'"
    >
        <form class="modal-form">
            <h2 class="submit-project-title text-center">
                Add Your Project Here
            </h2>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="projectTitle">Project Title</label>
                    <input maxlength="30"
                           type="text"
                           class="form-control"
                           id="projectTitle"
                           placeholder="Project Title"
                           v-model="model.projectTitle"
                           v-sanitaize
                           required
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="projectLongDescription">Long Description</label>
                <textarea maxlength="140"
                          rows="3"
                          class="form-control"
                          id="projectLongDescription"
                          placeholder="Long Description (max. 140 words)"
                          v-model="model.longDescription"
                          v-sanitaize
                          required
                ></textarea>
            </div>
            <div class="form-group col-md-6 p-lr-0">
                <label for="projectURL">Project URL</label>
                <input type="url"
                       class="form-control"
                       id="projectURL"
                       placeholder="Project URL goes here..."
                       v-model="model.projectUrl"
                       v-sanitaize
                       required
                >
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="projectCategory">Category</label>
                    <select id="projectCategory"
                            class="form-control"
                            v-model="model.projectCategory"
                            placeholder="Category"
                            required
                    >
                        <option value="" hidden selected disabled>Category</option>
                        <option>Front End</option>
                        <option>Back End</option>
                        <option>Full Stack</option>
                        <option>Data Visualization</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="projectTags">Tags</label>
                    <tags-input
                        placeholder="Type &amp; press enter to add a tag."
                        required
                        :limit="3"
                        v-model="model.selectedTags"
                        class="project-tags-input"
                        element-id="projectTags"
                        :typeahead-activation-threshold="2"
                        :typeahead="true"
                        :existing-tags="{
                            'php': 'PHP',
                            'vue': 'Vue.js',
                            'jQuery': 'jquery',
                            'react': 'react',
                            'MongoDB': 'mongodb',
                            'firebase': 'Firebase',
                            'angularjs': 'angularjs',
                            'angular2x': 'angular2x',
                            'javascript': 'javascript',
                            'react-native': 'react native',
                            'nativescript': 'nativescript'
                        }">
                    </tags-input>
                </div>
            </div>
            <div class="form-row d-flex justify-content-center">
                <button @click.prevent="addProject" type="submit" class="text-center btn btn-primary btm-sm">Submit Project</button>
            </div>
        </form>
    </modal>
</template>

<script>
import VoerroTagsInput from '@voerro/vue-tagsinput'
import Vue from 'vue'

export default {
  components: {
    'tags-input': VoerroTagsInput
  },
  data () {
    return {
      formSubmitted: false,
      model: {
        projectTitle: '',
        shortDescription: '',
        longDescription: '',
        selectedTags: [],
        projectCategory: '',
        projectUrl: '',
        dateAdded: null
      }
    }
  },
  methods: {
    addProject () {
      let currentDate = (() => {
        const d = new Date()
        return d.getTime()
      })()

      Vue.set(this.model, 'dateAdded', currentDate)
      let newProject = Object.assign({}, this.model, { projectAuth: this.loggedInUser.displayName })
      this.$store.dispatch('posts/addProject', newProject)
      this.formSubmitted = true
      this.$modal.hide('add-project-modal')
    },
    resetFields () {
      this.formSubmitted = false
      this.model = {
        projectTitle: '',
        shortDescription: '',
        longDescription: '',
        selectedTags: [],
        projectCategory: '',
        projectUrl: '',
        dateAdded: null
      }
    }
  },
  computed: {
    loggedInUser () {
      return this.$store.getters['auth/user']
    }
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/@voerro/vue-tagsinput@1.8.0/dist/style.css';
.modal-form {
    padding: 1em;
}
.project-tags-input {
    height: 100px;
}
.typeahead {
    margin-top: 1em;
}
.typeahead > span {
    margin: .25em;
}
.submit-project-title {
    color: #000;
}
</style>
