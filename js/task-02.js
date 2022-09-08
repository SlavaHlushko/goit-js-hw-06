const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const addIngredientPotatoes = document.createElement('li');
const addIngredientMushrooms = document.createElement('li');
const addIngredientGarlic = document.createElement('li');
const addIngredientTomatos = document.createElement('li');
const addIngredientHerbs = document.createElement('li');
const addIngredientCondiments = document.createElement('li');

addIngredientPotatoes.textContent = 'Potatoes';
addIngredientPotatoes.classList = 'item';

addIngredientMushrooms.textContent = 'Mushrooms';
addIngredientMushrooms.classList = 'item';

addIngredientGarlic.textContent = 'Garlic';
addIngredientGarlic.classList = 'item';

addIngredientTomatos.textContent = 'Tomatos';
addIngredientTomatos.classList = 'item';

addIngredientHerbs.textContent = 'Herbs';
addIngredientHerbs.classList = 'item';

addIngredientCondiments.textContent = 'Condiments';
addIngredientCondiments.classList = 'item';

ingredientsRef.append(addIngredientPotatoes, addIngredientMushrooms, addIngredientGarlic, addIngredientTomatos, addIngredientHerbs, addIngredientCondiments);

console.log(ingredientsRef);