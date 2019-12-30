import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('body')

// Web Message
!function () {
  const v = '1.0.1'
  console.log("Version: v", v)
  const email = 'edenshengwork@gmail.com'
  console.log("E-mail: ", email)
  const author = 'Eden Sheng'
  console.log("Author: ", author)
}.call()


