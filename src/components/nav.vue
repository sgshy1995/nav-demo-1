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
        <img src="../assets/menu.png" alt="menu" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
header nav{
  background: #F4FAFA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 1;
}
header nav .introduce{
  display: flex;
  align-items: center;
}
header nav .introduce .text{
  display: flex;
  flex-direction: column;
  align-items: center;
}
header nav .introduce .text span:first-child{
  font-size: 16px;
  font-family: kai;
  padding-bottom: 5px;
}
header nav .introduce .text span:last-child{
  font-size: 10px;
  font-family: kai;
  color: #aaaaaa;
}
header nav .introduce .img{
  margin-left: 20px;
  margin-right: 15px;
}
header nav .introduce .img img{
  width: 36px;
  height: 36px;
}
header nav .menu .img img{
  width: 32px;
  height: 32px;
  margin-right: 20px;
}
</style>
