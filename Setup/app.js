new Vue({

   el:"#app",

   data:{

    playerHealth:  100,
    monsterHealth: 100,
    isGameRunning: false,
    turns:[] 

   },

   methods:{

     startGame : function(){
     	this.playerHealth  = 100;
     	this.monsterHealth = 100;
     	this.isGameRunning = true;
     	this.turns = [];
     },

     attack: function(){
     	//take less energy from monster when click on attack
       var damage = this.calculateDamage(3,10);
       this.monsterHealth -= damage;
       this.monsterAttacks();
     
         if(this.checkWin()){
         	//break if either player or monster is won
         	return;
         }


         // write turn messages to turns array as js object.
           this.turns.unshift({
              isPlayer: true,
              message: 'Player Hits the Monster with energy of '+damage


           });

     },

     //when player use special attack , take more energy from monster, but monster can take same amount of energy from player.
     specialAttack: function(){
     	  this.monsterAttacks();
     	  var damage = this.calculateDamage(10,20);
     	  this.monsterHealth -= damage;
     	  // write turn messages to turns array as js object.
           this.turns.unshift({
              isPlayer: true,
              message: 'Player Hits the Monster with special attack energy of '+damage


           });

     },
     heal: function(){

     	// In this we will increase the player energy at constant of 10;

       //The below condition is to restrict the over all player health must be 100.
     	if(this.playerHealth <= 90){
     		this.playerHealth += 10;
     	} else {
           this.playerHealth = 100;
     	}

     	// when Player takes heal energy as monster will also attack

     	this.monsterAttacks();

     	this.turns.unshift({
              isPlayer: true,
              message: 'Player takes the Heal energy of 10'


           });

     },
     giveUp: function(){
     	this.isGameRunning = false;

     	// write turn messages to turns array as js object.
           this.turns.unshift({
              isPlayer: true,
              message: 'Hey Man. Never Give Up Buddy. Try and Try '


           });


     },
     //when monster attacks, playerHealth is decreased same amount of energy.
     monsterAttacks: function(){

     	var damage = this.calculateDamage(5,12);
     	this.playerHealth -= damage;

     	// write turn messages to turns array as js object.
           this.turns.unshift({
              isPlayer: false,
              message: 'Monster Hits the Player with energy of '+damage


           });

     },
     calculateDamage: function(min,max){

     	return Math.max(Math.floor(Math.random() * max) + 1,min);;

     },
     checkWin:function(){

     	// check player is won

     	if(this.monsterHealth <= 0){

     		if(confirm('You Won ! . Do you want to play again?')){
     			this.startGame();
     		} else {
     			// disable all other buttons except Start New Game (it will make run v-if block on html)
     			this.isGameRunning = false;
     		}

     		//break the checkWin();
     		return true;

          }

          // check if Player is Lost
          else if (this.playerHealth <= 0 ){


          	if(confirm('You Lost! Do you want to play again to kick the ass of Monster')){
          		this.startGame();
          	} else {
          		this.isGameRunning = false;
          	}
            
     		//break the checkWin();
          	return true;

          }


     	  // every other time return false;

          return false;


     }

   }


});