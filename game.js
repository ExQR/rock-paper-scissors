/*Rock is 1
  Paper is 2
  Scissors is 3
*/


function computerPlay() {
    let result = Math.floor(Math.random()*3+1)
    return result;
}


function playRound(computerSelection) {
    
    let numPlayerSelection = 0;
    while (true) {
        let playerSelection = window.prompt("Rock, paper or scissors?")
        if (playerSelection.toUpperCase() === "ROCK") {
            numPlayerSelection = 1
            break;
        } else if (playerSelection.toUpperCase() === "PAPER") {
            numPlayerSelection = 2
            break;
        } else if (playerSelection.toUpperCase() === "SCISSORS") {
            numPlayerSelection = 3
            break;
        } else {
            alert("Input is invalid")
        }
    }
    
    let result = computerSelection - numPlayerSelection;

    if (result === 1 || result === -2) {
        return false; 
    } else if (result === 0) {
        return 0;
    } else {
        return true; 
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) { 
        let result = playRound(computerPlay());
        if (result) {
            playerScore++
            console.log("You win a round")
        } else if (!result) {
            compScore++
            console.log("You lose a round")
        } else {
            console.log("It' a tie")
        }
    }
    if (playerScore > compScore) {
        console.log("You win a game")
    } else if (playerScore < compScore) {
        console.log("You loose a game")
    } else {
        console.log("It's a miracle, a tie!")
    }
}

game()