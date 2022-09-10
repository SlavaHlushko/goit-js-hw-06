'use strict';

const refs = {
  colorButton: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
};
refs.colorButton.addEventListener('click', changeColorButton);

function changeColorButton() {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.background = currentColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
