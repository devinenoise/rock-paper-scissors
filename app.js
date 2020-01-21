import { getRandomThrow, checkResult, } from './get-random-throw.js';

// defining DOM elements
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
const gameDisplay = document.getElementById('game-display');
const matchResults = document.getElementById('match-results');
const computerThrows = document.getElementById('computer-throw');

// defining variables for win/loss/draw counts
let wins = 0;
let losses = 0;
let draws = 0;


// press play button
playButton.addEventListener('click', () => {

    //pulls RPS from user radio button input
    const userPlays = document.querySelector('input:checked');
    const userChoice = userPlays.value;

    // calls the function for computer's choice
    const computerPlays = getRandomThrow();
    const outcome = checkResult(userChoice, computerPlays);

    // display what the computer plays
    if (computerPlays === 'rock') {
        computerThrows.textContent = ('Computer chose rock.');
    } if (computerPlays === 'paper') {
        computerThrows.textContent = ('Computer chose paper.');
    } if (computerPlays === 'scissors') {
        computerThrows.textContent = ('Computer chose scissors.');

        // update the wins count
    } if (outcome === 'win') {
        wins++;
        winCount.textContent = wins;
        matchResults.textContent = 'You win!';

        // update the losses count
    } else if (outcome === 'lose') {
        losses++;
        lossCount.textContent = losses;
        matchResults.textContent = 'You lose!';

        // update the draws count
    } else {
        draws++;
        drawCount.textContent = draws;
        matchResults.textContent = 'You both draw!';
    }

    //display the results of the match
    gameDisplay.classList.remove('hidden');

});

// reset button
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    winCount.textContent = wins;
    lossCount.textContent = losses;
    drawCount.textContent = draws;
    gameDisplay.classList.add('hidden');
});