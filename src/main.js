import Vue from 'vue'
import App from './App.vue'
import SsrPagination from './index.js'
Vue.use(SsrPagination)

new Vue({
  el: '#app',
  render: h => h(App)
})
