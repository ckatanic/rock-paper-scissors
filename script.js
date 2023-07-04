const display = document.getElementById("display-text");
const gameImages = document.getElementById("gamePlay");
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const gameImageDivs = document.querySelectorAll('.game-display');



let score = {
    player: 0,
    computer: 0
}

let text = "";
let currentLetter = 0;

function write() {
    display.textContent = display.textContent + text.charAt(currentLetter);
    currentLetter++

    if (currentLetter < text.length) {
        setTimeout(write, 75);
    }
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

// Display new message on info display
function displayText(newText) {
    display.textContent="";
    text = newText;
    currentLetter = 0;
    write();
}

function checkForWinner() {
    setTimeout(() => {
    if (score.player === 5) {
        return displayText("Game Over! You Won!")
    } else if (score.computer === 5) {
        return displayText("Game Over! You Lost!")
    } return reset()}, 4000)
}

function playRound(e) {
    displayText('FIGHT!');

    image1.classList.toggle('hover');
    image2.classList.toggle('hover');
    image3.classList.toggle('hover');

    // get computer choice
    let computerChoice = getComputerChoice();
    let playerChoice = {}

    // get player choice 
    if (e.target.id === "image1") {
        playerChoice.word = 'Rock';
        playerChoice.image = '/img/player_rock_clear.png';
    } else if (e.target.id === 'image2') {
        playerChoice.word = 'Paper';
        playerChoice.image = '/img/player_paper_clear.png';
    } else if (e.target.id === 'image3') {
        playerChoice.word = 'Scissors';
        playerChoice.image = '/img/player_scissors_clear.png';
    }

    // fade images out
    gameImages.setAttribute('fading-out', "");
    gameImages.addEventListener('animationend', () => {
        gameImages.classList.add('hidden');
        console.log(1);
        // Change #box1 & #box3 to fist images and hide #box2
        image1.style.display='none';
        image3.style.display='none';
        image2.style.display="none";
        image3.src="/img/cpu_rock_clear.png";
        image1.src="/img/player_rock_clear.png";
        image1.style.display='block';
        image3.style.display='block';

        // fade-in images
        gameImages.classList.remove('hidden');
        gameImages.removeAttribute('fading-out');
        // gameImages.setAttribute('fading-in', "");
    }, {once: true})

    gameImageDivs.forEach((x) => {
        x.removeEventListener('click', playRound);
    })

    // animate fists pounding x 3
    gameImages.addEventListener('animationend', () => {
        gameImages.setAttribute('bounce2', "");

    // display player and cpu choice images
    gameImages.addEventListener('animationend', () => {
        image1.src = playerChoice.image;
        image3.src = computerChoice.image;

        if (playerChoice.word === computerChoice.word) {
            displayText("Draw!");
            setTimeout(() => {return reset()}, 5000);
        }
        else if (playerChoice.word === "Rock" && computerChoice.word === "Scissors") {
            score.player += 1;
            displayText("You win! Rock beats Scissors!");
            updateScore();
            checkForWinner();
            // setTimeout(() => {return reset()}, 5000);
        }
        else if (playerChoice.word === "Rock" && computerChoice.word === "Paper") {
            score.computer += 1;
            console.log("You lose! Rock beats Paper!");
            displayText("You lose! Rock beats Paper!");
            updateScore();
            checkForWinner();
            // setTimeout(() => {return reset()}, 5000);
        }
        else if (playerChoice.word === "Paper" && computerChoice.word === "Scissors") {
            score.computer += 1;
            console.log("You lose! Scissors beats Paper!");
            displayText("You lose! Scissors beats Paper!");
            updateScore();
            checkForWinner();
            // setTimeout(() => {return reset()}, 5000);
        }
        else if (playerChoice.word === "Paper" && computerChoice.word === "Rock") {
            score.player += 1;
            console.log("You win! Paper beats Rock!");
            displayText("You win! Paper beats Rock!");
            updateScore();
            checkForWinner();
            // setTimeout(() => {return reset()}, 5000);
        }
        else if (playerChoice.word === "Scissors" && computerChoice.word === "Rock") {
            score.computer += 1;
            console.log("You lose! Rock beats Scissors!");
            displayText("You lose! Rock beats Scissors!");
            updateScore();
            checkForWinner();
            // setTimeout(() => {return reset()}, 3000);
        }
        else if (playerChoice.word === "Scissors" && computerChoice.word === "Paper") {
            score.player += 1;
            console.log("You win! Scissors beats Paper!");
            displayText("You win! Scissors beats Paper!");
            updateScore();
            checkForWinner();
            // setTimeout(() => {return reset()}, 3000);
    }}, {once: true})
                
    }, {once: true})

}

function reset() {
    displayText("Choose Your Weapon!")
    
    // fade images out
    gameImages.removeAttribute('bounce2');
    gameImages.setAttribute('fading-out', "");
    gameImages.addEventListener('animationend', () => {
    gameImages.classList.add('hidden');

    // Change #box1 & #box3 to game images and show #box2
    image1.src="/img/rock_words_clear.png";
    image3.src="/img/scissors_words_clear.png";
    image2.style.display="block";
    
    gameImageDivs.forEach((x) => {
        x.addEventListener('click', playRound);
    })
    image1.classList.toggle('hover');
    image2.classList.toggle('hover');
    image3.classList.toggle('hover');
    // fade-in images back in
    gameImages.classList.remove('hidden');
    gameImages.removeAttribute('fading-out');
    }, {once: true})
}

function updateScore() {
    playerScore.innerText = score.player;
    computerScore.innerText = score.computer;
}

function onLoad() {
    
    // setTimeout(function() { 
    //     displayText("Welcome to Rock! Paper! Scissors!")
    // }, 1000)
    // setTimeout(function () {
    //     displayText("First player to score 5 wins")
    // }, 6000)
    setTimeout(function() {
        displayText("Choose Your Weapon!");
        gameImageDivs.forEach((x) => {
            x.addEventListener('click', playRound);
        })
    },6000)
}

onLoad();