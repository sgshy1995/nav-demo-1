<template>
  <nav>
    <div class="introduce">
      <div class="img">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="text">
        <span>导航站点</span>
        <span>灵感来源于生活</span>
      </div>
    </div>
    <div class="menu">
      <div class="img">
        <img src="../assets/menu.png" alt="menu" @click="styleChange" :class="{active:change}" />
      </div>
    </div>
    <div class="menulist" id="menulist" :class="{active:change}">
      <ul>
        <li :class="{active:change}" @click.stop="toGit" id="toGit">项 目 源 码</li>
        <li :class="{active:change}" @click.stop="toBlog" id="toBlog">个 人 博 客</li>
        <li :class="{active:change}">Made by Eden</li>
        <li :class="{active:change}">V 1.0.1</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      change: false
    };
  },
  methods: {
    styleChange() {
      this.change = !this.change;
    },
    toGit(){
      window.location.href = 'https://github.com/sgshy1995/nav-demo-1'
    },
    toBlog(){
      window.location.href = 'http://eden-sheng.cn'
    }
  }
};
</script>

<style lang="scss">
header nav {
  background: #f4fafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 1;
  position: fixed;
  width: 100%;
  flex-shrink: 0;
  z-index: 4;
}
header nav .introduce {
  display: flex;
  align-items: center;
}
header nav .introduce .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  cursor: default;
}
header nav .introduce .text span:first-child {
  font-size: 16px;
  font-family: kai;
  padding-bottom: 5px;
}
header nav .introduce .text span:last-child {
  font-size: 10px;
  font-family: kai;
  color: #aaaaaa;
}
header nav .introduce .img {
  margin-left: 20px;
  margin-right: 15px;
}
header nav .introduce .img img {
  width: 36px;
  height: 36px;
}
header nav .menu .img img {
  width: 32px;
  height: 32px;
  margin-right: 20px;
  transition: all 0.5s;
  cursor: pointer;
  transition: transform 0.5s;
}
@media (min-width: 900px){
header nav .menu .img img:hover{
  transform: scale(1.1);
}
}
header nav .menu .img img.active{
  background: #cccccc;
  border-radius: 50%;
  transform: rotate(90deg);
}
header nav .menulist {
  background: #f4fafa;
  position: absolute;
  top: 99%;
  right: 0;
  transform: translateX(100%);
  transition: all 0.5s;
  border: 1px solid #cccccc;
  color: cadetblue;
  border-bottom-left-radius: 10px;
  text-align: center;
}
header nav .menulist.active {
  transform: translateX(0);
}
header nav .menulist ul li {
  padding: 10px 60px;
  border-bottom: none;
  font-family: kai;
  cursor: default;
}
header nav .menulist ul li#toGit:hover{
  cursor: pointer;
}
header nav .menulist ul li#toBlog:hover{
  cursor: pointer;
}
@media(min-width: 900px){
  header nav .menulist ul li{
    padding: 16px 100px;
    font-size: 18px;
  }
  header nav .menulist ul li#toGit:hover{
    color: #aaaaaa;
  }
  header nav .menulist ul li#toBlog:hover{
    color: #aaaaaa;
  }
}
header nav .menulist ul li:nth-child(1) {
  transform: translateX(120%);
  transition: 0.5s;
  border-bottom: 1px solid #cccccc;
}
header nav .menulist ul li:nth-child(2) {
  transform: translateX(150%);
  transition: 0.7s;
  border-bottom: 1px solid #cccccc;
}
header nav .menulist ul li:nth-child(3) {
  transform: translateX(180%);
  transition: 0.9s;
  border-bottom: 1px solid #cccccc;
}
header nav .menulist ul li:nth-child(4) {
  transform: translateX(210%);
  transition: 1.1s;
}
header nav .menulist ul li.active {
  transform: translateX(0);
}
</style>
