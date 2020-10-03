function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//GetMoveName
function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamień';
	}
	else if (argMoveId == 2){
		return 'papier';
	}
	else if (argMoveId == 3){
		return 'nożyce';
	}
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
};
//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
  computerMove = 'papier';
}
else if (randomNumber == 3) {
  computerMove = 'nożyce';
}*/
printMessage('Mój ruch to: ' + argComputerMove);

// playerMove & prompt
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2') {
  playerMove = 'papier';
}
else if (playerInput == '3') {
  playerMove = 'nożyce';
}*/
printMessage('Twój ruch to: ' + argPlayerMove);

// Game results
function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz');
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
	printMessage('Przegrałes')
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
	printMessage('Ty wygrywasz')
	}
	else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
	printMessage('Przegrałes')
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
	printMessage('Przegrałes')
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
	printMessage('Ty wygrywasz')
	}
	else if (argComputerMove == argPlayerMove) {
		printMessage('Remis!')
	}
	else {
		printMessage('Spróbuj jeszcze raz!')
	}
}
displayResult (argComputerMove, argPlayerMove);
