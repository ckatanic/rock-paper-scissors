const display = document.getElementById("display-text");
console.log(display.textContent);

let text = "Choose Your Weapon!"
let currentLetter = 0;

function write() {
    display.textContent = display.textContent + text.charAt(currentLetter);
    currentLetter++

    if (currentLetter < text.length) window.setTimeout(write, 75);
}

let score = {
    player: 0,
    computer: 0
}

// Randomly picks Rock, Paper or Scissors for the computer
function getComputerChoice() {
    let getComputerChoice = "";
    let choiceOptions = ['Rock', 'Paper', 'Scissors'];
    getComputerChoice = choiceOptions[Math.floor(Math.random() * 3)];
    return getComputerChoice;
}

// Get player input and use computerChoice() to play 1 round of the game
function playRound() {
    let computerChoice = getComputerChoice();
    let playerInput = prompt("Pick Rock, Paper or Scissors").toLowerCase().split("");
    playerInput[0] = playerInput[0].toUpperCase();
    let playerChoice = playerInput.join("");
    if (playerChoice != 'Rock' && playerChoice != 'Paper' && playerChoice != 'Scissors') {
        alert('You did not enter a valid choice. Please Try again');
        return playRound();
    }
    // console.log("Computer's Choice: " + computerChoice);
    // console.log("Player's Choice: " + playerChoice);
    if (playerChoice === computerChoice) {
        console.log("Draw!") 
        return playRound();
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        score.player += 1;
        return "You win! Rock beats Scissors!";
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        score.computer += 1;
        return "You lose! Paper beats Rock!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        score.computer += 1;
        return "You lose! Scissors beats Rock!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score.player += 1;
        return "You win! Paper beats Rock!";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        score.computer += 1;
        return "You lose! Rock beats Scissors!";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score.player += 1;
        return "You win! Scissors beats Paper!";
    }
}

// Calls playRound() until either the player or the computer wins 3 games (best of 5)

function playGame() {
    while (score.player <= 2 && score.computer <= 2 ) {
        console.log(playRound());
        console.log(score);
    }

    if (score.player === 3) {
        console.log('Game Over: You Won!');
    } else {
        console.log("Game Over: You lost!")
    }

}

write();