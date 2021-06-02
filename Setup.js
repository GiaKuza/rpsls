"user strict";

const { Player } = require('./Player');
const { AI } = require('./player_types/AI');
const { Human } = require('./player_types/Human');
var prompt = require('prompt-sync')();

class Setup {
    constructor(){
        this.player1;
    }

run(){
    this.gameType();

}

gameType(){
    console.log("Select the type of game you want to play: \n(1) Single Player\n(2) Multi-Player");
    var gameType = prompt("> ");

//ToDo: add function to validate user input 
//ToDo: return to main menu until choose exit

    if(1 == parseInt(gameType)){
    
    this.gameType = gameType;
    this.singlePlayer();

    }
    else if (2 == parseInt(gameType)){
        this.gameType = gameType;
        this.multiPlayer();
    }

}

singlePlayer(){
    console.log("\nSingle Player Mode Selected! .. Its going to be You vs the AI bot! ");
    
    console.log("\nEnter player name:");
    
    //set name for human and ai players
    var playerName = prompt("> ");
    var botName = "AI BOT"
    var player1 = new Human(playerName);
    var bot1 = new AI(botName);
    
    
    console.log("\nHow many rounds do you want to play against the AI?");
    var rounds = prompt("> ");
    console.log("\nOk! lets play for " + rounds + " rounds!");

    for(let i=0; i<rounds; i++){

       player1.selectGesture();
       bot1.selectGesture();

       console.log("\n" + player1.getName()  + " chose -----> " + player1.gestureChoice);
       console.log(bot1.getName() + " chose -----> " + bot1.gestureChoice + "\n");
       
       //logic to update scores of player and bot
       this.calculateScore(player1.gestureChoice, bot1.gestureChoice, player1, bot1);
       
    }
    this.declareWinner(player1, bot1);
    

}// end of singlePlayer()


multiPlayer(){
    console.log("\nMulti-Player Mode Selected! ! ");
    
    console.log("\nEnter a name for Player 1:");
    var player1name = prompt("> ");
    console.log("\nEnter a name for Player 2:");
    var player2name = prompt("> ");

    var player1 = new Human(player1name);
    var player2 = new Human(player2name);

    console.log("\nHow many rounds do you want to play against your opponent?");
    var rounds = prompt("> ");
    console.log("\nOk! lets play for " + rounds + " rounds!");

    for(let i=0; i<rounds; i++){
        player1.selectGesture();
        player2.selectGesture();
 
        console.log("\n" + player1.name  + " chose -----> " + player1.gestureChoice);
        console.log(player2.name + " chose -----> " + player2.gestureChoice + "\n");
        
        //logic to update scores of players
        this.calculateScore(player1.gestureChoice, player2.gestureChoice, player1, player2);
 
     }
     this.declareWinner(player1, player2);
     
}

//logic to update scores of player and bot takes two arguments for gestures
calculateScore(playerSelection, botSelection, player1, bot1){
    //console.log("\n");
    
    if(playerSelection == botSelection){
        console.log("Tie!, no points awarded to either player");    
    }

    if(playerSelection == "rock"){
        if((botSelection == "scissors") || (botSelection == "lizard")){
            console.log(playerSelection + " beats " + botSelection + " !\n+1 for "+ player1.getName());
            player1.setScore(1);
        }
        else if((botSelection == "spock") || (botSelection == "paper")){
            console.log(botSelection + " beats " + playerSelection + " !\n+1 for "+ bot1.getName());
            bot1.setScore(1);
        }
    }

    if(playerSelection == "scissors"){
        if((botSelection == "paper") || (botSelection == "lizard")){
            console.log(playerSelection + " beats " + botSelection + " !\n+1 for "+ player1.getName());
            player1.setScore(1);
        }
       
        else if((botSelection == "spock") || (botSelection == "rock" )){
            console.log(botSelection + " beats " + playerSelection + " !\n+1 for "+ bot1.getName());
            bot1.setScore(1);
        }
    }

    if(playerSelection == "lizard"){
        if((botSelection == "spock") || (botSelection == "paper")){
            console.log(playerSelection + " beats " + botSelection + " !\n+1 for "+ player1.getName());
            player1.setScore(1);
        }
        else if((botSelection == "rock") || (botSelection == "scissors" )){
            console.log(botSelection + " beats " + playerSelection + " !\n+1 for "+ bot1.getName());
            bot1.setScore(1);
        }
    }
   if(playerSelection == "spock"){
        if((botSelection == "scissors") || (botSelection == "rock")){
            console.log(playerSelection + " beats " + botSelection + " !\n+1 for "+ player1.getName());
            player1.setScore(1);
        }
        else if((botSelection == "paper") || (botSelection == "lizard" )){
            console.log(botSelection + " beats " + playerSelection + " !\n+1 for "+ bot1.getName());
            bot1.setScore(1);
        }
    }

    if(playerSelection == "paper"){
        if((botSelection == "rock") || (botSelection == "spock")){
            console.log(playerSelection + " beats " + botSelection + " !\n+1 for "+ player1.getName());
            player1.setScore(1);
        }
        else if((botSelection == "scissors") || (botSelection == "lizard" )){
            console.log(botSelection + " beats " + playerSelection + " !\n+1 for "+ bot1.getName());
            bot1.setScore(1);
        }
    }
    //console.log("\n");
}

declareWinner(player1, bot1){
    console.log("\n Game over! \n\nScore:\n");
    console.log(player1.name + " : " + player1.score);
    console.log(bot1.name + " : " + bot1.score);

    if(player1.score > bot1.score){
        console.log("\n" + player1.name + " WINS!! \n");    

    }
    else if(bot1.score > player1.score ){
        console.log("\n" + bot1.name + " WINS!! \n");
    }
    else{
        console.log("IT's a Draw!!");
    }
}
}

module.exports.Setup = Setup;
   

