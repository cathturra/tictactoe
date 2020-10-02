// var check = document.getElementsByClassName('check')
// var checker = document.getElementsByClassName('checker')
// var checker1 = document.getElementsByClassName('checker1')
// var checkers = document.getElementById('checkers')
// var origboard

// function startGame() {
//     origboard = Array.from(Array(9).keys())
//     for (x = 0; x < check.length; x++)
//     check[x].classList.add('check')
//     check[x].addEventListener('click', turnClick)
// }

// function turnClick(event) {
//     turn(event.target.id, checker)
// }

// function turn(eventId, player1) {
//     origboard[eventId] = player1;
//     document.getElementById(eventId).innertext = player1
// }

// function player1(event) {
//     event.target.classList.add('checker')
// }

// function player2(event) {
//     event.target.classList.add('checker1')
// }

//create condition for every second click
// for (var x = 0; x < check.length; x++) {
//         check[x].addEventListener('click', player1)
// }

// for (var x = 0; x < check.length; x++) {
//     check[x].addEventListener('click', player2)
// }

//apply to one specific div with the class 'check' (only the one clicked)
//this can be done through the use of indexes or ids

var firstBoard;
var player1 = 'O';
var player2 = 'X';
var winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

var cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none";
	firstBoard = Array.from(Array(9).keys());
	for (var x = 0; x < cells.length; x++) {
		cells[x].innerText = '';
		cells[x].style.removeProperty('background-color');
		cells[x].addEventListener('click', turnClick);
	}
}

function turnClick(event) {
    if (typeof firstBoard[event.target.id] == 'number') {
        turn(event.target.id, player1)
        if (!checkTie()) turn(bestSpot(), player2);
    }
}

function turn(eventId, player) {
	firstBoard[eventId] = player;
    document.getElementById(eventId).innerText = player;
    let gameWon = checkWin(firstBoard, player)
    if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    // distinguishes as to whether the various win combinations have been reached
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = 
        gameWon.player == player1 ? "rgba(250, 179, 221, 0.8)" : "rgba(250, 217, 179, 0.8)";
    }
    for (x = 0; x < cells.length; x++) {
        cells[x].removeEventListener('click', turnClick);
    }
    declareWinner(gameWon.player == player1 ? "You Win!" : "You Lose!");
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
    // squares containing number are categorised as empty
    return firstBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return emptySquares()[0];
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var x = 0; x < cells.length; x++) {
            cells[x].style.backgroundColor = "rgba(222, 250, 219, 0.8)";
            cells[x].removeEventListener('click', turnClick);
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}

