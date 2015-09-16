function bradleyAlgorithm(
  skynetNumbersUsed,
  skynetNumbersRemaining,
  playerNumbersUsed,
  playerNumbersRemaining,
  skynetScore,
  playerScore
){
  var computerNumberBeingPlayed = nextMove();
  removeNums(playerNumbersUsed, computerNumberBeingPlayed);
  return computerNumberBeingPlayed;
}

function removeNums(playerNum, computerNum){

  var playerArrayForLogic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var computerArrayForLogic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var i = 0; i < playerArrayForLogic.length; i++) {
    for (var j = 0; j < playerNumbersUsed.length; j++) {
      if (playerNumbersUsed[j] === playerArrayForLogic[i]){
        playerArrayForLogic.splice(playerIndex, 1, 'removed');
      }
    }
  }

  for (var k = 0; k < computerArrayForLogic.length; k++) {
    for (var l = 0; l < skynetNumbersUsed.length; l++) {
      if (skynetNumbersUsed[l] === computerArrayForLogic[k]){
        computerArrayForLogic.splice(playerIndex, 1, 'removed');
      }
    }
  }

  var playerIndex = playerArrayForLogic.indexOf(playerNum);
  var computerIndex = computerArrayForLogic.indexOf(computerNum);
}

function nextMove(){
  if(skynetNumbersUsed.length === 0){
    computerNum = Math.floor((Math.random()*4)+3);
  } else if (arrayTotal(skynetNumbersUsed) <= arrayTotal(playerNumbersUsed)){
    computerNum = findBestLowNum(skynetNumbersRemaining, playerNumbersRemaining);
  } else if (arrayTotal(playerNumbersUsed) < arrayTotal(skynetNumbersUsed)){
    computerNum = findBestLowNum(skynetNumbersRemaining, playerNumbersRemaining);
    // computerNum = findBestHighNum(skynetNumbersRemaining, playerNumbersRemaining, skynetNumbersUsed, playerNumbersUsed);
  }
  return computerNum;
}

function arrayTotal(array){
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number'){
      total += array[i];
    }
  }
  return total;
}

function findBestLowNum(computerArray, playerArray){
  var number = 1;
  for (var i = 0; i < computerArray.length; i++) {
    if( i!== 0 && computerArray[i] > number && playerArray.indexOf(i) === -1){
      number = computerArray[i];
    } else if (computerArray[number-1] === 'removed'){
      for (var j = 0; j < computerArray.length; j++) {
        if(computerArray[i] > number){
          number = computerArray[i];
          return number;
        }
      }
    }
  }
  return number;
}

function findBestHighNum(computerArray, playerArray, computerMoves, playerMoves){
  var number = 1;
  for (var i = computerArray.length-1; i >=0; i--) {
    if(computerMoves.indexOf(1) === -1 && playerMoves.indexOf(1) >= 0 ){
      number = 1;
      return number;
    } else if(computerArray[i] > number && playerArray.indexOf(i) !== -1 && i !== 0){
      number = computerArray[i];
    } else if (computerArray[i] >= number){
      number = computerArray[i];
    }
  }
    return number;
}
