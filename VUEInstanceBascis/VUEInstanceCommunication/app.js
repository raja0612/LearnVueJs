var vm1 = new Vue({
    el:"#app1",

    data: {

    	title : 'App1 Vue Js Instance'
    },
    methods:{
    	vue1Show : function(){

    		return "Vue1 Method";
    	}
    }

});

var vm2 = new Vue({
    el:"#app2",

    data: {

    	title : 'App2 Vue Js Instance',
    	vue1MethodReturnValue: ''
    },

    methods : {
       changeVue1Title: function(){


         // accessing vue 1 instance data property from vue 2 instance
       	  vm1.title = "Title is changed by Vue 2 Instance. Isn't that cool?";

       	  // accessing vue 1 instance methods  from vue 2 instance

       	  this.vue1MethodReturnValue = vm1.vue1Show();

       	  // adding new data property to vm1 instance.


       	 

       }

    }

});


vm1.newProp = "Hello World!";
console.log('added new proprty', vm1);


// Throgh pure java script setTimeout function.


setTimeout( function(){

	vm1.title = "changed by Timer";

},3000)