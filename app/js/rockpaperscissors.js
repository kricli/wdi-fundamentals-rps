////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move||randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock") {
        if (computerMove === "rock") {
            winner = "no one"
        }else if (computerMove === "scissors") {
            winner = "player"
        }else {
            winner = "computer"
        }
    }else if (playerMove === "paper") {
        if (computerMove === "paper") {
            winner = "no one"
        }else if (computerMove === "rock") {
            winner = "player"
        }else {
            winner = "computer"
        }
    }else {
        if (computerMove === "scissors") {
            winner = "no one"
        }else if (computerMove === "paper") {
            winner = "player"
        }else {
            winner = "computer"
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
        playerMove=getPlayerMove();
        computerMove=getComputerMove();
        winner = getWinner(playerMove,computerMove);
        if (winner === "player") {
            playerWins += 1;
        }else if (winner === "computer") {
            computerWins += 1;
        }
        console.log("Player played " + playerMove + ", computer played " + computerMove + ". " + winner + " won.");
        console.log("Current scoreboard: " + playerWins + ":" + computerWins);
    }return (playerWins > computerWins) ? "Player won!!!" : "Computer won!!!"
    
}