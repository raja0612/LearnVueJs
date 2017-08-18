
new Vue({
     el : '#app',
     data: {
       user:{
           username:'',
           email:''
       },
       users:[]
     },
     methods:{
         submit:function(){
           console.log(this.user);

           this.$http.post('https://myfirstproject-29fb9.firebaseio.com/data.json',this.user).
           then(response => {
            console.log(response);
           },error=>{
            console.log(error);
           });
         },

         fetchData(){
           this.$http.get('https://myfirstproject-29fb9.firebaseio.com/data.json')
           .then(response => {
              return response.json(); //It Returns promise.
           }).then(data => {
            const resultArray = [];
            for(let key in data){

              resultArray.push(data[key]);
            }
            this.users = resultArray;
           });
         }
     }

});
