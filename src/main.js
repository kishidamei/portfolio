import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import store from './store'

import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

