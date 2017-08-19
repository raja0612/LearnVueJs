//This file holds the App related Urls.

// In vue js when we visit app urls, Vue will display components content.


import User from "./components/User/User.vue";
import Home from "./components/Home.vue";

export const routes =[
  {path:'/',component:Home},
  {path:'/user',component:User}
];
