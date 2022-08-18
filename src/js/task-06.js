const inputRef = document.querySelector('input');

const dataLength = Number(inputRef.getAttribute('data-length'));


const borderValida = inputRef.getAttribute('id');

const onInputRefBlur = (event) => {
    if (inputRef.value.length === dataLength) {
        inputRef.className = 'valid';        
    }
    else {
        inputRef.className = 'invalid';
    }
};

inputRef.addEventListener('blur', onInputRefBlur);
