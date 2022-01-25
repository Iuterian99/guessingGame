'use strict';
/*
! "DOM" -> Document Object Model(structured representation of HTML elements)
allows javascript to access HTML elements and styles to manipulate(change text, HTML attributes, and even styles) them. DOM is connection point between HTML document and JavaScript code

**************************************************************************************************
! "Document" 
is a special object that is the entry point to the DOM!

**************************************************************************************************
! DOM or DOM methods are part of "WEB APIs" not part of "JavaScript"
**************************************************************************************************
! "WEB APIs" 
are basically libraries that are written in Javascript that are automatically available for us to use
*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
let number = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  if (!input) {
    displayMessage('⛔ No Number!');
  } else if (randomNumber === input) {
    displayMessage('🎉 Correct Number');
    displayNumber(randomNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '200px';
    if (number > highScore) {
      highScore = number;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (randomNumber !== input) {
    if (number > 1) {
      displayMessage(input < randomNumber ? '📉 too low' : '📈 too high');
      number--;
      document.querySelector('.score').textContent = number;
    } else {
      displayMessage('🎇 You Lost');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'black';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#031461';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = 20;
  displayNumber('?');
  displayMessage('Start Guessing . . .');
  document.querySelector('.number').style.width = '150px';
});
