<template>
  <div class="home">
      
      <SideNav class="home__side-nav"/>
      
   
  </div>
</template>

<script>
import SideNav from '@/components/nav/SideNav.vue'

export default {
  components: {SideNav}
 
  
}
</script>

<style lang="scss" scoped>
  .home{
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
</style>