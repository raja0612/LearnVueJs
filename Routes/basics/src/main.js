import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  //routes :routes if not ES6
  routes,
  mode:'history' // default adds # after port number
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
