import { compareNumbers } from './compareNumbers.js';

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
let numberToGuess = randomInt(33);
//checking that this works, I should write a test though



//this is where my button event listener will be once i write the remaining functions

guessButton.addEventListener('click', () => {
    let humanInput = Number(numberInput.value);

    let allGuesses = compareNumbers(humanInput, numberToGuess);
    
    

    if (allGuesses === 0) {
        guessAnswer.textContent = ('You are a genius!');
    } else if (allGuesses === 1) {
        guessAnswer.textContent = ('A little too high buddy...');
    } else if (allGuesses === -1) {
        guessAnswer.textContent = ('Too low...');
    }

    console.log(compareNumbers(humanInput, numberToGuess));
});
