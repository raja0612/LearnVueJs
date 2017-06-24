Vue.component('global-cmp',{
  data: function(){
    return {
      status : 'This is How we Register Components Globally'
    }
  },
  template : '<p> {{ status }}</p>'

});

new Vue({
     el : '#app'

});


new Vue({
     el : '#app2'

});

// In the above,Here we registered component called "global-cmp" globally.So both app and app2 we are using this component.


// Register component locally.


var cmp = {
     data : function(){
           return {  status : 'This is How we Register Components locally'};
        },
    template: '<p> {{ status }}</p>'
}


new Vue({
  el:"#app3",
  components : {
    'local-cmp' : cmp
  }
});


new Vue({
  el:"#app4",
});

// on index.html  we are using local-cmp in app4 location, we will get an error , component not registerd.
