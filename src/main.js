import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 创建一个全局的混入
Vue.mixin({
  mounted() {
    document.title = "Dazzling练手项目";
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')
