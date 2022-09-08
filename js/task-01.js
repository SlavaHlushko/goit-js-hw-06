'use strict';

const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories:${itemsEl.length}`);

itemsEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    const quantityItem = item.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${quantityItem.length}`);
}
);