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

function getHumanChoice() {
    // Get the user to choose rock, paper or scissors
    let choice = prompt("Enter a valid choice: ");

    if (choice != null) {
        choice = choice.toLowerCase();
        switch (choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice
        default:
            return 0 // 0 is returned if no valid choice is entered
        }
    }

    return 0
}

function playGame() {
    function playRound(choice1, choice2) {
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
            computerScore++;
            console.log(`You lose! ${choice2} beats ${choice1}.`);
        } else if (state == 1) {
            humanScore++;
            console.log(`You win! ${choice1} beats ${choice2}.`);
        } else if (state == 2) {
            console.log(`Tie! ${choice1} vs ${choice2}.`);
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        if (humanChoice == 0) {
            console.log("Invalid choice from player. Round skipped.");
            continue;
        }
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You won! You won ${humanScore} out of 5 rounds.`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! Computer won ${computerScore} out of 5 rounds.`);
    } else {
        console.log(`Tie! Your score ${humanScore} and the computer's score ${computerScore} are equal.`);
    }
}

playGame();