
//syntax for create vue components
/*

   Vue.component('custom html tag',{

       data: function(){
          return  {
      }
    }
 });

*/

Vue.component('my-cmp',{

  data: function(){

    return {
      status : 'critical'
    }
  },

  template : '<p> server Status : {{ status }}</p>'

});

new Vue({
     el : '#app'

});
