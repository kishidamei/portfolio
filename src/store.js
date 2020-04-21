import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  //state:コンポーネントでいうdata
  state: {
    skillCategories: [],
  },
  //getters:コンポーネントでいうcomputed的なもの
  getters:{
   getSkills: (state) => (category) => {
     if (state.skillCategories.lengs > 0) {
       return state.skillCategories.find((skill) => skill.category===category)
     }
       return [];
   }  },
  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setskillCategories(state,payload){
      state.skillCategories = payload.skillCategories;
    },
  },

  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await Axios.get('https://us-central1-meikishida-a4ca3.cloudfunctions.net/skills')
      res.data.forEach((category) => {
        skillCategories.push(category);
      })
      commit('setSkillCategories',{skillCategories});
    },
  },
});
