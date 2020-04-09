<template>
<!DOCTYPE html>
<html lang="ja">
<body>
  <div id="main-name">Kishida Mei</div>
  <hr style= "border-top:2px solid #FFFF00;">
  <hr style= "border-top:3px solid #800080;">
  <hr style= "border-top:1px solid #008000;">
  <div id="main-seattle">Seattlecomsulting</div>
  <br/>
  <img id="profil" src="../assets/wario.jpeg">
  
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
body    {background-color: #ffffff;}

#main-name  {font-family: 'HGP行書体';
              font-size: 30px;
              }

#main-seattle   {font-family: 'HGP行書体';
                  font-size: 25px;}

#profil  {border-radius: 50%;
       width: 200px;
       height: 200px;}
</style>
