<template>
  <!DOCTYPE html>
  <html lang="ja">
    <body id="main-all">
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
  </html>
</template>

<script>

export default {
  name: 'Main' ,
  components: {

  }
}
</script>

<style>

#main-all {
  background-color: rgb(50, 212, 212);
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
  width: 200px;
  height: 200px;
}
</style>
