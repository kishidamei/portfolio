<template>
  <body id="aboutSection">
    <h2 id="aboutTitle">
      About Me
    </h2>

    <h2 id="aboutExplain">
      山口県出身の新卒1年目。<br>
      大学時代は沖縄県で過ごし、国際文化（中南米）を専攻していたが、シアトルの説明会をきっかけに未経験からエンジニアを志しています。
      新たな挑戦なので常に明るく、
      1日でも早く戦力になれるよう日々邁進していきます！！
    </h2>
  </body>
</template>

<script>

export default {
  name: 'About' ,
  components: {

  }
}
</script>

<style>
#aboutSection {
  background-color: #f5f5f5;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  padding-top: 2px;
}

#aboutTitle {
  color: #20879f;
  text-shadow: #fff 0 0 10px;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
}

#aboutExplain {
  font-family: 'Noto Sans', sans-serif;
  font-weight: lighter;
  color: #707070;
  font-size: 15px;
  word-break: keep-all;
  line-height: 2.25em;
}

</style>

