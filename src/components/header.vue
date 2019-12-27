<template>
  <header>
    <Nav />
    <Search />
  </header>
</template>

<script>
import Search from './search.vue'
import Nav from './nav.vue'
export default {
    components:{
    Search: Search,
    Nav:Nav
  }
};
</script>

<style lang="scss">
</style>