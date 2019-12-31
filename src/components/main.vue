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
        <span class="webs-two">{{showUrl[index]}}</span>
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
      <span style="line-height:30px; cursor:default; font-family:'Microsoft YaHei',微软雅黑,'MicrosoftJhengHei',华文细黑,STHeiti,MingLiu;">新增快捷网址</span>
      <br />
      <input
        style="margin-top:10px;"
        type="text"
        placeholder="名 称"
        maxlength="12"
        v-model.trim.lazy="form.name"
      />
      <div style="font-size:12px; display:none; color:#E8EAED" id="two">名称不可为空</div>
      <br />
      <input type="text" placeholder="网 址" v-model.trim.lazy="form.url" />
      <div style="font-size:12px; display:none; color:#E8EAED" id="one">请输入正确的网址</div>
      <br />
      <span class="method" @click="addUrl">确 认</span>
      <span class="method" @click="cancelUrl">取 消</span>
    </section>
    <section class="edit-wrapper" :class="{active:seeTwo}">
      <span style="line-height:30px; cursor:default;  font-family:'Microsoft YaHei',微软雅黑,'MicrosoftJhengHei',华文细黑,STHeiti,MingLiu;">修改网址</span>
      <br />
      <input
        style="margin-top:10px;"
        type="text"
        placeholder="名 称"
        maxlength="12"
        v-model.trim.lazy="updateForm.name"
      />
      <div style="font-size:12px; display:none; color:#E8EAED" id="four">名称不可为空</div>
      <br />
      <input type="text" placeholder="网 址" v-model.trim.lazy="updateForm.url" />
      <div style="font-size:12px; display:none; color:#E8EAED" id="three">请输入正确的网址</div>
      <br />
      <span class="method" @click="editUrl">确 认</span>
      <span class="method" @click="cancelUrl">取 消</span>
    </section>
    <section class="total-wrapper" :class="{active:seeOne||seeTwo}"></section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: { name: "", url: "" },
      updateForm: { name: "", url: "" },
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
      showUrl: [],
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
  watch: {
    form: {
      handler: function() {
        this.form.url = this.form.url
          .replace("https://", "")
          .replace("http://", "")
          .replace("http:", "")
          // .replace(/\/.*/, "") 
      },
      deep: true
    },
    website: {
      handler: function() {
        this.showUrl.splice(0, this.showUrl.length);
        this.website.forEach(value => {
          if (value.url.length >= 17) {
            this.showUrl.push(value.url.substr(0, 17) + "...");
          } else {
            this.showUrl.push(value.url);
          }
        });
      },
      deep: true,
      immediate: true
    },
    updateForm: {
      handler: function() {
        this.updateForm.url = this.updateForm.url
          .replace("https://", "")
          .replace("http://", "")
          .replace("http:", "");
        //.replace(/\/.*/, "");
      },
      deep: true
    }
  },
  methods: {
    addUrl() {
      //this.$set(this.website,'E','ele.me')
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
main .main-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
main div.website,
main div.create-website {
  width: 46%;
  height: 160px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 2px 2px 20px 0px rgba(71, 67, 71, 0.2);
  text-align: center;
  background: white;
}
@media (min-width: 900px) {
  main {
    width: 860px;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-start;
  }
  main .main-wrapper {
    justify-content: flex-start;
    margin-left: 0;
    margin-right: -15px;
  }
  main div.website {
    width: 150px;
    margin-right: 15px;
  }
  main div.create-website {
    width: 150px;
    margin-right: 15px;
  }
  main div.website .goToUrl:hover {
    border: 1px solid black;
  }
  main div.website .goToUrl:hover span.keys {
    color: black;
  }
}
main div.website span.keys {
  font-size: 12px;
  white-space: wrap;
  color: teal;
  transform: translateY(20px);
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main > div.website span.webs-one {
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 50px;
}
main div.website span.webs-two {
  font-size: 12px;
  color: #aaaaaa;
  max-width: 100%;
  cursor: default;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main div.website span.numberIndex {
  position: absolute;
  left: 3px;
  top: 0;
  color: #aaaaaa;
  font-size: 12px;
}
main div.website .goToUrl {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  transform: translateY(30px);
  width: 100px;
  height: 100px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s;
  overflow: hidden;
}
main div.website .goToUrl img.icon-img {
  width: 26px;
  transform: translateY(-10px);
}
main div.website img#edit-button {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: all 0.5s;
  opacity: 0.7;
}
main div.website img#delete-button {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.5s;
  opacity: 0.7;
}
@media (min-width: 900px) {
  main div.website img#edit-button {
    opacity: 0.1;
  }
  main div.website img#edit-button:hover {
    opacity: 1;
  }
  main div.website img#delete-button {
    opacity: 0.1;
  }
  main div.website img#delete-button:hover {
    opacity: 1;
  }
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
main div.create-website img:hover {
  transform: rotate(90deg);
}
main div.create-website span {
  font-size: 20px;
  margin-top: 20px;
  cursor: default;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
  transform: translateY(10px);
}
main section.input-wrapper {
  position: fixed;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 40%;
  background: #292a2d;
  opacity: 1;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: none;
  z-index: 6;
}
@media (min-width: 700px) {
  main section.input-wrapper {
    width: 400px;
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
  font-size: 16px;
  color: #e8eaed;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main section.input-wrapper input {
  border-radius: 5px;
  border: 1px solid black;
  font-size: 14px;
  width: 90%;
  padding: 2px 10px;
  margin: 0 0 20px 0;
  text-align: center;
  color: #e8eaed;
  background: #1d1d1f;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main section.input-wrapper input:focus {
  outline: none;
}
main section.input-wrapper span.method {
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid white;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 5px;
  color: #e8eaed;
  cursor: pointer;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}

main section.edit-wrapper {
  position: fixed;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 40%;
  background: #292a2d;
  opacity: 1;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: none;
  z-index: 6;
}
@media (min-width: 900px) {
  main section.edit-wrapper {
    width: 400px;
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
  font-size: 16px;
  color: #e8eaed;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main section.edit-wrapper input {
  border-radius: 5px;
  border: 1px solid black;
  font-size: 14px;
  width: 90%;
  padding: 2px 10px;
  margin: 0 0 20px 0;
  text-align: center;
  color: #e8eaed;
  background: #1d1d1f;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main section.edit-wrapper input:focus {
  outline: none;
}
main section.edit-wrapper span.method {
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid white;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 5px;
  color: #e8eaed;
  cursor: pointer;
  font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;
}
main section.total-wrapper {
  top: 0;
  left: 0;
  position: fixed;
  background: #1d1d1f;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  opacity: 0.5;
  display: none;
}
main section.total-wrapper.active {
  display: block;
}
</style>