function getComputerChoice() {
    // Returns rock paper or scissors
    let choice = parseInt(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
    }
    return choice
}

function playRound(choice1, choice2) { // winner logic
    let state;

    switch ([choice1, choice2].join(',')) {
        case 'rock,paper':
        case 'paper,scissors':
        case 'scissors,rock':
            state = 0
            break;
        case 'paper,rock':
        case 'scissors,paper':
        case 'rock,scissors':
            state = 1
            break;
        default:
            state = 2
    }

    if (state == 0) {
        result.textContent = `You lose! ${choice2} beats ${choice1}.`;
    } else if (state == 1) {
        result.textContent = `You win! ${choice1} beats ${choice2}.`;
    } else if (state == 2) {
        result.textContent = `Tie! ${choice1} vs ${choice2}.`;
    }
}

function Scoring(choice1, choice2) {
    let state;

    switch ([choice1, choice2].join(',')) {
        case 'rock,paper':
        case 'paper,scissors':
        case 'scissors,rock':
            state = 0
            break;
        case 'paper,rock':
        case 'scissors,paper':
        case 'rock,scissors':
            state = 1
            break;
        default:
            state = 2
    }

    return state
}

function displayScore(human, computer) {

    if (human > computer) {
        score = `You won! You won ${human} out of 5 rounds.`;
    } else if (computer > human) {
        score = `You lose! Computer won ${computer} out of 5 rounds.`;
    } else {
        score = `Tie! Your score ${human} and the computer's score ${computer} are equal.`;
    }

    alert(score);
}

function reset() {
    round = 0;
    humanScore = 0;
    computerScore = 0

    roundContent.textContent = `Round: ${round}`;
    humanScoreContent.textContent = `Human: ${humanScore}`;
    computerScoreContent.textContent = `Computer: ${computerScore}`;
    result.textContent = "";
}

// DOM
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#results");
const result = document.createElement("p");
const humanScoreContent = document.createElement("p");
const computerScoreContent = document.createElement("p");
const roundContent = document.createElement("p");

// scoring
let round = 0;
let humanScore = 0;
let computerScore = 0;
let score;
humanScoreContent.textContent = `Human: ${humanScore}`;
computerScoreContent.textContent = `Computer: ${computerScore}`;
roundContent.textContent = `Round: ${round}`;
container.appendChild(humanScoreContent);
container.appendChild(computerScoreContent);
container.appendChild(roundContent);
container.appendChild(result);

buttons.forEach((button) => { // PROBLEM: fifth round result isnt shown
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = button.id;
        console.log(humanChoice);
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
        let state = Scoring(humanChoice, computerChoice);
        console.log(state);
        if (state == 0) {
            computerScore++;
            computerScoreContent.textContent = `Computer: ${computerScore}`;
            console.log(`computer ${computerScore}`);
        } else if (state == 1) {
            humanScore++;
            humanScoreContent.textContent = `Human: ${humanScore}`;
            console.log(`human ${humanScore}`);
        } else {
            humanScoreContent.textContent = `Human: ${humanScore}`;
        }
        round++;
        roundContent.textContent = `Round: ${round}`;

        if (round == 5) {
            displayScore(humanScore, computerScore);
            reset();
        }
    });
});