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
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        numPlayerSelection = 3
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

const btns = document.querySelectorAll('.btns');
let playerSelection = "";
let roundResult;
btns.forEach(btn => btn.addEventListener('click', (e) => {
    playerSelection = e.target.innerText;
    roundResult = playRound(playerSelection, computerPlay());
    res.textContent = "";
    game(roundResult);
}));
let playerScore = 0;
let compScore = 0;
let rounds = 0; 
const res = document.querySelector('#res');


function game(roundResult) {
    

    if (roundResult) {
        playerScore++
        rounds++;
    } else if (!roundResult) {
        compScore++;
        rounds++;
    } else {
        rounds++;
    }
    const textcompScore = document.querySelector('#compScore');
    const textplayerScore = document.querySelector('#playerScore');
    textplayerScore.textContent = `Player Score: ${playerScore}`;
    textcompScore.textContent = `Computer Score: ${compScore}`;

    if (rounds === 5) {
        if (playerScore > compScore) {
            res.textContent = "You win a game";
        } else {
            res.textContent = "You loose a game";
        }
        playerScore = 0;
        compScore = 0;
        rounds = 0; 
    }
}
