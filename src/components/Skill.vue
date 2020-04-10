<template>
  <!DOCTYPE html>
  <html lang="jp">
    <body id="skill-waku">
      <h2 id="skill-title">
        Skill Set
      </h2>
      <h2 id="skill-me">
        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </h2>
      <h2 id="skill-link">
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
#skill-waku { background-color: #fff; }

#skill-title {
  color: rgb(138, 134, 134);
  text-shadow: #fff 0 0 10px;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
  font-size: 25px;
}

#skill-me {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: lighter;
  color: rgb(138, 134, 134);
  font-size: 15px;
}

#skill-link {
  font-size: 15px;
  color: paleturquoise;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
