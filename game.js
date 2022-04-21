/*Rock is 1
  Paper is 2
  Scissors is 3
*/


function computerPlay() {
    let result = Math.floor(Math.random()*3+1)
    return result;
}


function playRound(playerSelection, computerSelection) {
    
    let numPlayerSelection = 0;
    if (playerSelection.toUpperCase() === "ROCK") {
        numPlayerSelection = 1
    } else if (playerSelection.toUpperCase() === "PAPER") {
        numPlayerSelection = 2
    } else if (playerSelection.tuUpperCase() === "SCISSORS") {
        numPlayerSelection = 3
    } else {
        alert("Input is invalid")
    }
    let playerSelectionString = playerSelection.toUpperCase();
    let compPlayString = "";
    if (computerSelection === 1) {
        compPlayString = "ROCK"
    } else if (computerSelection === 2) {
        compPlayString = "PAPER"
    } else if (computerSelection === 3) {
        compPlayString = "SCISSORS"
    }

    let result = computerSelection - numPlayerSelection;

    if (result === 1 || result === -2) {
        return `You Lose! ${compPlayString} beats ${playerSelectionString}` 
    } else if (result === 0) {
        return "It's a tie!"
    } else {
        return `You Win! ${playerSelectionString} beats ${compPlayString}` 
    }
}

console.log(playRound("paper", computerPlay()))