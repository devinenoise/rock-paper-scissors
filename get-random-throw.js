export function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    return computerThrow(randomNumber);
}

export function computerThrow(number) {
    if (number === 0) {
        return 'rock';
    } if (number === 1) {
        return 'paper';
    } if (number === 2) {
        return 'scissors';
    }
}

export function checkResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } if (player === 'paper' && computer === 'rock') {
        return 'win';
    } if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else return 'lose';
}

