<template>
  <div class="home">
    <Pswiper :style="style"></Pswiper>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'
import Pswiper from '@/components/Pswiper.vue'


export default {
  name: 'home',
  data(){
    return {
      style:{
        height:this.docHeight+'px'
      }
    }
  },
  components: {
    Pswiper
  },
  created(){
    this.style={
      height:(document.documentElement.clientHeight-60)+'px'
    }
    
  },
  mounted(){
    console.log(this.docHeight)
  }
}
</script>
<style>
  .home{
    overflow: hidden;
  }
</style>

