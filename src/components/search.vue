<template>
  <div class="search">
    <div class="one"></div>
    <div class="two"></div>
    <span>想 看 点 什 么 ？</span>
    <br />
    <form class="searchForm" method="get" :action="'https://'+search[n].url+search[n].path" target="_blank">
      <input type="text" :name="search[n].name" />
      <button>搜 索</button>
    </form>
    <div class="wrapper">
      <img src="../assets/google.png" alt="google" @click="n=0" :class="{active:n===0}" />
      <img src="../assets/baidu.png" alt="baidu"  @click="n=1"  :class="{active:n===1}" />
      <img src="../assets/yahoo.png" alt="yahoo"  @click="n=2"  :class="{active:n===2}" />
      <img src="../assets/bing.png" alt="bing"  @click="n=3"  :class="{active:n===3}" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      n:0,
      search:[
        {
        type:'google',
        url:'google.com',
        path:'/search',
        name:'q'
        },
        {
        type:'baidu',
        url:'baidu.com',
        path:'/s',
        name:'wd'
        },
        {
        type:'yahoo',
        url:'zh.search.yahoo.com',
        path:'/search',
        name:'q'
        },
        {
        type:'bing',
        url:'cn.bing.com',
        path:'/search',
        name:'q'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
header .search {
  width: 100%;
  height: 192px;
  background: #16a1a1;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding-top: 20px;
  z-index: 0;
}
header .search .one {
  width: 1600px;
  height: 1600px;
  background: #0dbbb7;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateX(50%);
  z-index: -1;
}
header .search .two {
  width: 300px;
  height: 300px;
  background: #445cb6;
  border-radius: 40px;
  position: absolute;
  top: -20%;
  right: -40%;
  transform: rotate(45deg);
  opacity: 0.7;
  animation: 14s runner linear infinite;
  z-index: -1;
}
@keyframes runner {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(405deg);
  }
}
header .search span {
  font-size: 22px;
  color: white;
}
header .search input {
  margin: 20px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 5px 10px;
  opacity: 0.7;
}
header .search input:focus {
  outline: none;
}
header .search button {
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  opacity: 0.7;
  padding: 5px;
}
header .search .wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
header .search .wrapper img {
  width: 30px;
  height: 30px;
  margin: 10px 20px;
  opacity: 0.5;
  transition: all 0.4s;
}
header .search .wrapper img:nth-child(2) {
  width: 24px;
  height: 24px;
}
header .search .wrapper img:nth-child(1) {
  width: 40px;
  height: 40px;
}
header .search .wrapper img.active {
  transform: scale(1.1);
  opacity: 1;
}
</style>