import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('body')

/* new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
}) */