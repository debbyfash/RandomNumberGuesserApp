let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
  }
function compareGuesses(human, computer, random) {
    let guess1 =  Math.abs(random - human);
    let guess2 =  Math.abs(random - computer);

    if (guess1 === guess2){
        return true;
    }
    else if (guess2 > guess1){
        return true;
    }
    else if (guess1 > guess2){
        return false;
    }
    
}

function updateScore(update){
    if (update == "human"){
        humanScore++
    }
    else if (update == "computer"){
        computerScore++
    }
}

function advanceRound() {
    currentRoundNumber++
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    if (currentHumanGuess > 9 ) {
return alert('Invalid entry. Please check that your number is between 0 and 9.')
}
}