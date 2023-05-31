// variables
var button1 = document.querySelector(".game-button-1");
var button2 = document.querySelector(".game-button-2");
var button3 = document.querySelector(".game-button-3");
var button4 = document.querySelector(".game-button-4");
var button5 = document.querySelector(".game-button-5");
var button6 = document.querySelector(".game-button-6");
var button7 = document.querySelector(".game-button-7");
var button8 = document.querySelector(".game-button-8");
var button9 = document.querySelector(".game-button-9");
var isXTurn = true;
var gameButtons = document.querySelectorAll(".game-button");
var resetButton = document.querySelector(".replay-button");
var totalTurns = 0;
var xWins = 0;
var oWins = 0;
var xLabel = document.querySelector(".score-x");
var oLabel = document.querySelector(".score-o");
var winnerLabel = document.querySelector(".winner-text");
//event listeners
for (let i = 0; i < gameButtons.length; i++) {
  gameButtons[i].addEventListener("click", setButtonText);
}
resetButton.addEventListener("click", resetButtonText);
//functions
function setButtonText(e) {
  if (e.target.innerText === "") {
    if (isXTurn) {
      e.target.innerText = "X";
    } else {
      e.target.innerText = "O";
    }
    totalTurns++;
    isXTurn = !isXTurn;
    if (checkForWinners("X")) {
      xWins++;
      xLabel.innerText = "X: " + xWins;
      winnerLabel.innerText = "X won!";
      disableGameButtons();
    } else if (checkForWinners("O")) {
      oWins++;
      oLabel.innerText = "O: " + oWins;
      winnerLabel.innerText = "O won!";
      disableGameButtons();
    } else if (totalTurns == 9) {
      winnerLabel.innerText = "Its a tie!";
      disableGameButtons();
    }
  }
}
function resetButtonText() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].innerText = "";
  }
  isXTurn = true;
  winnerLabel.innerText = "";
  enableGameButtons();
}
function checkForWinners(player) {
  if (
    button1.innerText == player &&
    button2.innerText == player &&
    button3.innerText == player
  ) {
    return true;
  }
  if (
    button4.innerText == player &&
    button5.innerText == player &&
    button6.innerText == player
  ) {
    return true;
  }
  if (
    button7.innerText == player &&
    button8.innerText == player &&
    button9.innerText == player
  ) {
    return true;
  }
  if (
    button1.innerText == player &&
    button4.innerText == player &&
    button7.innerText == player
  ) {
    return true;
  }
  if (
    button2.innerText == player &&
    button5.innerText == player &&
    button8.innerText == player
  ) {
    return true;
  }
  if (
    button3.innerText == player &&
    button6.innerText == player &&
    button9.innerText == player
  ) {
    return true;
  }
  if (
    button1.innerText == player &&
    button5.innerText == player &&
    button9.innerText == player
  ) {
    return true;
  }
  if (
    button3.innerText == player &&
    button5.innerText == player &&
    button7.innerText == player
  ) {
    return true;
  }

  return false;
}
function disableGameButtons() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].disabled = true;
  }
}
function enableGameButtons() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].disabled = false;
  }
  totalTurns = 0;
}
