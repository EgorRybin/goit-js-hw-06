const inputRef = document.querySelector('input');

const spanRef = document.querySelector('span');


const onInput = (event) => {
    spanRef.style.fontSize = `${inputRef.value}px`
};

onInput();
inputRef.addEventListener('input', onInput);