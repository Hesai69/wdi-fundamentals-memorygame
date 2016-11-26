console.log("JS file is connected to HTML! Woo!")
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardElement = [];

var createCards = function(numCards){
	var gameBoard = document.getElementById('game-board');
	for(var i=1; i<=numCards; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}
createCards(cards.length);

var createBoard = function(){
	cardElement = document.getElementsByClassName('card');
	for(var i=0; i<cards.length; i++){
		cardElement[i].setAttribute('data-card', cards[i]);
	}
}
createBoard();

//checks to see if there are cards in play when clicked
function isTwoCards() {
	var clickedCard = this.getAttribute('data-card');

	// adds cards to array of cardsInPlay
	cardsInPlay.push(clickedCard);

	if(clickedCard==='king'){
		//add img to card
		//console.log("added king picture");
		this.innerHTML = '<img src="king.png" alt="King of Spades"/>';
	}
	if(clickedCard==='queen'){
		//add img to card
		//console.log("added queen picture");
		this.innerHTML = '<img src="queen.png" alt="Queen of Hearts"/>';
	}
	// if you have two cards in play check for a match
	if (cardsInPlay.length === 2) {
		// pass the cardsInPlay as an argument to isMatch function
		isMatch(cardsInPlay);
		// clear cards in play array for next try and reset board
		cardsInPlay = [];
		resetBoard();
	}
}
var isMatch = function(twoCards){
	if(twoCards[0]===twoCards[1]){
		alert('You got a match!')
		return true;
	}
	else {
		alert('Sorry not a match!')
		return false;
	}
}
var resetBoard = function(){
	var reset = document.getElementsByTagName('div');
	for(var i=0; i<reset.length; i++){
		reset[i].innerHTML = '<img src="" alt=""/>';
	}
	createCards(cards.length);
	createBoard();

	for(var i=0; i<cards.length; i++){
	// when a card is clicked the function isTwoCards will be executed
   	cardElement[i].addEventListener('click', isTwoCards)
	}
}

for(var i=0; i<cards.length; i++){
	// when a card is clicked the function isTwoCards will be executed
    cardElement[i].addEventListener('click', isTwoCards)
}


