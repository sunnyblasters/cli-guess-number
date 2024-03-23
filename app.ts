#! /usr/bin/env node 

import inquirer  from "inquirer";

let randomNumber = Math.floor(Math.random()*10)

let myGuess = await inquirer.prompt([

{

    name:'guessNumber',
    type : 'number',
    message : 'Please enter your guess number',

}


])
if (myGuess.guessNumber === randomNumber){

    console.log('Yor are a Genius')

}else {

    console.log('Game over Please try again');
    
}


console.log('The random number is :'+ randomNumber);
