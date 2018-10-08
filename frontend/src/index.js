import Vue from 'vue'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('app'))
  new Vue({
    el,
    render: h => h(App)
  })
})
