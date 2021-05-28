"use strict";

const { Player } = require("../Player");

class AI extends Player{
    constructor(name){
        super(name);
    }

    selectGesture(){
        //randomly select a number 0-4, then reference the array to get the name of the gesture 
        var choice = Math.floor(Math.random() * 4) + 0;
        this.gestureChoice = this.gestures[choice];
    }
}
module.exports.AI = AI;