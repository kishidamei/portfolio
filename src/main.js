import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import smoothScroll from 'vue-smoothscroll'
Vue.use(VueAxios, axios,smoothScroll)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする


