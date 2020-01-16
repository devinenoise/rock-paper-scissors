import { getRandomThrow, checkResult, } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
const matchResults = document.getElementById('results');
const computerThrows = document.getElementById('computer-throw');
const winOrLose = document.getElementById('win-or-lose');

let wins = 0;
let losses = 0;
let draws = 0;

playButton.addEventListener('click', () => {

    const userPlays = document.querySelector('input:checked');
    const userChoice = userPlays.value;
    const computerPlays = getRandomThrow();
    const outcome = checkResult(userChoice, computerPlays);

    if (computerPlays === 'rock') {
        computerThrows.textContent = ('rock.');
        matchResults.classList.remove('hidden');
        winOrLose.classList.remove('hidden');
    } if (computerPlays === 'paper') {
        computerThrows.textContent = ('paper.');
        matchResults.classList.remove('hidden');
        winOrLose.classList.remove('hidden');
    } if (computerPlays === 'scissors') {
        computerThrows.textContent = ('scissors.');
        matchResults.classList.remove('hidden');
        winOrLose.classList.remove('hidden');

    } if (outcome === 'win') {
        wins++;
        winCount.textContent = wins;
        winOrLose.classList.remove('hidden');
        matchResults.textContent = 'win!';
    } else if (outcome === 'lose') {
        losses++;
        lossCount.textContent = losses;
        winOrLose.classList.remove('hidden');
        matchResults.textContent = 'lose!';
    } else {
        draws++;
        drawCount.textContent = draws;
        winOrLose.classList.remove('hidden');
        matchResults.textContent = 'both draw!';
    }

});