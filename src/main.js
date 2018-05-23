// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
//import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(AnimatedVue)
Vue.component('icon', Icon)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
