/* 
constraints:
    rock beats scissors
    scissors beat paper
    paper beats rock

problem:
    user plays against computer

    (1)a function that returns random choices (rock, paper, or scissors)

    (2)a function that plays a round of the game taking in 
    playerSelection and computerSelection, 
    returning a string that declares the winner of the round
        --inputs must be case insensitive

    (3)a function that plays 5 rounds of the game and keeps score
    and reports a winner or loser at the end
*/

//(1)
function getComputerChoice () {
    //generate random # between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    //if 1
    if (randomNum === 1) {
        //return rock
        return 'Rock';
    } //else if 2 
    else if (randomNum === 2) {
        //return scissors
        return 'Scissors';
    }//else
    else {
        //return paper
        return 'Paper';
    }
}

//(2)
function playRound (playerSelection, computerSelection) {
    //take in playerSelection and computerSelection
    //convert both to upper case
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    //compare playerSelection and computerSelection
    switch (playerSelection) {
        case 'ROCK': {
            switch (computerSelection) {
                case 'ROCK': {
                    return 'NOT SURE WHAT TO DO HERE';
                    break;
                }
                case 'PAPER': {
                    return 'You lose! Paper beats Rock';
                    break;
                }
                case 'SCISSORS': {
                    return 'You win! Rock beats Scissors';
                    break;
                }
            }
            break;
        }
        case 'PAPER': {
            switch (computerSelection) {
                case 'ROCK': {
                    return 'You win! Paper beats Rock';
                    break;
                }
                case 'PAPER': {
                    return 'NOT SURE WHAT TO DO HERE';
                    break;
                }
                case 'SCISSORS': {
                    return 'You lose! Scissors beat Paper';
                    break;
                }
            }
            break;
        }
        case 'SCISSORS': {
            switch (computerSelection) {
                case 'ROCK': {
                    return 'You lose! Rock beats Scissors';
                    break;
                }
                case 'PAPER': {
                    return 'You win! Scissors beat Paper';
                    break;
                }
                case 'SCISSORS': {
                    return 'NOT SURE WHAT TO DO HERE';
                    break;
                }
            }
        }
    }
}