new Vue({

	el:'#app',

	data :{

		color:'gray',
		width:100,
		height: 100,
		x:0,
		y:0

	},
	computed:{

	 myStyle:function(){
	 	return {
           'backgroundColor': this.color,
            width: this.width +"px",
	 	}
	 }

	},

	methods:{
		statusBarWidth:function(event){
			return {
                width: event.clientY +"px"
	 	    }
		}
	}

});