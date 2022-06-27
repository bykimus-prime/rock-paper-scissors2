let playerScore = 0;
let computerScore = 0;
let round = 0;
let roundResult = '';

// Write function called computerPlay that randomly returns rock, paper, or scissors.

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

// Write function that plays single round. Return string that declares winner of round.

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

// Make buttons do things
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreMessage(roundResult, playerSelection, computerSelection);
    updateScore();
    console.log(playerSelection);
    console.log(computerSelection);
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreMessage(roundResult, playerSelection, computerSelection);
    updateScore();
    console.log(playerSelection);
    console.log(computerSelection);
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScoreMessage(roundResult, playerSelection, computerSelection);
    updateScore();
    console.log(playerSelection);
    console.log(computerSelection);
});

// Adjusts the score
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
// Write new function called game(). Call the playRound function inside
// of this one to play 5 round game that keeps score and reports winner
// or loser at the end.

// function game() {
//     for (let i = 0; i < 5; i++) {
        
//         let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
       
//         // this code checks for non rock, paper, or scissors. if true, says don't do that, sets the loop
//         // to try again, but allows loop to match the round if a correct response is eventually given.
//         // This can most likely be done better and smoother.
//          if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
//              alert('Please choose only: rock, paper, or scissors');
//              i = -1;
//              continue;
//          } else {
//             i = round;
//          }
         
//         let computerSelection = computerPlay();

//         console.log(`Round: ${round + 1}`);
//         let roundResult = playRound(playerSelection, computerSelection);
//         console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}.`);
//         console.log(roundResult);

//         console.log(`Player Score: ${playerScore}`);
//         console.log(`Computer Score: ${computerScore}`);
//     }
//     if (playerScore > computerScore) {
//         console.log('You won the match! You beat the computer!');
//     } if (playerScore < computerScore) {
//         console.log('You lost the match! The computer beat you!');
//     } if (playerScore === computerScore) {
//         console.log('The match was a draw! You and the computer won the same number of rounds.');
//     }
// }
// game ();