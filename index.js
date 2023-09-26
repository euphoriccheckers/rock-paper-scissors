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
        return 'rock';
    } //else if 2 
    else if (randomNum === 2) {
        //return scissors
        return 'scissors';
    }//else
    else {
        //return paper
        return 'paper';
    }
}