// get the button tag and put it into buttons variable
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

// Uses Math.random() to generate a number between 0-2 for the computer's choice
const computerPlay = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// This function hides the buttons after either player wins
const hideButtons = () => {
    buttons.forEach((e) => {
        e.disabled = true;
    })
}

// Play the round and take in the player's selection to start the game
const playRound = (playerSelection) => {
    let computerSelection  = computerPlay();
    let result = '';

    // If the PLAYER WINS
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        result = `Player Win! ${playerSelection} beats ${computerSelection} <br><br> Player: ${playerScore} Computer: ${computerScore}<br><br>`;
    
        if (playerScore === 5) {
            result += '✔️✔️✔️ CONGRATULATIONS YOU WON THE GAME!! ✔️✔️✔️';
            hideButtons();
        }
    } else if (playerSelection === computerSelection) { // If TIE GAME
        result = `😐😐😐 TIE GAME 😐😐😐`;
    } else { // Else the COMPUTER WINS
        computerScore++;
        result = `Computer Win! ${computerSelection} beats ${playerSelection} <br><br> Player: ${playerScore} Computer: ${computerScore}<br><br>`;
    
        if (computerScore === 5) {
            result += `🤖🤖🤖 COMPUTER WON THE GAME!! 🤖🤖🤖`;
            hideButtons();
        }
    }

    // Add the result to the div that has an ID of result
    document.getElementById("result").innerHTML = result;
    return;
}

// Start the game when one button is clicked
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});