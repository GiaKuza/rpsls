"use strict";

const { Player } = require("../Player");
var prompt = require('prompt-sync')();

class Human extends Player{
    constructor(name){
        super(name);
    }
    
    //override parents method -> prompt user to select gesture 
    selectGesture(player){
      
        console.log("\n" + this.name + ", select a gesture:\n(0)Rock\n(1)Paper\n(2)Scissors\n(3)Lizard\n(4)Spock");
        var choice = prompt("> ");
        //console.log("\n");
        this.gestureChoice = this.gestures[choice];

    }

}
module.exports.Human = Human;