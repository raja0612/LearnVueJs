new Vue({

	el:'#app',

	data :{

       value:0,
       x:0,
       y:0
	},

	methods: {

		buttonEvent : function(){
			alert("Button Alert");

		},
		spaceEnterEvent : function(){
			alert("Name Shouldn't contain spaces");
		},
		ShowCoordinates: function(event){

			this.x = event.clientX;
			this.y = event.clientY;
		},

		increase:function(){
			this.value++;
		}
	}

});