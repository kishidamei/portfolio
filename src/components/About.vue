<template>
  <body id="aboutSection">
    <h2 id="aboutTitle">
      About Me
    </h2>

    <h2 id="aboutExplain">
      山口県出身の新卒1年目。<br>
      とにかく楽しい場や人が大好きで、<br>
      誰とでも分け隔てなく付き合いができ、交流の幅が広いことが自慢です。<br>
      大学時代を沖縄県で過ごし、中南米の国際文化を専攻していました。<br>
      研究の一環としてメキシコに行き、今も残る植民地時代の影響や遺跡について学びました。<br>
      就活中、シアトルの説明会に出席したことを機に、<br>
      文系の私には手の届かない職業だと思っていたシステムエンジニアになれることを知り、<br>
      シアトルの環境だったら新しい挑戦ができるのでは、<br>とシステムエンジニアを志すようになり現在技術を取得中です。<br>
      趣味はお笑い鑑賞、音楽鑑賞でマイブームはフィルムカメラです。
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
  font-size: 25px;
}

#aboutExplain {
  font-family: 'Noto Sans', sans-serif;
  font-weight: lighter;
  color: #707070;
  font-size: 15px;
  word-break: keep-all;
  line-height: 1.5em;
}

</style>

