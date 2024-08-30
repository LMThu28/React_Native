// Implement a game rest functionality, so that the player can make a new guess!

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const againButton = document.querySelector('.again');

againButton.addEventListener('click', resetGame);

function resetGame() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}