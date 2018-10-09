import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vmodal from 'vue-js-modal'
import VueSanitizeHtml from 'vue-sanitize-html-plugin'

import './assets/style/bootstrap.min.css'
import './assets/style/fontawesome-all.css'
import './assets/style/main.css'

const fb = require('./firebase-config.js')

Vue.use(vmodal, { dynamic: true })

Vue.use(VueSanitizeHtml, {
  allowedTags: [],
  allowedAttributes: {}
})

Vue.config.productionTip = false

let app
// This will make sure Firebase initializes before
// loading the app when a user refreshes a page.
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch('auth/setCurrentUser', user)
  }

  // realtime updates from our posts (projects) collection
  fb.projectsCollection.orderBy('dateAdded', 'desc').onSnapshot(querySnapshot => {
    let projectsArray = []

    querySnapshot.forEach(doc => {
      let project = doc.data()
      project.id = doc.id
      projectsArray.push(project)
    })
    console.log(projectsArray)
    store.dispatch('posts/setProjects', projectsArray)
  })

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
