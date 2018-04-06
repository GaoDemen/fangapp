// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/index'
import url from "./https/config"
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
Vue.prototype.http = url.url

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '089242ca20e29f108f8ca5e2b7285e91',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.MarkerClusterer','AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
