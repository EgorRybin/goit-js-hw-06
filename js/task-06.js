const inputRef = document.querySelector('input');

const onInputRefBlur = (event) => {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.className = 'valid';          
    }
    else {
        inputRef.className = 'invalid';
    }
};

inputRef.addEventListener('blur', onInputRefBlur);
