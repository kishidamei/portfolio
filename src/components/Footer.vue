<template>
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous"
      >
    </head>
    <div id="footerSection">
      <a
        href="#"
        @click="clickSmoothScroll()"
      >
        <i class="fas fa-chevron-circle-up fa-2x footerScroll" /></a>
      <div id="footerCopyright">
        &copy;Seattleconsulting
      </div>
    </div>
  </html>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>
#footerSection {
  background: -moz-linear-gradient(top, #80e1f7, #06c1e6);
  background: -webkit-linear-gradient(top, #80e1f7, #06c1e6);
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
}

#footerCopyright {
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
}

.footerScroll {
  color: #fff;
  position: relative;
  top: -10px;
  background-color: #80e1f7;
  border-radius: 50%;
}
</style>
