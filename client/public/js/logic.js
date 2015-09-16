var playerWins = 0;
var skynetWins = 0;
var ties = 0;
var playerScore = 0;
var skynetScore = 0;
var roundCounter = 0;
var playerNumbersUsed = [];
var skynetNumbersUsed = [];
var playerNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var skynetNumbersRemaining = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function computeScore(playerAnswer, skynetAnswer) {
  if (playerAnswer + 1 === skynetAnswer) {
    skynetScore += 2;
  } else if (skynetAnswer + 1 === playerAnswer) {
    playerScore += 2;
  } else if (playerAnswer < skynetAnswer) {
    playerScore++;
  } else if (playerAnswer > skynetAnswer) {
    skynetScore++;
  }
}

function calculateWinner() {
  if (playerNumbersRemaining.length === 0 || skynetNumbersRemaining.length ===0) {
    ties++;
    return;
  }
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
  playAgain();
}

function determineAlgorithm(selectedBotFromForm) {
  if (selectedBotFromForm === 'random') {
    return randomAlgorithm(
      skynetNumbersUsed,
      skynetNumbersRemaining,
      playerNumbersUsed,
      playerNumbersRemaining,
      skynetScore,
      playerScore
    );
  }
  if (selectedBotFromForm === 'bradley') {
    return bradleyAlgorithm(
      skynetNumbersUsed,
      skynetNumbersRemaining,
      playerNumbersUsed,
      playerNumbersRemaining,
      skynetScore,
      playerScore
    );
  }
}


// actual game!

function playDaGame(playerAnswerFromForm, selectedBotFromForm) {
  var playerAnswer = parseInt(playerAnswerFromForm);
  var playerIndex = playerNumbersRemaining.indexOf(playerAnswer);
  playerNumbersRemaining.splice(playerIndex, 1);
  var skynetAnswer = determineAlgorithm(selectedBotFromForm);
  var skynetIndex = skynetNumbersRemaining.indexOf(skynetAnswer);
  skynetNumbersRemaining.splice(skynetIndex, 1);
  playerNumbersUsed.push(playerAnswer);
  skynetNumbersUsed.push(skynetAnswer);
  computeScore(playerAnswer, skynetAnswer);
  // add logic to determine winner and end game if no more numbers remain
  if (playerScore >= 5 || skynetScore >= 5 || playerNumbersRemaining.length === 0 ||
    skynetNumbersRemaining.length ===0) {
    roundCounter++;
    calculateWinner();
    resetBoard();
    // console.log('Wins for player: ' + playerWins);
    // console.log('Wins for skynet: ' + skynetWins);
    // console.log('Ties: ' + ties);
  }
}
