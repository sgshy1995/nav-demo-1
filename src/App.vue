<template>
<body>
  <Header />
  <section class="symbol-tittle">
    <span class="symbol">#</span>
    <span class="tittle">常 用 链 接</span>
  </section>
  <Main />
</body>
</template>

<script>
import Header from "./components/header";
import Main from "./components/main";
export default {
  components: {
    Header: Header,
    Main: Main
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol,
li {
  list-style: none;
}
body {
  position: relative;
  background: #efefee;
}
body .symbol-tittle{
  display: flex;
  align-items: center;
  margin: 20px;
}
body .symbol {
  font-size: 26px;
  color: #3ab982;
}
body .tittle {
  margin-left: 10px;
  font-size: 20px;
}
</style>
