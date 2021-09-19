const buttons = document.getElementsByClassName("control");
const playerscores = document.getElementById("player-score");
const computerscores = document.getElementById("computer-scores");
const playerimage = document.getElementById("player-image");
const computerimage = document.getElementById("computer-image");
const messages = document.getElementById("Messages");
const choices = ['Rock', 'Paper', 'Scissors'];

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    playerimage.src = `assets/images/${choices[playerChoice]}.png`;
    playerimage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerimage.src = `assets/images/${choices[computerChoice]}.png`;
    computerimage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}