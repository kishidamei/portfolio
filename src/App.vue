<template>
  <div id="app">
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
