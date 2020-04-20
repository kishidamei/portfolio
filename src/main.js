import Vue from 'vue'
import './assets/css/reset.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import smoothScroll from 'vue-smoothscroll'

Vue.use(smoothScroll)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false


