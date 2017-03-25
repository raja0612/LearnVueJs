new Vue({

	el:'#app',

	data:{

		attachRed:false,
		attachGreen:false,
		attachBlue:false,
		attachBlack:false

	},

	computed:{

		vueJsColorClass : function(){


			return{
				//java script object
				black: this.attachBlack,
				red: !this.attachBlack
			};
		}
	}

});