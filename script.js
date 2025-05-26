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

