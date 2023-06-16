const display = document.getElementById("display-text");
const gameImages = document.getElementById("gamePlay");
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');


let gameImageDivs = document.querySelectorAll('.game-display');
gameImageDivs.forEach((x) => {
    x.addEventListener('click', playRound);
})

let text = "Choose Your Weapon!";
let currentLetter = 0;

function write() {
    display.textContent = display.textContent + text.charAt(currentLetter);
    currentLetter++

    if (currentLetter < text.length) {
        setTimeout(write, 75);
    }
}

let score = {
    player: 0,
    computer: 0
}

// Randomly picks Rock, Paper or Scissors for the computer
function getComputerChoice() {
    let computerChoice;
    let choiceOptions = [
        {word: 'Rock', image: '/img/cpu_rock_clear.png'},
        {word: 'Paper', image: '/img/cpu_paper_clear.png'}, 
        {word: 'Scissors', image: '/img/cpu_scissors_clear.png'}];
    computerChoice = choiceOptions[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// Get player input and use computerChoice() to play 1 round of the game
// function playRound() {
//     let computerChoice = getComputerChoice();
//     let playerInput = prompt("Pick Rock, Paper or Scissors").toLowerCase().split("");
//     playerInput[0] = playerInput[0].toUpperCase();
//     let playerChoice = playerInput.join("");
//     if (playerChoice != 'Rock' && playerChoice != 'Paper' && playerChoice != 'Scissors') {
//         alert('You did not enter a valid choice. Please Try again');
//         return playRound();
//     }
//     // console.log("Computer's Choice: " + computerChoice);
//     // console.log("Player's Choice: " + playerChoice);
//     if (playerChoice === computerChoice) {
//         console.log("Draw!") 
//         return playRound();
//     }
//     else if (playerChoice === "Rock" && computerChoice === "Scissors") {
//         score.player += 1;
//         return "You win! Rock beats Scissors!";
//     }
//     else if (playerChoice === "Rock" && computerChoice === "Paper") {
//         score.computer += 1;
//         return "You lose! Paper beats Rock!";
//     }
//     else if (playerChoice === "Paper" && computerChoice === "Scissors") {
//         score.computer += 1;
//         return "You lose! Scissors beats Rock!";
//     }
//     else if (playerChoice === "Paper" && computerChoice === "Rock") {
//         score.player += 1;
//         return "You win! Paper beats Rock!";
//     }
//     else if (playerChoice === "Scissors" && computerChoice === "Rock") {
//         score.computer += 1;
//         return "You lose! Rock beats Scissors!";
//     }
//     else if (playerChoice === "Scissors" && computerChoice === "Paper") {
//         score.player += 1;
//         return "You win! Scissors beats Paper!";
//     }
// }

// Calls playRound() until either the player or the computer wins 3 games (best of 5)

// function playGame() {
//     while (score.player <= 2 && score.computer <= 2 ) {
//         console.log(playRound());
//         console.log(score);
//     }

//     if (score.player === 3) {
//         console.log('Game Over: You Won!');
//     } else {
//         console.log("Game Over: You lost!")
//     }

// }

function playRound(e) {
    // get computer choice
    let computerChoice = getComputerChoice();
    let playerChoice = {}
    // get player choice 
    if (e.target.id === "box1") {
        playerChoice.word = 'Rock';
        playerChoice.image = '/img/player_rock_clear.png';
    } else if (e.target.id === 'box2') {
        playerChoice.word = 'Paper';
        playerChoice.image = '/img/player_paper_clear.png';
    } else if (e.target.id === 'box3') {
        playerChoice.word = 'Scissors';
        playerChoice.image = '/img/player_scissors_clear.png';
    }

    // fade images out
    gameImages.setAttribute('fading-out', "");
    gameImages.addEventListener('animationend', () => {
        //fade-out images
        gameImages.classList.add('hidden');
        // Change #box1 & #box3 to fist images and hide #box2
        box1.src="/img/player_rock_clear.png";
        box3.src="/img/cpu_rock_clear.png";
        box2.style.display="none";
        // fade-in images back in
        gameImages.classList.remove('hidden');
        gameImages.removeAttribute('fading-out');
    })

    gameImageDivs.forEach((x) => {
        x.removeEventListener('click', playRound);
    })

    // animate fists pounding x 3
    gameImages.addEventListener('animationend', () => {
        gameImages.setAttribute('bounce2', "");

    // display player and cpu choice images
    gameImages.addEventListener('animationend', () => {
        box1.src = playerChoice.image;
        box3.src = computerChoice.image;

        if (playerChoice.word === computerChoice.word) {
            console.log("Draw!") 
            return playRound();
        }
        else if (playerChoice.word === "Rock" && computerChoice.word === "Scissors") {
            score.player += 1;
            return "You win! Rock beats Scissors!";
        }
        else if (playerChoice.word === "Rock" && computerChoice.word === "Paper") {
            score.computer += 1;
            console.log("You lose! Paper beats Rock!");
            return "You lose! Paper beats Rock!";
        }
        else if (playerChoice.word === "Paper" && computerChoice.word === "Scissors") {
            score.computer += 1;
            console.log("You lose! Scissors beats Rock!");
            return "You lose! Scissors beats Rock!";
        }
        else if (playerChoice.word === "Paper" && computerChoice.word === "Rock") {
            score.player += 1;
            console.log("You win! Paper beats Rock!");
            return "You win! Paper beats Rock!";
        }
        else if (playerChoice.word === "Scissors" && computerChoice.word === "Rock") {
            score.computer += 1;
            console.log("You lose! Rock beats Scissors!");
            return "You lose! Rock beats Scissors!";
        }
        else if (playerChoice.word === "Scissors" && computerChoice.word === "Paper") {
            score.player += 1;
            console.log("You win! Scissors beats Paper!");
            return "You win! Scissors beats Paper!";
        }
        })
    })
    // display win/lose message

    
    // update score
    // if (winner) {
        // display play again button

    // }
    // if (!winner) {
    //     reset display to Choose Your Weapon
    // }
}

function onLoad() {
    setTimeout(write(), 1000);
}

onLoad();