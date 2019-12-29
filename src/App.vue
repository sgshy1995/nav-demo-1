<template>
<body>
  <Header />
  <section class="symbol-tittle">
    <span class="symbol">#</span>
    <span class="tittle">常 用 链 接</span>
  </section>
  <Main />
  <section class="clearLC">
    <button @click="clearLC">恢 复 默 认</button>
  </section>
</body>
</template>

<script>
import Header from "./components/header";
import Main from "./components/main";
export default {
  components: {
    Header: Header,
    Main: Main
  },
  methods:{
    clearLC(){
      window.localStorage.clear()
      window.location.reload()
    }
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
body .symbol-tittle .symbol {
  font-size: 26px;
  color: #3ab982;
}
body .symbol-tittle .tittle {
  margin-left: 10px;
  font-size: 20px;
}
body .clearLC{
  display: flex;
  justify-content: center;
}
body .clearLC button{
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  background: #efefee;
  margin: 10px 0;
}
</style>
