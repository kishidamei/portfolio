<template>
  <body id="skillSection">
    <h2 id="skillTitle">
      Skill Set
    </h2>
    <h2 id="skillExplain">
      修練のすえ身につけたスキルをまとめました。
      苦手がなければ得意もない状態です。
      幅広くスキルアップしたいと考えています。
    </h2>
    <label id="GitHubLabel">
      Git hub:<a
        href="https://github.com/kishidamei/portfolio"
        target="_blank"
      >
        https://github.com/kishidamei/portfolio</a>
    </label>
    <div id="skillCategories">
      <ul>
        <li class="skillCategoriesList">
          <span
            id="front"
            @click="setCurrentChart('front')"
          >Front-end</span>
        </li>
        <li class="skillCategoriesList">
          <span
            id="back"
            @click="setCurrentChart('back')"
          >Back-end</span>
        </li>
        <li class="skillCategoriesList">
          <span
            id="dev"
            @click="setCurrentChart('devOps')"
          >DevOps</span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change':isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change':isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
        <li>Python</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change':isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
        <li>AWS</li>
      </ul>
    </div>
    <div
      v-if="isFrontActive"
      class="skillGraph"
    >
      <FrontChart />
    </div>
    <div
      v-if="isBackActive"
      class="skillGraph"
    >
      <BackChart />
    </div>
    <div
      v-if="isDevOpsActive"
      class="skillGraph"
    >
      <DevChart />
    </div>
  </body>
</template>

<script>
import FrontChart from '../components/FrontChart.vue'
import BackChart from '../components/BackChart.vue'
import DevChart from '../components/DevChart.vue'

export default {
  name: 'Skill' ,
  components: {FrontChart,BackChart,DevChart

  },
  data(){
    return {currentChart: 'front'
    }
  },
 computed: {
    isFrontActive() {
      return this.currentChart=='front';
    },
    isBackActive() {
      return this.currentChart=='back';},
    isDevOpsActive(){
      return this.currentChart=='devOps';}
      },
methods: {
  setCurrentChart(chart){
    this.currentChart = chart;
  }
 }
}
</script>

<style>
#skillSection {
  background-color: #fff;
  padding: 5px;
  width: 100%;
  height: auto;
}

#skillTitle {
  color: #20879f;
  text-shadow: #fff 0 0 10px;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  font-size: 25px;
}

#skillExplain {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: lighter;
  color: rgb(138, 134, 134);
  font-size: 15px;
  word-break: keep-all;
  line-height: 2.25em;
}

#GitHubLabel {
  font-size: 15px;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
}
a { color: #20879f; }

#skillCategories { padding: 20px 0; }

.skillCategoriesList {
  display: inline-block;
  margin: 0 10px;
}

#front {
  color: #b51a1a;
  font-size: 20px;
  cursor: pointer;
}

#back {
  color: #0f8839;
  font-size: 20px;
  cursor: pointer;
}

#dev {
  color: #571083;
  font-size: 20px;
  cursor: pointer;
}

#skillList {
  width: auto;
  font-size: 18px;
  border-bottom: 2px solid #f3f3f3;
  padding: 10px 0 50px 0;
}

li {
  display: inline-block;
  margin: 10px 10px;
}

.front-change li { background-color: rgba(181, 26, 26, 0.4); }

.back-change li { background-color: rgba(15, 136, 57, 0.4); }

.dev-change li { background-color: rgba(87, 16, 131, 0.4); }

#front-end li {
  color: rgba(181, 26, 26, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}

#back-end li {
  color: rgba(15, 136, 57, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}

#devops li {
  color: rgba(87, 16, 131, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}

.skillGraph { size: 10px; }

</style>
