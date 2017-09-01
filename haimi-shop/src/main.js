// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router'
import VueResource from 'vue-resource'/*
import VueLazyload from 'vue-lazyload'*/
import store from './store/store.js'

Vue.config.productionTip = false
Vue.use(VueResource)

/*Vue.use(VueLazyload, {
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  try: 3 // default 1
})*/


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
