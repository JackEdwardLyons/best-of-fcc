<template>
    <modal name="about-modal" :adaptive="true" :scrollable="true" :height="'auto'" :width="'80%'">
      <main class="about-modal-main">
        <h2>About this App</h2>
        <p>
          I built this app as a way to learn both Vue.js and Firebase Firestore.
          As a front end developer I wanted an easy way to explore some of the basic features
          found in all full-stack web applications. That's why I chose Firebase. It's simple to
          setup and provides a ton of powerful features without the need to write any server-side code.
        </p>
        <p>
          By building this application I learned how to authenticate users and store their user data in the database.
          Once users are authenticated, they may then vote on projects in the list or submit a project of their own.
          Those users who are not authentiacated can view the list of projects but cannot vote on a project.
        </p>
        <p>
          - associating logged in users votes with the id's of the projects in the list in order to build a tally of votes for that project.
        </p>
        <p>
          I also learned about fetching and filtering data from Firestore.
        </p>
      </main>
    </modal>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-modal-main {
  padding: 1rem 2rem;
  color: #000;
  text-align: center;
}
</style>
