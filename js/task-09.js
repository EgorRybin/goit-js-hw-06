const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('body');
const btnRef = document.querySelector('button');
const textRef = document.querySelector('[class="color"]');

const onBtnRefClick = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
  
};

btnRef.addEventListener('click', onBtnRefClick);