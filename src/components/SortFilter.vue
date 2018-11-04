<template>
    <form class="container d-flex justify-content-center">
        <div class="w-100 form-row row justify-content-center">
            <div class="col-sm-3 col-md-3 my-1">
                <label class="mr-sm-2" for="select-category">Category</label>
                <select title="Project Category" class="custom-select mr-sm-2" id="select-category" v-model="model.projectCategory">
                    <option value="category" selected disabled="disabled">
                        All Categories
                    </option>
                    <option value="Front End">
                        Front End
                    </option>
                    <option value="Back End">
                        Back End
                    </option>
                    <option value="Full Stack">
                        Full Stack
                    </option>
                    <option value="Data Visualization">
                        Data Vizualisation
                    </option>
                </select>
            </div>
            <div class="col-sm-3 col-md-3 my-1">
                <label class="mr-sm-2" for="select-tags">By Tag</label>
                <select title="Project Tags" class="custom-select mr-sm-2" id="select-tags" v-model="model.tags">
                    <option selected disabled="disabled" value="tags">
                       All Tags
                    </option>
                    <option value="javascript">
                        JavaScript
                    </option>
                    <option value="php">
                        PHP
                    </option>
                    <option value="python">
                        Python
                    </option>
                    <option value="jquery">
                        jQuery
                    </option>
                    <option value="react">
                        React
                    </option>
                    <option value="nativescript">
                        NativeScript
                    </option>
                    <option value="vue">
                        Vue
                    </option>
                    <option value="angular">
                        Angular
                    </option>
                </select>
            </div>
            <div class="col-sm-2 col-md-2 my-1 mb-4">
                <label class="mr-sm-2" for="select-votes">Votes</label>
                <select
                    title="Project Votes"
                    class="custom-select mr-sm-2"
                    id="elect-votes"
                    v-model="model.likes"
                >
                    <option value="0" selected>
                        0 - 50
                    </option>
                    <option value="50">
                        50 - 100
                    </option>
                    <option value="100">
                        100 - 250
                    </option>
                    <option value="200">
                        250 - 500
                    </option>
                    <option value="500">
                        500+
                    </option>
                </select>
            </div>
            <div class="col-sm-3 col-md-3 d-flex justify-content-center align-items-center">
                <button class="btn btn-success btn-xs mt-1" @click.prevent="onFilterSubmit" title="Filter">
                    Filter
                    <i class="fas fa-filter"></i>
                </button>
                <button class="btn btn-info btn-xs mt-1 ml-3" @click.prevent="resetFilters" title="Reset Filters">
                    <i class="fas fa-redo-alt"></i>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
  data () {
    return {
      model: {
        projectCategory: 'category',
        likes: 0,
        tags: 'tags'
      }
    }
  },
  methods: {
    onFilterSubmit () {
      this.$store.dispatch('filters/onFilterSubmit', this.model)
    },
    resetFilters () {
      this.$store.dispatch('filters/resetFilters')
    }
  }
}
</script>
