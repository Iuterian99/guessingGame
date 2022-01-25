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
const input = Number(document.querySelector('.guess').value);
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const randomNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  if (!input) {
    message.textContent = '⛔ No Number!';
  } else if (randomNumber === input) {
    message.textContent = '🎉 You Won';
  } else if (input <= randomNumber) {
    message.textContent = 'too low';
  } else {
    message.textContent = 'too big';
  }
});
