<template>
<div>
    <!-- <the-header class="header"></the-header> -->
    <router-view/>
</div>

</template>
<script>
// import TheHeader from './components/TheHeader.vue'
export default {
  components:{
    // TheHeader
  }
}
</script>
<style scoped>
  .header{
    position: absolute;
    top:0;
    z-index: 100;
    width: 100%;
  }
</style>
