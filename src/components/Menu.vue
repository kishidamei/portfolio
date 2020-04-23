<template>
  <html>
    <div id="drawerSection">
      <label for="nav-input">
        <i class="far fa-times-circle fa-3x drawerButton" />
      </label>

      <ul id="drawerMenuSection">
        <li class="drawerMenuItem">
          <a
            id="drawerMenuItemLink"
            href="#meinSection"
            @click="clickSmoothScroll()"
          >Home </a>
        </li>
        <li class="drawerMenuItem">
          <a
            id="drawerMenuItemLink"
            href="#aboutSection"
            @click="clickSmoothScroll()"
          >About me  </a>
        </li>
        <li class="drawerMenuItem">
          <a
            id="drawerMenuItemLink"
            href="#skillSection"
            @click="clickSmoothScroll()"
          >Skill Set</a>
        </li>
        <li class="drawerMenuItem">
          <a
            id="drawerMenuItemLink"
            href="#visionSection"
            @click="clickSmoothScroll()"
          > Vision </a>
        </li>
      </ul>
      <a
        class="drawerMenuItemLink"
        href=""
      />
    </div>
  </html>
</template>

<script>


export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        null,
        null,
        'y'
      )
     document.querySelector('#nav-input').checked = false;
    }
  },

}
</script>

<style>
#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
  padding: 5px;
}

.drawerButton {
  color: #707070;
  position: relative;
  top: 0;
  left: 260px;
}

#drawerMenuSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  color: #707070;
}

.drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
  text-align: left;
  border: 1px solid #707070;
  border-left: none;
}

#drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
}

</style>
