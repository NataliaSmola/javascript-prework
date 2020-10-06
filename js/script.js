{
  const playGame = function(playerInput) {
  clearMessages();
  //GetMoveName
  const getMoveName = function(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  //computerMove
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + argComputerMove);

  // playerMove & prompt
  console.log('Gracz wpisał: ' + playerInput);

  const argPlayerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);

  // Game results
  const displayResult = function(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    if (argComputerMove == argPlayerMove) {
      printMessage('Remis');
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
      printMessage('Ty wygrywasz')
    } else {
      printMessage('Przegrałeś! Spróbuj jeszcze raz')
    }
  }
  displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});
}
