function getComputerChoice() {
    let getComputerChoice = "";
    let choiceOptions = ['Rock', 'Paper', 'Scissors'];
    getComputerChoice = choiceOptions[Math.floor(Math.random() * 3)];
    return getComputerChoice;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerInput = prompt("Pick Rock, Paper or Scissors").toLowerCase().split("");
    playerInput[0] = playerInput[0].toUpperCase();
    let playerChoice = playerInput.join("");
    // console.log("Computer's Choice: " + computerChoice);
    // console.log("Player's Choice: " + playerChoice);
    if (playerChoice === computerChoice) {
        return "Draw!"
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        return "You lose! Paper beats Rock!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Rock!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Paper!";
    }
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock!";
    }
}