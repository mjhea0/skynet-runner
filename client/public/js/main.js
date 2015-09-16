// *** event handlers *** //

$(document).on('ready', function() {
  getAllNumbers();
  getAllScores();
  getAllBots();
});

$('#player-form').on('submit', function(event){
  event.preventDefault();
  $('#alert').html('');
  var $userInputtedNumber = $('#user-number').val();
  if (playerNumbersRemaining.indexOf(parseInt($userInputtedNumber)) === -1) {
    $('#alert').html('<div class="alert alert-danger" role="alert">Please try again!</div>');
  } else {
    $('#user-number').val('');
    playDaGame($userInputtedNumber, $('#player-form').attr('data-bot'));
    getAllNumbers();
    getAllScores();
  }
});

$('#init-form').on('submit', function(event){
  event.preventDefault();
  var $userSelectedBot = $("#bot-select option:selected" ).text();
  $('#init').hide();
  $('.skynet-corner').show();
  $('#player-form').attr('data-bot', $userSelectedBot);
  $('#player-form button').prop('disabled', false);
});

// *** helpers *** //

function getAllNumbers() {
  if (playerNumbersRemaining.length > 0) {
    $('#player-numbers-remaining').html(playerNumbersRemaining.join(', '));
  } else {
    $('#player-numbers-remaining').html('N/A');
  }
  if (playerNumbersUsed.length > 0) {
    $('#player-numbers-used').html(playerNumbersUsed.join(', '));
  } else {
    $('#player-numbers-used').html('N/A');
  }
  if (skynetNumbersRemaining.length > 0) {
    $('#skynet-numbers-remaining').html(skynetNumbersRemaining.join(', '));
  } else {
    $('#skynet-numbers-remaining').html('N/A');
  }
  if (skynetNumbersUsed.length > 0) {
    $('#skynet-numbers-used').html(skynetNumbersUsed.join(', '));
  } else {
    $('#skynet-numbers-used').html('N/A');
  }
}

function getAllScores() {
  $('#player-current-score').html(playerScore);
  $('#skynet-current-score').html(skynetScore);
  $('#player-overall-score').html(playerWins);
  $('#skynet-overall-score').html(skynetWins);
  $('#ties-overall-score').html(ties);
}

function getAllBots() {
  allBotsArray = ['random', 'bradley'];
  for (var i = 0; i < allBotsArray.length; i++) {
    $('#bot-select').append('<option>'+allBotsArray[i]+'</option>');
  }
}

function playAgain() {
  $('#alert').html('<div class="alert alert-info" role="alert">We have a winner!</div>');
}
