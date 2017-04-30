new Vue({

  el: "#app",



 // These are life cycle methods of Vuejs Instance. and these are directly defined in the vue js constructor.
  beforeCreate: function(){
  	console.log('beforeCreate()');
  },
  created : function(){
  	console.log('created()');
  },
  beforeMount: function(){
  	console.log('beforeMount()');
  },
  mounted: function(){
  	console.log('mounted()');
  },
  beforeUpdate: function(){
  	console.log('beforeUpdate()');
  },
  updated: function(){
  	console.log('updated()');
  },
  beforeDestroy: function(){
    console.log('beforeDestroy()');
  },
  destroyed: function(){
  	console.log('destroyed()');
  },


  data: {
  	title: 'Vue Js Instance Life Cycle'
  },



  methods: {

    destroy: function(){

    	// call destroy() method of vue Instance

      this.$destroy();
    }

  }


});