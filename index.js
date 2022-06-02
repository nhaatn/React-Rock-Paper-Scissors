const rps = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    // Uses Math.random() to generate a number between 0-2
    return rps[Math.floor(Math.random() * rps.length)];
}


// Play a single round
const playRound = (playerSelection, computerSelection) => {
    console.log('Player:', playerSelection, 'Computer:', computerSelection)
    switch (playerSelection) {
        case 'rock': 
            if (computerSelection === 'rock') {
                return 'TIE GAME!!';
            } else if (computerSelection === 'paper') {
                computerScore++;
                return 'You Lose...';
            } else if (computerSelection === 'scissors') {
                playerScore++;
                return 'YOU ARE THE WINNER!';
            }
        break;

        case 'paper': 
            if (computerSelection === 'paper') {
                return 'TIE GAME!!';
            } else if (computerSelection === 'scissors') {
                computerScore++;
                return 'You Lose...';
            } else if (computerSelection === 'rock') {
                playerScore++;
                return 'YOU ARE THE WINNER!';
            }
        break;

        case 'scissors': 
            if (computerSelection === 'scissors') {
                return 'TIE GAME!!';
            } else if (computerSelection === 'rock') {
                computerScore++;
                return 'You Lose...';
            } else if (computerSelection === 'paper') {
                playerScore++;
                return 'YOU ARE THE WINNER!';
            }
        break;
    }
}

const game = () => {
    // Play game 5 times
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt('rock, paper, or scissors? ');
        const computerSelection = computerPlay();

        // Call playRound function, passing in newly returned values
        console.log(playRound(playerSelection, computerSelection));
    }
    // Display scores
    console.log('Player SCORE: ', playerScore, 'Computer SCORE: ', computerScore);

    // Determine if game is tied or there is winner
    if (playerScore === computerScore) {
        return 'Tie game... No winner';
    } else if (playerScore > computerScore) {
        return 'PlAYER WINS';
    } else {
        return 'COMPUTER WINS';
    }
}

console.log(game());