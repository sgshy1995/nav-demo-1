<template>
  <body>
    <Header />
    <Main />
  </body>
  
</template>

<script>
import Header from './components/header'
import Main from './components/main'
export default {
  components:{
    Header: Header,
    Main:Main
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,ol,li{
  list-style: none;
}
body{
  position: relative;
  background: #efefee;
}
</style>
