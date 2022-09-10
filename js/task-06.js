'use strict';

const inputRef = document.querySelector("#validation-input");

const inputBlur = (event) => {
    const { dataset, value } = event.target;
    const requiredLength = Number(dataset.length);
    console.log(requiredLength);
    console.log(value.length);
    if (requiredLength === value.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    }
    else {
        event.target.classList.add('invalid')
        event.target.classList.remove('valid')
    }
}

inputRef.addEventListener('blur', inputBlur);

