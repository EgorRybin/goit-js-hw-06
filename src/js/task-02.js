const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
console.log(list);



const listArray = ingredients.map((elem) => {
  const listReff = document.createElement('li');
  listReff.textContent = `${elem}`;
  listReff.setAttribute('class', 'item')
  return listReff;
})

list.append(...listArray);