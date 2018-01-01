// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'

import 'normalize.css'
import 'Scss/main.scss'

Vue.config.productionTip = false

Vue.directive('demo', {
  bind: function (a, b, c) {
    console.log(a, b, c)
    // this.handler = function () {
    //   console.log(this)
    //   this.set(this.el.innerHTML)
    // }.bind(this)
    // this.el.addEventListener('input', this.handler)
  },
  update: function (newValue, oldValue) {
    this.el.innerHTML = newValue || ''
  },
  unbind: function () {
    this.el.removeEventListener('input', this.handler)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {
    App
  }
})
