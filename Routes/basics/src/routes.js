//This file holds the App related Urls.

// In vue js when we visit app urls, Vue will display components content.


import User from "./components/User/User.vue";
import Home from "./components/Home.vue";
import UserStart from "./components/User/UserStart.vue";
import UserDetail from "./components/User/UserDetail.vue";
import UserEdit from "./components/User/UserEdit.vue";


export const routes =[
  {path:'/',component:Home},
  {path:'/user/',component:User,children:[
    {path:'',component: UserStart}, // www.example.com/user/ lodas UserStart component
    {path:':id',component:UserDetail},  // www.example.com/user/someId lodas UserDetail component
    {path:':id/edit',component:UserEdit, name:'userEdit'} // www.example.com/user/someId/edit lodas UserEdit component
  ]}
];
