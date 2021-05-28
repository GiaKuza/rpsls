"user strict";

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gestureChoice; // prompt for human, random select for AI
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    getGestureArr(){
        return this.gestures;
    }

    setScore(score){
        this.score += score;
    }
    getScore(){
        return this.score;
    }

    getName(){
        return this.name;
    }
    selectGesture(){}

}

module.exports.Player = Player;