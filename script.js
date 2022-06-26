let playerScore = 0;
let computerScore = 0;
let round = 0;

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
        return 'You win! Rock beats scissors.';
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        round++;
        return 'You win! Paper beats rock.';
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        round++;
        return 'You win! Scissors beats paper.';
    } if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        round++;
        return 'You lose! Rock beats scissors.';
    } if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerScore++;
        round++;
        return 'You lose! Paper beats rock';
    } if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        round++;
        return 'You lose! Scissors beats paper.'
    } else {
        round++;
        return 'It\'s a tie! You both chose the same.';
    }
}

// Write new function called game(). Call the playRound function inside
// of this one to play 5 round game that keeps score and reports winner
// or loser at the end.

function game() {
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
       
        // this code checks for non rock, paper, or scissors. if true, says don't do that, sets the loop
        // to try again, but allows loop to match the round if a correct response is eventually given.
        // This can most likely be done better and smoother.
         if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
             alert('Please choose only: rock, paper, or scissors');
             i = -1;
             continue;
         } else {
            i = round;
         }
         
        let computerSelection = computerPlay();

        console.log(`Round: ${round + 1}`);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}.`);
        console.log(roundResult);

        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log('You won the match! You beat the computer!');
    } if (playerScore < computerScore) {
        console.log('You lost the match! The computer beat you!');
    } if (playerScore === computerScore) {
        console.log('The match was a draw! You and the computer won the same number of rounds.');
    }
}
game ();