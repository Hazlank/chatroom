// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import BoxInput from 'Public/BoxInput'
import BoxButton from 'Public/BoxButton'
import BoxUploadimg from 'Public/BoxUploadimg'

import 'normalize.css'
import 'Scss/main.scss'

Vue.config.productionTip = false

const components = [
  BoxInput,
  BoxButton,
  BoxUploadimg
]
components.forEach(component => {
  Vue.component(component.name, component)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    App
  }
})
