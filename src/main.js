import Vue from 'vue'
import './assets/css/reset.css'

import smoothScroll from 'vue-smoothscroll'

Vue.use(smoothScroll)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false



// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

