<template>
  <div>
    <button @click="toggle" class="btn btn-success"><img src=""></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";


export default {
  name: 'Header' ,
  components: {
    Drawer
  },
  data(){
    return{
      open: false
    }
  },
  methods: {
    toggle(){
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">


</style>

<style>
  



</style>