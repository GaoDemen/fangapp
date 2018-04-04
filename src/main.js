// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/index'
import url from "./https/config"
Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
Vue.prototype.http = url.url
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
