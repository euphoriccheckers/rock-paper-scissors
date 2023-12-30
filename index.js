//set score variables
let playerScore = 0;
let computerScore = 0;

//create 3 buttons for each selection
let rockBtn = document.createElement('button');
let paperBtn = document.createElement('button');
let scisBtn = document.createElement('button');

//set inner text of buttons
rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scisBtn.textContent = 'Scissors';

//create divs for buttons, score, and text
let btns = document.createElement('div');
let points = document.createElement('div');
let results = document.createElement('div');

//append buttons to btns div
btns.appendChild(rockBtn);
btns.appendChild(paperBtn);
btns.appendChild(scisBtn);

//append all divs to document body
document.body.appendChild(btns);
document.body.appendChild(points);
document.body.appendChild(results);



//add event listener that plays game
btns.addEventListener('click', game);



//game logic 
function game (e) {
    //get name of which button was clicked
    let playerChoice = e.target.innerText;

    //get winner of round
    let winner = playRound(playerChoice, getComputerChoice());
    adjustScore(winner);

    //display results
    points.innerText = `Computer: ${computerScore}
        Player: ${playerScore}`;

    //stop game when player or computer reach 5 points
    if (playerScore >= 5 || computerScore >= 5) {
        btns.removeEventListener('click', game);

        if (playerScore > computerScore) {
            results.innerText = `You won the game!`;
        } else if (playerScore < computerScore) {
            results.innerText = `You lost the game :(`;
        } else {
            results.innerText = `You tied ~`;
        }

        //disable buttons
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scisBtn.disabled = true;

        results.innerText += `\n\nReload page to play again`;
    }
}



///helper functions

//randomly generates a computer selection of rock, paper, or scissors
function getComputerChoice() {
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

//returns winner by comparing player choice to computer selection
function playRound(playerSelection, computerSelection) {
    //take in playerSelection and computerSelection
    //convert both to upper case
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    //compare playerSelection and computerSelection and print result
    switch (playerSelection) {
        case 'ROCK': {
            switch (computerSelection) {
                case 'ROCK': {
                    results.textContent = 'Tie! No one wins';
                    return null;
                    break;
                }
                case 'PAPER': {
                    results.textContent = 'You lose! Paper beats Rock';
                    return false;
                    break;
                }
                case 'SCISSORS': {
                    results.textContent = 'You win! Rock beats Scissors';
                    return true;
                    break;
                }
            }
            break;
        }
        case 'PAPER': {
            switch (computerSelection) {
                case 'ROCK': {
                    results.textContent = 'You win! Paper beats Rock';
                    return true;
                    break;
                }
                case 'PAPER': {
                    results.textContent = 'Tie! No one wins';
                    return null;
                    break;
                }
                case 'SCISSORS': {
                    results.textContent = 'You lose! Scissors beat Paper';
                    return false;
                    break;
                }
            }
            break;
        }
        case 'SCISSORS': {
            switch (computerSelection) {
                case 'ROCK': {
                    results.textContent = 'You lose! Rock beats Scissors';
                    return false;
                    break;
                }
                case 'PAPER': {
                    results.textContent = 'You win! Scissors beat Paper';
                    return true;
                    break;
                }
                case 'SCISSORS': {
                    results.textContent = 'Tie! No one wins';
                    return null;
                    break;
                }
            }
        }
    }
}

function adjustScore (winner) {
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