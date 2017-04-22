new Vue({

   el:"#app",

   data:{

    playerHealth:  100,
    monsterHealth: 100,
    isGameRunning: false

   },

   methods:{

     startGame : function(){
     	this.playerHealth  = 100;
     	this.monsterHealth = 100;
     	this.isGameRunning = true;
     },

     attack: function(){
   
       var max = 10;
       var min = 3;
       var damage =  Math.max(Math.floor(Math.random() * max) + 1,min);

       this.monsterHealth -= damage;

       if(this.monsterHealth <= 0){
       	  alert('You Won !');
           this.isGameRunning = false;
           return;

       }

       max= 12;
       min =5;
       damage =  Math.max(Math.floor(Math.random() * max) + 1,min);
       this.playerHealth -= damage;

       if(this.playerHealth <= 0){
       	  alert('You Lost !');
          this.isGameRunning = false;

       }



     },
     specialAttack: function(){

     },
     heal: function(){

     },
     giveUp: function(){

     },

   }


});