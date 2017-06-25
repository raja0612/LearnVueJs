import Vue from 'vue'
import App from './App.vue'

import Home from './Home.vue'

//register Home component Globally
Vue.component('app-servers',Home);

new Vue({
  el: '#app',
  render: h => h(App)
  // here render function  is alternative of template property
})



// when index.html is rendered on browser the id = app  will be replaced by template tag content of App.vue.

// because root Vue object rendering App content

// because here the render function returning App template.



// Register Home.vue component
