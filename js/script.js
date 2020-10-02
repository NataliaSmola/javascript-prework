function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
  computerMove = 'papier';
}
else if (randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// playerMove & prompt
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2') {
  playerMove = 'papier';
}
else if (playerInput == '3') {
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Game results
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'kamień') {
printMessage('Przegrałes')
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
printMessage('Ty wygrywasz')
}
else if (computerMove == 'kamień' && playerMove == 'nożyce') {
printMessage('Przegrałes')
}
else if (computerMove == 'nożyce' && playerMove == 'papier') {
printMessage('Przegrałes')
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
printMessage('Ty wygrywasz')
}
else if (computerMove == playerMove) {
  printMessage('Remis!')
}
else {
  printMessage('Spróbuj jeszcze raz!')
}
