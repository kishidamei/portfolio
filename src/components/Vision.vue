<template>
  <body id="visionSection">
    <h2 id="visionTitle">
      Vision
    </h2>

    <h2 id="visionExplain">
      あらゆる分野に興味があり、<br>幅広く知識を身に付けて
      さまざまな開発に携わりたいと考えています。<br>
      １年目の駆け出しエンジニアではありますが、
      コミュニケーションを大切に人を思いやる仕事をしていきたいです。
    </h2>
  </body>
</template>

<script>

export default {
  name: 'Vision' ,
  components: {

  }
}
</script>

<style>
#visionSection { background-color: #f5f5f5; }

#visionTitle {
  color: rgb(104, 196, 196);
  text-shadow: #fff 0 0 10px;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
}

#visionExplain {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: lighter;
  color: rgb(138, 134, 134);
  font-size: 15px;
  word-break: keep-all;
  line-height: 1.25em;
}

</style>

