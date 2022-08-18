const inputRef = document.querySelector('#name-input');

const nameRef = document.querySelector('#name-output');

const onInput = (event) => {
    if (event.currentTarget.value === "") {
        nameRef.textContent = 'Anonymous';
        return;
    }
    nameRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', onInput);

