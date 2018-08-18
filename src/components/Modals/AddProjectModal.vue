<template>
    <modal name="add-project-modal" :adaptive="true" :scrollable="true" :height="'auto'" :width="'80%'">
        <form class="modal-form">
            <h2 class="submit-project-title text-center">
                Add Your Project Here
            </h2>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="projectTitle">Project Title</label>
                    <input maxlength="30" type="text" class="form-control" id="projectTitle" placeholder="Project Title">
                </div>
                <div class="form-group col-md-6">
                    <label for="projectShortDescription">Short Description</label>
                    <input maxlength="80" type="text" class="form-control" id="projectShortDescription" placeholder="Short Description (max. 80 words)">
                </div>
            </div>
            <div class="form-group">
                <label for="projectLongDescription">Long Description</label>
                <textarea maxlength="140" class="form-control" id="projectLongDescription" placeholder="Long Description (max. 140 words)"> </textarea>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="projectCategory">Category</label>
                    <select id="projectCategory" class="form-control">
                        <option selected>Category</option>
                        <option>Front End</option>
                        <option>Back End</option>
                        <option>Full Stack</option>
                        <option>Data Visualization</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="projectTags">Tags</label>
                    <tags-input
                        :limit="3"
                        v-model="selectedTags"
                        class="project-tags-input"
                        element-id="projectTags"
                        :typeahead-activation-threshold="2"
                        :typeahead="true"
                        :existing-tags="{
                            'php': 'PHP',
                            'vue': 'Vue.js',
                            'jQuery': 'jQuery',
                            'react': 'React.js',
                            'laravel': 'Laravel',
                            'MongoDB': 'Mongo DB',
                            'firebase': 'Firebase',
                            'angularjs': 'Angular.js',
                            'angular2x': 'Angular 2x',
                            'javascript': 'JavaScript',
                            'react-native': 'React Native',
                            'nativescript': 'NativeScript'
                        }">
                    </tags-input>
                </div>
            </div>
            <div class="form-row d-flex justify-content-center">
                <button type="submit" class="text-center btn btn-primary btm-sm">Submit Project</button>
            </div>
        </form>
    </modal>
</template>

<script>
import VoerroTagsInput from '@voerro/vue-tagsinput'

export default {
  data () {
    return {
      selectedTags: []
    }
  },
  components: {
    'tags-input': VoerroTagsInput
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
