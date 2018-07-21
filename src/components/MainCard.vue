<template>
    <section class="features-block" id="features">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-sm-12 offset-md-1">
                    <div class="pricing-item text-center">
                        <div class="custom-card card card-outline-primary h-100">
                            <div class="card-body bg-primary">
                                <h6 class="text-white">Filter Results</h6>
                                <form class="justify-content-center d-flex">
                                    <div class="form-row align-items-center">
                                        <div class="col-auto my-1">
                                            <input type="text" class="form-control" id="title" placeholder="Title">
                                        </div>
                                        <div class="col-auto my-1">
                                            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                <option selected>
                                                    Catgory
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
                                        <div class="col-auto my-1">
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
                                        <div class="col-auto my-1">
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
                                        <div class="col-auto my-1">
                                            <button class="btn btn-success btn-sm" type="submit">Filter</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="card-body">
                                        <a href="https://codepen.io/JackEdwardLyons/pen/bEpPqB" target="_blank">
                                            <h4 class="card-title">
                                                Random Quote Machine
                                                <small class="author sm-50">
                                                    posted by Jack Lyons
                                                </small>
                                            </h4>
                                        </a>
                                        <h6 class="card-subtitle mb-2 text-muted">
                                            This is a meta description of max 80 characters. This is as long as it can get.
                                        </h6>
                                        <p class="card-text">
                                            Some quick example text to build upon the title and give readers a better description.
                                            It can only be 120 characters. After that there will be a read-more button. <b class="c-pointer">Show more</b>
                                        </p>
                                        <div class="item-meta d-flex justify-content-between">
                                            <span class="item-meta__likes text-center">
                                                <span class="badge badge-info vote-count mb-1-xs">410 Votes</span>
                                                <span class="vote-add">
                                                    <i class="fa fa-thumbs-up"></i>
                                                </span>
                                            </span>
                                            <span class="item-meta__tags-list ml-1-xs">
                                                <b>Tags:</b>
                                                <a href="#" class="card-link">jQuery, Bootstrap </a>
                                                <span class="ml-2 badge badge-warning mt-1-xs pull-right">Front End</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item">
                                    <div class="card-body">
                                        <a href="https://codepen.io/JackEdwardLyons/pen/bEpPqB" target="_blank">
                                            <h4 class="card-title">
                                                Full Stack Twitter Clone
                                                <small class="author sm-50">
                                                    posted by Jack Lyons
                                                </small>
                                            </h4>
                                        </a>
                                        <h6 class="card-subtitle mb-2 text-muted">
                                            This is a meta description of max 80 characters. This is as long as it can get.
                                        </h6>
                                        <p class="card-text">
                                            Some quick example text to build upon the title and give readers a better description.
                                            It can only be 120 characters. After that there will be a read-more button. <b class="c-pointer">Show more</b>
                                        </p>
                                        <div class="item-meta d-flex justify-content-between">
                                            <span class="item-meta__likes text-center">
                                                <span class="badge badge-info vote-count mb-1-xs">43 Votes</span>
                                                <span class="vote-add">
                                                    <i class="fa fa-thumbs-up fa-thumbs-up-xs"></i>
                                                </span>
                                            </span>
                                            <span class="item-meta__tags-list ml-1-xs">
                                                <b>Tags:</b>
                                                <a href="#" class="card-link">JavaScript, React, Node, Bootstrap</a>
                                                <span class="ml-2 badge badge-danger mt-1-xs pull-right">Full Stack</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>
