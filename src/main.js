import Vue from 'vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import smoothScroll from 'vue-smoothscroll'
import App from './App.vue'
Vue.use(VueAxios, axios,smoothScroll,Vue)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
 }).$mount('#app')

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする


