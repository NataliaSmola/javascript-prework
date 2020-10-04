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
}
//computerMove
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

// playerMove & prompt
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

// Game results
function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if( argComputerMove == argPlayerMove){
		printMessage('Remis');
	}
	else if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz')
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
	printMessage('Ty wygrywasz')
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
	printMessage('Ty wygrywasz')
	}
	else {
		printMessage('Przegrałeś! Spróbuj jeszcze raz')
	}
}
displayResult (argComputerMove, argPlayerMove);
