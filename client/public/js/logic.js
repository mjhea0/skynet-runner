// var iterations = 10000;
var playerWins = 0;
var skynetWins = 0;
var ties = 0;
var playerScore = 0;
var skynetScore = 0;
var roundCounter = 0; // prevent an infinite loop
var playerNumbersUsed = [];
var skynetNumbersUsed = [];
var playerNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var skynetNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function computeScore(playerAnswer, skynetAnswer) {
  if (playerAnswer + 1 === skynetAnswer) {
    playerScore += 2;
  } else if (skynetAnswer + 1 === playerAnswer) {
    skynetScore += 2;
  } else if (playerAnswer < skynetAnswer) {
    playerScore++;
  } else if (playerAnswer > skynetAnswer) {
    skynetScore++;
  }
}

function calculateWinner() {
  if (playerScore > skynetScore) {
    playerWins++;
  } else if (skynetScore > playerScore) {
    skynetWins++;
  } else {
    ties++;
  }
}

function resetBoard() {
  playerScore = 0;
  skynetScore = 0;
  roundCounter = 0;
  playerNumbersUsed = [];
  skynetNumbersUsed = [];
  playerNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  skynetNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}


// actual game!

function playDaGame(playerAnswerFromForm) {
  var playerAnswer = parseInt(playerAnswerFromForm);
  var index = playerNumbersRemaining.indexOf(playerAnswer);
  playerNumbersRemaining.splice(index, 1);
  console.log(playerNumbersRemaining);
  var skynetAnswer = skynetAlgorithm(
    skynetNumbersUsed,
    skynetNumbersRemaining,
    playerNumbersUsed,
    skynetScore,
    playerScore
  );
  playerNumbersUsed.push(playerAnswer);
  skynetNumbersUsed.push(skynetAnswer);
  computeScore(playerAnswer, skynetAnswer);
  if (playerScore >= 5 || skynetScore >= 5) {
    roundCounter++;
    calculateWinner();
    resetBoard();
    // console.log('Wins for player: ' + playerWins);
    // console.log('Wins for skynet: ' + skynetWins);
    // console.log('Ties: ' + ties);
  }
}
