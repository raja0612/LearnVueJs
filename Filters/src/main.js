import Vue from 'vue'
import App from './App.vue'

//Global Filter declaration

Vue.filter('to-lower-case',function(value){
  return value.toLowerCase();

})
new Vue({
  el: '#app',
  render: h => h(App)
})
