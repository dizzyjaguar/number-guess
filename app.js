import { compareNumbers } from './compareNumbers.js';

const numberInput = document.getElementById('number-input');
const guessButton = document.getElementById('guess-button');
const guessAnswer = document.getElementById('guess-answer');
const triesSpan = document.getElementById('tries-span');


// function for getting a random integer up to a maximum number
function randomInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
}

let numberToGuess = randomInt(33);
let tries = 9;

guessButton.addEventListener('click', () => {
    let humanInput = Number(numberInput.value);
    let allGuesses = compareNumbers(humanInput, numberToGuess);
    const loseMsg = ('Your all out of tries, YOU LOSE');

    tries--;
    triesSpan.textContent = tries;

    if (allGuesses === 0) {
        guessAnswer.textContent = ('You are a genius!');
        guessButton.disabled = true;
    } else if (allGuesses === 1) {
        guessAnswer.textContent = ('A little too high buddy...');
    } else if (allGuesses === -1) {
        guessAnswer.textContent = ('Too low...');
    }

    if (tries === 0) {
        alert (loseMsg);
        guessButton.disabled = true;
    }
});
