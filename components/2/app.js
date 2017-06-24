// we can store component data in java script object.

var data = {
  status : 'Critical'
}

Vue.component('my-cmp',{

  data: function(){
    return data;
   },
  template : '<p> Server Status : {{ status }} <button @click="changeStatus"> Change Status </button></p>',

  methods: {
    changeStatus: function(){
      this.status = 'Normal'
    }
  }

});




// Here We face some problems , if we store component data in external java script object.

/*
 In the above java script object called data, we stored status : 'Critical'

 and returning this object with our vue component called 'my-cmp'

 and also we are returning template which holds the HTML Dom that contains changeStatus function , which is  calling

 my-cmp function to change the   js object "data"value.



we are using my-cmp two times on index.html ,so even if we click on one button "changeStatus" it updates the status value

on both components. because both components pointing same object reference.

*/


// so here is the solution, each component should return data with own function .

Vue.component('my-cmp2',{

  data: function(){
    return {

        newstatus : 'Critical'
    }
   },
  template : '<p> Server Status : {{ newstatus }} <button @click="changeStatus2"> Change Status2 </button></p>',

  methods: {
    changeStatus2: function(){
      this.newstatus = 'Normal'
    }
  }

});

new Vue({
     el : '#app'

});
