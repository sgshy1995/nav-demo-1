<template>
  <main>
    <div v-for="(u,index) in website" :key="index" class="website">
      <span class="keys">{{index}}</span>
      <br>
      <img alt="u" :src="'https://'+u+'/favicon.ico'" class="get-ico">
      <span class="webs">网 站 地 址：</span><span>{{u}}</span>
      <img src="../assets/edit.png" alt="edit" id="edit-button">
      <img src="../assets/delete.png" alt="delete" id="delete-button">
    </div>
    <div class="create-website" @click="addUrl">
      <span>新 增 网 站</span>
      <br>
      <img src="../assets/add.png" alt="add" id="add-button">
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      website: {
        A:"aliyun.com", 
        B:"sina.cn", 
        C:"baidu.com", 
        D:"zhihu.com"
      }
    };
  },
  methods:{
    addUrl(){
      //this.$set(this.website,'E','xiedaimala.com')
      window.prompt('shuru')
    }
  }
};
</script>

<style lang="scss">
main {
  width: 100%;
  background: #efefee;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}
main > div {
  width: 150px;
  height: 150px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 2px 5px 0px rgba(71,67,71,0.2);
}
main > div > span.keys{
  font-size: 36px;
  color: #060606;
}
main > div > span.webs{
  font-size: 12px;
  color: #aaaaaa;
  padding-top: 10px;
}
main  div.website img#edit-button{
  position: absolute;
  top:10px;
  left: 15px;
  width: 20px;
  height: 20px;
}
main  div.website img#delete-button{
  position: absolute;
  top:10px;
  right: 12px;
  width: 24px;
  height: 24px;
}
main  div.website img.get-ico{
  width: 20px;
}
main  div.create-website img{
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}
main  div.create-website span{
  font-size: 20px;
  margin-top: 20px;
}
</style>