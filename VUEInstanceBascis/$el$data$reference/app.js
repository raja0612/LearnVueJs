

//Other way intialize Vue data.

var data = {
	title : "Hello World !"
}

var vm1 = new Vue({
	
	el:"#app",
	data: data, // here we are assiginin data javascript object to vue instance data property.


    methods:{

    	show$dataDemo : function(){

    		console.log(this.$data);

    		this.$refs.myButton.innerText ="Button Name is changed";
    	}

    }

});


if(vm1.$data  ===  data){
	console.log('true');
}


 // another way to intialize vue js instance


 var vm = new Vue({
    // observe we didn't give any el id  to control the html content by Vue instance.

    data: {

    	mount:'Welcome to $ mount() method',
    }

 })

// Here telling vue js to take the app2 id of html and controle the app2 element .instead of declaring the el :"#app2"
 vm.$mount("#app2");





 var vm2 = new Vue({
     template : '<h1>Hello</h1>'
 });


vm2.$mount();

document.getElementById('app3').appendChild(vm2.$el);













