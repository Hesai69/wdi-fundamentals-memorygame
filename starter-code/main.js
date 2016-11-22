console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry try again.");
}
if (cardTwo === cardOne) {
	alert("You found a match!");
} else {
	alert("Sorry try again.");
}
if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry try again.");
}
*/

var createCards = function(numCards){
	var gameBoard = document.getElementById('game-board');
	for(var i=1; i<=numCards; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}
createCards(4);