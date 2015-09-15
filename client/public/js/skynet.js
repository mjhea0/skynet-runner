// skynet algorithm (replace!)


function skynetAlgorithm(skynetNumbersUsed, skynetNumbersRemaining,
  playerNumbersUsed, skynetScore, playerScore) {
  return skynetNumbersRemaining[Math.floor(
    Math.random() * skynetNumbersRemaining.length)];
}
