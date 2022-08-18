let counterValue = 0;

const onBtnUpClick = (event) => {
    number.textContent = counterValue +=1;
};

const onBtnDounClick = (event) => {
    number.textContent = counterValue -=1;
};

const number = document.querySelector('#value')

const btnDounRef = document.querySelector('[data-action="decrement"]');

const btnUpRef = document.querySelector('[data-action="increment"]')

btnUpRef.addEventListener('click', onBtnUpClick);

btnDounRef.addEventListener("click", onBtnDounClick);

