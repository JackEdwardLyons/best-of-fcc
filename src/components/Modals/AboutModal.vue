<template>
    <modal name="about-modal" :adaptive="true" :scrollable="true" :height="'auto'" :width="'80%'">
      <main class="about-modal-main">
        <h2>About this App</h2>
        <p>
          I built this app as a way to learn both <a href="http://vuejs.org/" target="_blank">Vue.js</a> and 
          <a href="https://www.google.com/search?q=firestore&ie=utf-8&oe=utf-8&client=firefox-b-ab" target="_blank">Firebase Cloud Firestore.</a>
        </p>
         <p>
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
          I also learned about fetching and filtering data from Firestore. While the filters on this site aren't overly complex, I still did 
          gain a lot of insights into how database queries work. One thing I think Firestore can improve on is to increase
          the variety of queries that are possible. For example, a simple search query is not possible without a third party
          library. 
        </p>
        <p>
          Overall, this was a really fun project to build. Please feel free to share this app with your friends. If you have any
          feedback please <a href="https://www.freecodecamp.org/forum/u/JackEdwardLyons" target="_blank">
          click here to send me a message on the Free Code Camp Forum.</a>
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

p {
  font-size: 125%;
}
</style>
