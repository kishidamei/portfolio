import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  //state:コンポーネントでいうdata
  state: {
    skillCategories: [],
    loaded: false
  },
  //getters:コンポーネントでいうcomputed的なもの
  getters:{
   getSkills: (state) => (category) => {
     if (state.skillCategories.length > 0) {
       return state.skillCategories.find((skill) => skill.category === category);
     }
   }  },
  mutations: {
    setSkillCategories(state,payload){
      state.skillCategories = payload.skillCategories;
      state.loaded = true}
  },
  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await axios.get('https://us-central1-meikishida-a4ca3.cloudfunctions.net/skillCategories')
      res.data.forEach((category) => {
        skillCategories.push(category);
      })
      commit('setSkillCategories',{skillCategories});
    },
  }
})
