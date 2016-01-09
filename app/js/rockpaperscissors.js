////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   var answer = prompt("What move will you make? (Choose rock, paper or scissors)");
   return answer; /* I edited just to show steps to help fix a problem I had */
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
    if (move == null) {
        move = getInput();
        return move;
    } else {
        return move;
    }
}

function getComputerMove(move) {
    if (move == null) {
        move = randomPlay();
        return move;
    } else{
        return move;
    }
}

function getWinner(playerMove, computerMove) {
    switch (playerMove){
        case 'rock':
            if (computerMove == 'rock') {
                confirm ("It's a tie!");
                return 'tie';
            } else if (computerMove == 'scissors') {
                confirm ("Player wins this round!");
                return 'player';
            } else if (computerMove == 'paper') {
                confirm ("Player wins this round!");
                return 'computer';
            } else {
                console.log("computerMove invalid");
            }
            break;
        case 'paper':
            if (computerMove == 'rock') {
                confirm ("Player wins this round!");
                return 'player';
            } else if (computerMove == 'scissors') {
                confirm ("Computer wins this round!");
                return 'computer';
            } else if (computerMove == 'paper') {
                confirm ("It's a tie!");
                return 'tie';
            } else {
                console.log("computerMove invalid");
            }
            break;
        case 'scissors':
            if (computerMove == 'rock') {
                confirm ("Computer wins this round!");
                return 'computer';
            } else if (computerMove == 'scissors') {
                confirm ("It's a tie!");
                return 'tie';
            } else if (computerMove == 'paper') {
                confirm ("Player wins this round!");
                return 'player';
            } else {
                console.log("computerMove invalid");
            }
            break;
        default:
            console.log("playerMove invalid");
    }
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while ((playerWins < 5)&&(computerWins < 5)) {
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      if (getWinner(playerMove,computerMove) == 'player'){
          playerWins+=1;
          console.log("Player wins a round");
      } else if (getWinner(playerMove,computerMove) == 'computer'){
          computerWins+=1;
          console.log("Computer wins a round");
      } else if (getWinner(playerMove,computerMove) == 'tie'){
          console.log("It's tie! Play again!");
      } else {
          console.log("Game invalid, play again!");
      }
  }
  console.log('Game over.');
  return [playerWins, computerWins];
}

function playTo(x){
    console.log('Let\'s play Rock Paper Scissors until '+ x);
    var playerWins = 0;
  var computerWins = 0;
  while ((playerWins < x)&&(computerWins < x)) {
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      switch (getWinner(playerMove,computerMove)) {
        case 'player':
              playerWins+=1;
              console.log("Player wins a round");
              break;
        case 'computer':
              computerWins+=1;
              console.log("Computer wins a round");
              break;
        case 'tie':
              console.log("It's tie! Play again!");
              break;
        default:
              console.log("Game invalid, play again!");
      }
  }
  console.log('Game over.');
  return [playerWins, computerWins];
}
