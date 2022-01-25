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
let number = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  if (!input) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (randomNumber === input) {
    document.querySelector('.message').textContent = '🎉 You Won';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '200px';
  } else if (input < randomNumber) {
    if (number > 1) {
      document.querySelector('.message').textContent = '📉 too low';
      number--;
      document.querySelector('.score').textContent = number;
    } else {
      document.querySelector('.message').textContent = '🎇 You Lost';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'black';
    }
  } else if (input > randomNumber) {
    if (number > 1) {
      document.querySelector('.message').textContent = '📈 too high';
      number--;
      document.querySelector('.score').textContent = number;
    } else {
      document.querySelector('.message').textContent = '🎇 You Lost';
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
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing . . .';
  if (number === 20) {
    document.querySelector('.highscore').textContent = 0;
  } else if (number > highScore) {
    document.querySelector('.highscore').textContent = number;
  }
});
