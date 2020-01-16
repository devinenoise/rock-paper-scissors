import { getRandomThrow, checkResult, } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
const gameDisplay = document.getElementById('game-display');
const matchResults = document.getElementById('match-results');
const computerThrows = document.getElementById('computer-throw');

let wins = 0;
let losses = 0;
let draws = 0;

playButton.addEventListener('click', () => {

    const userPlays = document.querySelector('input:checked');
    const userChoice = userPlays.value;
    const computerPlays = getRandomThrow();
    const outcome = checkResult(userChoice, computerPlays);

    if (computerPlays === 'rock') {
        computerThrows.textContent = ('Computer chose rock.');
    } if (computerPlays === 'paper') {
        computerThrows.textContent = ('Computer chose paper.');
    } if (computerPlays === 'scissors') {
        computerThrows.textContent = ('Computer chose scissors.');
    } if (outcome === 'win') {
        wins++;
        winCount.textContent = wins;
        matchResults.textContent = 'You win!';
    } else if (outcome === 'lose') {
        losses++;
        lossCount.textContent = losses;
        matchResults.textContent = 'You lose!';
    } else {
        draws++;
        drawCount.textContent = draws;
        matchResults.textContent = 'You both draw!';
    }

    gameDisplay.classList.remove('hidden');

});

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    winCount.textContent = wins;
    lossCount.textContent = losses;
    drawCount.textContent = draws;
    gameDisplay.classList.add('hidden');
});