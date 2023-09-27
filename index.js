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
    //compare playerSelection and computerSelection and print result
    switch (playerSelection) {
        case 'ROCK': {
            switch (computerSelection) {
                case 'ROCK': {
                    console.log('Tie! No one wins');
                    return null;
                    break;
                }
                case 'PAPER': {
                    console.log('You lose! Paper beats Rock');
                    return false;
                    break;
                }
                case 'SCISSORS': {
                    console.log('You win! Rock beats Scissors');
                    return true;
                    break;
                }
            }
            break;
        }
        case 'PAPER': {
            switch (computerSelection) {
                case 'ROCK': {
                    console.log('You win! Paper beats Rock');
                    return true;
                    break;
                }
                case 'PAPER': {
                    console.log('Tie! No one wins');
                    return null;
                    break;
                }
                case 'SCISSORS': {
                    console.log('You lose! Scissors beat Paper');
                    return false;
                    break;
                }
            }
            break;
        }
        case 'SCISSORS': {
            switch (computerSelection) {
                case 'ROCK': {
                    console.log('You lose! Rock beats Scissors');
                    return false;
                    break;
                }
                case 'PAPER': {
                    console.log('You win! Scissors beat Paper');
                    return true;
                    break;
                }
                case 'SCISSORS': {
                    console.log('Tie! No one wins');
                    return null;
                    break;
                }
            }
        }
    }
}

function validateInput (playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection === 'ROCK' || playerSelection === 'PAPER'
    || playerSelection === 'SCISSORS') {
        return true;
    } else {
        return false;
    }
};

//(3)a function that plays 5 rounds of the game and 
//keeps score and reports a winner or loser at the end
function game () {
    //tell player its 5 rounds
    console.log(`Let's play the best out of 5`)
    //set playerScore to 0
    let playerScore = 0;
    //set computerScore to 0
    let computerScore = 0;
    //loop through playRound 5 times
    for (let i = 0; i < 5; i++) {
        //get user input
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        //check if user input is valid
        if (!validateInput(playerSelection)) {
            let valid = false;

            while (!valid) {
                playerSelection = prompt('Please pick one of the following:\nRock, Paper, or Scissors?');
                valid = validateInput(playerSelection);
            }
        }
        //get result
        let winner = playRound(playerSelection, getComputerChoice());
        //if lose &  not null
        if ((!winner) && winner !== null) {
            //add 1 to computer score
            computerScore++;
        } //else if winner
        else if (winner) {
            //add 1 to player score
            playerScore++;
        }
    }

    //if playerScore > computerScore
    if (playerScore > computerScore) {
        //player won the game
        console.log(`Player: ${playerScore}`, `Computer: ${computerScore}`, `You won the game!`);
    } else if (playerScore < computerScore) {
        //player lost the game
        console.log(`Player: ${playerScore}
        Computer: ${computerScore}
        You lost the game :(`);
    } else {
        //tied game
        console.log(`Player: ${playerScore}
        Computer: ${computerScore}
        You tied ~`);
    }
}