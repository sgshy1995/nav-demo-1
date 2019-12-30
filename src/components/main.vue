<template>
  <main>
    <div class="main-wrapper">
    <div v-for="(u,index) in website" :key="index" class="website">
      <span class="numberIndex" id="numberIndex" style="display:none">{{index}}</span>
      <div class="goToUrl" @click.stop="goToUrl">
        <span class="keys">{{u.name}}</span>
        <br />
        <!-- <img alt="u" :src="'https://'+u.url+'/favicon.ico'" class="get-ico" /> -->
        <img :src="'https://favicon.link/'+u.url+'/'" alt="icon" class="icon-img" />
      </div>
      <!-- <span class="webs-one">(URL)</span> -->
      <span class="webs-two">{{u.url}}</span>
      <img src="../assets/edit.png" alt="edit" id="edit-button" @click.stop="edit" />
      <img src="../assets/delete.png" alt="delete" id="delete-button" @click.stop="deleteUrl" />
    </div>
    <div class="create-website">
      <span>新 增 网 站</span>
      <br />
      <img src="../assets/add.png" alt="add" id="add-button" @click="seeOne=true" />
    </div>

    </div>
    <section class="input-wrapper" :class="{active:seeOne}">
      <span>新 增 网 址：</span>
      <br>
      <input type="text" placeholder="网址（自动过滤）"  maxlength="30" v-model.trim.lazy="form.url" />
      <div style="color:red; font-size:16px; display:none" id="one">请输入正确的网址</div>
      <input type="text" placeholder="名称（最多12字）" maxlength="12" v-model.trim.lazy="form.name" />
      <div style="color:red; font-size:16px; display:none" id="two">名称不可为空</div>
      <br />
      <span class="method" @click="addUrl">确 认</span>
      <span class="method" @click="cancelUrl">取 消</span>
    </section>
    <section class="edit-wrapper" :class="{active:seeTwo}">
      <span>修 改 网 址：</span>
      <br>
      <input type="text" placeholder="网址（自动过滤）"  maxlength="30" v-model.trim="updateForm.url" />
      <div style="color:red; font-size:16px; display:none" id="three">请输入正确的网址</div>
      <input type="text" placeholder="名称（最多12字）" maxlength="12" v-model.trim="updateForm.name" />
      <div style="color:red; font-size:16px; display:none" id="four">名称不可为空</div>
      <br />
      <span class="method" @click="editUrl">确 认</span>
      <span class="method" @click="cancelUrl">取 消</span>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {name:'',url:''},
      updateForm: {},
      index: 0,
      n: 0,
      seeOne: false,
      seeTwo: false,
      website: [
        { name: "MDN Web", url: "developer.mozilla.org" },
        { name: "Github", url: "github.com" },
        { name: "JavaScript 教程", url: "javascript.ruanyifeng.com" },
        { name: "Vue", url: "cn.vuejs.org" },
        { name: "React", url: "zh-hans.reactjs.org" },
        { name: "Augular", url: "angular.cn" },
        { name: "jQuery", url: "jquery.com" },
        { name: "Stack Overflow", url: "stackoverflow.com" },
        { name: "知乎", url: "zhihu.com" },
        { name: "Code Sandbox", url: "codesandbox.io" },
        { name: "Godaddy", url: "godaddy.com" },
        { name: "Hugo", url: "gohugo.io" },
        { name: "Boot CDN", url: "www.bootcdn.cn" },
        { name: "小小盛的博客", url: "eden-sheng.cn" }
      ],
      stringWeb: "",
      localWeb: ""
    };
  },
  mounted() {
    this.localWeb = JSON.parse(localStorage.getItem("abc"));
    if (this.localWeb) {
      this.website = this.localWeb;
    }
  },
  watch:{
    form:{
      handler:function(){
        this.form.url = this.form.url.replace("http://", "")
        .replace("http://", "")
        .replace('http:','')
        .replace(/\/.*/,'')
      },
      deep:true
    },
    updateForm:{
      handler:function(){
        this.updateForm.url = this.updateForm.url.replace("http://", "")
        .replace("http://", "")
        .replace(/\/.*/,'')
      },
      deep:true
    }
  },
  methods: {
    addUrl() {
      //this.$set(this.website,'E','xiedaimala.com')
      if (this.form.url.indexOf(".") === -1) {
        document.getElementById("one").style.display = "block";
        document.getElementById("two").style.display = "none";
        return;
      } else if (
        this.form.url.substr(0, 1) === " " ||
        this.form.url.substr(0, 1) === ""
      ) {
        document.getElementById("one").style.display = "block";
        document.getElementById("two").style.display = "none";
        return;
      } else if (
        this.form.name.substr(0, 1) === " " ||
        this.form.name.substr(0, 1) === ""
      ) {
        document.getElementById("one").style.display = "none";
        document.getElementById("two").style.display = "block";
        return;
      } else {
        document.getElementById("one").style.display = "none";
        this.website.push(this.form);
        this.stringWeb = JSON.stringify(this.website);
        window.localStorage.setItem("abc", this.stringWeb);
        this.website = JSON.parse(window.localStorage.getItem("abc"));
        this.seeOne = false;
        for (var i in this.form) {
          this.form[i] = "";
        }
      }
    },
    cancelUrl() {
      for (var i in this.form) {
        this.form[i] = "";
      }
      for (var o in this.updateForm) {
        this.updateForm[o] = "";
      }
      this.seeOne = false;
      this.seeTwo = false;
      document.getElementById("one").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("three").style.display = "none";
      document.getElementById("four").style.display = "none";
    },
    deleteUrl(e) {
      this.n = parseInt(
        e.currentTarget.parentElement.firstElementChild.innerHTML
      );
      this.website.splice(this.n, 1);
      this.stringWeb = JSON.stringify(this.website);
      window.localStorage.setItem("abc", this.stringWeb);
      this.website = JSON.parse(window.localStorage.getItem("abc"));
    },
    edit(e) {
      this.seeTwo = true;
      this.index = parseInt(
        e.currentTarget.parentElement.firstElementChild.innerHTML
      );
    },
    editUrl() {
      if (this.updateForm.url.indexOf(".") === -1) {
        document.getElementById("three").style.display = "block";
        document.getElementById("four").style.display = "none";
      } else if (
        this.updateForm.url.substr(0, 1) === " " ||
        this.updateForm.url.substr(0, 1) === ""
      ) {
        document.getElementById("three").style.display = "block";
        document.getElementById("four").style.display = "none";
      } else if (
        this.updateForm.name.substr(0, 1) === " " ||
        this.updateForm.name.substr(0, 1) === ""
      ) {
        document.getElementById("three").style.display = "none";
        document.getElementById("four").style.display = "block";
      } else {
        this.website.splice(this.index, 1, this.updateForm);
        this.stringWeb = JSON.stringify(this.website);
        window.localStorage.setItem("abc", this.stringWeb);
        this.website = JSON.parse(window.localStorage.getItem("abc"));
        this.seeTwo = false;
        for (var i in this.updateForm) {
          this.updateForm[i] = "";
        }
      }
    },
    goToUrl(e) {
      this.n = parseInt(
        e.currentTarget.parentElement.firstElementChild.innerHTML
      );
      console.log(this.n);
      window.location.href = "https://" + this.website[this.n].url;
    }
  }
};
</script>

<style lang="scss">
main {
  width: 100%;
  background: #efefee;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
}
main .main-wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
main  div.website,
main  div.create-website {
  width: 46%;
  height: 160px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 2px 2px 20px 0px rgba(71, 67, 71, 0.2);
  text-align: center;
}
@media (min-width:900px) {
  main{
    width: 860px;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-start;
  }
  main .main-wrapper{
  justify-content: flex-start;
  margin-left: 0;
  margin-right: -15px;
  }
  main div.website{
    width: 150px;
    margin-right: 15px;
  }
  main div.create-website{
    width: 150px;
    margin-right: 15px;
  }
  main div.website .goToUrl:hover{
    border: 1px solid black;
  }
  main div.website .goToUrl:hover span.keys{
    color: black;
  }
}
main div.website span.keys {
  font-size: 12px;
  white-space: wrap;
  color: teal;
}
main> div.website  span.webs-one {
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 50px;
}
main  div.website  span.webs-two {
  font-size: 12px;
  color: #aaaaaa;
  max-width: 100%;
  cursor: default;
}
main  div.website  span.numberIndex {
  position: absolute;
  left: 3px;
  top: 0;
  color: #aaaaaa;
  font-size: 12px;
}
main div.website .goToUrl {
  border: 1px solid #dddddd;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  transform: translateY(30px);
  width: 60%;
  height: 65%;
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s;
}
main div.website .goToUrl img.icon-img {
  width: 26px;
}
main div.website img#edit-button {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
main div.website img#delete-button {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
main div.website img.get-ico {
  width: 20px;
}
main div.create-website img {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.5s;
}
main div.create-website img:hover{
  transform: rotate(90deg);
}
main div.create-website span {
  font-size: 20px;
  margin-top: 20px;
  cursor: default;
}
main section.input-wrapper {
  position: fixed;
  width: 80%;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 40%;
  background: #060606;
  opacity: 0.7;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: none;
  z-index: 2;
}
@media (min-width: 700px) {
  main section.input-wrapper{
    width: 600px;
  }
}
main section.input-wrapper.active {
  display: block;
}
main section.input-wrapper .input-demo {
  margin: 5px 0;
}
main section.input-wrapper span {
  margin: 0 15px;
  font-size: 20px;
}
main section.input-wrapper input {
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  width: 70%;
  padding: 2px 10px;
  margin: 10px 0 20px 0;
  text-align: center;
}
main section.input-wrapper input:focus {
  outline: none;
}
main section.input-wrapper span.method {
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid white;
  font-size: 16px;
  padding: 2px 10px;
  border-radius: 5px;
}

main section.edit-wrapper {
  position: fixed;
  width: 80%;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 40%;
  background: #060606;
  opacity: 0.7;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: none;
  z-index: 2;
}
@media (min-width: 900px) {
  main section.edit-wrapper{
    width: 600px;
  }
}
main section.edit-wrapper.active {
  display: block;
}
main section.edit-wrapper .input-demo {
  margin: 5px 0;
}
main section.edit-wrapper span {
  margin: 0 15px;
  font-size: 20px;
}
main section.edit-wrapper input {
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  width: 70%;
  padding: 2px 10px;
  margin: 10px 0 20px 0;
  text-align: center;
}
main section.edit-wrapper input:focus {
  outline: none;
}
main section.edit-wrapper span.method {
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid white;
  font-size: 16px;
  padding: 2px 10px;
  border-radius: 5px;
}
</style>