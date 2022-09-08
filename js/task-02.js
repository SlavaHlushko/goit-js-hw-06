'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const listItems = ingredients.map((ingredient) => { 
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList = 'item';
  return itemEl;
});
ingredientsRef.append(...listItems);

console.log(listItems);
