<template>
<body>
  <Header />
  <section class="symbol-tittle" id="sym">
    <span class="symbol">#</span>
    <span class="tittle">常 用 链 接</span>
  </section>
  <Main />
  <section class="clearLC">
    <button @click="clearLC">恢 复 默 认</button>
  </section>
  <Height />
  <Footer />
</body>
</template>

<script>
import Header from "./components/header";
import Main from "./components/main";
import Height from "./components/height"
import Footer from "./components/footer"
export default {
  components: {
    Header: Header,
    Main: Main,
    Height: Height,
    Footer: Footer
  },
  mounted(){
    window.addEventListener("beforeunload", this.reloadWeb);
    window.addEventListener("beforeunload", this.seeHeight)
  },
  methods:{
    clearLC(){
      window.localStorage.clear()
      window.location.reload()
    },
    reloadWeb(){
      window.scrollTo(0,0);
    },
    seeHeight(){
      let hrt = document.documentElement.clientHeight
      window.onload = function () {
        document.body.style.height = hrt + 'px'
      }
    }
  },
  destroyed(){
    window.removeEventListener("beforeunload")
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
h1,h2,h3,h4,h5,h6{
  text-decoration: none;
}
body {
  position: relative;
  background: #efefee;
  margin: 0;
}
body .symbol-tittle{
  display: flex;
  align-items: center;
  margin: 20px;
}
@media (min-width: 900px) {
  body .symbol-tittle{
    justify-content: center;
  }
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
  margin-bottom: 40px;
}
body .clearLC button{
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  background: #efefee;
  margin: 10px 0 0 0;
  transition: all 0.3s;
  cursor: pointer;
}
body .clearLC button:hover{
  color: saddlebrown;
  border: 1px solid saddlebrown;
  padding: 6px 12px;
}
</style>
