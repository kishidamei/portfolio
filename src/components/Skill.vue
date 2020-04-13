<template>
  <!DOCTYPE html>
  <html lang="jp">
    <body id="skillSection">
      <h2 id="skillTitle">
        Skill Set
      </h2>
      <h2 id="skillExplain">
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </h2>
      <h2 id="GitHubLabel">
        Git hub:<a
          href="https://github.com/kishidamei/portfolio"
          target="_blank"
        >
          https://github.com/kishidamei/portfolio</a>
      </h2>
    </body>
  </html>
</template>

<script>

export default {
  name: 'Skill' ,
  components: {

  }
}
</script>

<style>
#skillSection { background-color: #fff; }

#skillTitle {
  color: #20879f;
  text-shadow: #fff 0 0 10px;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  font-size: 25px;
}

#skillExplain {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: lighter;
  color: rgb(138, 134, 134);
  font-size: 15px;
}

#GitHubLabel {
  font-size: 15px;
  color: paleturquoise;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
