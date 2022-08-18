const itemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', itemsRef.length);


const listRef = document.querySelector('#categories');


const listRefArr = [...listRef.children];


listRefArr.forEach((el, index) => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
})


