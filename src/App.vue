<template>
  <div id="app">
    <MHeader/>
    <router-view/>
  </div>
</template>
<script>
import MHeader from '@/components/MHeader.vue'
export default {
    name: 'App',
    components: {
      MHeader
    }
}
</script>
<style>
  #app{
    overflow: hidden;
    width:100%;
    height:100%;
  }
</style>

