


Vue.component('my-cmp',{
    data: function(){
        return {
          status :'Critical'
        };
    },
    methods : {

      changeStatus:function(){
        this.status ='Normal';
      }

    },
    template : '<p>Server Status  : {{status}} (<button @click="changeStatus">Change Status </button>)</p>'

});

var local = {
    data: function(){
        return {
          x: 10,
          y: 20
        };
    },
    template : '<p>Addition  : {{ x + y}} </p>'

};


new Vue({

  el:"#app",

  components:{
    'local-cmp': local
  }

});

new Vue({

  el:"#app2",

});
