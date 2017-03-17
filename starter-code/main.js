
// variable names and values of cards.
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


// match and try again message for cardOne
if (cardOne === cardTwo) {
	alert('You found a match!');	
} else if (cardOne === cardThree) {
  alert('Sorry, try again.');
} else if (cardOne === cardFour) {
	alert ('Sorry, try again.');
}

// match and try again message for cardTwo
if (cardTwo === cardOne) {
	alert('You found a match!');	
} else if (cardTwo === cardThree) {
  alert('Sorry, try again.');
} else if (cardTwo === cardFour) {
	alert ('Sorry, try again.');
}

// match and try again message for cardThree
if (cardThree === cardFour) {
	alert('You found a match!');	
} else if (cardThree === cardTwo) {
  alert('Sorry, try again.');
} else if (cardThree === cardOne) {
	alert ('Sorry, try again.');
}

// match and try again message for cardFour
if (cardFour === cardThree) {
	alert('You found a match!');	
} else if (cardFour === cardOne) {
  alert('Sorry, try again.');
} else if (cardFour === cardTwo) {
	alert ('Sorry, try again.');
}
// code above will generate alerts if code below is commented out.
//game board code is below haven't figured this out yet. 
//need to add to it.
//got stuck here, don't know the proper structure/syntax.
var gameBoard = document.getElementById("game-board");
var className = document.createElement('div'); 
gameBoard.className = "card"
card.appendChild("game-board");
//for loop here?
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [0, 1, 2, 3];

function createBoard('game-board');

// for loop here?
function createCards('cards'); {
return ('queen', 'queen', 'king', 'king',)
}
//need to make event listener for click
//need to create a function called isTwoCards.
//need 
function isTwoCards();
cardsInPlay.push(this.getAttribute('data-card'));
if (cardsInPlay.length === 2){
function isMatch(cardsInPlay);
	cardsInPlay = [];
}

 






