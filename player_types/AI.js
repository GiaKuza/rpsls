"use strict";

const { Player } = require("../Player");

class AI extends Player{
    constructor(name){
        super(name);
        
        this.gestureChoice = Math.floor(Math.random() * 4) + 0; // gesture choice 0=rock 1=paper 2=scissors 3=lizard 4=spock
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
        console.log(this.name + " has selected " + this.Selection + "!");
    }
}
module.exports.AI = AI;