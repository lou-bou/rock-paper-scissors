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