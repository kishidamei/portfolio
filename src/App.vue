<template>
  <div
    id="app"
  >
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App' ,
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  data: function() {
    return {
      skills: [],
      category: 'front-end',
    };
  },
  computed: {
    //main.jsでローカルにstoreを登録してるので、$storeが使える
    //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
    skillCategories(){
     return this.$store.getters.skillCategories
   },
  },
  methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-meikishida-a4ca3.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Noto+Sans:ital,wght@1,700&family=Vollkorn:ital,wght@1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "FontAwesome";
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
