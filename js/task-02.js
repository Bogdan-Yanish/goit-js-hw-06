const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

function addItemsList() {
  return ingredients.map(ingredient => {
    const listItems = document.createElement('li');
    listItems.textContent = ingredient;
    listItems.classList.add('item');
  
    return listItems;
})
}

  const items = addItemsList(ingredients);
  list.append(...items);



