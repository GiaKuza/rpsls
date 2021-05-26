"use strict";

const { Player } = require("../Player");

class Human extends Player{
    constructor(name, gestureChoice){
        super(name);
        this.gestureChoice = gestureChoice; // gesture choice 0=rock 1=paper 2=scissors 3=lizard 4=spock
    }


    setGestureSelection(){
        for(let i = 0; i<Player.gestures; i++ ){
            if ( i == parseInt(this.gestureChoice)){
                this.Selection = Player.gestures[i];
                break;
            }
        }
    return this.Selection;

    }

    displaySelection(){
        console.log("Player " + this.name + " has selected " + this.Selection + "!");
    }
}
module.exports.Human = Human;