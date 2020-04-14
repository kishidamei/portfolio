<template>
  <!DOCTYPE html>
  <html lang="ja">
    <head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous"
      >
    </head>
    <div id="drawerButton">
      aaaaaa
    </div>
    <ul id="drawerMenuSection">
      <li>
        <a
          href="#mainSection"
          @click="clickSmoothScroll()"
        >Home  </a>
      </li>
      <li>
        <a
          href="#aboutSection"
          @click="clickSmoothScroll()"
        >About me  </a>
      </li>
      <li>
        <a
          href="#skillSection"
          @click="clickSmoothScroll()"
        >Skill Set</a>
      </li>
      <li>
        <a
          href="#visionSection"
          @click="clickSmoothScroll()"
        > Vision </a>
      </li>
      <li>Customize Item1</li>
      <li>Customize Item2</li>
    </ul>
  </html>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#mainSection','#visionSection','#skillSection','visionSection'),
        400,
        null,
        null,
        'y'
      )
    }
  },

}
</script>

<style>
#drawerMenuSection { color: #000; }

</style>
