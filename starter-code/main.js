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
// game board code is below Javascript haven't figured this out yet.

var gameBoard = document.getElementById("game-board");
var className = document.createElement('div');
 


gameBoard.className = "card"
card.appendChild("game-board");



