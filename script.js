let playerScore = 0;
let computerScore = 0;
let round = 0;
let roundResult = '';

// Randomly returns rock, paper, or scissors
function computerPlay() {
    const janken = Math.floor(Math.random() * 3);
    if (janken === 0) {
        return 'rock';
    } if (janken === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Plays a round, returns string that declares winner of round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        round++;
        roundResult = 'player';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        round++;
        roundResult = 'player';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        round++;
        roundResult = 'player';
    } if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        round++;
        roundResult = 'computer';
    } if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        round++;
        roundResult = 'computer';
    } if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        round++;
        roundResult = 'computer'
    } if (playerSelection === computerSelection) {
        round++;
        roundResult = 'tie';
    }
}

// Set DOM events
const scoreChoice = document.getElementById('scoreChoice');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreDisp = document.getElementById('playerScore');
const computerScoreDisp = document.getElementById('computerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

// Make buttons do things, part of this can be put into a different function to save space later
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreMessage(roundResult, playerSelection, computerSelection);
    updateScore();
    updateChoiceImg(playerSelection, computerSelection);
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreMessage(roundResult, playerSelection, computerSelection);
    updateScore();
    updateChoiceImg(playerSelection, computerSelection);
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreMessage(roundResult, playerSelection, computerSelection);
    updateScore();
    updateChoiceImg(playerSelection, computerSelection);
});

// Updates choice pictures
function updateChoiceImg(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            document.getElementById('playerChoice').style.backgroundImage = 'url(./imgs/everything_everywhere_allAtOnce.jpg)';
            break;
        case 'paper':
            document.getElementById('playerChoice').style.backgroundImage = 'url(./imgs/octopus-crafts-paper.jpg)';
            break;
        case 'scissors':
            document.getElementById('playerChoice').style.backgroundImage = 'url(./imgs/scissors_ikea.jpg)';
            break;
    }

    switch (computerSelection) {
        case 'rock':
            document.getElementById('computerChoice').style.backgroundImage = 'url(./imgs/everything_everywhere_allAtOnce.jpg)';
            break;
        case 'paper':
            document.getElementById('computerChoice').style.backgroundImage = 'url(./imgs/octopus-crafts-paper.jpg)';
            break;
        case 'scissors':
            document.getElementById('computerChoice').style.backgroundImage = 'url(./imgs/scissors_ikea.jpg)';
            break;
    }
}

// Updates the score and message
function updateScore() {
    if (roundResult === 'tie') {
        scoreChoice.textContent = 'It\'s a tie!';
    } else if (roundResult === 'player') {
        scoreChoice.textContent = 'You won!';
    } else if (roundResult === 'computer') {
        scoreChoice.textContent = 'You lost!';
    }

    playerScoreDisp.textContent = `Player: ${playerScore}`;
    computerScoreDisp.textContent = `Computer ${computerScore}`;
    roundCount.textContent = `Round: ${round}`;
}

function updateScoreMessage(roundResult, playerSelection, computerSelection) {
    if (roundResult === 'player') {
        scoreMessage.textContent = (`Your ${playerSelection} beats the computer's ${computerSelection}!`);
    } if (roundResult === 'computer') {
        scoreMessage.textContent = (`The computer's ${computerSelection} beat your ${playerSelection}...`);
    } if (roundResult === 'tie') {
        scoreMessage.textContent = (`You both chose ${playerSelection}... It's a tie!?`)
    }
}