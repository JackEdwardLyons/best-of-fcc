<template>
    <section class="m0 p0">
        <h6 class="text-white">
            Filter Results
        </h6>
        <form class="container d-flex justify-content-center">
            <div class="w-100 form-row row justify-content-center">
                <div class="col-xs-12 col-sm-4 col-md-3 my-1">
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
                <div class="col-xs-12 col-sm-4 col-md-3 my-1">
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
                <div class="col-xs-12 col-sm-4 col-md-3 my-1">
                    <label class="mr-sm-2" for="rank-votes">By Rank</label>
                    <select title="Project Tags" class="custom-select mr-sm-2" id="rank-votes" v-model="model.rank">
                        <option selected disabled="disabled" value="rank">
                        By Rank
                        </option>
                        <option value="newest">
                        Newest
                        </option>
                        <option value="popular">
                        Most Populat
                        </option>
                    </select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3 mt-4 d-md-flex justify-content-center align-items-center">
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
    </section>
</template>

<script>
export default {
  data () {
    return {
      model: {
        projectCategory: 'category',
        likes: 0,
        tags: 'tags',
        rank: 'newest'
      }
    }
  },
  methods: {
    onFilterSubmit () {
      this.$store.dispatch('filters/onFilterSubmit', this.model)
    },
    resetFilters () {
      this.$store.dispatch('filters/resetFilters')
      this.model = {
        projectCategory: 'category',
        likes: 0,
        tags: 'tags',
        rank: 'newest'
      }
    }
  }
}
</script>
