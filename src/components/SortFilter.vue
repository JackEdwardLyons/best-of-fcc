<template>
    <form class="container d-flex">
        <div class="form-row row justify-content-center">
            <div class="col-sm-2 col-md-2 my-1">
                <input type="text" class="form-control" id="title" placeholder="Title">
            </div>
            <div class="col-sm-3 col-md-2 my-1">
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>
                        Category
                    </option>
                    <option value="1">
                        Front End Only
                    </option>
                    <option value="2">
                        Full Stack
                    </option>
                    <option value="3">
                        Data Vizualisation
                    </option>
                </select>
            </div>
            <div class="col-sm-2 col-md-2 my-1">
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>
                        Tags
                    </option>
                    <option value="1">
                        HTML + CSS
                    </option>
                    <option value="2">
                        JavaScript
                    </option>
                    <option value="3">
                        PHP
                    </option>
                    <option value="4">
                        Python
                    </option>
                    <option value="5">
                        .NET
                    </option>
                    <option value="6">
                        jQuery
                    </option>
                    <option value="7">
                        Ruby on Rails
                    </option>
                    <option value="8">
                        React
                    </option>
                    <option value="9">
                        NativeScript
                    </option>
                    <option value="10">
                        Vue
                    </option>
                    <option value="10">
                        Angular
                    </option>
                </select>
            </div>
            <div class="col-sm-2 col-md-2 my-1 mb-4">
                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>
                        Votes
                    </option>
                    <option value="1">
                        50+
                    </option>
                    <option value="2">
                        100+
                    </option>
                    <option value="3">
                        200+
                    </option>
                    <option value="4">
                        500+
                    </option>
                </select>
            </div>
            <div class="col-sm-2 col-md-2">
                <button class="btn btn-success btn-sm" type="submit">Filter</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
