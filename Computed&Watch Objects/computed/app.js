new Vue({
	el:"#app",
    data:{
    	counter:0,
    	secondCounter:0,
    },

    methods:{
    	result:function(){
    	  console.log('result()')
          return  this.counter > 5 ? 'Grater Than 5': 'Less Than 5';

    	}
    },
    computed:{
    	output:function(){
    	  console.log("computed()")
    	  return  this.counter > 5 ? 'Grater Than 5': 'Less Than 5';
    	}
    },

    //alternative to computed property us watch property

    watch:{

    	counter: function(value){
            var vm = this;
    		setTimeout(function(){
    			  vm.counter = 0;

    			},2000);


    	}
    }


});