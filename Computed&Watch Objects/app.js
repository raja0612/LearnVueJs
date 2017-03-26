new Vue({
   
   el:"#app",
   data:{
   	 counter: 0,
   	 result: ''
   },
   methods:{

   	increase:function(){
   		this.counter++;
   		this.result = this.counter > 5 ? 'Grater Than 5' : 'Less Than 5';
   	},

   	decrease:function(){
   		this.counter--;
   		this.result = this.counter > 5 ? 'Grater Than 5' : 'Less Than 5';
   	},

   	directResult:function(){

   		return this.result = this.counter > 5 ? 'Grater Than 5' : 'Less Than 5';
   	},

   	computed {

   		output: function(){
   			return this.result = this.counter > 5 ? 'Grater Than 5' : 'Less Than 5';
   		}
   	}
   	


   }

});