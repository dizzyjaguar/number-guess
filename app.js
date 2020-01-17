import { compareNumbers } from './compareNumbers';

const numberInput = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const guessAnswer = document.getElementById('guess-answer');
const triesSpan = document.getElementById('tries-span');
const winLoseSpan = document.getElementById('win-lose');

// function for getting a random integer up to a maximum number
function randomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
}
// the number to guess will be generated randomly up to the number 33
const numberToGuess = randomInt(33);
//checking that this works, I should write a test though
console.log (numberToGuess);


//this is where my button event listener will be once i write the remaining functions

guessButton.addEventListener('click', compareNumbers(numberInput, numberToGuess)); {
    console.log('This is working kind of');
}