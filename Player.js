"user strict";

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
    }
}

gestures = ["rock", "paper", "scissors", "lizard", "spock"];


module.exports.Player = {
    Player : Player,
    gestures : gestures
}