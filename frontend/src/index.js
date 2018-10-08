import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './components/App'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('app'))
  new Vue({
    el,
    render: h => h(App)
  })
})
