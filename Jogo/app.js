new Vue({
    el:'#app',
    
    data:{
        playerHealth: 5000,
        monsterHealth: 10000,
        gameIsRunning: false,
        monsterName: '',
        playerName: '',
        quantidadeHeal: 4,
        turns:[]
    },
    methods: {
        startGame: function (){ 
         this.gameIsRunning = true;
         this.playerHealth = 5000;
         this.monsterHealth = 10000;
         this.turns = [];
      },
      transformar: function () {
          this.transformar = true;
          this.turns.unshift({
            isPlayer: true,
            text:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        });
 
        
          
      },
      attack: function (){
          min=50;
          max=170;
          if (this.transformar == true){
            var damage = this.calculateDamage(min*20,max*20); 
          }else{
            var damage = this.calculateDamage(min,max);
          }
         this.monsterHealth -= damage;
         this.turns.unshift({
             isPlayer: true,
             text:'Voce bate no inimigo, oferecendo-o '+damage + ' de dano.'
         });
         var slap = new Audio('slap.mp3');
         slap.play();
             if(this.checkWin()){
                 return;
             }  
         this.monsterAttacks();

      },
      specialAttack: function (){
        min=50;
        max=170;
        if (this.transformar == true){
            var damage = this.calculateDamage(min*50,max*50);
            this.monsterHealth -= damage; 
            this.turns.unshift({
                isPlayer: true,
                text:'PIMBA NA BEICA! '+damage+' DE DANO!'
            });
          }else{
            var damage = this.calculateDamage(min*5,max*5);
            this.monsterHealth -= damage;
            this.turns.unshift({
             isPlayer: true,
             text:'Voce bate no inimigo, oferecendo-o '+damage + ' de dano.'
            });
        }
        
         
             if(this.checkWin()){
                 return;
             }
         this.monsterAttacks();
      },
      heal: function (){
          var quantidadeHeal;
          if (this.transformar == true) {
              this.playerHealth += 9999999999999;
              this.turns.unshift({
                isPlayer: true,
                text:'Player heals for' + this.playerHealth,
            });
          }
          if(this.playerHealth <= 900){
             this.playerHealth += 10000;
          }else if(this.playerHealth <= 2000){
            this.playerHealth += 4000;
         }else{
             this.playerHealth += 1000;
          }
          if (this.playerHealth >= 5000){ this.playerHealth = 5000;}
             this.turns.unshift({
             isPlayer: true,
             text:'You drink a ponchinha'
         });
         this.monsterAttacks();
      },
      giveUp: function (){
         this.gameIsRunning = false;
         alert('Voce desiste...');
         var lose = new Audio('when.mp3');
         lose.play();
      },
      monsterAttacks: function(){
          var damage = this.calculateDamage(400,600)
         this.playerHealth -= damage;
         this.checkWin();
         this.turns.unshift({
             isPlayer: false,
             text:'Leva porrada, e '+damage + ' de danos...'
         });
      },
      calculateDamage: function(min, max){
        return Math.max(Math.floor(Math.random() * max) + 1, min);
      },
      checkWin: function (){
            if(this.monsterHealth <= 0){
                 if(confirm('Derrotou o inimigo!')){
                     this.startGame();
                 }else{
                     this.gameIsRunning = false;
                 }
                 return true;
            }else if(this.playerHealth <= 0){
                 if(confirm('Voce perdeu a colher...')){
                     var lose = new Audio('when.mp3');
                     this.startGame();
                     lose.play();
                 }else{
                     this.gameIsRunning = false;
                 }
                 return true;
            }
             return false;
         }
 
      } 
 
 });
 