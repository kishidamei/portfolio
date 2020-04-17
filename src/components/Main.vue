<template>
  <body id="mainSection">
    <div id="main-name">
      Kishida Mei
    </div>
    <hr style="border-top: 2px solid #fff;">
    <div id="main-seattle">
      Seattlecomsulting
    </div>
    <br>
    <img
      id="profil"
      src="../assets/watashi.jpeg"
    >
  </body>
</template>

<script>

export default {
  name: 'Main' ,
  components: {

  }
}
</script>

<style>

hr { width: 50%; }

#mainSection {
  background: radial-gradient(#80e1f7 40%, #06c1e6);
  font-weight: bold;
  width: 100%;
  height: auto;
}

#main-name {
  font-family: 'Noto Sans', sans-serif;
  font-size: 30px;
  color: #fff;
  text-shadow: gray 0 0 10px;
}

#main-seattle {
  font-family: 'Noto Sans', sans-serif;
  font-size: 25px;
  color: #fff;
  text-shadow: gray 0 0 10px;
}

#profil {
  border-radius: 50%;
  width: 25%;
  height: 25%;
}
</style>
