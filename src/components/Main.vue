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
}

#main-name {
  font-family: 'Vollkorn', serif;
  font-size: 30px;
  color: #fff;
  text-shadow: #000 0 0 10px;
}

#main-seattle {
  font-family: 'Vollkorn', serif;
  font-size: 25px;
  color: #fff;
  text-shadow: #000 0 0 10px;
}

#profil {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
