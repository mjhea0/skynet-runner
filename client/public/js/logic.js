// var iterations = 10000;
var playerWins = 0;
var skynetWins = 0;
var ties = 0;
var playerScore = 0;
var skynetScore = 0;
var roundCounter = 0; // prevent an infinite loop
var playerNumbersUsed = [];
var skynetNumbersUsed = [];
var playerNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                            12, 13, 14, 15, 16, 17, 18, 19, 20];
var skynetNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                            12, 13, 14, 15, 16, 17, 18, 19, 20];


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
  playerNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                            12, 13, 14, 15, 16, 17, 18, 19, 20];
  skynetNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                            12, 13, 14, 15, 16, 17, 18, 19, 20];
}


// actual game!

function playDaGame(playerAnswerFromForm) {
  var playerAnswer = parseInt(playerAnswerFromForm);
  var playerIndex = playerNumbersRemaining.indexOf(playerAnswer);
  playerNumbersRemaining.splice(playerIndex, 1);

  var skynetAnswer = skynetAlgorithm(
    skynetNumbersUsed,
    skynetNumbersRemaining,
    playerNumbersUsed,
    skynetScore,
    playerScore
  );

  var skynetIndex = skynetNumbersRemaining.indexOf(skynetAnswer);
  skynetNumbersRemaining.splice(skynetIndex, 1);

  playerNumbersUsed.push(playerAnswer);
  skynetNumbersUsed.push(skynetAnswer);
  computeScore(playerAnswer, skynetAnswer);
  // add logic to determin winner and end game if no more numbers remain
  if (playerScore >= 5 || skynetScore >= 5) {
    roundCounter++;
    calculateWinner();
    resetBoard();
    console.log('Wins for player: ' + playerWins);
    console.log('Wins for skynet: ' + skynetWins);
    console.log('Ties: ' + ties);
  }
}
