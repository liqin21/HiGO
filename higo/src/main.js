import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()  //在vue实例上添加$bus 事件总线属性
new Vue({
  render: h => h(App),
}).$mount('#app')
