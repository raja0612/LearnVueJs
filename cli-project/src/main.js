import Vue from 'vue'
import App from './App.vue'
import Calc from './Calc.vue'

Vue.component('cal-c',Calc);
new Vue({
  el: '#app',
  render: h => h(App)
})
