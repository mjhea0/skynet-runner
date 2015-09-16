// skynet random algorithm

function randomAlgorithm(skynetNumbersUsed, skynetNumbersRemaining,
  playerNumbersUsed, skynetScore, playerScore) {
  return skynetNumbersRemaining[Math.floor(
    Math.random() * skynetNumbersRemaining.length)];
}
