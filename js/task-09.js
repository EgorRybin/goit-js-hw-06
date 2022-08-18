const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('body');
const btnRef = document.querySelector('button');
const textRef = document.querySelector('[class="color"]');

const onBtnRefClick = (event) => {
  const colorRand = getRandomHexColor();
  body.style.backgroundColor = colorRand;
  textRef.textContent = colorRand;
  
};

btnRef.addEventListener('click', onBtnRefClick);